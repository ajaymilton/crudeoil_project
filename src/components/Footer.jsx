import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-950 text-slate-200 border-t border-slate-800 overflow-hidden">
      {/* soft blue glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-40 w-40 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute right-[-3rem] bottom-0 h-52 w-52 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
        {/* top: brand + contact summary */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* brand & tagline */}
          <div className="max-w-md">
            <motion.p
              className="text-sm font-semibold tracking-[0.18em] uppercase text-sky-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              HRL Groups
            </motion.p>
            <motion.h3
              className="mt-2 text-xl sm:text-2xl font-semibold text-white"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              Offshore &amp; Onshore Manpower Excellence
            </motion.h3>
            <motion.p
              className="mt-2 text-xs sm:text-sm text-slate-400"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              Partnering with leading drilling and energy companies to deliver
              safe, reliable and performance‑driven personnel solutions.
            </motion.p>
          </div>

          {/* contact columns */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {/* address */}
            <div>
              <h4 className="text-slate-200 font-semibold mb-2">
                Registered Office
              </h4>
              <p className="text-slate-400 leading-relaxed">
                No.17/139, Elanthavilai Junction,
                <br />
                Annainager, Pallam &amp; Post,
                <br />
                Kanyakumari District, Tamilnadu,
                <br />
                India – 629601.
              </p>
            </div>

            {/* phone / email */}
            <div className="space-y-3">
              <div>
                <h4 className="text-slate-200 font-semibold mb-1">Contact</h4>
                <p className="text-slate-400">
                  Phone:{" "}
                  <a
                    href="tel:+914652287477"
                    className="text-sky-400 hover:underline"
                  >
                    +91 4652 287477
                  </a>
                </p>
                <p className="text-slate-400">
                  Mobile:{" "}
                  <span className="text-sky-300">
                    +91 8344999960/ 61/ 62/ 63/ 64/ 65
                  </span>
                </p>
                <p className="text-slate-400">
                  Fax:{" "}
                  <span className="text-sky-300">+91 4652 290476</span>
                </p>
              </div>

              <div>
                <h4 className="text-slate-200 font-semibold mb-1">Email</h4>
                <a
                  href="mailto:hr@drilling.com"
                  className="text-sky-400 hover:underline break-all"
                >
                  hr@drilling.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom line */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] sm:text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HRL Groups. All rights reserved.</p>
          <p className="sm:text-right">
            Powered by dedicated offshore &amp; onshore professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
