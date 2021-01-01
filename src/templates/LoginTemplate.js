import { useEffect, useState } from 'react';
import {Route} from 'react-router-dom'


export const LoginTemplate=props=>{
    const  {Component,path}=props;
    const [obWindow,setObWindow]=useState({
        innerWidth:window.innerWidth,
        innerHeight:window.innerHeight
    })
    const {innerWidth,innerHeight}=window;
    useEffect(()=>{
        window.onresize=()=>{
            let newWidth=window.innerWidth;
            let newHeight=window.innerHeight;
            setObWindow({
                //lay width height moi cua  window khi resize gan lai cho  cho state
                innerWidth:newWidth,
                innerHeight:newHeight
            })
        }

    },[])
    return <Route path={path} exact render ={
        propsRoute=>{
            return < >
            <div className="d-flex "  >
                <div className=""style={{width:innerWidth/2,height:innerHeight}}>
                    <img src="https://www.facebook.com/images/fb_icon_325x325.png" style={{width:'90%',height:"90%"}} />
                </div>
                <div className="" style={{width:innerWidth/2,height:innerHeight}}>
                    <Component {...propsRoute} />
                </div>

            </div>
            </>
        }
    }  />
}