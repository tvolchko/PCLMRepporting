const XLSX = require("xlsx");

const techCities = [['Eddyville', 'Des Moines', 'Ankeny'],[ 'Cedar Rapids']]





const sorter = (file, cityArray) => {

    const sortedMachines = {}
    console.log(file)
    file.map(machine => {
    let site = machine['Location - Site']
    let status = machine['Status']
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
    const techs = []
    cityArray.map((tech, idx) => {
        techs[idx] = {hub: cityArray[idx][0], total: 0, Active: 0}
        tech.map(city => {
            techs[idx].total += sortedMachines[city].total
            techs[idx].Active += sortedMachines[city].Active
        })
    })
    console.log(techs)
    return techs
}

export default sorter