import React,{ useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";

const HeaderFour = () => {

  useEffect(()=>{
    //SubMenu Dropdown Toggle
      if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

      }

      //Mobile Nav Hide Show
      if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.menu-area .push-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
          $(this).toggleClass('open');
          $(this).prev('ul').slideToggle(500);
        });


        $('.menu-backdrop, .mobile-menu .close-btn').click (()=>{
          $('body').removeClass('mobile-menu-visible');
        })


        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
          $('body').addClass('mobile-menu-visible');
        });
      }

  },[]);
  useEffect(()=>{
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $('.scroll-to-target').removeClass('open');
    
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $('.scroll-to-target').addClass('open');
      }
    });
    
  },[])
  
  return (
    <header className="header-style-four">
    <div className="header-top-area s-header-top-area d-none d-lg-block">
      <div className="container custom-container-two">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="header-top-offer">
              <p>Be One With the Game !</p>
              <span className="coming-time" data-countdown="2022/3/15" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-social">
              <span>Suivez-nous sur :</span>
              <ul>
                <li><a target="_blank" href="https://www.facebook.com/108810491763646/posts/108824198"><i className="fab fa-facebook-f" /></a></li>
                <li><a target="_blank" href="https://m.youtube.com/channel/UCHC6f1yUcu_9Wzjq5rbs4hQ/videos"><i className="fab fa-youtube" /></a></li>
                <li><a target="_blank" href="https://instagram.com/b_gaming_corp?utm_medium=copy_link"><i className="fab fa-instagram" /></a></li>
                <li><a target="_blank" href="/#"><i className="fab fa-whatsapp" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sticky-header" className="header-four-wrap main-header menu-area">
      <div className="container custom-container-two">
        <div className="row">
          <div className="col-12">
          <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
            <div className="main-menu menu-style-two">
              <nav>
                <div className="logo">
                  <a href="/"><img style={{width : 80,borderRadius:10}} src="assets/bg-img/b-gaming.png" alt="Logo" /></a>
                  {/*<h3 className="text-light">B-Gaming Corp.</h3>*/}
                </div>
                <div id="mobile-menu" className="navbar-wrap push-menu d-none d-lg-flex">
                <ul className="navigation">
                        {/*<li className=" menu-item-has-children"><NavLink  to="/index-4">Home</NavLink>
                          <ul className="submenu ">
                              <li ><Link to="/">Home One</Link></li>
                              <li><Link to="/index-2">Home Two</Link></li>
                              <li><Link to="/index-3">Home Three</Link></li>
                              <li ><Link to="/index-4">Home Four</Link></li>
                              <li><Link to="/index-5">Home Five</Link></li>
                              <li><Link to="/index-6">Home Six</Link></li>
                              <li><Link to="/index-7">Home Seven</Link></li>
                          </ul>
                        </li>*/}
                        {/*<li className=" menu-item-has-children"><NavLink to="/about-us">Pages</NavLink>
                          <ul className="submenu">
                            <li><NavLink to="/about-us">About Story</NavLink></li>
                            <li><NavLink to="/upcoming-games">Upcoming Games</NavLink></li>
                            <li><NavLink to="/game-single">Game Single</NavLink></li>
                          </ul>
                        </li>*/}
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><a href="/home#about-us">B-Gaming</a></li>
                        <li ><a href="/home#community">Notre Communité</a></li>
                        <li ><a href="/tournois">Tournois</a></li>
                        <li ><NavLink to="/shop">Store</NavLink></li>
                        <li><NavLink to="/contact">contact</NavLink></li>
                      </ul>
                </div>
              </nav>
            </div>
            <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn"><i className="fas fa-times" /></div>
                    <div className="nav-logo"><Link to="/"><img src="assets/img/logo/logo.png" alt="" title='true' /></Link>
                    </div>
                    <div className="menu-outer">
                  
                    </div>
                    <div className="social-links">
                      <ul className="clearfix">
                        <li><a target="_blank" href="https://www.facebook.com/108810491763646/posts/108824198"><i className="fab fa-facebook-f" /></a></li>
                        <li><a target="_blank" href="https://m.youtube.com/channel/UCHC6f1yUcu_9Wzjq5rbs4hQ/videos"><i className="fab fa-youtube" /></a></li>
                        <li><a target="_blank" href="https://instagram.com/b_gaming_corp?utm_medium=copy_link"><i className="fab fa-instagram" /></a></li>
                        <li><a target="_blank" href="/#"><i className="fab fa-whatsapp" /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
          </div>
          {/* Modal Search */}
          {/*<div className="modal fade" id="search-modal" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <form>
                  <input type="text" placeholder="Search here..." />
                  <button><i className="fa fa-search" /></button>
                </form>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  </header>
  )
}

export default HeaderFour
