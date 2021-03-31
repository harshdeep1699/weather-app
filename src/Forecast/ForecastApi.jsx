import React from 'react'
import Axios from 'axios'
import CurrentDisplay from '../CurrentDisplay/CurrentDisplay'


class Forecast extends React.Component
{
    state={
        current:{},
        input:null,
        doRender:false,
        showerror:false,
        location:{}
    }
    handleChange=(e)=>
    {
        this.setState({input:e.target.value})
    }
    handlesubmit=()=>
    {
        const get= this.state.check
        this.setState({input:get})
        if(this.state.input!=null)
        {
            const url= "http://api.weatherstack.com/forecast?access_key=f538a1da40f4ca952aced4257b3aa4ac&query="+this.state.input
            Axios.get(url)
            .then((response,error)=>{
                 if(response.data.success===false)
                    this.setState({doRender:false,showerror:true})
                else{
                    this.setState({current:response.data.current,
                        doRender:true,
                        location:response.data.location,
                        showerror:false})
                }
                 
                })
        }
    }
    checkEnter=(e)=>{
        if(e.keyCode===13)
        this.handlesubmit()
    }
    render()
    {
        let currentDisplay=null
        let errormsg= null
        if(this.state.doRender)
         currentDisplay=<CurrentDisplay details={this.state.current} location={this.state.location}></CurrentDisplay>
        if(this.state.showerror)
        errormsg=<h3>Enter valid place</h3>
        return(
            <div>
                <div>
                    <input onChange={this.handleChange}
                            onKeyUp={this.checkEnter}>        
                    </input>
                    <br></br>
                    <button onClick={this.handlesubmit}>Fetch</button>
                    {currentDisplay}
                    {errormsg}
                </div>
                
            </div>
        )
    }
}

export default Forecast

