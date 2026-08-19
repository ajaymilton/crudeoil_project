import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: '0 25px 70px rgba(15, 23, 42, 0.35)',
    transition: { type: 'spring', stiffness: 220, damping: 18 },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-sky-100 text-slate-900 py-20 md:py-28 px-6 md:px-20 lg:px-32 overflow-hidden"
    >
      {/* soft blue gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 w-96 h-96 bg-sky-300/60 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-blue-300/60 blur-3xl rounded-full" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Section label */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-3xl font-bold tracking-[0.35em] uppercase text-sky-700 mb-3"
        >
          About
        </motion.p>

        {/* Main heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-slate-900"
        >
          HRL Consultancy Services
        </motion.h2>

        {/* Subheading */}
        <motion.h3
          variants={itemVariants}
          className="text-lg md:text-xl font-semibold text-sky-700 mb-6"
        >
          Trusted Manpower Partner for the Global Oil & Marine Industry
        </motion.h3>

        {/* Main description */}
        <motion.p
          variants={itemVariants}
          className="text-slate-700 text-base md:text-lg leading-relaxed mb-4"
        >
          Established in 2006, HRL Consultancy Services is a leading manpower
          recruitment partner, connecting world‑class talent with critical roles
          across crude oil production, marine operations, and offshore projects.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-slate-700 text-base md:text-lg leading-relaxed mb-4"
        >
          Every requirement is treated as unique. Our teams design flexible,
          tailored recruitment solutions that align with each client&apos;s
          technical standards, timelines, and operational realities, while
          maintaining an uncompromising focus on quality.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-slate-700 text-base md:text-lg leading-relaxed mb-8"
        >
          With a strong focus on long‑term relationships, we maintain close
          rapport with our clients, adapt to tight schedules, and deploy
          experienced professionals who deliver in demanding environments
          onshore and offshore.
        </motion.p>

        {/* Highlights grid */}
        <motion.div
          className="grid gap-6 md:gap-8 md:grid-cols-3"
          variants={containerVariants}
        >
          {/* Experience & expertise */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white/90 border border-sky-100 rounded-2xl p-5 md:p-6 backdrop-blur-md"
          >
            <h4 className="text-lg font-semibold mb-2 text-sky-700">
              Experience & Expertise
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Since 2006, our associates and managers have built deep search
              experience across a wide range of technical and leadership roles
              in oil, gas, and marine sectors.
            </p>
          </motion.div>

          {/* Global collaborations */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white/90 border border-sky-100 rounded-2xl p-5 md:p-6 backdrop-blur-md"
          >
            <h4 className="text-lg font-semibold mb-2 text-sky-700">
              Global Collaborations
            </h4>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>Collaborated with CPS UAE since 2009.</li>
              <li>Partnered with GM International, Kuwait from 2013.</li>
              <li>Associated with RMS Qatar since 2023.</li>
            </ul>
          </motion.div>

          {/* Sectors & vessels */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white/90 border border-sky-100 rounded-2xl p-5 md:p-6 backdrop-blur-md"
          >
            <h4 className="text-lg font-semibold mb-2 text-sky-700">
              Sectors We Serve
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              HRL supports all types of rigs, oil platforms, and refineries, as
              well as a wide spectrum of ocean‑going vessels.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bulk carriers, oil &amp; chemical tankers, containers, car
              carriers, general cargo, mini bulk carriers, offshore supply
              vessels, ocean‑going tugs, and barges.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
