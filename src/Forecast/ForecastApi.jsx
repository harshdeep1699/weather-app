import React from 'react'
import Axios from 'axios'
import CurrentDisplay from '../CurrentDisplay/CurrentDisplay'
import Spinner from '../spinner/Spinner'


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
    buffer
    handlesubmit=()=>
    {
        const get= this.state.check
        this.setState({input:get})
        this.buffer=this.state.input
        if(this.state.input!==null && this.state.input!=="")
        {
            this.setState({showspinner:true})
            const url= "http://api.weatherstack.com/forecast?access_key=f538a1da40f4ca952aced4257b3aa4ac&query="+this.state.input
            Axios.get(url)
            .then((response,error)=>{
                 if(response.data.success===false)
                 {
                    this.setState({input:this.buffer,doRender:false,showerror:true,showspinner:false})
                    console.log(this.buffer)
                 }
                    
                else{
                    
                    this.setState({input:this.buffer,current:response.data.current,
                        doRender:true,
                        location:response.data.location,
                        showerror:false,
                        showspinner:false    
                    })
                }
                 
                })
        }
    }
    checkEnter=(e)=>{
        if(e.keyCode===13)
        {
        this.handlesubmit()
        console.log(this.state.input)
        }
    }
    render()
    {
        let currentDisplay=null
        let errormsg= null
        let showspin=null
        if(this.state.doRender)
         currentDisplay=<CurrentDisplay details={this.state.current} location={this.state.location}></CurrentDisplay>
        if(this.state.showerror)
        errormsg=<h3>Enter valid place</h3>
        if(this.state.showspinner)
        showspin=<Spinner></Spinner>
        return(
            <div>
                <div>
                    <input onChange={this.handleChange}
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

