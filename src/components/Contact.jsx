import React from "react";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";

const Contact = () => {
  return (
    <section
      id="contact"
      className="z-1 bg-gray-800 relative py-10 px-5 md:px-0"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-blue-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/thomassoldwedel/"
                className="text-foreground/60 hover:text-foreground/80"
                target="_blank"
              >
                <img src={instagram} alt="" className="h-8 w-8" />
              </a>

              <a
                href="https://www.linkedin.com/in/thomas-soldwedel/"
                className="text-foreground/60 hover:text-foreground/80"
                target="_blank"
              >
                <img src={linkedin} alt="" className="h-8 w-8" />
              </a>
            </div>

            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg-w-[500px]"
            />
          </div>
          <form
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-blue-300 shadow-lg shadow-blue-500 p-10"
            action="https://formsubmit.co/thomas.soldwedel@gmail.com"
            method="POST"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact Me
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="textarea"
                id="message"
                placeholder="Enter your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
