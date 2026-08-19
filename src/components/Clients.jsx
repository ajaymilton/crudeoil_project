import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";

const clients = [
  {
    name: "Kuwait Drilling Company",
    short: "Kuwait Drilling Company",
    logo: "/src/assets/kuwait-drilling.png",
  },
  {
    name: "KOC",
    short: "KOC",
    logo: "/src/assets/koc.png",
  },
  {
    name: "NDC, Abu Dhabi",
    short: "NDC, Abu Dhabi",
    logo: "/src/assets/ndc-abu-dhabi.png",
  },
  {
    name: "Bhavani Oil Field Services",
    short: "Bhavani Oil Field Services",
    logo: "/src/assets/bhavani-oil-field.png",
  },
  {
    name: "Bibby International Ltd",
    short: "Bibby International Ltd",
    logo: "/src/assets/bibby-international.png",
  },
  {
    name: "OCS",
    short: "OCS",
    logo: "/src/assets/ocs.png",
  },
  {
    name: "Rowan Drilling Company",
    short: "Rowan Drilling Company",
    logo: "/src/assets/rowan-drilling.png",
  },
  {
    name: "Sun Drilling",
    short: "Sun Drilling",
    logo: "/src/assets/sun-drilling.png",
  },
  {
    name: "KNPC",
    short: "KNPC",
    logo: "/src/assets/knpc.png",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Clients = () => {
  const logosRow = [...clients, ...clients]; // duplicate for seamless loop
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [trackWidth, setTrackWidth] = useState(0);

  // measure total width of the track after mount
  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2); // width of one full set
    }
  }, []);

  // infinite scrolling using pixel values so it never visibly "restarts"
  useEffect(() => {
    if (!trackWidth) return;

    const animateLoop = async () => {
      await controls.start({
        x: -trackWidth,
        transition: {
          duration: 30,
          ease: "linear",
        },
      });
      x.set(0);
      animateLoop();
    };

    x.set(0);
    animateLoop();

    return () => {
      controls.stop();
    };
  }, [trackWidth, controls, x]);

  return (
    <section
      id="clients"
      className="relative w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >

      <div className="relative max-w-6xl mx-auto">
        {/* animated heading */}
        <motion.div
          className="max-w-3xl mb-10 md:mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xl md:text-3xl font-bold tracking-[0.35em] uppercase text-sky-700 mb-3">
            Our Valuable Clients
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            Trusted Partners Around the Globe
          </h2>
          <p className="text-lg md:text-xl font-semibold text-slate-600">
            HRL collaborates with leading drilling and energy companies,
            delivering reliable offshore and onshore manpower solutions.
          </p>
        </motion.div>

        {/* marquee container */}
        <div className="relative mt-4">
          {/* fade mask at edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            ref={trackRef}
            className="flex gap-10 items-center"
            style={{ x }}
            animate={controls}
          >
            {logosRow.map((client, idx) => (
              <motion.div
                key={`${client.name}-${idx}`}
                className="flex flex-col items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px]"
                whileHover={{
                  scale: 1.06,
                  transition: { type: "spring", stiffness: 260, damping: 18 },
                }}
              >
                <div className="flex h-14 sm:h-16 md:h-20 w-full items-center justify-center">
                  <motion.img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-10 sm:max-h-12 md:max-h-14 w-auto object-contain"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <p className="mt-2 text-center text-base sm:text-lg md:text-base font-semibold text-slate-700">
                  {client.short}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
