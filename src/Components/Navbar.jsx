import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div>
        <div className="icon flex justify-center items-center font-bold text-3xl text-blue-900 p-2 ">
        <IoDocumentTextSharp />
        <Link to='/'><h1>React Resume Pro</h1> </Link>   
        </div>
        
    </div>
    </>
  )
}
