import React from 'react';
import Image from 'next/image'; // <-- IMPORT PENTING: Komponen Gambar Next.js
import { Github, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const experiences = [
    {
      period: "JULY 2025 — PRESENT",
      role: "Data Analyst & Scientist Intern",
      company: "Interlace Studies Bali",
      description: "Transforming complex education and migration data into actionable insights. Collecting, cleaning, and analyzing large-scale datasets, developing data models, and implementing machine learning techniques to drive impactful recommendations.",
      skills: ["Data Modeling", "Advanced Analytics", "Machine Learning", "Python", "SQL"],
      link: "https://magang.ajus.xo.je"
    },
    {
      period: "DEC 2024 — DEC 2024",
      role: "Data Annotator (Freelance)",
      company: "MORAVIA IT SRO",
      description: "Aligned English audio with Indonesian transcriptions for text-to-speech models. Worked with NLP models to enhance AI voice synthesis and ensured high-quality linguistic accuracy.",
      skills: ["NLP", "Speech Annotation", "Quality Control", "Linguistic Accuracy"],
      link: "https://www.upwork.com/freelancers/~01da009b7a5052d219"
    },
    {
      period: "DEC 2024 — DEC 2024",
      role: "Data Annotator (Freelance)",
      company: "Scale Labs",
      description: "Conducted mathematical data labeling for ML model training. Worked with large-scale datasets to improve algorithm accuracy and maintained data integrity in preprocessing workflows.",
      skills: ["Mathematical Labeling", "Data Preprocessing", "ML Algorithms", "Dataset Structuring"],
      link: "https://www.upwork.com/freelancers/~01da009b7a5052d219"
    }
  ];

  // UPDATE DATA PROJECTS: Menambahkan properti 'image'
  // Pastikan nama file di sini SESUAI dengan nama file yang kamu taruh di folder public/projects/
  const projects = [
    {
      title: "AI-Agent: Job Market Intelligence",
      description: "Transforming unstructured job descriptions into professional summaries and extracted skills using Gemini AI and custom Prompt Engineering. Optimized for high-precision JSON output and token efficiency.",
      image: "/projects/ai-job.jpg", // Ganti dengan nama file gambarmu
      link: "https://github.com/anakagung55/AI-Job-Processor",
      skills: ["Gemini AI", "Prompt Engineering", "JSON Parsing", "Python"]
    },
    {
      title: "OmniJob-Scraper: Multi-Platform Crawler",
      description: "Modular web scraping system designed to harvest real-time data from Seek, Indeed, and Jora. Features an interactive CLI for targeted data acquisition based on specific market needs.",
      image: "/projects/omnijob.jpg",
      link: "https://github.com/anakagung55/JobScrape-Machine-Pro",
      skills: ["Web Scraping", "BeautifulSoup", "Data Pipelines", "Python"]
    },
    {
      title: "Customer Intelligence & KPI Dashboard",
      description: "End-to-end pipeline transforming thousands of Google Reviews into actionable insights. Uses Regex for automated staff-mention extraction and service categorization, visualized in Looker Studio.",
      image: "/projects/customer-kpi.jpg",
      link: "https://github.com/anakagung55/Google-Business-Review-Intelligence",
      skills: ["Python", "Regex", "Looker Studio", "Business Intelligence"]
    },
    {
      title: "Face Emotion Recognition System",
      description: "Computer vision system using PyTorch and Transfer Learning (ResNet-18, EfficientNet) to classify human facial emotions. Features dynamic training with custom callbacks and fine-tuning.",
      image: "/projects/face-emotion.jpg",
      link: "https://github.com/anakagung55/Face-Emotion-Recognition-System",
      skills: ["PyTorch", "Computer Vision", "Transfer Learning", "Deep Learning"]
    },
    {
      title: "Heart Disease Risk Prediction",
      description: "Supervised learning model using Random Forest to assess cardiovascular risk. Includes thorough EDA and feature importance analysis to provide interpretability for clinical support.",
      image: "/projects/heart-disease.jpg",
      link: "https://github.com/anakagung55/Heart-Disease-Risk-Prediction",
      skills: ["Scikit-Learn", "Random Forest", "EDA", "Predictive Analytics"]
    },
    {
      title: "Advanced Text Summarization Benchmarking",
      description: "Comparative study of abstractive summarization using Pegasus and T5 Transformer models, evaluated using ROUGE metrics to measure the quality of AI-generated summaries.",
      image: "/projects/text-sum.jpg",
      link: "https://github.com/anakagung55/Text-Summarization",
      skills: ["NLP", "Transformers", "Hugging Face", "ROUGE Metric"]
    }
  ];

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-12">
        {/* KOLOM KIRI (Header Sticky) */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl">
              Anak Kusuma
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Data Enthusiast & ML Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-relaxed text-slate-400">
              Transforming raw data into meaningful insights and building intelligent systems with focus on accuracy and automation.
            </p>
            <nav className="nav hidden lg:block mt-16">
              <ul className="flex flex-col w-max gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                <li><a className="group flex items-center py-3 hover:text-slate-200" href="#about"><span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span> ABOUT</a></li>
                <li><a className="group flex items-center py-3 hover:text-slate-200" href="#experience"><span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span> EXPERIENCE</a></li>
                <li><a className="group flex items-center py-3 hover:text-slate-200" href="#projects"><span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span> PROJECTS</a></li>
              </ul>
            </nav>
          </div>
          <ul className="ml-1 mt-8 flex items-center gap-6 text-slate-400">
            <li className="hover:text-cyan-400 transition-colors"><a href="https://github.com/anakagung55" target="_blank"><Github size={22} /></a></li>
            <li className="hover:text-cyan-400 transition-colors"><a href="https://www.linkedin.com/in/anak-kusuma-29189932a/" target="_blank"><Linkedin size={22} /></a></li>
            <li className="hover:text-cyan-400 transition-colors"><a href="https://www.instagram.com/agungajus_/" target="_blank"><Instagram size={22} /></a></li>
            <li className="hover:text-cyan-400 transition-colors"><a href="mailto:agungajus02@gmail.com"><Mail size={22} /></a></li>
          </ul>
        </header>

        {/* KOLOM KANAN (Scrollable Content) */}
        <main className="lg:w-[50%] lg:py-24">
          <section id="about" className="mb-16 scroll-mt-24 text-slate-400 leading-relaxed md:mb-24 lg:scroll-mt-24">
            <p className="mb-4">
              Hi there! 👋 I’m a passionate Data Entry Specialist, Data Engineer, Data Analyst, and Machine Learning Engineer with over 3 years of experience in the IT field.
            </p>
            <p className="mb-4">
              I specialize in <span className="text-slate-200 font-medium">building intelligent systems</span> and automating repetitive tasks using Python and SQL. My goal is always to deliver accuracy and efficiency in every data pipeline I build.
            </p>
            <p>Tools: <span className="text-cyan-400 font-medium">Python | Pandas | SQL | Power BI | TensorFlow | Scikit-Learn</span></p>
          </section>

          <section id="experience" className="mb-16 scroll-mt-24">
            <div className="flex flex-col gap-12">
              {experiences.map((exp, i) => (
                /* Gunakan tag <a> jika ada link, jika tidak gunakan <div> */
                <div key={i} className="group relative">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-4">
                    {/* Hover Effect Background */}
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-900/40"></div>
                    
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      {exp.period}
                    </header>
                    
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          {/* Jika ada link, bungkus dengan anchor tag */}
                          {exp.link ? (
                            <a 
                              href={exp.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400 group/link text-base"
                            >
                              <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block"></span>
                              <span>
                                {exp.role} · {" "}
                                <span className="inline-block">
                                  {exp.company}
                                  <ExternalLink 
                                    size={14} 
                                    className="inline-block ml-1 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" 
                                  />
                                </span>
                              </span>
                            </a>
                          ) : (
                            <span className="text-slate-200">
                              {exp.role} · {exp.company}
                            </span>
                          )}
                        </div>
                      </h3>
                      
                      <p className="mt-2 text-sm leading-normal text-slate-400">
                        {exp.description}
                      </p>
                      
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <li key={skill} className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- SECTION PROJECTS YANG DIUPDATE --- */}
          <section id="projects" className="mb-16 scroll-mt-24">
            <div className="flex flex-col gap-12">
              {projects.map((proj, i) => (
                <a key={i} href={proj.link} target="_blank" className="group relative grid grid-cols-1 gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100! lg:group-hover/list:opacity-50">
                  {/* Hover Effect Background */}
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-900/40"></div>
                  
                  {/* --- Bagian Gambar Thumbnail (Baru) --- */}
                  <div className="z-10 sm:col-span-3 order-1 sm:order-1">
                    <div className="rounded border-2 border-slate-200/10 transition group-hover:border-cyan-400/30 overflow-hidden">
                        <Image
                        src={proj.image}
                        alt={proj.title}
                        width={600}
                        height={338}
                        className="object-cover object-center w-full h-full transition group-hover:scale-105"
                        />
                    </div>
                  </div>

                  {/* --- Bagian Teks Deskripsi --- */}
                  <div className="z-10 sm:col-span-5 order-2 sm:order-2">
                    <h3 className="font-medium leading-snug text-slate-200 group-hover:text-cyan-400 flex items-center gap-2">
                      {proj.title} <ExternalLink size={14} className="inline-block shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">{proj.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {proj.skills.map(skill => (
                        <li key={skill} className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">{skill}</li>
                      ))}
                    </ul>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>Built with Next.js, Tailwind CSS, and Lucide Icons. Deployed on Vercel.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}