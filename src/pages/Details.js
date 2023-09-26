function NobelDetails(props){
  let {book} = props;
    return(
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img className='bookImg' height={240} width={173} src={book.src}></img>
            <div className="detailBtns">
              <button className="btn btn-primary">장바구니</button>
              <button className="btnHeart"> 💓 </button>
            </div>
          </div>
          <div class="col colnum2">
            <p className='detailTitle'>{book.title}</p>
            <div className="description2">
              <span className='author'><span className="details">작가</span> {book.author} </span>
              <span className='star'><span className="details">별점 </span>{book.star}</span><br></br>
              <span> <span className="details">권 수</span> {book.date} </span>
              <span> <span className="details">연령</span> {book.age}</span><br></br>
            </div>
            <p className="description3">{book.description}</p>
          </div>
        </div>
      </div>
    )
  }

  export default NobelDetails;