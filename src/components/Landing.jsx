import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Landingbg from '../assets/cover3_img.jpg';

const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="
        relative min-h-screen w-full overflow-hidden
        flex items-center
        justify-center md:justify-start     /* center on mobile, left on md+ */
        px-4 sm:px-6 md:px-10              /* responsive horizontal padding */
      "
    >
      {/* Background */}
      <motion.img
        src={Landingbg}
        alt="decorative abstract background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        initial={{ scale: 1.05, y: 0, opacity: 0.9 }}
        animate={{
          scale: [1.05, 1.08, 1.05],
          y: [0, -15, 0],
          opacity: [1, 1, 1],
        }}
        transition={{
          duration: 12,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        className="
          relative z-10
          w-full max-w-3xl
          py-24 md:py-28 lg:ml-12
          text-center md:text-left         /* center text on mobile */
          space-y-8 md:space-y-10
        "
      >
        <motion.h1
          className="
            text-white
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl  /* smaller on mobile */
            font-extrabold leading-tight
            drop-shadow-lg
          "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          CRUDE&nbsp;OIL&nbsp;PRODUCTION
          <br />
          &amp;&nbsp;MANPOWER&nbsp;SUPPLY
        </motion.h1>

        <motion.p
          className="
            text-slate-200
            text-sm sm:text-base md:text-lg lg:text-xl   /* responsive body size */
            max-w-xl md:max-w-2xl
            mx-auto md:mx-0
            drop-shadow
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
        >
          We deliver reliable crude oil production solutions and highly skilled
          manpower to power your onshore and offshore operations with safety,
          efficiency, and precision.
        </motion.p>

        <motion.div
          className="
            flex flex-col sm:flex-row
            items-center sm:items-start md:items-center
            justify-center md:justify-start
            gap-4 sm:gap-5
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.25 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.button
            className="
              w-80 sm:w-auto               /* full-width button on mobile */
              bg-sky-600 hover:bg-white
              hover:text-sky-600
              uppercase text-white font-bold
              py-3 px-6 sm:px-8
              rounded-full shadow-lg
              transition-colors
              text-sm sm:text-base
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            Explore Services
          </motion.button>

          <motion.button
            className="
              w-80 sm:w-auto               /* full-width button on mobile */
              bg-transparent
              uppercase border border-white
              text-white font-bold
              py-3 px-6 sm:px-8
              rounded-full shadow-lg
              hover:bg-white hover:text-sky-600
              transition-colors
              text-sm sm:text-base
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            Download Profile
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
