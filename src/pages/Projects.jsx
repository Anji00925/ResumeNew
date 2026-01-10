import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import ecommerceSS from '../assets/screenshots/e-commerce-img.png'
import duplicateSS from '../assets/screenshots/duplicate.png'
import envscanSS from '../assets/screenshots/envscan.png'
import habitflowSS from '../assets/screenshots/habitflow.png'
import fraudSS from '../assets/screenshots/credit.png'


const PROJECTS = [
  {
    title: '🛒 E-Commerce MERN Application',
    desc: 'A full-stack MERN e-commerce application enabling users to browse products, manage cart, and perform secure online shopping.',
    ss: ecommerceSS,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    code: 'https://github.com/Anji00925/Shop-Vix.git'
  },
  {
    title: '📁 Duplicate File Detection System',
    desc: 'Java-based application that scans directories to detect duplicate files using hashing techniques, improving storage efficiency.',
    ss: duplicateSS,
    tech: ['Java', 'SHA-256 Hashing', 'File Handling', 'Collections'],
    code: 'https://github.com/Anji00925/Duplicate-file-detection'
  },
  {
    title: '🌱 AI-Powered Environment Scan',
    desc: 'Machine learning based Streamlit dashboard that analyzes and visualizes environmental data for intelligent insights.',
    ss: envscanSS,
    tech: ['Python', 'Machine Learning', 'Streamlit', 'Pandas'],
    code: 'https://github.com/ryadavnitb/Batch-6/tree/Anjibabu-GLobalPolution'
  },
  {
    title: '📈 Habit Flow',
    desc: 'A habit tracking web application that helps users build consistency with daily streak tracking and clean UI.',
    ss: habitflowSS,
    tech: ['React', 'Node.js', 'MongoDB'],
    code: 'https://github.com/Anji00925/Habbit-Flow-Frontend.git'
  },
  {
    title: '💳 Credit Card Fraud Detection',
    desc: 'Machine learning model to detect fraudulent credit card transactions using supervised learning algorithms.',
    ss: fraudSS,
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    code: 'https://github.com/Anji00925/Creditcard_fraud'
  }
]



export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
