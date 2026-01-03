import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Data Engineer",
    company: "Bases Data Science, NielsenIQ",
    companyIconUrl: "https://cdn.brandfetch.io/id3LcB2nzS/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1767359858495",
    location: "Remote, US",
    date: "03/2022 – Present",
    achievements: [
      "Enhanced the calibration process for a Hierarchical Bayesian discrete choice model by integrating promotion ratio as a new target, improving market share simulation accuracy against real-world data.",
      "Optimized the core market share simulation engine by vectorizing NumPy operations and eliminating inefficient memory handling, doubling the model's item capacity and enabling more complex simulations.",
      "Improved data quality for an LLM-based RAG system with a computer vision pre-processing pipeline using Paddle OCR and k-means clustering to flag low-contrast text that would degrade review generation.",
      "Owned and re-architected the end-to-end share simulation and calibration platform (Django/Kubernetes), adding validation, monitoring, and error handling that reduced production failures by 80% and cut processing time by 30%.",
    ],
  },
  {
    title: "Research Assistant",
    company: "Science of Science and Computational Discovery Lab, Syracuse University",
    companyIconUrl: "https://cdn.brandfetch.io/idvHL7RQ_l/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1767002968519",
    location: "Syracuse, NY",
    date: "02/2021 – 12/2021",
    achievements: [
      "Investigated systemic gender bias in GloVe word embeddings using a 2AFC psychological framework and extended the methodology to quantify bias in Amazon Polly speech-to-text.",
      "Built a topic modeling pipeline (LSA + TF-IDF) for a content-based scientific paper recommender, processing 30M+ documents with Spark and loading embeddings into Elasticsearch.",
    ],
  },
];

const projects = [
  {
    title: "Time-Series Forecasting for Bakery Demand Optimization",
    summary:
      "Designed and deployed an end-to-end forecasting system to predict daily bakery sales and optimize inventory.",
    achievements: [
      "Compared multiple models (Prophet, ARIMA, XGBoost) to select the most accurate forecaster for the data.",
      "Engineered an automated daily pipeline with Prefect to pull, clean, retrain, and forecast the upcoming week, reducing waste for the owner.",
    ],
  },
];

const education = [
  {
    degree: "M.S. in Applied Data Science",
    school: "Syracuse University",
    iconUrl: "https://cdn.brandfetch.io/idvHL7RQ_l/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1767002968519",
    date: "Sept. 2020 - Dec. 2021",
  },
  {
    degree: "B.S. in Information Management & Technology",
    school: "Syracuse University",
    iconUrl: "https://cdn.brandfetch.io/idvHL7RQ_l/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1767002968519",
    date: "Sept. 2016 - May. 2020",
  },
];

const coreSkills = [
  {
    title: "Applied Science & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Transfer Learning",
      "Computer Vision",
      "HB Modeling",
      "Market Share Simulation",
      "Recommendation System",
    ],
  },
  {
    title: "Frameworks and Libraries",
    items: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Spark"],
  },
  {
    title: "Infrastructure & MLOps",
    items: ["Docker", "Kubernetes", "Elasticsearch", "Flask", "Django", "Airflow", "Prefect", "Git"],
  },
];

const summary =
  "Data engineer with 3+ years of experience, leveraging a data engineering background to build and optimize complex models. Expertise in Hierarchical Bayesian discrete choice models, market share simulation, recommendation systems, and algorithmic optimization. Proven ability to apply Deep Learning (PyTorch), NLP (RAG, Bias Analysis), and Computer Vision in end-to-end projects, from research to production.";

export default function ResumePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="relative max-w-5xl mx-auto">
        <Card className="mb-8 border-slate-800 shadow-xl shadow-slate-950/50">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/favicon.ico?height=96&width=96" alt="Zijun Yi" />
                <AvatarFallback>ZY</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <h1 className="text-3xl font-bold">Zijun Yi</h1>
                <p className="text-xl text-slate-300">Data Engineer</p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" /> Seattle, WA
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <PhoneIcon className="h-4 w-4" /> +1 515-357-3516
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-2 sm:mt-0">
              <Button variant="secondary">
                <a href="/Resume.pdf" download>
                  Download PDF Resume
                </a>
              </Button>
            </div>
            <div className="flex flex-col items-start sm:items-end space-y-2 text-sm">
              <Link href="mailto:jimzijun@gmail.com" className="flex items-center space-x-2 text-blue-300 hover:text-blue-200">
                <MailIcon className="h-4 w-4" />
                <span>jimzijun@gmail.com</span>
              </Link>
              <Link href="https://www.linkedin.com/in/zijunyi/" className="flex items-center space-x-2 text-blue-300 hover:text-blue-200">
                <LinkedinIcon className="h-4 w-4" />
                <span>linkedin.com/in/zijunyi</span>
              </Link>
              <Link href="https://github.com/jimzijun" className="flex items-center space-x-2 text-blue-300 hover:text-blue-200">
                <GithubIcon className="h-4 w-4" />
                <span>github.com/jimzijun</span>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
              <p className="text-slate-200 leading-relaxed">{summary}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
              <div className="space-y-6">
                {experiences.map((role, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div className="flex items-start gap-3">
                          {role.companyIconUrl && (
                            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800">
                              <img
                                src={role.companyIconUrl}
                                alt={`${role.company} logo`}
                                className="h-7 w-7 rounded-full object-cover"
                              />
                            </span>
                          )}
                          <div>
                            <CardTitle>{role.title}</CardTitle>
                            <p className="text-slate-300">{role.company}</p>
                            <p className="text-slate-400 text-sm">{role.location}</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-400">{role.date}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-slate-200">
                        {role.achievements.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Independent Projects</h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <CardTitle>{project.title}</CardTitle>
                          <p className="text-slate-300 text-sm">{project.summary}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-slate-200">
                        {project.achievements.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {coreSkills.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-medium mb-2">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Scientific Publications</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm">
                    Acuna, D.E., Yi, Z., Liang, L., Zhuang, H., Predicting the usage of scientific datasets based on the
                    article, author, institution, and journal bibliometrics - [Mar.2022]
                    <a href="https://link.springer.com/chapter/10.1007/978-3-030-96957-8_5" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 ml-2">
                      View Publication
                    </a>
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.degree}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div className="flex items-start gap-3">
                          {edu.iconUrl && (
                            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800">
                              <img
                                src={edu.iconUrl}
                                alt={`${edu.school} logo`}
                                className="h-7 w-7 rounded-full object-cover"
                              />
                            </span>
                          )}
                          <div>
                            <CardTitle>{edu.degree}</CardTitle>
                            <p className="text-slate-300">{edu.school}</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-400">{edu.date}</p>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
