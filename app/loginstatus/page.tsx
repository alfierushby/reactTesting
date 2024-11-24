'use client'

import {details} from "./data.js"
import {LoginProvider} from './context-login-provider'
import LoginItem from "./login-item";


export default function Home() {
    const loginItems = details.map(loginStatus =>
      <LoginProvider key={loginStatus.id} name={loginStatus.name} loggedIn={loginStatus.loggedIn} id={loginStatus.id} >
        <LoginItem/>
      </LoginProvider>
    );
    return <ul>{loginItems}</ul>
}
