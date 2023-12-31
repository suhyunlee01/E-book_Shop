import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, } from 'react-bootstrap';
import { useState, createContext, lazy, Suspense } from 'react';
import Toon from './Toon';
import About from './pages/About';
import toonData from './ToonData';
import Home from './Home';
import data from './data';
//라우터 제작 시 필요
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';

//나중에 랜더링되어도 되는 페이지들은 늦게 import하기
// import NobelDetails from './pages/Details';
// import ToonDetails from './pages/ToonDetails';
// import Cart from './pages/cart';
const NobelDetails = lazy(() => import('./pages/Details'));
const ToonDetails = lazy(() => import('./pages/ToonDetails'));
const Cart = lazy(() => import('./pages/cart'));




//외부에서도 사용할 수 있는 state데이터를 저장하기 위한 context 객체 생성
//외부에서도 접근할 수 있도록 함.
export let Context1 = createContext();


function App() {

  //noble data를 받아옴
  let[books, setBooks] = useState(data);
  //toon data를 받아옴
  let [toons, setToons] = useState(toonData);

  //context로 전달할 테스트 state
  // let[test, setTest] = useState("테스트");

  //Toon 컴포넌트에서 업데이트되는 데이터를 인자로 받아오기 위한 함수
  const updateToons = (newToons) => {
    //인자로 전달받은 데이터로 toons 업데이트! = 이제 toons state는 업데이트된 툰 데이터 가지고 있음
    setToons(newToons);
    console.log("업뎃", newToons);
  };

  const updateNobels = (newBooks) => {
    //인자로 전달받은 데이터로 toons 업데이트! = 이제 toons state는 업데이트된 툰 데이터 가지고 있음
    setBooks(newBooks);
    console.log("업뎃", newBooks);
  };

  
  let navigate = useNavigate();
  

  return (
    <div className="App">
      <Navbar className='navbar' bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#/">Reada Books</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/">웹소설</Nav.Link>
            <Nav.Link href="#/toon">웹툰</Nav.Link>
            <Nav.Link href="#/about">내 정보</Nav.Link>
          </Nav>
          <Button onClick={()=>{navigate("/cart")}} className='BtnLogIn' variant="outline-light">장바구니</Button>{' '}
        </Container>
      </Navbar>

      {/* Routes가 최상위로, Route들을 관리한다. */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* 디폴트 메인 페이지 */}
          <Route path='/' element={<Home updateNobels={updateNobels}></Home>}></Route>

          {/* /toon 페이지를 하나 만들고, 해당 컴포넌트의 엘리먼트를 설정함 */}
          {/* Toon 컴포넌트로부터 업데이트한 데이터를 인자로 받아오기 위한 함수 updateToons 전달 */}
          <Route path='/toon' element={<Toon updateToons={updateToons}></Toon>}></Route>

          {/* /nobel 페이지를 하나 만들고, 해당 컴포넌트의 엘리먼트를 설정함 */}        
          <Route path='/about' element={<About></About>}></Route>

          <Route path="/cart" element={<Cart></Cart>}></Route>


          {/* 웹소설 데이터 id별로 /toon_details 페이지 + /book.id 로 Router 각각 하나씩 만들고 호출하기.. NobelDetails 컴포넌트는 각각의 book 데이터를 props로 받아서 출력 */}
          {books.map((book)=>{
            return <Route key={book.id} path={`/nobel_details/${book.id}`} element={<NobelDetails book={book}></NobelDetails>}></Route>
          })} 
        
          
          {/* 웹툰 데이터 id별로 /toon_details 페이지 + /toon.id 로 Router 각각 하나씩 만들고 호출하기...ToonDetails 컴포넌트는 각각의 toon 데이터를 props로 받아서 출력 */}
          {toons.map((toon) => {
            return <Route key={toon.id} path={`/toon_details/${toon.id}`} element={
              <Context1.Provider value={""}>
                {/* Context.Provider의 value를 toonDetails 컴포넌트와 그 하위의 컴포넌트 모두가 자신의 데이터처럼 사용할 수 있다. */}
                <ToonDetails toon={toon}></ToonDetails>
              </Context1.Provider>
            }></Route>
          })}
          
          
          {/* 404에러 path가 정해진 것 외로 넘어가면 해당 페이지로 이동함 */}
          <Route path='*' element={<div><h1>404에러</h1><br></br>예상치 못한 접근이 발생했어요!🥲</div>}></Route>

        </Routes>
      </Suspense>
    </div>
  );
}

export default App;