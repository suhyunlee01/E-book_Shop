import React from "react";
import { useParams } from "react-router-dom";

function ToonDetails(props){

  let { toon } = props
  console.log(toon);



    return(
      <div>
        <img className='bookImg' height={240} width={173} src={toon.src}></img>
        <p className='title'>{toon.title}</p>
        <div className='description'>
          <span className='author'>작가 {toon.author}</span>
          <span>/</span>
          <span className='star'>별점 {toon.star}</span>
        </div>
      </div>
    )
  }

  export default ToonDetails;