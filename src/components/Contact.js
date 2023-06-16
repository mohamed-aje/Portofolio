import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kzsf8hh",
        "template_i8o3ngh",
        form.current,
        "fu-5fnw2UsLBPfB1k"
      )
      .then((result) => {
        console.log(result.text);
        alert("Message Sent Successfully!!");
        form.current.reset();
      })
      .catch((error) => alert(error));
  };

  return (
    <section
      id="contact"
      className="text-gray-900 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="relative overflow-hidden bg-no-repeat bg-cover"></div>
        <div className="container text-gray-800 px-4 md:px-12">
          <div className="block rounded-lg shadow-xl py-10 md:py-12 px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-6 mb-12">
              <div className="mb-12 lg:mb-0 text-center mx-auto">
                <svg
                  className="w-8 h-8 text-gray-600 mb-6 mx-auto"
                  viewBox="0 0 496 512"
                >
                  {/* SVG path */}
                </svg>
                <h6 className="font-medium dark:text-white">Finland</h6>
              </div>
              <div className="mb-12 lg:mb-0 text-center mx-auto dark:text-white">
                <svg
                  className="w-8 h-8 text-gray-600 mb-6 mx-auto"
                  viewBox="0 0 384 512"
                >
                  {/* SVG path */}
                </svg>
                <h6 className="font-medium">Tampere, 33270</h6>
              </div>
            </div>
            <div className="max-w-[700px] mx-auto">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-800"
                    id="name"
                    name="first_name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6 text-white">
                  <input
                    type="email"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-800"
                    id="email"
                    name="user_email"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none dark:bg-gray-800"
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
