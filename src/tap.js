import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function Tab(props) {

    //해당 디테일 페이지의 toon 데이터를 받아옴
    let { toon } = props
    console.log('toon 데이터:', toon);
    //tap의 0번째~2번째까지의 버튼 중 클릭된 버튼의 숫자 state로 저장
    let [tab, setTab] = useState(0);
    let [color1, setColor1] = useState('blue');
    let [color2, setColor2] = useState('black');
    let [color3, setColor3] = useState('black');

  return (
    <>
        <Nav variant="tabs" defaultActiveKey="#">
            <Nav.Item onClick={()=>{
                setTab(0);
                setColor1('blue');
                setColor2('black');
                setColor3('black');
            }}>
                <Nav.Link href="#" style={{color:color1}}>리뷰</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={()=>{
                setTab(2);
                setColor1('black');
                setColor2('black');
                setColor3('blue');
            }}>
                <Nav.Link eventKey="#" style={{color:color3}}>상세정보</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={()=>{
                setTab(1);
                setColor1('black');
                setColor2('blue');
                setColor3('black');
            }}>
                <Nav.Link eventKey="#" style={{color:color2}}>관련된 컨텐츠</Nav.Link>
            </Nav.Item>
        </Nav>

        {/* toondetail 컴포넌트로부터 받아온 toon 데이터 컨텐츠에 전달 */}
        <TabContent tab={tab} toon={toon} ></TabContent>

    </>
  );
}

function TabContent({tab, toon}){
    let [fade, setFade] = useState('');

    useEffect(()=>{
        //end 부착
        setFade('');
        setFade('end');
    }, [tab])

    //["", "", ... ][1] : 왼쪽 배열에서 오른쪽 인덱스에 위치한 요소 선택
    //tab에 저장된 숫자를 인덱스로 해서 왼쪽 배열의 요소 선택함
    return (
        <div className={fade}>
            {[<div>리뷰</div>, <div>관련 컨텐츠</div>, <div>{toon.title}</div>][tab]}
        </div>
    );
}

export default Tab;