import React,{Component} from 'react'
import {initHome} from '../../api/home'
class Home extends Component{
    componentDidMount(){
       this.init()
    }
    init=async ()=>{
        const hello=await initHome()
        console.log(hello)
    }
    render(){
        return(
            <div>Home</div>
        )
    }
}
export default Home;