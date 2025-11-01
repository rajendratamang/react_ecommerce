import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png'
import logoBlack from '../assets/images/logo-white.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import SliderOneImg from '../assets/images/banner-1.jpg'
import SliderTwoImg from '../assets/images/banner-2.jpg'
import LatestProduct from './common/LatestProduct';
import FeaturedProducts from './common/FeaturedProducts';


const Home = () => {
  return (
    <>
      <header className='shadow'>
        <div className="bg-dark text-center py-3">
          <span className='text-white fw-bold'>
            Your Fashion Partner
          </span>
        </div>
        {/* navbar */}
        <div className="container">
          <Navbar expand="lg" className="" width={170}>
            <Navbar.Brand href="#">
              {/* logo */}
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Mens</Nav.Link>
                <Nav.Link href="#action2">Woman</Nav.Link>
                <Nav.Link href="#action2">Kids</Nav.Link>
              </Nav>
              <div className="nav-right d-flex">
                <a href="" className='ms-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path></svg>
                </a>
                <a href="" className='ms-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path></svg>
                </a>
              </div>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Navbar>
        </div>

      </header>


      <section className='section-1'>
        {/* /**** Swiper Slider Main **********/}
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            }
          }}
        >
          <SwiperSlide>
            <div className="content" style={{ backgroundImage: `url(${SliderOneImg})` }}>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content" style={{ backgroundImage: `url(${SliderTwoImg})` }}>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* product section */}
      <LatestProduct />

      {/* Featured Product */}
      <FeaturedProducts />

      {/* footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={logoBlack} alt="" width={150} />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolorum ipsa tenetur ex tempore odio cumque, debitis perferendis cupiditate natus repellendus saepe sit itaque consequatur esse corrupti accusamus? Recusandae, magni.
              Mollitia eaque suscipit obcaecati dolore adipisci saepe illum recusandae libero, ut voluptate nesciunt optio laudantium nisi delectus rerum temporibus unde ipsum consequatur placeat fuga? Magni aliquid similique illo error enim.
              Distinctio amet animi accusantium cum voluptates deleniti deserunt! Dignissimos a ea voluptates inventore laboriosam, consequuntur enim dicta ut culpa autem, molestias, quibusdam non! At cupiditate vitae, explicabo excepturi rem dolore?
              Iure accusamus id perferendis odit nobis, facilis, vel nisi enim fuga optio ea velit eaque dolores natus consequuntur quia minus inventore ut quis! Adipisci et magnam quia earum cupiditate ipsam.
              Tenetur aliquid labore qui, expedita, necessitatibus nobis magnam fugit ad deleniti dolores sapiente nulla cum dolore ab reiciendis rem libero, ullam obcaecati minus doloribus tempore facilis sunt alias maxime. Rem.
              A ut deleniti dolor? Eaque exercitationem quaerat architecto blanditiis sapiente facilis fugit error quis, excepturi quos modi. Facere nulla veritatis deserunt voluptates ut quisquam itaque, tempora, qui architecto quibusdam laborum?
              Cumque maxime illum unde nostrum perferendis quod alias fuga minus sint, consequatur quasi iste? Harum est quod vel quis voluptatum voluptates nemo, repellat eaque laboriosam, vero suscipit, eligendi culpa enim!
              Quasi quos aspernatur soluta ex vero culpa veritatis repudiandae maiores similique hic totam enim dicta earum iusto quis molestiae, corrupti commodi ea minima. Ad minima dolorem dicta eligendi qui? Provident?
              Maiores sunt optio reiciendis illum, ipsa esse at recusandae tenetur provident animi inventore amet vel, mollitia a blanditiis. Minima, nemo nihil facilis voluptates consectetur deserunt similique quibusdam corrupti beatae quo.
              Voluptatibus aliquam illo asperiores illum, velit vel odit maxime reprehenderit! Corrupti ea fuga nemo quae aliquid harum adipisci natus in iure! Officia saepe reiciendis omnis. Doloribus sapiente ipsam inventore possimus.</p>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home