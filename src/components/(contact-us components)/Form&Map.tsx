import React, { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can add your logic to handle form submission, such as sending the data to a server.
    // For simplicity, let's just log the form data for now.
    console.log({ name, email, phoneNumber, company, subject, message });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen mt-20">
        
        <div className="max-w-md w-full p-4 bg-white rounded-md shadow-md md:mr-4 mb-8 md:mb-0">
          <h1 className="text-center text-secondary text-4xl font-semibold mb-5">
            Let's get started now!
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="block mb-1 text-sm">
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-md text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block mb-1 text-sm">
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="block mb-1 text-sm">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full px-3 py-2 border rounded-md text-sm"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="company" className="block mb-1 text-sm">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-3 py-2 border rounded-md text-sm"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="block mb-1 text-sm">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border rounded-md text-sm"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="block mb-1 text-sm">
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border rounded-md text-sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Schedule a Call
            </button>
          </form>
          <div className="mt-3">
            <p>
              Email: <a href="#">amjofficial@gmail.com</a>
            </p>
            <p>Follow us on:</p>
            <div className="flex mt-2">
              <a href="#" className="mr-4">
                Facebook
              </a>
              <a href="#" className="mr-4">
                Instagram
              </a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="h-[75vh] md:w-1/2 mt-1 md:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.9650041123!2d77.60226885094501!3d12.908283663110796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc4200bfe1%3A0x987ebf87e35428b5!2sBTM%202nd%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711895010447!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Form;
