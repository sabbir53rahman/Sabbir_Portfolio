import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Feel free to reach out for any collaboration or project inquiries.
        </p>
      </motion.div>

      {/* Main Contact Section */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="space-y-8"
        >
          {[
            {
              icon: <FaEnvelope className="text-3xl text-purple-500" />,
              title: "Email Address",
              description: "contact@yourdomain.com",
            },
            {
              icon: <FaPhone className="text-3xl text-blue-500" />,
              title: "Phone Number",
              description: "+1 234 567 890",
            },
            {
              icon: <FaMapMarkerAlt className="text-3xl text-green-500" />,
              title: "Our Location",
              description: "1234 Avenue, City, Country",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group flex items-center gap-6 p-6 rounded-lg bg-gray-900 overflow-hidden shadow-lg hover:scale-105 transform transition duration-500"
            >
              {/* Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent  animate-border group-hover:blur-sm"></div>

              {/* Card Content */}
              <div className="relative z-10 flex items-center gap-4 bg-gray-900 rounded-lg p-6">
                <div className="flex-shrink-0 text-4xl text-blue-400">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg shadow-xl"
        >
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                required
              />
            </div>
            <div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 text-white placeholder-gray-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium text-lg shadow-md hover:scale-105 transition transform"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
