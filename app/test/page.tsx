'use client'

import Image from "next/image";
import Counter from "./counter"
import ContextCounter from "./context-clicker"
import {CounterProvider} from './context-counter-provider'

function Item({ name, loggedIn } : { name: string, loggedIn: boolean })  {
  return <li className="item">{loggedIn ? name + 'is logged in' : name + 'isn\'t logged in'} </li>;
}

export default function Home() {
  return (
    <div>
      <div>This is correct and should work because a div is really good for this task.</div>
      <Image src='/vercel.svg' alt='' width='30' height='30'/>
      <Counter />
      <CounterProvider name="Joe">
      <div>This is a context counter, using a context.</div>
      <ContextCounter />
      </CounterProvider>
    </div>
  );
}
