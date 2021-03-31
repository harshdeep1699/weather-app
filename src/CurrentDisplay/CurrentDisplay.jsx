const currentDisplay=(props)=>{
    return(
        <div>
            Current Weather in {props.location.name+", "+props.location.region}
            <p>Temperature: {props.details.temperature}</p>
            <p>Humidity: {props.details.humidity}</p>
            <p>Chances of Rain: {props.details.precip}</p>
            <p>Visibility: {props.details.visibility}</p>

        </div>
    )
}

export default currentDisplay