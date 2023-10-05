import { useEffect, useState } from "react";

//styled-components 라이브러리를 styled라는 이름으로 가져옴
// import styled from 'styled-components';
// //color의 색만 다른 버튼
// let Mybutton = styled.button`
//   background: ${(props)=> props.bg};
//   color: ${props => props.bg == 'green' ? 'white' : 'black'};
//   padding: 10px;
// `


// //Mybutton의 스타일을 복사하되, Newbtn만의 스타일도 추가할 수 있다. 오버라이딩 개념과 같음!
// let Newbtn = styled.button(Mybutton)`
//   padding: 20px;
//   margin: 20px;
// `


function NobelDetails(props){

  useEffect(()=>{console.log('마운트');
  })
  let [count, setCount] = useState(0);


  let {book} = props;
    return(
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img className='bookImg' height={240} width={173} src={book.src}></img>
            <div className="detailBtns">
              {/* styled-components로 생성한 버튼 */}
              {/* <Mybutton bg = 'green'>버튼버튼</Mybutton>
              <Mybutton bg = 'blue'>버튼버튼</Mybutton> */}
              <button className="btn btn-primary">장바구니</button>
              <button className="btnHeart" onClick={
                () => {
                  setCount(count + 1);
                }
              }> 💓 </button><span className="likes">{count}</span>
            </div>
          </div>
          <div className="col colnum2">
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