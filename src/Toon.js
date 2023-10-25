import { useEffect, useState } from 'react';
import bg from './img/화산귀환1.webp';
import toonData from './ToonData';
import ToonCard from './ToonCard';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Carousels from './carousel';

function Toon(props){

    //App 컴포넌트에 데이터를 인자로 받아오기 위한 함수
    const { updateToons } = props;
    
    //toonData 받아와서 state로 저장
    let [toons, setToons] = useState(toonData);
    
    //전체보기 버튼 클릭 수 카운트
    let[count, setCount] = useState(0);
    
    let url1 = 'https://image1.marpple.co/files/u_1881433/2023/8/original/47a2c0dbe33bbbcbba0fcdd1b6a289f4586e033d1.png?w=1200&f=webp';
    let url2 = 'https://image1.marpple.co/files/u_1881433/2023/7/original/0d00ba274779604b7c8a261483f9f2b2373c28ed1.png?w=1200';
    let url3 = 'https://image1.marpple.co/files/u_1881433/2022/6/original/29416442fcb64dbefe87b1c1f26e33bcb27e444a1.png?w=1200';

    return(
        <div>
            <Carousels url1={url1} url2={url2} url3={url3}></Carousels>

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
                    axios.get('https://gist.githubusercontent.com/suhyunlee01/f883ba494a1231b0280ca1f16c9e78c7/raw/ce37e81e5e428dee1c39966407143a3212eff1ca/toonData.json')
                    .then((result)=>{

                        if(count < 1){
                            //axios로 불러온 데이터(배열)
                            console.log("성공", result.data);
                            //기존 toonData.js에서 toons Sate로 가져온 데이터(배열)
                            console.log(toons);

                            //toons Sate로 가져온 데이터 배열과 axios로 불러온 result의 데이터 배열을 합치기
                            let copyArray = [...toons, ...result.data];
                            console.log(copyArray);

                            //toons Sate의 변경함수를 통해서 기존 toonData를 copyArray로 업데이트 해줌.
                            setToons(copyArray); //이후 위의 ToonCard 컴포넌트에 반영되어 출력됨.
                            
                            //업데이트된 toon 데이터를 APP 컴포넌트에 인자로 전달하는 함수이다.
                            //이러면 App 컴포넌트의 updateToons 함수에 인자로 데이터가 전달되어서 App 컴포넌트도 이제 업데이트된 데이터를 갖고 있게된다.
                            updateToons(copyArray);

                            //count 상태를 1로 만들어서 버튼 클릭 불가능하게 하기
                            setCount(count + 1);
                            //전체보기 버튼 사라지게 하기
                            const btnSeeMore = document.querySelector('.btnSeeMore');
                            btnSeeMore.style.display = 'none';
                        }else{
                        }
                        
                    }).catch(()=>{console.log("데이터 가져오기 실패");})

                    //만약 여러개의 요청을 보내고 싶다면?
                    //Promise.all([axios.get('url'), axios.get('url'), axios.get('url').then().catch()])
                }
            }>전체보기</button>

        </div>
    )
}

export default Toon;
