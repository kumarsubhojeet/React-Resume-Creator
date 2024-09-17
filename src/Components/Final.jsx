import { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function Final() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    
  return (
    <>
    <h1>{name}</h1>
    <h1>{email}</h1>
    </>
  )
}
