import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to a server or API
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-[#222831] rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email in responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-medium text-[#EEEEEE] mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-[#393E4680] text-[#EEEEEE] placeholder-[#AAAAAA] border border-[#393E4680] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition-colors"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-[#EEEEEE] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-[#393E4680] text-[#EEEEEE] placeholder-[#AAAAAA] border border-[#393E4680] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition-colors"
            />
          </div>
        </div>
        
        {/* Message field */}
        <div className="w-full">
          <label htmlFor="message" className="block text-sm font-medium text-[#EEEEEE] mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-[#393E4680] text-[#EEEEEE] placeholder-[#AAAAAA] border border-[#393E4680] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition-colors resize-vertical"
            rows="5"
          ></textarea>
        </div>
        
        {/* Submit button */}
        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            className="w-full md:w-auto min-w-[200px] py-3 px-8 bg-[#00ADB5] text-white font-semibold rounded-full hover:bg-[#5B6EAE] focus:outline-none focus:ring-2 focus:ring-[#7289DA] transition-colors transform hover:scale-105 duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;