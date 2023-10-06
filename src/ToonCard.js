import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ToonCard(props){
    let {toon} = props;
    let navigate = useNavigate();

    return(
      <div className="col-sm-6 col-md-3 box" onClick={()=>{
        navigate(`/toon_details/${toon.id}`);
      }}>
        <img className='bookImg' height={240} width={173} src={toon.src}></img>
        <p className='title'>{toon.title}</p>
        <div className='description'>
          <span className='author'>작가 {toon.author}</span>
          <span className='star'>별점 {toon.star}</span>
        </div>

         {/* props로 해당 toon 정보의 id에 맞는 /toon_details/${toon.id} 라우터로 이동.(그리고 해당 router들은 id에 맞는 toon 데이터를 props로 받아서 ToonDetails 컴포넌트 출력하고 있음)*/}
        <span className="linkTo"><Link style={{ textDecoration: "none" }} to={`/toon_details/${toon.id}`}>자세히 보기</Link></span>
      
      </div>
    )
  }

  export default ToonCard;