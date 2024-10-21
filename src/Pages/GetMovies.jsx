

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate } from 'react-router-dom';

const GetMovie = () => {
  let [api, setapi] = useState([]);
  let [search, SetSearch] = useState("");
  let Navigate1 = useNavigate();

  

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?&api_key=c7003c15c966ed65016de2ab586e2a79&language=en-US')
      .then((x) => x.json()).then(x => setapi(x.results))
      .catch(err => console.error('error', err))
  }, [])
  // console.log(api);

  function Mysearch() {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=c7003c15c966ed65016de2ab586e2a79`)
      .then(res => res.json())
      .then(x =>{
         setapi(x.results);
        // console.log(x);
        }) 
      
  } 
  return (
    <div>

      {/* Navbar */}

      <Navbar expand="lg" className="custom-navbar">
  <Container fluid>
    <Navbar.Brand href="#">Chill-flix</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1"><span>Home</span></Nav.Link>
        <Nav.Link href="#action2"><span>Live</span></Nav.Link>
        <NavDropdown title="Movies" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">
            <span>Action Movies</span>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action4">Romance Movies</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Horror Movies</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">Subscribe Now For More Movies</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <Form.Control
        style={{color:'white'}}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => SetSearch(e.target.value)}
        />
        <Button variant="outline-success" onClick={Mysearch}>
          Search
        </Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <Carousel>

        {api.map((x) => {
          return (
            <div  >
              <div key={x.id} >
                <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} /> <br /><br />
                <p className="legend">{x.title}</p>
                <p>Overview:{x.overview}</p> <br /><br /><br />
              </div>
              {/* <div> <p>{x.vote_average}</p>
              </div> */}
            </div>
          )
        })}
      </Carousel>

      {/* Cards */}

     <div style={{width:"1400px",margin:"auto"}}>
     <section style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:"20px"}}>
        {
          api.map((cards) => {
            return(
            <div >
                <Card style={{ width: '18rem' }} key={cards.id} >
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${cards.backdrop_path}`}  />
              <Card.Body key={cards.id}>
                <Card.Title>{cards.title}</Card.Title>
                <Card.Text>
                {cards.overview}
                </Card.Text>
                <Button id="searchbtn" style={{backgroundColor:'#f39c12'}} onClick={()=>Navigate1("/specificMovie",{state:{cards}})}>Show Details</Button>
              </Card.Body>
            </Card>
            </div>
            )
          })
        }
      </section>
     </div>

{/* Footer */}
<footer className="footer">
<p>© 2024 Movie Database | Developed by YourName</p>
</footer>      
    </div>
  )
}

export default GetMovie