import React,{Component} from 'react'
import {getEmailCode} from '../../api/user'
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            code:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
     sendCode=async ()=>{
       const res=await getEmailCode()
       if(res.code=='100200'){
          console.log('res')
       }
    }
    render(){
        const {email,code}=this.state;
        return(
            <div>
               <input onChange={this.handleChange} value={email} placeholder="登录邮箱" type="text" name="email" />
               <input onChange={this.handleChange} value={code} placeholder="验证码" name="code" /><button onClick={this.sendCode}>发送验证码</button>
            </div>
        )
    }
}
export default Login;