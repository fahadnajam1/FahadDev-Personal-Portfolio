import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (form.message.length < 10) {
      toast.error('Message must be at least 10 characters.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Message sent successfully!');
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="sm:text-[18px] text-[14px] text-text-secondary uppercase tracking-wider font-heading">
          Get in touch
        </p>
        <h2 className="text-white font-heading font-black md:text-[60px] sm:text-[50px] text-[40px]">
          Contact.
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-col md:flex-row gap-10 overflow-hidden">
        {/* Contact Info container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 rounded-2xl md:w-1/3 flex flex-col"
        >
          <h3 className="text-2xl font-bold text-white mb-6 font-heading border-b border-white/10 pb-4">
            Contact Information
          </h3>
          
          <div className="flex flex-col gap-6 mt-4 flex-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl shrink-0">
                <FaEnvelope />
              </div>
              <div className="break-all">
                <p className="text-text-secondary text-sm">Email</p>
                <p className="text-white font-medium">fahadnajam55@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-text-secondary text-sm">Phone</p>
                <p className="text-white font-medium">+92 332 6551255</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-text-secondary text-sm">Location</p>
                <p className="text-white font-medium">Multan, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-white/10 flex gap-4">
            <a
              href="https://github.com/fahadnajam1"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/fahadnajam45"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Contact Form Container */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass p-8 rounded-2xl md:w-2/3"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <label className="flex flex-col w-full">
                <span className="text-white font-medium mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-background py-4 px-6 text-white rounded-lg outline-none border border-white/10 focus:border-primary transition-colors focus:shadow-glow font-medium"
                />
              </label>
              <label className="flex flex-col w-full">
                <span className="text-white font-medium mb-2">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-background py-4 px-6 text-white rounded-lg outline-none border border-white/10 focus:border-primary transition-colors focus:shadow-glow font-medium"
                />
              </label>
            </div>
            
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is the subject of your message?"
                className="bg-background py-4 px-6 text-white rounded-lg outline-none border border-white/10 focus:border-primary transition-colors focus:shadow-glow font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-background py-4 px-6 text-white rounded-lg outline-none border border-white/10 focus:border-primary transition-colors focus:shadow-glow font-medium resize-y"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`py-4 px-8 rounded-xl outline-none w-fit text-background font-bold shadow-md hover:shadow-glow-hover transition-all \${
                loading ? 'bg-primary/50 cursor-not-allowed' : 'bg-primary'
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
