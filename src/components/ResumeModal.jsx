import React from 'react';
import { X, Printer, Download, Mail, Phone, ExternalLink, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-500/30 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Action Bar (Hidden during print) */}
        <div className="print:hidden px-6 py-4 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h3 className="font-bold text-sm text-slate-800 dark:text-white">
              Mohan P — Professional Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div id="printable-resume" className="p-8 sm:p-12 text-slate-800 dark:text-slate-100 bg-white dark:bg-[#0A1611] font-sans selection:bg-emerald-500 selection:text-white">
          
          {/* Header */}
          <div className="border-b-2 border-emerald-500 pb-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Mohan P
                </h1>
                <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  Aspiring Software Engineer · Associate Software Developer
                </p>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1 sm:text-right font-mono">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-500" />
                  <a href="mailto:mohan83676@gmail.com" className="hover:underline">mohan83676@gmail.com</a>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-500" />
                  <span>+91 8367629463</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                  <a href="https://linkedin.com/in/mohan-pole" target="_blank" rel="noreferrer" className="hover:underline">Mohan-pole</a>
                  <span className="opacity-40">|</span>
                  <a href="https://github.com/mohanchintu" target="_blank" rel="noreferrer" className="hover:underline">mohanchintu</a>
                </p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              {portfolioData.profile.summary}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-2 font-mono">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <span>B. Tech in CSE – Data Science</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">CGPA: 8.7</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  VNR Vignana Jyothi Institute of Engineering and Technology, Hyderabad
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <span>Intermediate Education</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">96.6%</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Sri Chaitanya Junior College, Hyderabad
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-2 font-mono">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <p><strong className="text-slate-900 dark:text-white">Programming:</strong> C++, Python, JavaScript</p>
              <p><strong className="text-slate-900 dark:text-white">Frontend:</strong> HTML, CSS, React.js</p>
              <p><strong className="text-slate-900 dark:text-white">Backend:</strong> Node.js, Express.js</p>
              <p><strong className="text-slate-900 dark:text-white">Database:</strong> MongoDB, MySQL</p>
              <p><strong className="text-slate-900 dark:text-white">Technologies:</strong> MERN Stack, Git, GitHub</p>
              <p><strong className="text-slate-900 dark:text-white">Concepts:</strong> DSA, Algorithms, OOP, DBMS, OS, Machine Learning</p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-2 font-mono">
              Work Experience
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Vistex
                </h3>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  March 2025 – Present
                </span>
              </div>
              <p className="text-xs italic text-slate-600 dark:text-slate-400">
                (Associate Software Developer – Started as Intern, converted to Full-time)
              </p>
              <ul className="list-disc list-outside ml-4 text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pt-1">
                <li>
                  Engineered SAP ABAP enhancements for Agreement Templates, architecting a dynamic Settings data area that reduced manual configuration effort by enabling multi-record management in a single interface.
                </li>
                <li>
                  Designed and optimized a backend pipeline to serialize internal table data into compressed XML using custom function modules, improving storage efficiency and retrieval speed.
                </li>
                <li>
                  Delivered end-to-end UI-backend synchronization for full CRUD operations with real-time change tracking, ensuring data integrity across Agreement workflows.
                </li>
                <li>
                  Automated a Copy Control background process for Master Agreements, eliminating manual duplication and accelerating the agreement generation lifecycle.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-2 font-mono">
              Projects
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <span>Fitness Tracking Application</span>
                  <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400">MERN Stack</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-700 dark:text-slate-300 space-y-1 mt-1">
                  <li>Engineered a full-stack fitness tracking web application leveraging MongoDB, Express.js, React.js, and Node.js with RESTful API architecture.</li>
                  <li>Implemented real-time user data tracking, personalized workout recommendations, and dynamic UI components, improving user retention and engagement.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <span>URL Phishing Detection Website</span>
                  <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400">React.js</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-700 dark:text-slate-300 space-y-1 mt-1">
                  <li>Architected a phishing URL detection platform using React.js, integrating regex-based pattern matching algorithms for real-time threat analysis.</li>
                  <li>Enhanced cybersecurity awareness by enabling instant identification and classification of malicious URLs, reducing phishing risk exposure.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <span>Breast Cancer Classification</span>
                  <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400">Machine Learning</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-700 dark:text-slate-300 space-y-1 mt-1">
                  <li>Built a classification system using Python, Scikit-learn, and Pandas; applied PCA for dimensionality reduction and SVM for high-accuracy binary classification.</li>
                  <li>Optimized model accuracy from 95% to 97.2% using ensemble learning techniques, enhancing predictive reliability for clinical decision support.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-2 font-mono">
              Achievements & Certifications
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <li><strong>Finalist in Oct-Coder Hackathon:</strong> Developed a diet-tracking and fitness recommendation web application.</li>
              <li><strong>Attained 4-Star Problem Solving on HackerRank:</strong> Actively demonstrating algorithmic thinking and DSA proficiency.</li>
              <li><strong>Secured 4th position in Blogathon by Data Questers Club:</strong> Technical blog exploring quantum theory.</li>
              <li><strong>Certified in Machine Learning:</strong> Completed an intensive training program from Udemy.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
