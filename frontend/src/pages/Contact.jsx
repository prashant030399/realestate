import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: connect to backend / email service
    if (form.name && form.email && form.message) {
      console.log('Contact form data:', form);
      alert('Thank you! We’ll get back to you shortly.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('Please fill in the required fields.');
    }
  };

  return (
    <div className="pt-20 pb-16 px-4 max-w-6xl mx-auto">
      {/* Page heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Get in Touch
      </h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact details + map */}
        <div className="space-y-6">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Cocoon Estate HQ
            </h2>
            <p className="text-gray-600">
              12 Aggelou Sikelianou St, Neo Psychiko<br />
              Athens 115 25, Greece
            </p>

            <div className="mt-4 text-gray-600 space-y-2 text-sm">
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+302106828844" className="hover:underline">
                  +30 210 682 8844
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:info@cocoonestate.com"
                  className="hover:underline"
                >
                  info@cocoonestate.com
                </a>
              </p>
              <p>
                <strong>Hours:</strong> Mon–Fri&nbsp;09:00‑18:00
              </p>
            </div>
          </div>

          {/* Google Maps embed – replace src with your real embed URL */}
       <iframe
  title="Cocoon Estate Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.129368133215!2d23.77925471531916!3d38.00765177971661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd273e62f4fb%3A0xcef62e1b58c9fdc7!2sCocoon%20Estate!5e0!3m2!1sen!2sgr!4v1712345678901!5m2!1sen!2sgr"
  className="w-full h-64 rounded-lg border"
  loading="lazy"
/>
        </div>

        {/* Contact form */}
        <div className="bg-white border rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded resize-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
