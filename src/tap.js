import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function Tab() {
    //tap의 0번째~2번째까지의 버튼 중 클릭된 버튼의 숫자 state로 저장
    let [tab, setTab] = useState(0);

  return (
    <>
        <Nav variant="tabs" defaultActiveKey="#">
            <Nav.Item onClick={()=>{
                setTab(0);
            }}>
                <Nav.Link href="#">리뷰</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={()=>{
                setTab(1);
            }}>
                <Nav.Link eventKey="#">관련된 컨텐츠</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={()=>{
                setTab(2);
            }}>
                <Nav.Link eventKey="#">상세정보</Nav.Link>
            </Nav.Item>
        </Nav>

        <TabContent tab={tab}></TabContent>

    </>
  );
}

function TabContent(props){
    let {tab} = props;
    // if(tab === 0){
    //     return <div>리뷰</div>
    // }else if(tab === 1){
    //     return <div>관련 컨텐츠</div>
    // }else if(tab === 2){
    //     return <div>상세정보</div>
    // }


    return [<div>리뷰</div>, <div>관련 컨텐츠</div>, <div>상세정보</div>][tab]
}

export default Tab;