import React from "react";

const Contact = () => {
  return (
    <section className="flex justify-center w-full">
      <div className="flex items-center  justify-evenly text-center gap-4 m-3 flex-col md:flex-row flex-wrap ">
        <div className="max-w-md md:w-[500px] md:h-fit mx-auto bg-black rounded-md overflow-hidden shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
