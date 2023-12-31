

const sorter = (file, cityArray) => {

    const sortedMachines = {}
    file.map(machine => {
    let site = machine['Location - Site']
    let status = machine['Status']
    if(site === 'Dayton' && machine['State'] === 'Virginia'){
        return null
    }
    if(status === 'Active' && sortedMachines.hasOwnProperty([site]) && sortedMachines[site].hasOwnProperty([status]) ) {
        sortedMachines[site].Active++
        sortedMachines[site].total++
    } else if(status === 'Active' && sortedMachines.hasOwnProperty([site])){
        sortedMachines[site].Active = 1
        sortedMachines[site].total++
    } else if(status === 'Active' && !sortedMachines.hasOwnProperty([site])){
        sortedMachines[site] = {total: 1, Active: 1 }
    } else if(sortedMachines.hasOwnProperty([site])){
        sortedMachines[site].total++
    } else {
        sortedMachines[site] = {total: 1 }
    }
    })
    console.log(sortedMachines)
    const techs = []
    cityArray.map((tech, idx) => {
        
        techs[idx] = {hub: cityArray[idx][0], total: 0, Active: 0}
        tech.map(city => {
            if(!sortedMachines[city]){
                return null
            }
            techs[idx].total += sortedMachines[city].total

            if(sortedMachines[city].Active){
                techs[idx].Active += sortedMachines[city].Active
            }
        })
        techs[idx].completion = `${Math.floor(((techs[idx].total - techs[idx].Active)/techs[idx].total) * 100)}%`
    })
    console.log(techs)
    return techs
}

export default sorter