import { useLogin } from './context-login-provider';
import React from 'react';


function changeLogin(){

}

export default function LoginItem()  {
    const [loggedIn, setState, name,id] = useLogin();
    
    return(    
        <div>
        <button onClick={() => setState(!loggedIn)}>
         {loggedIn ? 'Login' : 'Logout'}
        </button>
         <li className="item">{loggedIn ? name + ' is logged in' : name + ' isn\'t logged in'} </li>
        </div>
    )
  }