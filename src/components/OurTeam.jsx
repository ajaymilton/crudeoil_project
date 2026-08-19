import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Mr. Larson Pinto",
    role: "Managing Director",
    org: "HRL Groups",
    photo: "/src/assets/profile.jpg",
    highlight:
      "Visionary leader driving HRL Groups’ strategy in offshore & onshore services.",
    meta: "Executive Leadership",
  },
  {
    name: "Mrs. Leema Rose",
    role: "Founder",
    org: "HRL Groups",
    photo: "/src/assets/profile.jpg",
    highlight:
      "Co–founder with strong background in operations and client relationships.",
    meta: "Founding Team",
  },
  {
    name: "Mrs. Manoshia Larson",
    role: "Founder",
    org: "HRL Groups",
    photo: "/src/assets/profile.jpg",
    highlight:
      "Plays a key role in shaping the organization’s culture and growth.",
    meta: "Founding Team",
  },
  {
    name: "Mrs. Nimija Lawrence",
    role: "Founder",
    org: "HRL Groups",
    photo: "/src/assets/profile.jpg",
    highlight:
      "Brings strategic oversight to business development initiatives.",
    meta: "Founding Team",
  },
  {
    name: "Mrs. L. Anu Thomas",
    role: "Director",
    org: "HRL Groups",
    photo: "/src/assets/profile.jpg",
    highlight:
      "Engineering graduate with 15+ years of offshore & onshore experience, overseeing all office operations.",
    meta: "Onshore & Office Operations",
  },
  {
    name: "Mr. Mujahed Jassam M",
    role: "Director – Onshore & Offshore Operations",
    org: "HRL Groups",
    photo: "/src/assets/profile.jpg",
    highlight:
      "Tool Pusher with 17 years’ experience in both onshore and offshore operations.",
    meta: "Field Operations",
  },
  {
    name: "Mr. Majed Al Assaf",
    role: "General Manager",
    org: "HRL Groups",
    photo: "/src/assets/profile.jpg",
    highlight:
      "BBA graduate with UK safety diploma; 17 years of experience including work with Aramco and multiple safety certifications (NEBOSH, ISO lead auditor, OSHA).",
    meta: "Management & HSE",
  },
  {
    name: "Mr. Jasline Prabhu",
    role: "Director – Technical",
    org: "HRL Groups",
    photo: "/src/assets/profile.jpg",
    highlight:
      "Qualified offshore operator with 8+ years as production operator and experience managing offshore platforms.",
    meta: "Technical & DP",
  },
  {
    name: "Ms. D. JoshIba",
    role: "Manager – HR",
    org: "HRL Groups",
    photo: "/src/assets/profile.jpg",
    highlight:
      "HR graduate with multi-domain experience including offshore HR and fleet personnel management.",
    meta: "People & Fleet Personnel",
  },
  {
    name: "Mr. Amala John Nickelson",
    role: "Chief Accountant",
    org: "HRL Groups",
    photo: "/src/assets/profile.jpg",
    highlight:
      "MBA graduate specialized in ship-related accounting, with previous experience at Radiant Shipping Limited, Mumbai.",
    meta: "Finance & Accounts",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const OurTeam = () => {
  return (
    <section
      id="team"
      className="relative w-full bg-sky-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* stronger blue background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/70 to-transparent" />
        <div className="absolute -left-32 top-0 h-52 w-52 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute right-[-5rem] bottom-0 h-60 w-60 rounded-full bg-blue-300/60 blur-3xl" />
        <div className="absolute inset-x-10 bottom-10 h-40 rounded-3xl bg-gradient-to-r from-sky-200/40 via-sky-100/60 to-blue-100/40 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-3xl">
            <p className="text-xl md:text-3xl font-bold tracking-[0.35em] uppercase text-sky-800 mb-3">
              Our Core Leadership
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
              Meet the HRL Team
            </h2>
            <p className="text-lg md:text-xl font-semibold text-slate-700">
              A multidisciplinary team with deep onshore, offshore and safety
              expertise leading HRL Groups across operations, technical, HSE, HR
              and finance.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-slate-600">
            <div className="h-12 w-px bg-gradient-to-b from-sky-600 via-blue-500 to-transparent" />
            <p className="text-xs uppercase tracking-[0.25em] text-slate-600">
              Offshore &amp; Onshore Excellence
            </p>
          </div>
        </motion.div>

        {/* blue-tinted panel behind cards */}
        <div className="rounded-3xl bg-gradient-to-br from-sky-400/40 via-sky-100 to-blue-400/40 p-4 sm:p-5 lg:p-6">
          <motion.div
            className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamMembers.map((member) => (
              <motion.article
                key={member.name}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 220, damping: 18 },
                }}
                className="group relative flex flex-col rounded-2xl border border-sky-200 bg-sky-50/90 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-sky-500/80 bg-sky-100 overflow-hidden flex-shrink-0">
                    <motion.img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-emerald-400 ring-2 ring-sky-50" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                      {member.role}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      {member.org}
                    </p>
                    <p className="mt-3 text-sm text-slate-800 leading-relaxed">
                      {member.highlight}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] sm:text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {member.meta}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500 group-hover:text-sky-700 transition-colors">
                    Leadership • HRL
                  </span>
                </div>

                <span className="pointer-events-none absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-sky-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

