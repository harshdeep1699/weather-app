import './CurrentDisplay.css'


const currentDisplay=(props)=>{
    return(
        <div className='weatherCard'>
            Current Weather in {props.details.city_name+", Timezone: "+props.details.timezone+ ", "+props.details.country_code}
            <p>Temperature: {props.details.temp}</p>
            <p>Chances of Rain: {props.details.precip}</p>
            <p>Wind Speed: {props.details.wind_spd}</p>

        </div>
    )
}

export default currentDisplay