import { Link } from "react-router-dom";

function ToonCard(props){
    let {toon} = props;

    return(
      <div className="col-sm-6 col-md-3">
        <img className='bookImg' height={240} width={173} src={toon.src}></img>
        <p className='title'>{toon.title}</p>
        <div className='description'>
          <span className='author'>작가 {toon.author}</span>
          <span>/</span>
          <span className='star'>별점 {toon.star}</span>
        </div>

         {/* 미리 id로 구분해서 만들어둔 웹툰 상세 라우터들로 이동. Route 호출 시, 해당 id에 맞는 라우터에 toon 데이터 보내놓음*/}
        <span className="linkTo"><Link to={`/toon_details/${toon.id}`}>자세히+</Link></span>
      </div>
    )
  }

  export default ToonCard;