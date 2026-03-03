import React from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
  return (
    <>
        <header className="">
        <div className="container">
          <div className="flex v--center h--between pt-12 pb-12">
            <Link className="logo" to="/">
              <img style={{color:"#ff7a00"}} src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/Logo.png" alt="" />
            </Link>
            <nav>
              <ul className="flex v--center h--center gap-40 gap-16-tablet">
                <li className="menu-item-has-children">
                  <a className="" href="#" target="_self">
                    <span>
                      <b>Services</b>
                    </span>
                  </a>
                  <div className="sub-menu">
                    <div className="fake_container">
                      <div className="flex v--stretch h--between relative sub_menu_content">
                        <div className="left main_sub_menu">
                          <ul className="flex fd--column gap-24 fullw">
                            <li className="active">
                              <a
                                className="btn btn--simple chevron h--between fullw decor-no"
                                href="services/index.html"
                                target="_self">
                                <span>
                                  <b>Engineering</b>
                                </span>
                              </a>
                              <div className="inner-menu">
                                <div className="inner_flex">
                                  <ul className="flex fd--column gap-8">
                                    <li>
                                      <Link
                                        className="title title--s color--dark"
                                        to="/electrical-procurement"
                                        target="_self">
                                        <span>
                                          <b>Electrical Solar Panel</b>
                                        </span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="title title--s color--dark"
                                        to="/electrical-installation"
                                        target="_self">
                                        <span>
                                          <b>Electrical Installation & Commissioning</b>
                                        </span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li className="">
                              <a
                                className="btn btn--simple chevron h--between fullw decor-no"
                                href="services/index.html"
                                target="_self">
                                <span>
                                  <b>Commissioning</b>
                                </span>
                              </a>
                              <div className="inner-menu">
                                <div className="inner_flex">
                                  <ul className="flex fd--column gap-8">
                                    <li>
                                      <Link
                                        className="title title--s color--dark"
                                        to="/electrical-engineering"
                                        target="_self">
                                        <span>
                                          <b>Repairs/maintenance</b>
                                        </span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="title title--s color--dark"
                                        to="/electrical-procurement-installation"
                                        target="_self">
                                        <span>
                                          <b>Engineering Procurement</b>
                                        </span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="img_wrap">
                          <img
                            alt="Image - design system"
                            className="radius-12 fullw"
                            decoding="async"
                            loading="lazy"
                            src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/WhatsApp-Image.jpg"
                            style={{
                              aspectRatio: "1.5260804769001",
                              width:"20%",
                              height:"20vh"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <Link className="" to="/cases" target="_self">
                    <span>
                      <b>Cases</b>
                    </span>
                  </Link>
                </li>
                <li className="menu-item-has-children">
                  <a className="" href="#" target="_self">
                    <span>
                      <b>Company</b>
                    </span>
                  </a>
                  <div className="sub-menu">
                    <div className="fake_container">
                      <div className="flex v--stretch h--between relative sub_menu_content">
                        <div className="left main_sub_menu">
                          <div className="inner bg--gray p-24 radius-12 fd--column flex m-12">
                            <div className="title title--m color--dark">
                              Global Engineering Procurement 
                            </div>
                            <div className="btn-wrap pt-24 mt-auto">
                              <a
                                className="btn btn--orange arr hover--dark"
                                href="contact-us/index.html"
                                target="_self">
                                <span>
                                  <b>Let’s talk</b>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="center">
                          <div className="inner_flex">
                            <ul className="flex fd--column gap-8">
                              <li>
                                <Link
                                  className="title title--s color--dark"
                                  to="/about-us"
                                  target="_self">
                                  <span>
                                    <b>About us</b>
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="title title--s color--dark"
                                  to="/teams"
                                  target="_self">
                                  <span>
                                    <b>Team and Advisors</b>
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                         <div className="img_wrap">
                          <img
                            alt="Image - design system"
                            className="radius-12 fullw"
                            decoding="async"
                            loading="lazy"
                            src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/WhatsApp-Image.jpg"
                            style={{
                              aspectRatio: "1.5260804769001",
                              width:"20%",
                              height:"20vh"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li className="">
                  <a
                    className=""
                    href=""
                    target="_blank">
                    <span>
                      <b>Career</b>
                    </span>
                  </a>
                </li> */}
                <li className="">
                  <Link className="" to="/contact" target="_self">
                    <span>
                      <b>Contacts</b>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="main-btn-wrap">
              <Link
                className="btn btn--white arr arr-right hover--gray-light"
                to="/contact"
                target="_self">
                <span>
                  <b>Get in touch</b>
                </span>
              </Link>
            </div>
            <div className="gam" />
          </div>
        </div>
      </header>
      <div className="mobile_menu_wrap flex fd--column">
        <div className="accordions">
          <div className="accordion">
            <div className="container">
              <div className="top">
                <div className="title title--s color--dark">
                  <a
                    className="color--inherit"
                    href="#"
                    target="_self">
                    Services <span className="color--dark-tertiary">4</span>
                  </a>
                </div>
              </div>
              <div className="bottom">
                <div className="grid pt-20 pt-0-mob pb-48-mob pb-40 col-3 col-1-mob col-2-tablet gap-40">
                  <div className="col">
                    <div className="txt txt--control-m color--dark-light fw-600 uppercase">
                      Engineering
                    </div>
                    <ul className="grid gap-24 gap-20-tablet mt-24-tablet pl-16-tablet">
                      <li>
                        <Link
                          className="btn btn--simple arr dark"
                          to="/electrical-procurement"
                          target="_self">
                          <span>
                            <b>Electrical Solar Panel</b>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="btn btn--simple arr dark"
                          to="/electrical-installation"
                          target="_self">
                          <span>
                            <b>Electrical Installation & Commissioning</b>
                          </span>
                        </Link>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                  <div className="col">
                    <div className="txt txt--control-m color--dark-light fw-600 uppercase">
                      Commissioning
                    </div>
                    <ul className="grid gap-24 gap-20-tablet mt-24-tablet pl-16-tablet">
                      <li>
                        <Link
                          className="btn btn--simple arr dark"
                          to="/electrical-engineering"
                          target="_self">
                          <span>
                            <b>Repairs/maintenance</b>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="btn btn--simple arr dark"
                          to="/electrical-procurement-installation"
                          target="_self">
                          <span>
                            <b>Engineering Procurement</b>
                          </span>
                        </Link>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="container">
              <div className="top">
                <div className="title title--s color--dark">
                  <Link
                    className="color--inherit"
                    to="/cases"
                    target="_self">
                    Cases
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="container">
              <div className="top">
                <div className="title title--s color--dark">
                  <a className="color--inherit" href="#" target="_self">
                    Company <span className="color--dark-tertiary">2</span>
                  </a>
                </div>
              </div>
              <div className="bottom">
                <div className="grid pt-20 pt-0-mob pb-48-mob pb-40 col-3 col-1-mob col-2-tablet gap-40">
                  <div className="col">
                    <ul className="grid gap-24 gap-20-tablet pl-16-tablet">
                      <li>
                        <Link
                          className="btn btn--simple arr dark"
                          to="/about-us"
                          target="_self">
                          <span>
                            <b>About us</b>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="btn btn--simple arr dark"
                          to="/teams"
                          target="_self">
                          <span>
                            <b>Team and Advisors</b>
                          </span>
                        </Link>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="accordion">
            <div className="container">
              <div className="top">
                <div className="title title--s color--dark">
                  <Link
                    className="color--inherit"
                    to=""
                    target="_blank">
                    Career
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          <div className="accordion">
            <div className="container">
              <div className="top">
                <div className="title title--s color--dark">
                  <Link
                    className="color--inherit"
                    to="/contact"
                    target="_self">
                    Contacts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="conts_wrap mt-auto pt-20">
          <div className="container">
            <Link
              className="btn btn--dark arr hover--orange fullw size-lg"
              to="/contact"
              target="_self">
              <span>
                <b>Get in touch</b>
              </span>
            </Link>
            {/* <div className="grid col-2 gap-8 mt-8 socs">
              <a href="/wa.me/48574758959" target="_blank">
                <img
                  alt=""
                  decoding="async"
                  loading="lazy"
                  src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/whatsapp.svg"
                />
              </a>
              <a href="/t.me/phenomenonstudio" target="_blank">
                <img
                  alt=""
                  decoding="async"
                  loading="lazy"
                  src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/telegram.svg"
                />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Topnav
