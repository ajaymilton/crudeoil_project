import React from "react";
import { motion } from "framer-motion";

const contactVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-sky-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/70 to-transparent" />
        <div className="absolute -left-32 top-0 h-48 w-48 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute right-[-5rem] bottom-0 h-60 w-60 rounded-full bg-blue-200/70 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* heading */}
        <motion.div
          className="max-w-3xl mb-10 md:mb-12"
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xl md:text-3xl font-bold tracking-[0.35em] uppercase text-sky-800 mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            Let&apos;s Discuss Your Offshore &amp; Onshore Needs
          </h2>
          <p className="text-lg md:text-xl font-semibold text-slate-700">
            Reach out to HRL for manpower solutions, project support, or any
            business enquiry. Our team will get back to you as soon as possible.
          </p>
        </motion.div>

        {/* content: info + form */}
        <motion.div
          className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-stretch"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* left: address & contacts */}
          <div className="rounded-3xl bg-white/90 border border-sky-100 shadow-[0_18px_40px_rgba(15,23,42,0.12)] p-6 sm:p-7 lg:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                Office Address
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                No.17/139, Elanthavilai Junction,
                <br />
                Annainager, Pallam &amp; Post,
                <br />
                Kanyakumari District, Tamilnadu, India – 629601.
              </p>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 mb-1">
                    Mobile
                  </h4>
                  <p>+91 8344999960 / 61 / 62 / 63 / 64 / 65</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 mb-1">
                    Phone
                  </h4>
                  <p>+91 4652 287477</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 mb-1">
                    Fax
                  </h4>
                  <p>+91 4652 290476</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:hr@drilling.com"
                    className="text-sky-700 font-semibold hover:underline"
                  >
                    hr@drilling.com
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-slate-500">
              Available on business days for offshore &amp; onshore project
              discussions, staffing requirements, and partnership opportunities.
            </p>
          </div>

          {/* right: contact form */}
          <motion.form
            className="rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-sky-800 text-white p-6 sm:p-7 lg:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.5)] space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Send us a message
            </h3>
            <p className="text-sm sm:text-base text-sky-100/90 mb-2">
              Share your requirement and our team will get in touch with you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.16em] text-sky-100 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-sky-400/60 bg-sky-900/30 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent placeholder:text-sky-200/60"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.16em] text-sky-100 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-sky-400/60 bg-sky-900/30 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent placeholder:text-sky-200/60"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-[0.16em] text-sky-100 mb-1.5">
                Phone
              </label>
              <input
                type="tel"
                className="w-full rounded-xl border border-sky-400/60 bg-sky-900/30 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent placeholder:text-sky-200/60"
                placeholder="+91 ..."
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-[0.16em] text-sky-100 mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-sky-400/60 bg-sky-900/30 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent placeholder:text-sky-200/60 resize-none"
                placeholder="Tell us briefly about your requirement..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-xl bg-white text-sky-800 px-5 py-2.5 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-shadow"
            >
              Submit Enquiry
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
