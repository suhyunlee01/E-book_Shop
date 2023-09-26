import { Link } from "react-router-dom";

function Card(props){
    let {book} = props;
    
    return(
      <div className="col-sm-6 col-md-3">
        <img className='bookImg' height={240} width={173} src={book.src}></img>
        <p className='title'>{book.title}</p>
        <div className='description'>
          <span className='author'>작가 {book.author}</span>
          <span className='star'>별점 {book.star}</span>
        </div>

        <span className="linkTo"><Link style={{ textDecoration: "none" }} to={`/details/${book.id}`}>자세히+</Link></span>
      </div>
    )
  }

  export default Card;