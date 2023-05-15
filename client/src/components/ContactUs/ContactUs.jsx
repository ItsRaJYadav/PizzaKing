import React, { useRef, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Container } from 'react-bootstrap';
import 'tailwindcss/tailwind.css';
import emailjs from '@emailjs/browser';
import Footer from '../Footer/Footer'

function ContactUs() {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);


  //validation of the form
  const validateForm = () => {
    const formInputs = form.current.elements;
    let isValid = true;

    for (let i = 0; i < formInputs.length; i++) {
      if (formInputs[i].hasAttribute('required') && !formInputs[i].value) {
        isValid = false;
        break;
      }

      if (formInputs[i].hasAttribute('pattern') && formInputs[i].value) {
        const regex = new RegExp(formInputs[i].getAttribute('pattern'));
        if (!regex.test(formInputs[i].value)) {
          isValid = false;
          break;
        }
      }
    }


    setIsFormValid(isValid);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r3j488i', 'template_2ymw8xb', form.current, 'gBqiiKEu-6fK6mv53')
      .then((result) => {
        console.log(result.text);
        setIsEmailSent(true);
        form.current.reset(); // clears the form data
      }, (error) => {
        console.log(error.text);
      });
  }


  useEffect(() => {
    let timeout;
    if (isEmailSent) {
      timeout = setTimeout(() => {
        setIsEmailSent(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isEmailSent]);


  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Container>
        {isEmailSent && (
          <div style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', marginTop: '60px' }}>
            Email sent successfully!
          </div>
        )}

        <>
          <div className=' px-10 mb-10'>
          <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
            <div className="container mx-auto">
              <div className="-mx-4 flex flex-wrap lg:justify-between">
                <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                  <div className="mb-12 max-w-[570px] lg:mb-0">
                    <span className="text-primary mb-4 block text-base font-semibold text-center">
                      Contact Us
                    </span>
                    <h2 className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]   ">
                      GET IN TOUCH WITH US
                    </h2>
                    <p className="text-body-color mb-9 text-base leading-relaxed">
                      Welcome to <strong>Pizza King</strong>, where we are passionate about creating the best pizzas using only the freshest and highest-quality ingredients. Our menu features a wide range of mouth-watering pizzas, sides, salads, and desserts to satisfy all tastes. We pride ourselves on exceptional customer service and a welcoming atmosphere. Come and taste the difference for yourself at Pizza King!




                    </p>
                    <div className="mb-8 flex w-full max-w-[370px]">
                      <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">

                      </div>
                      <div className="w-full">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          Our Location
                        </h4>
                        <p className="text-body-color text-base">

                          Shop No 30, Near Meo High School, Nuh, Haryana, 122107-India

                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex w-full max-w-[370px]">
                      <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">

                      </div>
                      <div className="w-full">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          Phone Number
                        </h4>
                        <p className="text-body-color text-base">
                          (+91) 9472040607
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex w-full max-w-[370px]">
                      <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">

                      </div>
                      <div className="w-full">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          Email Address
                        </h4>
                        <p className="text-body-color text-base">info@pizzaking.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">

                  <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                    <div className="flex justify-center">
                      <h4 className="animate-bounce">Get In Touch With Us</h4>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="mb-6">
                        <input
                          name="user_name"
                          type="text"
                          placeholder="Your Name"
                          required pattern="^[A-Za-z ]+$"
                          className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          name="user_email"
                          type="email"
                          placeholder="Your Email"
                          required
                          className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          name="user_phone"
                          type="text"
                          placeholder="Your Phone"
                          className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                        />
                      </div>
                      <div className="mb-6">
                        <textarea
                          name="message"
                          rows={6}
                          placeholder="Your Message"
                          required
                          className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"

                        />
                      </div>
                      <div>
                        <button
                          type="submit" value="Send"
                          className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ml-3"
                          onClick={validateForm}
                        >
                          Send Message
                        </button>
                      </div>
                    </form>




                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
        </>


      </Container>
      <div>
        <Footer />
      </div>

    </>
  );
}

export default ContactUs;
