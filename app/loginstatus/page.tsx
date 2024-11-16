'use client'

import Image from "next/image";
import {details} from "./data.js"

function Item({ name, loggedIn, id} : { name: string, loggedIn: boolean, id: number})  {
  return <li className="item">{loggedIn ? name + ' is logged in' : name + ' isn\'t logged in'} </li>;
}

export default function Home() {
    const loginItems = details.map(loginStatus =>
      <p>
        <Item name={loginStatus.name} loggedIn={loginStatus.loggedIn} id={loginStatus.id}/>
      </p>

    );
    return <ul>{loginItems}</ul>
}
