import React from 'react';
import { motion } from 'framer-motion';
import MissionBg from '../assets/mission_bg.jpg';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: '0 22px 55px rgba(15, 23, 42, 0.25)',
    transition: { type: 'spring', stiffness: 230, damping: 18 },
  },
};

const MissionVision = () => {
  return (
    <section
      id="mission-vision"
      className="relative w-full min-h-[70vh] text-slate-900 py-16 md:py-24 px-4 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Animated background image */}
      <motion.img
        src={MissionBg}
        alt="Mission & Vision abstract background"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05, x: 10, opacity: 0.9 }}
        animate={{
          scale: [1.05, 1.08, 1.05],
          x: [10, 0, 10],
        }}
        transition={{
          duration: 22,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />

      {/* subtle white overlay to keep text readable */}
      <div className="absolute inset-0 bg-white/30 md:bg-white/30 backdrop-blur-[2px]" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* heading */}
        <motion.div
          className="max-w-3xl mb-8 md:mb-10"
          variants={cardVariants}
        >
          <p className="text-xl md:text-3xl font-bold tracking-[0.35em] uppercase text-sky-700 mb-3">
            Mission & Vision
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            Building Reliable Offshore & Onshore Partnerships
          </h2>
          <p className="text-lg md:text-xl font-semibold text-slate-700">
            HRL focuses on providing high‑quality offshore and onshore personnel
            solutions, combining deep industry understanding with a commitment
            to safety, performance, and long‑term client relationships.
          </p>
        </motion.div>

        {/* main layout: left content panel, right accent */}
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-stretch">
          {/* left: mission & vision cards */}
          <motion.div
            className="space-y-5 md:space-y-6"
            variants={containerVariants}
          >
            {/* Vision */}
            <motion.div
              className="bg-white/90 border border-sky-100 rounded-2xl p-5 md:p-6 lg:p-7 backdrop-blur-md"
              variants={cardVariants}
              whileHover="hover"
            >
              <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-sky-600 mb-1.5">
                Vision
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                Preferred Partner for Offshore & Onshore Personnel
              </h3>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Our primary vision is to be the trusted personnel management
                partner for offshore drilling companies, ship owners, and energy
                operators. HRL strives to fully understand each client&apos;s
                business and consistently meet their unique requirements for
                manning and supplying high‑quality officers and crew at all
                levels.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-white/90 border border-sky-100 rounded-2xl p-5 md:p-6 lg:p-7 backdrop-blur-md"
              variants={cardVariants}
              whileHover="hover"
            >
              <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-sky-600 mb-1.5">
                Mission
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                End‑to‑End, Cost‑Effective Manpower Solutions
              </h3>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-3">
                Our mission is to provide end‑to‑end, cost‑effective manpower
                solutions that add measurable value to our clients&apos; business
                through reduced cost, enhanced quality, and superior delivery.
                We work with a partner‑in‑business approach, offering innovative
                and customized solutions focused on continuous improvement.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Exceptional customer service and long‑term satisfaction are at
                the core of every engagement.
              </p>
            </motion.div>
          </motion.div>

          {/* right: team & values accent column */}
          <motion.div
            className="space-y-4 md:space-y-5 lg:space-y-6"
            variants={containerVariants}
          >
            {/* small label card */}
            <motion.div
              className="bg-sky-600/90 text-white rounded-full hover:bg-white hover:text-sky-600 transition-colors duration-500 px-4 py-3 shadow-lg w-fit"
              variants={cardVariants}
            >
              <p className="text-base lg:text-lg font-semibold tracking-[0.22em] uppercase">
                Offshore • Onshore • Marine
              </p>
            </motion.div>

            {/* Team & Expertise */}
            <motion.div
              className="bg-white/92 border border-sky-100 rounded-2xl p-5 md:p-6 backdrop-blur-md"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                Expert Team & Operational Excellence
              </h3>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-2">
                HRL Offshore Consultancy Services is driven by a dedicated,
                result‑oriented team of offshore and onshore professionals,
                Master Mariners, Chief Engineers, and experienced ground staff.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                The team is responsible for planning, organizing, staffing,
                training, budgeting, coordinating, repairs, and ensuring safety
                across all assignments.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              className="bg-white/92 border border-sky-100 rounded-2xl p-5 md:p-6 backdrop-blur-md"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                Values & Continuous Improvement
              </h3>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                We embrace new concepts in the offshore and shipping sector,
                motivated by a commitment to quality in every respect and at all
                times. HRL has positioned itself at the forefront of corporate
                excellence by continuously refining processes to meet evolving
                operational and safety standards.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionVision;
