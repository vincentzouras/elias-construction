import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = import.meta.env.VITE_BACKEND_API_URL;
    const apiKey = import.meta.env.VITE_BACKEND_API_KEY;

    try {
      const response = await axios.post(`${apiEndpoint}/email/`, formData, { headers: { "x-api-key": apiKey } });
      if (response.status === 200) {
        alert("We got your message! Elias will get in touch shortly.");
        setFormData({
          name: "",
          email: "",
          number: "",
          address: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please email Elias directly, with the email listed below.");
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-gray-200 rounded-lg space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone number
        </label>
        <input
          type="tel"
          id="number"
          name="number"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          className="mt-1 block w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="homeAddress" className="block text-sm font-medium text-gray-700">
          Home address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.homeAddress}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Tell us about your project!
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md"
        >
          What
        </textarea>
      </div>
      <button
        type="submit"
        className="hover:bg-eliasBlue-500 rounded-md px-4 py-2 bg-eliasOrange-500 text-gray-900 hover:text-white transition duration-300 w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
