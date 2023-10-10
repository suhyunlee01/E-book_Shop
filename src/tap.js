import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function Tab() {
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
                setTab(1);
                setColor1('black');
                setColor2('blue');
                setColor3('black');
            }}>
                <Nav.Link eventKey="#" style={{color:color2}}>관련된 컨텐츠</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={()=>{
                setTab(2);
                setColor1('black');
                setColor2('black');
                setColor3('blue');
            }}>
                <Nav.Link eventKey="#" style={{color:color3}}>상세정보</Nav.Link>
            </Nav.Item>
        </Nav>

        <TabContent tab={tab}></TabContent>

    </>
  );
}

function TabContent({tab}){
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
            {[<div>리뷰</div>, <div>관련 컨텐츠</div>, <div>상세정보</div>][tab]}
        </div>
    );
}

export default Tab;