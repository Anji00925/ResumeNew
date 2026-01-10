import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "4rem 1.2rem",
        display: "flex",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "#fff",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 18,
          padding: "3rem 3.5rem",
          boxShadow: "0 0 25px rgba(0,180,255,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Header */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.4rem",
            background: "linear-gradient(90deg, #00b4ff, #00ffd5)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* Intro */}
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
          Hi, I’m <strong>Anjibabu Mothe</strong>, a <strong>final-year B.Tech Computer Science
          student</strong> with a strong foundation in <strong>Java</strong>,
          <strong> web development</strong>, and <strong>problem solving</strong>.
          I enjoy building practical software solutions and continuously improving
          my technical skills through hands-on projects.
        </p>

        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
          I have worked on full-stack applications, Java-based systems, and
          machine learning projects, including an <strong>E-Commerce MERN application</strong>,
          <strong> Duplicate File Detection System</strong>, and
          <strong> Credit Card Fraud Detection</strong>.
          My focus is on writing clean, maintainable code and understanding
          systems from the ground up.
        </p>

        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
          I am currently seeking an <strong>entry-level Software Engineer role</strong>
          where I can apply my knowledge, learn from experienced developers,
          and grow into a strong industry-ready professional.
        </p>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg, #00b4ff, #00ffd5)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {/* B.Tech */}
            <EducationCard
              icon={<FaUniversity size={38} />}
              title="B.Tech in Computer Science & Engineering"
              institute="Chaitanya Deemed To Be University"
              details="2022 – 2026 | GPA: 9.5"
            />

            {/* 12th */}
            <EducationCard
              icon={<FaGraduationCap size={34} />}
              title="Higher Secondary Education (12th)"
              institute="Alphores Junior College, Telangana Board"
              details="2022 | Percentage: 96.8%"
            />

            {/* 10th */}
            <EducationCard
              icon={<FaSchool size={32} />}
              title="Secondary Education (10th)"
              institute="TetraHedron Model School, Telangana Board"
              details="2020 | GPA: 10.0"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* Reusable Education Card */
function EducationCard({ icon, title, institute, details }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1.2rem",
        background: "rgba(255,255,255,0.05)",
        borderRadius: 14,
        padding: "1.4rem 1.8rem",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ color: "#00b4ff" }}>{icon}</div>
      <div>
        <h4 style={{ margin: 0, color: "#00b4ff", fontSize: "1.2rem" }}>{title}</h4>
        <p style={{ margin: "4px 0", color: "rgba(255,255,255,0.85)" }}>
          {institute}
        </p>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.7)" }}>{details}</p>
      </div>
    </motion.div>
  );
}
