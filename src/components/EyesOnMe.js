// Code EyesOnMe Component Here
import React from 'react'

export default function EyesOnMe() {
    function handleOnFocus(){
        console.log("Good!");
    }
    function handleOnBlur(){
        console.log("Hey! Eyes on me!");
    }
  return (
    <div>
        <button onFocus={handleOnFocus} onBlur={handleOnBlur} >Eyes on me</button>
    </div>
  )
}

