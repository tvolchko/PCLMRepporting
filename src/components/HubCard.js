import React from "react";


const HubCard = (props) => {
    const hubs = props.hubs
    // const [hubs] = props
    // hubs = [{hub: 'Eddyville', total: '10', Active: '5', completion: '50%'}]
    console.log(hubs)
    return (
        <>
        {hubs.map(hub => {
            return(
            <div>
            <h1>{hub.hub}</h1>
            <p>Total: {hub.total}</p>  <p> Active: {hub.Active}</p> <p> Completion: {hub.completion}</p>
        </div>)
        })}
        </>
    )
    
}

export default HubCard