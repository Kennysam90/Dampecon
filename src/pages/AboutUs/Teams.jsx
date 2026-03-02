import React from 'react'
import Topnav from '../../Component/Topnav'
import Footer from '../../Component/Footer'
import Award from '../../Component/Award'
import { Link } from 'react-router-dom'
import Chat from '../../Component/Chat'
import { TEAM_MEMBERS_WITH_EMAIL } from "../../Component/teamData";

const Teams = () => {
  return (
    <>
  <div id="app">
    <Topnav />
    <div className="favicons-wrap" style={{ display: "none" }}>
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00000.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00001.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00002.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00003.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00004.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00005.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00006.png.webp"
        alt=""
      />
      <img
        src="/phenomenonstudio.com/wp-content/uploads/2025/10/logo_00007.png"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00008.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00009.png.webp"
        alt=""
      />
    </div>
    <main className="next_block_sticky">
      <section className="about-hero bg--dark color--white section-bottom-rounded-pc">
        <div className="container">
          <div className="about-hero__holder">
            <div className="nobr-mob title title--xxl isview textslide visible">
             Dampecon Engineering Team
               <span>s</span>{" "}
            </div>
            <div className="about-hero__description txt txt--m mt-24 mt-20-mob isview slidetop visible">
              <p>
                Meet our team of experienced engineers and project specialists dedicated to delivering reliable electrical and engineering solutions with precision and quality.
              </p>
            </div>
            <div className="mt-32 mt-24-mob isview slidetop visible">
              <a
                className="btn btn--lg-desk btn--orange arr arr-right hover--white"
                href="#contact-form"
                target="_self"
              >
                <span>
                  <b>Let's talk</b>
                </span>
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
     <section
  className="pt-120 pt-64-mob pb-64-mob mb-200 mb-0-mob"
  id="our-team"
>
  <div className="container">
    <div className="title title--xl isview textslide visible">
      Our leadership <span>team</span>
    </div>

    <div className="team-flex-wrap grid col-3 col-1-mob gap-20-mob gap-40 mt-64 mt-40-mob">
      {TEAM_MEMBERS_WITH_EMAIL.map((member) => (
        <div
          key={member.id}
          className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar"
          data-card={member.id}
        >
          <div className="mask bg--dark" />

          <div className="top">
            <div className="img-wrap">
              <img
                className=""
                src={member.image}
                alt={member.alt}
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: member.aspectRatio }}
              />
            </div>

            <div className="bio mt-24">
              <div className="bio-name color--dark">
                {member.first_name} {member.last_name}
              </div>

              <div className="bio-position color--dark-secondary">
                {member.occupation}
              </div>

              {/* Email (clickable, CSS unchanged) */}
              <a
                href={`mailto:${member.email}`}
                className="bio-position color--dark-secondary"
              >
                {member.email}
              </a>
            </div>
          </div>

          <div className="txt txt--m color--white description pt-20 pt-8-mob">
            {member.description}
          </div>

          <span
            className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
            data-text-primary="Read more"
            data-text-secondary="Read less"
          />
        </div>
      ))}
    </div>
  </div>
</section>
      <section className="mt-200 mt-0-mob pt-64-mob pb-120 pb-64-mob">
        <div className="container">
          <div className="title title--xl isview textslide">
            Company <span>Advisors</span>
          </div>
          <div className="mt-40 grid col-2 col-1-mob">
            <div className="txt txt--m">
              Dampecon is guided and supported by a distinguished team of accomplished professionals and business advisors. With their strategic insight, technical expertise, and years of industry experience, they help us shape our vision, seize opportunities, and deliver consistent value to our clients.
.{" "}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="pb-120 pb-64-mob advisors_section">
        <div className="container">
          <div className="grid col-1 gap-68 gap-40-mob">
            <div className="row card isview fadein" data-offset={300}>
              <div className="row_top">
                <div className="txt txt--control-m uppercase fw-600">
                  Our advisors{" "}
                </div>
                <div className="numbers mt-24">
                  <b>01</b> - 03{" "}
                </div>
              </div>
              <div className="flex v--start h--between mt-40">
                <div className="left">
                  <div
                    className="img-wrap"
                    style={{
                      background:
                        "url(/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/medium.jpg)no-repeat center",
                      backgroundSize: "cover"
                    }}
                  >
                    <img
                      className=""
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/medium.jpg"
                      alt="Team and Advisors"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: "0.982" }}
                    />{" "}
                  </div>
                </div>
                <div className="right">
                  <div className="title title--l isview textslide">
                    Engr. Kehinde Adeyemi <br />
                    {" "}
                  </div>
                  <p className="position txt txt--m mt-16 color--dark-light">
                    CBDO, CDTO, Commercial Director, Board Advisor
                  </p>
                  <div className="description mt-32" data-min-height={150}>
                    <div className="text-block">
                      <div className="txt txt--m">
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            Engr. Kehinde Adeyemi, Over 20 years in oil & gas infrastructure and industrial systems design. Provides strategic direction on project execution and safety compliance.
                          </span>
                        </p>
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            With a strong foundation in Physics and Biophysics,
                            coupled with a BA in Economics, he garnered
                            extensive experience in retail network development
                            and operations over 14 years. His notable roles
                            include serving in C-level positions at
                            international companies BP and Shell, such as
                            Director for the development of the network of
                            filling stations and Director for sales and
                            operations.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <span
                    className="readmore uppercase readmore_team_text txt txt--control-m mt-24"
                    data-text-primary="Read more"
                    data-text-secondary="Read less"
                  />
                </div>
              </div>
            </div>
            <div className="row card isview fadein" data-offset={300}>
              <div className="row_top">
                <div className="txt txt--control-m uppercase fw-600">
                  Our advisors{" "}
                </div>
                <div className="numbers mt-24">
                  <b>02</b> - 03{" "}
                </div>
              </div>
              <div className="flex v--start h--between mt-40">
                <div className="left">
                  <div
                    className="img-wrap"
                    style={{
                      background:
                        "url(/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/corporate1.webp)no-repeat center",
                      backgroundSize: "cover"
                    }}
                  >
                    <img
                      className=""
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/corporate1.webp"
                      alt="Team and Advisors"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: "0.98266666666667" }}
                    />{" "}
                  </div>
                </div>
                <div className="right">
                  <div className="title title--l isview textslide">
                    Dr. Tola Akinwunmi <br />
                   {" "}
                  </div>
                  <p className="position txt txt--m mt-16 color--dark-light">
                    Co-founder &amp; CEO of Polyform/Global Mentor at Techstars
                  </p>
                  <div className="description mt-32" data-min-height={150}>
                    <div className="text-block">
                      <div className="txt txt--m">
                        <p>
                          An accomplished startup advisor and expert in Consumer
                          Tech, GenZ, and Augmented Reality, brings his unique
                          skill set to the table. With a co-founder and CEO role
                          at Polyform, a highly acclaimed design studio based in
                          Canada, Dr. Tola Akinwunmi’s journey has been marked by
                          collaborations with globally renowned brands,
                          including Nike, RTFKT, Disney, Shell, NBA, Red Bull,
                          Amazon, Uniqlo, GE, and Lululemon. Notably, the
                          Polyform team’s collaborative efforts have led to the
                          successful creation of over 150 consumer products
                          across mobile, AR, and hardware products, a remarkable
                          accomplishment acknowledged through the receipt of
                          more than 50 awards.
                        </p>
                        <p>
                          The dynamic partnership between Polyform and
                          Phenomenon has evolved into a symbiotic relationship,
                          focused on enriching the expertise of our
                          professionals, pushing the boundaries of creativity,
                          and ultimately, providing enhanced value to our
                          clients.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span
                    className="readmore uppercase readmore_team_text txt txt--control-m mt-24"
                    data-text-primary="Read more"
                    data-text-secondary="Read less"
                  />
                </div>
              </div>
            </div>
            <div className="row card isview fadein" data-offset={300}>
              <div className="row_top">
                <div className="txt txt--control-m uppercase fw-600">
                  Our advisors{" "}
                </div>
                <div className="numbers mt-24">
                  <b>03</b> - 03{" "}
                </div>
              </div>
              <div className="flex v--start h--between mt-40">
                <div className="left">
                  <div
                    className="img-wrap"
                    style={{
                      background:
                        "url(/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/atricle.jpg)no-repeat center",
                      backgroundSize: "cover"
                    }}
                  >
                    <img
                      className=""
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/atricle.jpg"
                      alt="Team and Advisors"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: "0.98266666666667" }}
                    />{" "}
                  </div>
                </div>
                <div className="right">
                  <div className="title title--l isview textslide">
                    Chief Fisayo Adediran{" "}
                  </div>
                  <p className="position txt txt--m mt-16 color--dark-light">
                    XR Product Manager / Lead Designer, XR Consultant @ DDD
                    Visions,Co-Organizer @ VRC Toronto
                  </p>
                  <div className="description mt-32" data-min-height={150}>
                    <div className="text-block">
                      <div className="txt txt--m">
                        <p>
                          A product-obsessed designer, MBA, entrepreneur and
                          tech community leader, Diego has been working with XR
                          technologies for over a decade. Driven by a desire for
                          excellence, he fuses design, business and technology
                          in order to envision and materialize products that are
                          complex in nature, yet simple, intuitive and enjoyable
                          to use. A global citizen with international experience
                          working with large multinationals, small family
                          businesses, startups, government and NGOs, he is able
                          to bridge and align the interests of diverse
                          stakeholders in order to find the synergies that lead
                          to shared value creation and sustainable business
                          practices.A longstanding collaborator of Phenomenon,
                          Diego led one of the biggest and most complex projects
                          the studio has faced to date, having developed a
                          special chemistry with the Phenomenon team that is
                          sure to output exceptional results.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span
                    className="readmore uppercase readmore_team_text txt txt--control-m mt-24"
                    data-text-primary="Read more"
                    data-text-secondary="Read less"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="pt-64 pt-0-mob pb-120 pb-64-mob">
        <div className="container">
          <div className="mt-24 mt-16-mob mw1040 title title--xl isview textslide">
            <span>Principles</span> we stand behind
          </div>{" "}
          <div className="mt-24 mt-16-mob mw-630 txt txt--m isview slidetop trd02">
            Dampecon Ltd. is a team of skilled engineers and technical experts united by shared values, professionalism, and a commitment to excellence in every project we take on.
          </div>{" "}
          <div className="mt-64 mt-40-mob grid col-3 gap-40 col-1-mob team_columns">
            <div className="col">
              <div className="content">
                <img
                  className=""
                  src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.23.55 AM (1).jpeg"
                  alt="Team and Advisors"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />
                <div className="title title--m mt-12">
                  Focus on business results
                </div>
                <div className="txt txt--m mt-12">
                  We don’t just design and build — we deliver. Every project we undertake is guided by precision, safety, and measurable performance. From planning and design to installation and maintenance, our goal is to provide dependable engineering solutions that stand the test of time.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="content">
                <img
                  className=""
                  src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.27.09 AM.jpeg"
                  alt="Team and Advisors"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />
                <div className="title title--m mt-12">
                  Transparency in everything
                </div>
                <div className="txt txt--m mt-12">
                  We maintain open and honest communication across every stage of a project. Our clients are kept informed, our engineers are accountable, and our operations are built on trust. We believe that transparency is the foundation of every successful collaboration.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="content">
                <img
                  className=""
                  src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.23.57 AM (3).jpeg"
                  alt="Team and Advisors"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />
                <div className="title title--m mt-12">
                  Partners, not just vendors
                </div>
                <div className="txt txt--m mt-12">
                  We see every client as a long-term partner, not just a project. Our team invests in understanding your goals and challenges, ensuring that our expertise adds lasting value to your operations. When you work with Dampecon, you gain a partner dedicated to your success and safety.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-64 mt-40-mob text--center">
            <Link
              className="btn btn--lg-desk btn--orange hover--dark arr"
              to="/about-us"
              target="_self"
            >
              <span>
                <b>About us</b>
              </span>
            </Link>{" "}
          </div>
        </div><Award />
        <Chat />
      </section>
       
      
     <Footer />
    </main> 
   
  </div>
  <link
    rel="stylesheet"
    href="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/css/swiper-bundle.min.css"
    async=""
  />
</>

  )
}

export default Teams
