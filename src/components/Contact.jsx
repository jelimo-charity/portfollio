// import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="mb-10 pt-20">
      <div className='flex flex-items-center justify-center'>
      <h1 className=" sm:text-4xl text-3xl font-medium title-font mb-4 text-orange-600 flex-items center justify-center ml-200">
            Contact me
          </h1>
      </div>
  
      <div className="px-5 py-10 flex flex-col md:flex-row items-center justify-center">
     
        <div className="rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col items-start justify-start relative bg-white shadow-md border-t-4 border-gradient-to-r from-indigo-500 to-purple-500 md:w-1/2">
       
          <div className="w-full mb-4">
            <h2 className="text-gray-900 text-2xl font-semibold mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, feel free to reach out to us. We would love to hear from you.
            </p>
          </div>
          <div className="w-full mb-4">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mb-2">
              ADDRESS
            </h2>
            <p className="mt-1 mb-4">
              3001 Kutus <br />
              Kirinyaga, Kenya
            </p>
          </div>
          <div className="w-full">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mb-2">
              EMAIL
            </h2>
            <a href="mailto:charityjelimo893@gmail.com" className="text-indigo-500 leading-relaxed">
              charityjelimo893@gmail.com
            </a>
          </div>
          <div className="w-full mt-4">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mb-2">
              PHONE
            </h2>
            <p className="leading-relaxed">254-743-508-413</p>
          </div>
        </div>
        <form
          name="contact"
          className="flex flex-col w-full md:w-1/2 mt-10 md:mt-0 p-10 bg-gray-900 shadow-md rounded-lg"
        >
         
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
