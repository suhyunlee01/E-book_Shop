import React from "react";
import { useParams } from "react-router-dom";

function ToonDetails(props){

  let { toon } = props
  console.log(toon);



    return(
      <div class="container text-center">
        <div class="row detailRow">
          <div class="col">
            <img className='bookImg' height={320} width={220} src={toon.src}></img>
            <div className="detailBtns">
              <button className="btn btn-primary">장바구니</button>
              <button className="btnHeart"> 💓 </button>
            </div>
          </div>
          <div class="col colnum2">
            <div className="description2">
              <p className='detailTitle'>{toon.title}</p>
              <div>
                <span className='author'><span className="details">작가</span> {toon.author} </span>
                <span className='star'><span className="details">별점 </span>{toon.star}</span><br></br>
              </div>
              <div>
                <span> <span className="details">권 수</span> {toon.date} </span>
                <span> <span className="details">연령</span> {toon.age}</span><br></br>
              </div>
            </div>
            <p className="description3">{toon.description}</p>
          </div>
        </div>
      </div>
    )
  }

  export default ToonDetails;