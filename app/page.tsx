import React from 'react';
import { Github, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const experiences = [
    {
      period: "JULY 2025 — PRESENT",
      role: "Data Analyst & Scientist Intern",
      company: "Interlaces Studies Bali",
      description: "Transforming complex education and migration data into actionable insights. Collecting, cleaning, and analyzing large-scale datasets, developing data models, and implementing machine learning techniques to drive impactful recommendations.",
      skills: ["Data Modeling", "Advanced Analytics", "Machine Learning", "Python", "SQL"]
    },
    {
      period: "DEC 2024 — DEC 2024",
      role: "Data Annotator (Freelance)",
      company: "MORAVIA IT SRO",
      description: "Aligned English audio with Indonesian transcriptions for text-to-speech models. Worked with NLP models to enhance AI voice synthesis and ensured high-quality linguistic accuracy.",
      skills: ["NLP", "Speech Annotation", "Quality Control", "Linguistic Accuracy"]
    },
    {
      period: "DEC 2024 — DEC 2024",
      role: "Data Annotator (Freelance)",
      company: "Scale Labs",
      description: "Conducted mathematical data labeling for ML model training. Worked with large-scale datasets to improve algorithm accuracy and maintained data integrity in preprocessing workflows.",
      skills: ["Mathematical Labeling", "Data Preprocessing", "ML Algorithms", "Dataset Structuring"]
    }
  ];

  const projects = [
    {
      title: "AI-Agent: Job Market Intelligence",
      description: "Transforming unstructured job descriptions into professional summaries and extracted skills using Gemini AI and custom Prompt Engineering. Optimized for high-precision JSON output and token efficiency.",
      link: "https://github.com/anakagung55/AI-Job-Processor",
      skills: ["Gemini AI", "Prompt Engineering", "JSON Parsing", "Python"]
    },
    {
      title: "OmniJob-Scraper: Multi-Platform Crawler",
      description: "Modular web scraping system designed to harvest real-time data from Seek, Indeed, and Jora. Features an interactive CLI for targeted data acquisition based on specific market needs.",
      link: "https://github.com/anakagung55/JobScrape-Machine-Pro",
      skills: ["Web Scraping", "BeautifulSoup", "Data Pipelines", "Python"]
    },
    {
      title: "Customer Intelligence & KPI Dashboard",
      description: "End-to-end pipeline transforming thousands of Google Reviews into actionable insights. Uses Regex for automated staff-mention extraction and service categorization, visualized in Looker Studio.",
      link: "https://github.com/anakagung55/Google-Business-Review-Intelligence",
      skills: ["Python", "Regex", "Looker Studio", "Business Intelligence"]
    },
    {
      title: "Face Emotion Recognition System",
      description: "Computer vision system using PyTorch and Transfer Learning (ResNet-18, EfficientNet) to classify human facial emotions. Features dynamic training with custom callbacks and fine-tuning.",
      link: "https://github.com/anakagung55/Face-Emotion-Recognition-System",
      skills: ["PyTorch", "Computer Vision", "Transfer Learning", "Deep Learning"]
    },
    {
      title: "Heart Disease Risk Prediction",
      description: "Supervised learning model using Random Forest to assess cardiovascular risk. Includes thorough EDA and feature importance analysis to provide interpretability for clinical support.",
      link: "https://github.com/anakagung55/Heart-Disease-Risk-Prediction",
      skills: ["Scikit-Learn", "Random Forest", "EDA", "Predictive Analytics"]
    },
    {
      title: "Advanced Text Summarization Benchmarking",
      description: "Comparative study of abstractive summarization using Pegasus and T5 Transformer models, evaluated using ROUGE metrics to measure the quality of AI-generated summaries.",
      link: "https://github.com/anakagung55/Text-Summarization",
      skills: ["NLP", "Transformers", "Hugging Face", "ROUGE Metric"]
    }
  ];

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      
      {/* Background Effect */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_50%_50%,_rgba(45,212,191,0.03),transparent_70%)]"></div>

      <div className="lg:flex lg:justify-between lg:gap-12">
        
        {/* KOLOM KIRI */}
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
                <li className="flex items-center gap-4 group">
                    <span className="h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                    <a className="hover:text-slate-200" href="#about">ABOUT</a>
                </li>
                <li className="flex items-center gap-4 group">
                    <span className="h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                    <a className="hover:text-slate-200" href="#experience">EXPERIENCE</a>
                </li>
                <li className="flex items-center gap-4 group">
                    <span className="h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                    <a className="hover:text-slate-200" href="#projects">PROJECTS</a>
                </li>
              </ul>
            </nav>
          </div>

          <ul className="ml-1 mt-8 flex items-center gap-6 text-slate-400">
            <li className="hover:text-teal-300 transition-colors"><a href="https://github.com/anakagung55" target="_blank"><Github size={22} /></a></li>
            <li className="hover:text-teal-300 transition-colors"><a href="https://www.linkedin.com/in/anak-kusuma-29189932a/" target="_blank"><Linkedin size={22} /></a></li>
            <li className="hover:text-teal-300 transition-colors"><a href="https://www.instagram.com/agungajus_/" target="_blank"><Instagram size={22} /></a></li>
            <li className="hover:text-teal-300 transition-colors"><a href="https://mailto:agungajus02@gmail.com"><Mail size={22} /></a></li>
          </ul>
        </header>

        {/* KOLOM KANAN */}
        <main className="lg:w-[50%] lg:py-24">
          
          {/* ABOUT */}
          <section id="about" className="mb-16 scroll-mt-16 text-slate-400 leading-relaxed md:mb-24 lg:scroll-mt-24">
            <p className="mb-4">
              Hi there! 👋 I’m a passionate Data Entry Specialist, Data Engineer, Data Analyst, and Machine Learning Engineer with over 3 years of experience in the IT field.
            </p>
            <p className="mb-4">
              I specialize in <span className="text-slate-200">building intelligent systems</span> and automating repetitive tasks using Python and SQL. My goal is always to deliver accuracy and efficiency in every data pipeline I build.
            </p>
            <p>
              Tools: <span className="text-teal-300">Python | Pandas | SQL | Power BI | TensorFlow | Scikit-Learn</span>
            </p>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
            <div className="flex flex-col gap-12">
              {experiences.map((exp, i) => (
                <div key={i} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-4">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    {exp.period}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="group-hover:text-teal-300">{exp.role} · {exp.company}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">{exp.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <li key={skill} className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300">{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
            <div className="flex flex-col gap-8">
              {projects.map((proj, i) => (
                <a key={i} href={proj.link} target="_blank" className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-4">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50"></div>
                  <div className="z-10 sm:col-span-8">
                    <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300 flex items-center gap-2">
                      {proj.title} <ExternalLink size={14} />
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">{proj.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {proj.skills.map(skill => (
                        <li key={skill} className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300">{skill}</li>
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