import { createAction } from '.';
import { userService } from '../../Services/'
import { FETCH_CREDENTIALS } from '../types/UserType';

export const login=(user)=>{
    return (dispatch)=>{
     
        userService.signIn(user).then(res=>{dispatch(
            createAction(FETCH_CREDENTIALS,res.data)

        );
        localStorage.setItem('credentials',JSON.stringify(res.data));
        localStorage.setItem('ACCESS_TOKEN',res.data.accessToken);
        localStorage.setItem('USER_LOGIN',JSON.stringify(res.data));
    //  history.push('/trangchu');
    
     }).catch(err=>{console.log(err)})

    };
}
export const logout=()=>{
    return createAction('LOG_OUT');
}
