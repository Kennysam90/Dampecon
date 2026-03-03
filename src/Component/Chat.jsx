import React from 'react'

const Chat = () => {
  return (
    <>
       <section
          id="contact-form"
          className="
            contact_form_section 
            bg--dark 
            ov--hidden
            pt-120 pb-120
            pt-80-mob pb-80-mob
          "
          style={{ marginTop: "4rem" }}
        >

        <div className="container">
          <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop visible">
            DAMPECON Ltd. Lets Deal {" "}
          </div>
          <h2 className="title title--xxl mt-16 color--white mw1040 nobr-mob isview textslide trd02 visible">
            Let’s talk!<br />
            <span></span>
          </h2>
        </div>
        <div className="mt-40 mt-48-mob contact_form_wrap">
          <div className="container">
            <div className="flex v--stretch h--between flex--block-mob">
              <form
                autoComplete="off"
                className="contact-form"
              >
                <div className="relative">
                  <div className="flex h--wrap v--start h--between row-gap-32 row-gap-24-mob form_wrap">
                    <input type="hidden" name="g-recaptcha-response" />
                    <input
                      type="hidden"
                      name="action"
                      defaultValue="validate_captcha"
                    />
                    <input type="hidden" name="form_type" defaultValue={1} />
                    <input
                      type="hidden"
                      name="source_page"
                      defaultValue="index.html"
                    />{" "}
                    <div className="input-wrap w50 isview slidetop visible">
                      <div className="txt txt--control-s color--white-light uppercase fw-600">
                        Your Name{" "}
                      </div>
                      <input
                        type="text"
                        name="your_name"
                        placeholder=" "
                        className="required"
                        data-max-length={40}
                        data-pattern="[A-Za-z]"
                      />
                      <p>
                        Enter your name <sup>*</sup>
                      </p>
                    </div>
                    <div className="input-wrap w50 isview slidetop visible">
                      <div className="txt txt--control-s color--white-light uppercase fw-600">
                        Your Email{" "}
                      </div>
                      <input
                        type="text"
                        name="your_email"
                        placeholder=" "
                        className="required email"
                        data-pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$"
                        data-message-error="Your Email is invalid"
                      />
                      <p>
                        Enter your email <sup>*</sup>
                      </p>
                    </div>
                    <div className="input-wrap isview slidetop visible">
                      <div className="txt txt--control-s color--white-light uppercase fw-600">
                        Message{" "}
                      </div>
                      <textarea
                        name="your_text"
                        className="max-length"
                        placeholder=" "
                        data-max-length={1000}
                        defaultValue={""}
                      />
                      <p>Tell us about your project</p>
                    </div>
                    <div className="attach_wrap mt--8 mt-0-mob isview slidetop visible">
                      <input
                        type="file"
                        accept=".jpg, .png, .webp, .doc, .docx, .pdf, .csv, .xlsx"
                        id="attach_1"
                        className="attach_input"
                        multiple=""
                        name="files_arr[]"
                      />
                      <label
                        htmlFor="attach_1"
                        className="btn btn--white-light hover--dark-light clip"
                      >
                        <span>
                          <b>Attach file</b>
                        </span>
                      </label>
                      <div id="inner_1" className="attach_inner" />
                      <div className="file-err err fe1">
                        You can upload maximum 5 files
                      </div>
                      <div className="file-err err fe2">
                        Some of your file not loaded, because maximum file size
                        - 5 mb
                      </div>
                    </div>
                    <div className="budget_wrap mt-8-mob isview slidetop visible">
                      <div className="txt txt--control-s color--white-light uppercase fw-600">
                        Your budget for this project?{" "}
                      </div>
                      <div className="budgets flex v--start h--start h--wrap mt-20 gap-8">
                        <input
                          type="radio"
                          id="budget_1"
                          name="budget"
                          className="custom-validate budget"
                          data-validate-key="budget"
                          defaultValue="up to $10k"
                        />
                        <label htmlFor="budget_1" className="btn btn--label">
                          up to $10k
                        </label>
                        <input
                          type="radio"
                          id="budget_2"
                          name="budget"
                          className="custom-validate budget"
                          data-validate-key="budget"
                          defaultValue="$10-$20k"
                        />
                        <label htmlFor="budget_2" className="btn btn--label">
                          $10-$20k
                        </label>
                        <input
                          type="radio"
                          id="budget_3"
                          name="budget"
                          className="custom-validate budget"
                          data-validate-key="budget"
                          defaultValue="$20-$50k"
                        />
                        <label htmlFor="budget_3" className="btn btn--label">
                          $20-$50k
                        </label>
                        <input
                          type="radio"
                          id="budget_4"
                          name="budget"
                          className="custom-validate budget"
                          data-validate-key="budget"
                          defaultValue="$50-$100k"
                        />
                        <label htmlFor="budget_4" className="btn btn--label">
                          $50-$100k
                        </label>
                        <input
                          type="radio"
                          id="budget_5"
                          name="budget"
                          className="custom-validate budget"
                          data-validate-key="budget"
                          defaultValue=">$100k"
                        />
                        <label htmlFor="budget_5" className="btn btn--label">
                          &gt;$100k
                        </label>
                      </div>
                    </div>
                    <div className="btn_wrap flex v--center h--start pt-8 flex--block-mob isview slidetop w-full-mob visible">
                      <button className="btn btn--orange btn--lg-desk arr fullw-mob hover--white">
                        <span>
                          <b>Submit</b>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="form_state text--center success type-1 color--white bg--dark">
                    <div className="icon">
                      <img
                        className=""
                        src=""
                        alt="Icon - circle-check-svgrepo-com 1"
                        loading="lazy"
                        decoding="async"
                        style={{}}
                      />{" "}
                    </div>
                    <div className="title title--m mt-24">
                      <span>Thanks</span> for taking time to reachout!{" "}
                    </div>
                    <div className="txt txt--l mt-12 color--white-light">
                      Stay connected with us by subscribing to our LinkedIn
                      account. By following, you’l be the first to hear about
                      our latest updates, news, and exciting development. We
                      look forward to sharing our journey with you!{" "}
                    </div>
                    <div className="btn_wrap mt-24 w-full-mob">
                      <a
                        href="https://www.linkedin.com/company/phenomenonstudio/"
                        target="_blank"
                        rel="nofollow"
                        className="btn btn--orange hover--white btn--lg-desk"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={17}
                          viewBox="0 0 16 17"
                          fill="none"
                        >
                          <path
                            d="M13.8661 9.82749V14.3671H11.3513V10.1315C11.3513 9.06751 10.9876 8.34136 10.0773 8.34136C9.3824 8.34136 8.96887 8.83073 8.78694 9.30411C8.7206 9.47335 8.70352 9.7089 8.70352 9.94579V14.3671H6.18784C6.18784 14.3671 6.22172 7.19341 6.18784 6.45016H8.70327V7.57236C8.69817 7.58075 8.69154 7.5898 8.68674 7.59794H8.70327V7.57236C9.03747 7.03368 9.63432 6.26417 10.9702 6.26417C12.6254 6.26414 13.8661 7.3957 13.8661 9.82749ZM3.55633 2.63379C2.69572 2.63379 2.13281 3.22454 2.13281 4.00139C2.13281 4.76131 2.67944 5.36998 3.52294 5.36998H3.53975C4.41703 5.36998 4.96261 4.76142 4.96261 4.00139C4.94608 3.22454 4.41703 2.63379 3.55633 2.63379ZM2.28222 14.3671H4.79695V6.45016H2.28222V14.3671Z"
                            fill="currentColor"
                            fillOpacity="0.4"
                          />
                        </svg>
                        <span>
                          <b>Follow us</b>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="form_state text--center success type-2 color--white bg--dark">
                    <div className="icon">
                      <img
                        className=""
                        src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/10/circle-check-svgrepo-com-1.svg"
                        alt="Icon - circle-check-svgrepo-com 1"
                        loading="lazy"
                        decoding="async"
                        style={{}}
                      />{" "}
                    </div>
                    <div className="title title--m mt-24">
                      <span>Thanks</span> for taking time to reachout!{" "}
                    </div>
                    <div className="txt txt--l mt-12 color--white-light">
                      We’d love to hear more about your project! Feel free to
                      schedule a call using the link provided. This will help us
                      better understand your vision and ensure we’re aligned on
                      all the details.{" "}
                    </div>
                    <div className="btn_wrap mt-24 w-full-mob">
                      <a
                        href="https://calendly.com/hello-phenomenon-studio/30min"
                        target="_blank"
                        rel="nofollow"
                        className="btn btn--orange hover--white arr btn--lg-desk"
                      >
                        <span>
                          <b>Book a Call</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              <div className="contacts ov-hidden">
                <div className="contact_wrap color--white flex fd--column isview slidetop visible">
                  <div className="title title--s nobr-mob">
                    Have a project to <br />
                    discuss?
                  </div>
                  <div className="contact flex v--stretch h--between mt-auto ">
                    <div className="bio flex fd--column v--start">
                      <div className=" flex v--start h--start" style={{marginTop:"-5em"}}>
                        <a
                          href="mailto:dampecon0504@gmail.comio.com"
                          className="btn btn--simple"
                        >
                          <span>info@dampecon.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_wrap color--white flex fd--column isview slidetop visible">
                  <div className="title title--s nobr-mob">
                    Have a partnership in <br />
                    mind?
                  </div>
                  <div className="contact flex v--stretch h--between mt-auto mt-32-mob">
                    {/* <img
                      className="radius-6 photo"
                      src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/founderimg.jpeg"
                      alt="Image - polina"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: "0.75555555555556" }}
                    />{" "} */}
                    <div className="bio flex fd--column v--start">
                      <div className=" flex v--start h--start gap-4 mt-10 pt-8" style={{marginTop:"-5em"}}>
                        <div className="copy_wrap">
                          <img
                            src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/copy.svg"
                            loading="lazy"
                            decoding="async"
                            data-text="mailto:dampecon0504@yahoo.comudio.com"
                            alt=""
                            className="copyme"
                          />
                        </div>
                        <a
                          href="mailto:mailto:dampecon0504@yahoo.comudio.com"
                          className="btn btn--simple" 
                        >
                          <span>info@dampecon.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Chat
