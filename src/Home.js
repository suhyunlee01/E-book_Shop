import { useState } from 'react';
import bg from './img/전독시1.jpg';
import Card from './Card';
import axios from 'axios';
import data from './data';
import Carousels from './carousel';

function Home(props){
    
    const {updateNobels} = props;

    let[books, setBooks] = useState(data);

    let[count, setCount] = useState(0);
    
    let url1 = 'https://pbs.twimg.com/media/Eh_vo_tX0AE0Iwg.jpg';
    let url2 = 'https://m.mrblue.com/banner/event/16718_sns.jpg';
    let url3 = 'https://pbs.twimg.com/media/EZK9GKdUMAIORR4.jpg';
    
    return(
        <div>
            <Carousels url1={url1} url2={url2} url3={url3}></Carousels>

            <div class="container text-center">
            <div className="row">
                {books.map((book) => (
                    <Card key={book.id} book={book}></Card>
                ))}
            </div>
                <button className='btnSeeMore' onClick={(e)=>{
                    axios.get('https://gist.githubusercontent.com/suhyunlee01/8fa20af94fac5b5e331ebbffad705944/raw/b1dcbc408d2309b3e4886cd5971037cc875daf54/nobelData.json')
                    .then((result)=>{
                        if(count < 1){
                            console.log(result.data);
                            let copyArray = [...books, ...result.data];
                            console.log(copyArray);
                            setBooks(copyArray);
                            updateNobels(copyArray);

                            //count 상태를 1로 만들어서 버튼 클릭 불가능하게 하기
                            setCount(count + 1);
                            //전체보기 버튼 사라지게 하기
                            const btnSeeMore = document.querySelector('.btnSeeMore');
                            btnSeeMore.style.display = 'none';
                        }
                    }).catch(()=>{console.log("데이터 가져오기 실패");})
                }}>전체보기</button>
            </div>
       </div>
    )
}

export default Home;