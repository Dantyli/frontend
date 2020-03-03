import React,{useState,useEffect} from 'react'
import {Progress} from 'antd-mobile'
import {log} from '../../api/home'
function Splash(props){
    const [percent,setPercent]=useState(0)
    const [text,setText]=useState('初始化中...')
    useEffect(()=>{
       let i=1;
       const timer=setInterval(() => {
                    i++;
                    setPercent(i*5)
                }, 300);
        log().then(()=>{
            clearInterval(timer)
            setPercent(100)
            setText('初始化完成！')
            setTimeout(()=>{
                //props.history.replace('/home')
            },800)
        });
        
    },[])
    return(
        <div>
           <Progress percent={percent} />
           <p>{text}</p>
        </div>
    )
}
export default Splash;