import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, } from 'react-bootstrap';
import bg from './img/전독시1.jpg';
import { useState } from 'react';
import Card from './Card';
import NobelDetails from './Details';
import ToonDetails from './ToonDetails';
import Toon from './Toon';
import About from './About';
import toonData from './ToonData';

// import SimpleSlider from './carousel';
import data from './data';

//라우터 제작 시 필요
import { Route, Routes, Link } from 'react-router-dom';



function App() {

  //data를 받아옴
  let[books, setBooks] = useState(data);
  console.log(books[0].star)

  return (
    <div className="App">

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Reada Books</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">웹소설</Nav.Link>
            <Nav.Link href="/toon">웹툰</Nav.Link>
            <Nav.Link href="/about">소개</Nav.Link>
          </Nav>
          <Button className='BtnLogIn' variant="outline-light">로그인</Button>{' '}
        </Container>
      </Navbar>


      {/* Routes가 최상위로, Route들을 관리한다. */}
      <Routes>
      {/* 디폴트 메인 페이지 */}
      <Route path='/' element={
        <div>
          <div className='main_bg'>
            <img className='main_bg_img' src={bg}></img>
          </div>
 
          <div class="container text-center">
            <div className="row">
              {books.map((book, index) => (
                <Card key={index} books={book}></Card>
              ))}

            </div>
          </div>
        </div>
      }></Route>

        {/* /toon 페이지를 하나 만들고, 해당 컴포넌트의 엘리먼트를 설정함 */}
        <Route path='/toon' element={<Toon></Toon>}></Route>

        {/* /nobel 페이지를 하나 만들고, 해당 컴포넌트의 엘리먼트를 설정함 */}        
        <Route path='/about' element={<About></About>}></Route>

        {/* /details 페이지를 하나 만들고, 해당 컴포넌트의 엘리먼트를 설정함 */} 
        <Route path='/details' element={<NobelDetails></NobelDetails>}></Route>
        
        {/* 웹툰 데이터 id별로 디테일 페이지 Route 각각 하나씩 만들고 호출하기 */}
        {toonData.map((toon) => (
          <Route
            key={toon.id}
            path={`/toon_details/${toon.id}`}
            element={<ToonDetails toon={toon}></ToonDetails>}
          ></Route>
        ))}

      </Routes>
    </div>
  );
}

export default App;