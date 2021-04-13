import React from 'react'
import Axios from 'axios'
import CurrentDisplay from '../CurrentDisplay/CurrentDisplay'
import Spinner from '../spinner/Spinner'
import './Forecast.css'

class Forecast extends React.Component
{
    state={
        current:{},
        input:null,
        doRender:false,
        showerror:false,
        location:{},
        showspinner:false
    }
    handleChange=(e)=>
    {
        this.setState({input:e.target.value})
    }
    handlesubmit=()=>
    {
        const get= this.state.check
        this.setState({input:get})
        this.buffer=this.state.input
        if(this.state.input!==null && this.state.input!=="")
        {
            this.setState({showspinner:true})
            const url="https://api.weatherbit.io/v2.0/current?city="+this.state.input+"&key=486f8b690d1e44e28542fd9384f6d268"
            Axios.get(url)
            .then((response,error)=>{
                 if(response.statusText!=="No Content")
                 {
                    this.setState({current:response.data.data[0],input:this.buffer,doRender:true,showerror:false,showspinner:false})
                 }
                    
                else{
                    this.setState({input:this.buffer,
                        doRender:false,
                        location:response.data.location,
                        showerror:true,
                        showspinner:false    
                    })
                }}
                 
                )
        }
        else
        alert("Enter a valid city")
    }
    checkEnter=(e)=>{
        if(e.keyCode===13)
        {
        this.handlesubmit()
        }
    }
    render()
    {
        let currentDisplay=null
        let errormsg= null
        let showspin=null
        if(this.state.doRender)
         currentDisplay=<CurrentDisplay details={this.state.current}></CurrentDisplay>
        if(this.state.showerror)
        alert("Enter a valid city")

        if(this.state.showspinner)
        showspin=<Spinner></Spinner>
        return(
            <div className='forecast'>
                <div className='innerForecast'>
                    <input placeholder="Enter the city" onChange={this.handleChange}
                            onKeyUp={this.checkEnter}
                            className='location'>        
                    </input>
                    <br></br>
                    <button onClick={this.handlesubmit}>Fetch</button>
                    {showspin}
                    {currentDisplay}
                    {errormsg}
                </div>
                
            </div>
        )
    }
}

export default Forecast

