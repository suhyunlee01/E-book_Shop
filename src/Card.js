import { Link } from "react-router-dom";

function Card(props){
    let {books} = props;
    return(
      <div className="col-sm-6 col-md-3">
        <img className='bookImg' height={240} width={173} src={books.src}></img>
        <p className='title'>{books.title}</p>
        <div className='description'>
          <span className='author'>작가 {books.author}</span>
          <span>/</span>
          <span className='star'>별점 {books.star}</span>
        </div>
      </div>
    )
  }

  export default Card;