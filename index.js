import React from "react"
import ReactDOM from "react-dom"

import NavBar from "./components/NavBar"
import Card from "./components/Card"
import data from "./components/data"

import "./index.css"

function Page(){
 const cardElement = data.map(data => {
  return <Card 
   key={data.id}
   {...data}
  />
 })
 return(
  <div>
   <NavBar />
   {cardElement}
  </div>
 )
}

ReactDOM.render(<Page />, document.getElementById('root'))
