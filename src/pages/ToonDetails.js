import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Tab from "../tap";
//context 객체 가져다 사용함
import { Context1 } from "../App";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

function ToonDetails(props){

  //Context라는 보관함 안의 state들을 해체해서 사용할 수 있게 함.
  // useContext(Context1);
  //이런식으로 state를 provider 컴포넌트로부터 받아와서 사용할 수 있다.
  // const { test } = useContext(Context1);

  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  let dispatch = useDispatch();
  

  let { toon } = props
  console.log(toon);

  
  //alert 엘리먼트 존재 결정하는 state
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');
  


    useEffect(()=>{

      //5초 뒤 true -> false 변경 처리
      let timer = setTimeout(()=>{
        setAlert(false)
      }, 5000);
      console.log(2);

      //입력창에 숫자인지 문자인지 처리
      if(isNaN(num)===true){
        window.alert('숫자만 입력할 수 있어요.');
      }

      return(
        ()=>{
          //기존 타이머 제거
          clearTimeout(timer);
          console.log(1);
        }
      )
    }, [num])


    return(
      <div className="container text-center">

        {/* <h1>{test}</h1> */}
        {/* 2초 뒤 사라지는 광고 문구 */}
        { alert == true ?
          <div className="show">
            5초 이내 구매 시 10% 할인
          </div> :
          null
        }
        
        {/* <input onChange={
          (e) => {
            // if(isNaN(e.target.value)===true){
            //   window.alert('숫자만 입력할 수 있어요.');
            // }

            setNum(e.target.value);
          }
        } className="userInput" type="text" placeholder="입력해주세요"></input> */}


        <div className="row detailRow">
          <div className="col">
            <img className='bookImg' height={320} width={220} src={toon.src}></img>
            <div className="detailBtns">
              <button className="btn btn-primary" onClick={()=>{
                navigate("/cart");
                //아이템 장바구니에 추가하기 위해서 procut 슬라이스 배열에 추가
                dispatch(addItem({id: toon.id, name: toon.title, count : 1 }))
              }}>장바구니</button>
              <button className="btnHeart" onClick={
                () => {
                  setCount(count + 1);
                }
              }> 💓 </button><span className="likes">{count}</span>
            </div>
          </div>
          <div className="col colnum2">
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
        {/* 해당 디테일 페이지의 toon 데이터를 전달함. 탭에 들어갈 컨텐츠에 쓸 것 */}
        <Tab toon={toon}></Tab>
      </div>
    )
  }

  export default ToonDetails;