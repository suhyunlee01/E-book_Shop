import { useState } from 'react';
import bg from './img/화산귀환1.webp';
import toonData from './ToonData';
import ToonCard from './ToonCard';


function Toon(){
    let [toons] = useState(toonData)
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
        </div>
    )
}

export default Toon;
