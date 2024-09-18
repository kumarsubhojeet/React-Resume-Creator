import { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function Final() {
    const fname = localStorage.getItem("fname");
    const email = localStorage.getItem("email");
    const summary = localStorage.getItem("summary");
    
  return (
    <>
    <h1>{fname}</h1>
    <h1>{email}</h1>
    <p>{summary}</p>
    </>
  )
}
