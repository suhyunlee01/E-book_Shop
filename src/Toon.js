import { useState } from 'react';
import bg from './img/화산귀환1.webp';
import toonData from './ToonData';
import ToonCard from './ToonCard';
import axios from 'axios';


function Toon(){
    let [toons, setToons] = useState(toonData);

    return(
        <div>
            <div className='main_bg'>
            <img className='main_bg_img' src={bg}></img>
            </div>

            <div class="container text-center">
                <div className="row">
                    {toons.map((toon) => (
                        // 웹툰 카드 컴포넌트 호출할 때마다 웹툰 데이터 id로 구분하고 toon 데이터 각각 보내기
                        <ToonCard key={toon.id} toon={toon}></ToonCard>
                    ))}
                </div>
            </div>
            <button className='btnSeeMore' onClick={
                (e)=>{
                    //데이터 요청해오기
                    axios.get('https://gist.githubusercontent.com/suhyunlee01/f883ba494a1231b0280ca1f16c9e78c7/raw/20b955e7e023ce15afc8b568c7e58fd0d1e01f79/toonData.json')
                    .then((result)=>{
                        //axios로 불러온 데이터(배열)
                        console.log("성공", result.data);
                        //기존 toonData.js에서 toons Sate로 가져온 데이터(배열)
                        console.log(toons);

                        //toons Sate로 가져온 데이터 배열과 axios로 불러온 result의 데이터 배열을 합치기
                        let copyArray = [...toons, ...result.data];
                        console.log(copyArray);

                        //toons Sate의 변경함수를 통해서 기존 toonData를 copyArray로 업데이트 해줌.
                        setToons(copyArray); //이후 위의 ToonCard 컴포넌트에 반영되어 출력됨.

                    })


                }
            }>더보기</button>
        </div>
    )
}

export default Toon;
