import React from "react"

export default function Card(props){
 return(
  <div className="card-container">
   <div className="image-container"><img src={`./images/${props.image}`} /></div>
   <div className="content-container">
    <div className="location"><img src="./images/map.png"/> <p>{props.location}</p> <a href={props.link} target="_blank">View on Google Maps</a></div>
    <h1 className="title">{props.title}</h1>
    <h3>{props.startDate} - {props.endDate}</h3>
    <p>{props.description}</p>
   </div>
  </div>
 )
}