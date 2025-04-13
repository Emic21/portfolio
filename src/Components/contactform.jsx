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
    <div className="max-w-md mx-auto p-6 bg-[#222831] rounded-md shadow-md">
    
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className=" flex space-x-5 gap-40 flex-col md:flex-row">
          <div className="w-[50%]">
          <label htmlFor="name" className="block text-sm font-medium text-[#EEEEEE]">
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
            className="mt-1 block w-auto px-4 py-2 bg-[#393E4680] text-[#EEEEEE] placeholder-[#AAAAAA] border border-[#393E4680] rounded-md"
          />
        </div>
        <div className="w-[50%]">
          <label htmlFor="email" className="block text-sm font-medium text-[#EEEEEE]">
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
            className="mt-1 block w-auto px-4 py-2 bg-[#393E4680] text-[#EEEEEE] placeholder-[#AAAAAA] border border-[#393E4680] rounded-md"
          />
        </div>
        </div>
        <div className="w-full">
          <label htmlFor="message" className="block text-sm font-medium text-[#EEEEEE]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="mt-1 block w-[150%] px-4 py-2 bg-[#393E4680] text-[#EEEEEE] placeholder-[#AAAAAA] border border-[#393E4680] rounded-md "
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-[40%] py-2 px-4 bg-[#00ADB5] text-white font-semibold rounded-full hover:bg-[#5B6EAE] focus:outline-none focus:ring-2 focus:ring-[#7289DA]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
