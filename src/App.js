import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, } from 'react-bootstrap';
import bg from './img/전독시1.jpg';
import { useState } from 'react';

import data from './data';
// import SimpleSlider from './carousel';


function App() {

  //data를 받아옴
  let[books, setBooks] = useState(data);
  console.log(books[0].star)

  return (
    <div className="App">
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Reada Books</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">웹툰</Nav.Link>
            <Nav.Link href="#pricing">웹소설</Nav.Link>
          </Nav>
          <Button className='BtnLogIn' variant="outline-light">로그인</Button>{' '}
        </Container>
      </Navbar>

      <div className='main_bg'>
        <img className='main_bg_img' src={bg}></img>
      </div>
      <div class="container text-center">
        <div className="row">
          {/* <div className="col">
            <img height={240} width={173} src={process.env.PUBLIC_URL + "/화산귀환.jpg"}></img>
            <p className='title'>{books[0].title}</p>
            <div className='description'>
              <span className='author'>작가 {books[0].author}</span>
              <span>/</span>
              <span className='star'>별점 {books[0].star}</span>
            </div>
          </div>
          <div className="col">
            <img height={240} width={173} src={process.env.PUBLIC_URL + '/마도전생기.jpg'}></img>
            <p className='title'>제목</p>
            <span className='author'>작가이름</span>
            <span className='star'>별점</span>
          </div>
          <div className="col">
            <img height={240} width={173} src={process.env.PUBLIC_URL + '/전독시.png'}></img>
            <p className='title'>제목</p>
            <span className='author'>작가이름</span>
            <span className='star'>별점</span>
          </div> */}

          {books.map((book, index) => (
            <Card key={index} books={book}></Card>
          ))}

        </div>
      </div>
    </div>
  );
}

function Card(props){
  let {books} = props;
  return(
    <div className="col-sm-6 col-md-3">
      <img className='bookImg' height={240} width={173} src={books.src}></img>
      <p className='title'>{books.title}</p>
      <div className='description'>
        <span className='author'>작가 {books.author}</span>
        <span>/</span>
        <span className='star'>별점 {books.star}</span>
      </div>
    </div>
  )
}

export default App;