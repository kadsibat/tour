import React from 'react'
import {data} from "../../helpers/data"
import Card from './Card';
import "./Main.scss"

const Main = () => {
    console.log(data);
  return (
    <div className="card-container">
        {data.map((item,id)=>(<Card {...item} key={id}/>))}
     
    </div>
  )
}

export default Main
