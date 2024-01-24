import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg p-8 h-screen">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg  border border-orange-400">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Kalash Patil"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none focus:border-orange-700 focus:ring focus:ring-orange-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
