import { useState, useEffect } from "react";
import Topnav from '../Component/Topnav'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom';
import Comment from '../Component/Comment';
import Chat from '../Component/Chat';
import Project from '../Component/project';
import HomeProject from '../Component/HomeProject';
import { dummyTestimonials } from "../Component/TestimonialsPage";
import TestimonialsManager from "../Component/TestimonialsManager";

const Home = () => {
  // this stores which tab is active
    const [activeTab, setActiveTab] = useState("");
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
      const stored =
        JSON.parse(localStorage.getItem("testimonials")) || dummyTestimonials;
      setTestimonials(stored);
    }, []);


  
    // when a tab is clicked, update activeTab
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  return (
    <>
    <div id="app">
      <Topnav />
      <div
        className="favicons-wrap"
        style={{
          display: "none",
        }}>
        <img alt="" src="wp-content/uploads/2025/10/logo_00000.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00001.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00002.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00003.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00004.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00005.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00006.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00007.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00008.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00009.png" />
      </div>
      <main className="next_block_sticky">
        <section className="hero bg--dark clipped-bottom next_block_sticky">
          <div className="container color--white">
            <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop visible">
              <h1>Our Core Services</h1>
            </div>
            <div className="nobr-mob title title--xl mw1040 isview textslide trd02 visible">
              <h2>
                Electrical engineering, procurement, {" "}
                <span>and installation solutions</span>
              </h2>
            </div>
            <div className="mt-24 flex v--centerh--start gap-8 fd--column-mob isview slidetop trd04 visible">
              <a
                className="btn btn--orange hover--white btn--lg-desk arr arr-right"
                href="#contact-form"
                target="_self">
                <span>
                  <b>Let’s talk</b>
                </span>
              </a>
              <Link
                className="btn btn--white-light arr arr-right hover--white btn--lg-desk"
                to="/cases"
                target="_self">
                <span>
                  <b>View our cases</b>
                </span>
              </Link>
            </div>
            <div className="mt-60 mt-24-mob grid col-2 col-1-mob column-gap-32 row-gap-40 row-gap-24-mob">
              <div className="col sticky isview slidetop visible">
                <div className="media_wrap">
                 <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="fullw radius-12"
                  style={{
                    aspectRatio: "1.33",
                    objectFit: "cover",
                    verticalAlign: "middle",
                  }}
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/small.mp4" 
                />

                </div>
              </div>
              <div className="col pt-32 pt-0-mob pb-32 pb-0-mob flex fd--column">
                <div
                  className="txt--lead inner-inherit font1 isview slidetop fullw inner-inherit visible"
                  style={{
                    width: "100%",
                  }}>
                  <div>
                    <h3>
                      At DAMPECON LTD., we design and maintain world-class electrical systems for businesses
                      ensuring safety operations.
                    </h3>
                  </div>
                </div>
                <div className="txt txt--caption-m color--white-light uppercase fw-600 mt-auto pt-32 pt-0-mob mt-40-mob pt-8-mob isview slidetop visible">
                   <p>Delivering trusted electrical solutions for organizations</p>
                </div>
                <div className="mt-24 logos_wrap grid col-4 col-2-tablet isview slidetop visible">
                  <div className="logo flex v--center h--center">
                    <img
                      alt="Icon - l_1"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/logo3.png"
                      style={{
                        aspectRatio: "1.41",
                      }}
                    />
                  </div>
                  <div className="logo flex v--center h--center">
                    <img
                      alt="Icon - l_2"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/GREYOCEAN.png"
                      style={{
                        aspectRatio: "1.41",
                      }}
                    />
                  </div>
                  <div className="logo flex v--center h--center">
                    <img
                      alt="Icon - l_3"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/download.png"
                      style={{
                        aspectRatio: "1.41",
                      }}
                    />
                  </div>
                  <div className="logo flex v--center h--center">
                    <div className="txt txt--control-s uppercase fw-600">
                      <p>and more</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col pc-visible" />
              <div className="col pt-32 pt-24-mob pb-32 pb-0-mob text--center visible">
                <div className="txt txt--caption-m color--white-light text--left mb-24 uppercase fw-600 mt-auto pt-32 pt-0-mob mt-24-mob isview fadein inner-inherit">
                  <div>DAMPECON LTD IN NUMBERS</div>
                </div>
                <div className="values_wrap grid col-2 clip_1 isview fadein">
                  <div className="col flex v--center h--center fd--column">
                    <div className="title--l color--white">98%</div>
                    <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                      <p>Completed Projects</p>
                    </div>
                  </div>
                  <div className="col flex v--center h--center fd--column">
                    <div className="title--l color--white">100%</div>
                    <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                      <p>On-Time Delivery</p>
                    </div>
                  </div>
                  <div className="col flex v--center h--center fd--column">
                    <div className="title--l color--white">60+</div>
                    <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                      <p>Expert Engineers</p>
                    </div>
                  </div>
                  <div className="col flex v--center h--center fd--column">
                    <div className="title--l color--white">60T+</div>
                    <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                      <p>Serving Clients Nationwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="problems_we_solve bg--white pt-200 pb-200 pt-100-mob pb-100-mob mt-5">
          <div className="container">
            <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
              <h2>Our Core Services</h2>            </div>
            <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview textslide trd02">
              We specialize in electrical installations,that keeps {" "}
              <span>running smoothly.</span>
            </div>
          </div>
          <div className="mt-100 mt-40-mob problems">
            <div className="row sticky row-1 bg--white">
              <div className="inner">
                <div className="container">
                  <div className="flex v--stretch h--between vertical_scroll_slider">
                    <div className="left pr-24 pr-0-mob">
                      <div className="txt txt--l">
                        <p>
                          Need reliable electrical work completed fast but short on manpower or expertise?
                          or expertise?
                        </p>
                      </div>
                    </div>
                    <div className="center flex fd--column v--start">
                      <div className="txt txt--lead inner-inherit">
                        <div>
                          Instead of managing multiple contractors, our certified engineers are ready to step in immediately — delivering professional installations, upgrades, or repairs that meet your deadlines without compromising quality.
                        </div>
                      </div>
                      <div className="btn-wrap mt-auto pt-24 pb-24 pt-32-mob">
                        <Link
                          className="btn btn--orange hover--dark arr"
                          to="/contact"
                          target="_self">
                          <span>
                            <b>Request a Project Team</b>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="right">
                      <div className="video_player radius-12">
                        <video
                          autoPlay
                          className="fullw isview visible just_for_track fadein"
                          data-src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Polina_1_sub.mp4"
                          loop
                          muted
                          playsInline
                          poster="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/polina-team-cover.webp"
                          preload="none"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Video 2025-12-09 at 8.23.54 AM.mp4"
                        />
                        <div className="btn-wrap">
                          <button className="btn btn--play" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sticky row-2 bg--white">
              <div className="inner">
                <div className="container">
                  <div className="flex v--stretch h--between vertical_scroll_slider">
                    <div className="left pr-24 pr-0-mob">
                      <div className="txt txt--l">
                        <p>
                          Expanding your operations but your electrical infrastructure can’t keep up?
                          
                        </p>
                      </div>
                    </div>
                    <div className="center flex fd--column v--start">
                      <div className="txt txt--lead inner-inherit">
                        <div>
                          At DAMPECON LTD., we design and upgrade industrial electrical systems that scale with your production — ensuring consistent performance, safety, and energy efficiency as your business grows.
                        </div>
                      </div>
                      <div className="btn-wrap mt-auto pt-24 pb-24 pt-32-mob">
                        <Link
                          className="btn btn--orange hover--dark arr"
                          to="/contact"
                          target="_self">
                          <span>
                            <b>Request a Project Team</b>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="right">
                      <div className="video_player radius-12">
                        <video
                          autoPlay
                          className="fullw isview visible just_for_track fadein"
                          data-src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Dr. Tola Akinwunmi_2sub.mp4"
                          loop
                          muted
                          playsInline
                          poster="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Dr. Tola Akinwunmi-cover.webp"
                          preload="none"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Video 2025-12-09 at 8.53.50 AM.mp4"
                        />
                        <div className="btn-wrap">
                          <button className="btn btn--play" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sticky row-3 bg--white">
              <div className="inner">
                <div className="container">
                  <div className="flex v--stretch h--between vertical_scroll_slider">
                    <div className="left pr-24 pr-0-mob">
                      <div className="txt txt--l">
                        <p>Planning a new facility or expansion project and need fast, dependable installation?</p>
                      </div>
                    </div>
                    <div className="center flex fd--column v--start">
                      <div className="txt txt--lead inner-inherit">
                        <div>
                          Our structured project approach helps you focus on what truly matters — safety, efficiency, and compliance — while our experienced team completes installations up to 50% faster without compromising quality.
                        </div>
                      </div>
                     <div className="btn-wrap mt-auto pt-24 pb-24 pt-32-mob">
                        <Link
                          className="btn btn--orange hover--dark arr"
                          to="/contact"
                          target="_self">
                          <span>
                            <b>Request a Project Team</b>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="right">
                      <div className="video_player radius-12">
                        <video
                          autoPlay
                          className="fullw isview visible just_for_track fadein"
                          data-src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Polina_3_sub.mp4"
                          loop
                          muted
                          playsInline
                          poster="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/polina-mvp-cover.webp"
                          preload="none"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Video 2025-12-09 at 8.23.56 AM.mp4"
                        />
                        <div className="btn-wrap">
                          <button className="btn btn--play" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space" />
          </div>
        </section>
        <section className="serv_base services_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-bottom clipped-top radius-80 radius-32-mob next_block_sticky">
          <div className="container">
            <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop inner-inherit">
              <div>
                <h2>Our Core Services</h2>
              </div>
            </div>
            <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview textslide trd02 inner-inherit">
              <span>Tailored electrical </span> solutions from concept to completion
              scale
            </div>
            <div className="color--white-secondary txt txt--l mt-48 mw706 isview slidetop trd02 inner-inherit">
              <div>
                Great projects don’t happen by chance. At DAMPECON LTD., we support clients from initial design to long-term operation — delivering reliable installations, quality components, and scalable electrical systems that power lasting growth.
              </div>
            </div>
            <div className="mt-100 mt-32-mob">
              <div className="pt-32 pt-0-mob pb-32 pb-0-mob flex v--start h--between scroll_slider flex--block-mob">
                <div className="left flex fd--column flex--block-mob disable-scrollbar bg--dark">
                  <ul className="flex fd--column gap-4 isview slidetop">
                    <li className="title title--s services_section_link">
                      <a data-id="1" href="#slide-1">
                        Design
Install
Maintain & Expand
                      </a>
                    </li>
                    <li className="title title--s services_section_link">
                      <a data-id="2" href="#slide-2">
                        Seed
                      </a>
                    </li>
                    <li className="title title--s services_section_link">
                      <a data-id="3" href="#slide-3">
                        Series A & beyond
                      </a>
                    </li>
                  </ul>
                  <div className="btn-wrap mt-auto pt-32 pc-visible isview slidetop">
                    <Link
                      className="btn btn--orange arr hover--white"
                      to="/webapp"
                      target="_self">
                      <span>
                        <b>Explore all</b>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="right color--white gap-100 flex fd--column gap-80-mob mt-40-mob pt-8-mob isview fadein">
                  <div className="scroll_slide row-1" id="slide-1">
                    <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide">
                      Validate your idea & attract early investors
                    </div>
                    <div className="colums_wrap mt-32 ov-hidden">
                      <div className="grid col-3 col-1-mob services_row  clipped">
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Site Assessment & Design
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Evaluate your facility’s electrical needs with precise load calculations and tailored engineering designs that ensure efficiency and safety.
                            </p>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Procurement & Supply
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Source certified electrical components, control panels, and ATS systems from trusted manufacturers for dependable project delivery.
                            </p>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Installation & Commissioning
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Get your systems installed and tested by experienced engineers who ensure flawless performance and full compliance with standards.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll_slide row-2" id="slide-2">
                    <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide">
                      Build your infrastructure & power your growth
                    </div>
                    <div className="colums_wrap mt-32 ov-hidden">
                      <div className="grid col-3 col-1-mob services_row  clipped">
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Electrical Design & Planning
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Get expertly engineered designs tailored to your facility’s unique load requirements and future expansion goals.
                            </p>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Procurement & Supply
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Source high-quality electrical materials, control panels, and ATS systems from globally trusted manufacturers.
                            </p>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Installation & Commissioning
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Ensure safe, efficient, and compliant installations delivered by our certified professionals.
                            </p>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Repair & Maintenance
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Modernize outdated systems and keep your operations running without interruption through scheduled maintenance.
                            </p>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Dedicated Engineering Team
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Access a reliable team of experienced engineers ready to handle projects of any scale — from concept to completion.
                            </p>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start"></div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll_slide row-3" id="slide-3">
                    <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide">
                      Scale, optimize & reach more users
                    </div>
                    <div className="colums_wrap mt-32 ov-hidden">
                      <div className="grid col-3 col-1-mob services_row  clipped">
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            System Audit
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Identify performance gaps, energy losses, and safety risks to enhance the reliability of your electrical infrastructure.
                            </p>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Electrical Upgrade
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Replace outdated equipment with modern, efficient systems that meet current standards and improve productivity.
                            </p>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Project Support Team
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Quickly scale your workforce with our dedicated engineers and technicians ready to deliver on schedule.
                            </p>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Facility Modernization
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Transform your facility with advanced electrical installations that boost efficiency, safety, and long-term value.
                            </p>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start"></div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mob-visible mt-40 pt-8">
              <Link
                className="btn btn--orange arr fullw"
                to="/webapp"
                target="_self">
                <span>
                  <b>Explore all</b>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <HomeProject />
        <section className="our_team  pt-100-mob pb-200 pb-64-mob">
          <div className="container">
            <div className="txt txt--caption-m color--dark-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop">
              About DAMPECON LTD.
            </div>
            <div className="nobr-mob title title--xl mw1040 isview textslide trd02 mb-40 mb-32-mob">
              Our team of professionals combined experience to power your success —  <span></span>
            </div>
            <div className="txt txt--l color--dark-secondary mw760 mt-48 mt-24-mob isview slidetop trd02">
              Founded on expertise and integrity, DAMPECON LTD. is a trusted name in electrical engineering installations and global procurement.
Our experienced engineers and project managers are committed to delivering solutions that meet the highest international standards — ensuring reliability, efficiency, and long-term value for our clients.
            </div>
            <div className="team_grid_wrap mt-100 mt-64-tablet">
              <div className="grid col-4 gap-20 col-1-mob">
                <div className="col isview slidetop  pc-visible">
                  <img
                    alt="Image - telegram-cloud-photo-size-2-5253719888026007023-y"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.53.49 AM.jpeg"
                    style={{
                      aspectRatio: "0.82323232323232",
                    }}
                  />
                </div>
                <div className="col isview slidetop pc-visible pc-visible"></div>
                <div className="col isview slidetop  pc-visible span-2 span-1-mob">
                  <img
                    alt="Image - IMG_0477"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.27.08 AM.jpeg"
                    style={{
                      aspectRatio: "1.7070707070707",
                    }}
                  />
                </div>
                <div className="col isview slidetop">
                  <img
                    alt="Image - telegram-cloud-document-2-5300745544623214761"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 9.09.55 AM.jpeg"
                    style={{
                      aspectRatio: "0.82323232323232",
                    }}
                  />
                </div>
                <div className="col isview slidetop  pc-visible">
                  <img
                    alt="Image - image"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.27.08 AM (1).jpeg"
                    style={{
                      aspectRatio: "0.82323232323232",
                    }}
                  />
                </div>
                <div className="col isview slidetop pc-visible pc-visible"></div>
                <div className="col isview slidetop  pc-visible">
                  <img
                    alt="Image - telegram-cloud-document-2-5300745544623214765 1"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.23.57 AM (3).jpeg"
                    style={{
                      aspectRatio: "0.82323232323232",
                    }}
                  />
                </div>
                <div className="col isview slidetop pc-visible pc-visible"></div>
                <div className="col isview slidetop  pc-visible">
                  <img
                    alt="Image - IMG_4435 (2)"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.27.09 AM.jpeg"
                    style={{
                      aspectRatio: "0.75",
                    }}
                  />
                </div>
                <div className="col isview slidetop">
                  <img
                    alt="Image - IMG_0478"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.23.57 AM (2).jpeg"
                    style={{
                      aspectRatio: "0.82323232323232",
                    }}
                  />
                </div>
                <div className="col last-block flex fd--column v--start isview slidetop">
                  <div className="inner color--dark radius-12 bg--gray bg--orange-mob flex fd--column v--start clipped-right-mob">
                    <div className="title title--l">60+ team members</div>
                    <div className="btn-wrap mt-auto pt-24">
                      <Link
                        className="btn btn--simple dark arr"
                        to="/teams"
                        target="_self">
                        <span>
                          <b>Learn more</b>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services_section bg--white pb-200 pb-100-mob">
          <div className="container">
            <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
              <h2>Why choose us?</h2>
            </div>
            <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview textslide trd02 inner-inherit">
              Your success is our <span>priority</span>
            </div>
            <div className="mt-40 mt-32-mob grid col-2 col-1-mob gap-12 benefits_container">
              <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary">
                  Engineering that meets standards
                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">
                  DAMPECON LTD sources, procures, and delivers certified electrical equipment
                </div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                  <p>
                    At DAMPECON LTD., safety and compliance come first.
We strictly adhere to Nigerian Electrical Standards and international best practices in every project — from healthcare facilities to manufacturing plants. Our certified engineers ensure every installation is efficient, durable, and built to last.
                  </p>
                </div>
              </div>
              <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary">
                  “Engineering solutions built to perform
                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">
                  We don’t follow trends — we build electrical systems that last.
                </div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                  <p>
                    Our installations are designed for long-term reliability, safety, and efficiency — engineered to meet today’s standards and tomorrow’s demands. Every project we deliver is scalable, compliant, and built for sustained performance — not just short-term fixes.


⚙️ Optional Shorter Version (for tagline or highlight box):

We engineer electrical systems that stand the test of time — safe, efficient, and ready for the future.


Would you like me to now help you rewrite the next paragraph or tagline that appears right after this (for example, the one that transitions into your “Industries We Serve” section)? That will keep your tone consistent across the homepage.
                  </p>
                </div>
              </div>
              <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary">
                  Engineering that’s installation-ready
                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">
                  We design htmlFor implementation, not handoff.{" "}
                </div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                  <p>
                    Every electrical layout and system specification is developed with installation teams in mind — focusing on efficiency, safety, and compliance. We coordinate closely with your contractors or facility managers to ensure every component is accurately installed, tested, and commissioned to specification.ilt with devs in mind: design tokens,
                    accessibility, reusability, and real-world constraints. We
                    collaborate with your team, reuse existing elements, and
                    stay involved until everything’s live.
                  </p>
                </div>
              </div>
              <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary">
                  Local expertise. Global capability
                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">
                  Work directly with the doers — not a chain of account
                  managers.
                </div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                  <p>
                    Our regional teams provide on-site coordination, while our technical and procurement units ensure international-quality standards and timely delivery. We integrate seamlessly into your project workflow, from design and procurement to installation and maintenance, acting as an extension of your engineering team.in North America, while our
                    senior design and development teams in Europe deliver fast,
                    consistent results. We integrate into your tools and
                    workflow, working as part of your team — from a single
                    embedded designer to a full product squad.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Comment testimonials={testimonials} />
          <Chat />
        </section>
        
       
        <Footer />
      </main>
      
      
      
    </div>
    </>
  )
}

export default Home
