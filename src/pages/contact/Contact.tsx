import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-6 lg:px-32 mt-10 mb-20 font-poppins">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-gray-400 mb-12">
        We would love to hear from you. Please fill out the form below or reach
        out to us directly.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="flex flex-col gap-8 bg-gray-950 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
          <div className="flex items-center gap-4">
            <FaPhone className="text-gray-300" size={24} />
            <p className="text-lg text-gray-200">+1 (123) 456-7890</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-gray-300" size={24} />
            <p className="text-lg text-gray-200">info@example.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-gray-300" size={24} />
            <p className="text-lg text-gray-200">
              123 Main Street, New York, NY 10001
            </p>
          </div>
        </div>
        <form
          action="/"
          className="flex flex-col gap-6 bg-gray-950 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-white">Send a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 pb-20 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-800 hover:border-gray-800 hover:text-white border-2 border-white duration-150"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
