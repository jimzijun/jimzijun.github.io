import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/favicon.ico?height=96&width=96" alt="Zijun Yi" />
                <AvatarFallback>ZY</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold">Zijun Yi</h1>
                <p className="text-xl text-gray-500">Data Engineer</p>
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-end space-y-2">
              <Link href="mailto:jimzijun@gmail.com" className="flex items-center space-x-2 text-blue-600 hover:underline">
                <MailIcon className="h-4 w-4" />
                <span>jimzijun@gmail.com</span>
              </Link>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4" />
                <span>+1 515-357-3516</span>
              </div>
              <Link href="https://www.linkedin.com/in/zijunyi/" className="flex items-center space-x-2 text-blue-600 hover:underline">
                <LinkedinIcon className="h-4 w-4" />
                <span>linkedin.com/in/zijunyi</span>
              </Link>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button>
                <a href="/Resume.pdf" download>
                  Download PDF Resume
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Data Engineer</CardTitle>
                        <p className="text-gray-500">Bases, NielsenIQ</p>
                      </div>
                      <p className="text-sm text-gray-500">03/2022 - Present</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Led development and deployment of simulation models, improving performance by 40% and reducing processing time by 30% through code and workflow optimizations. Overcame challenges with legacy systems and complex data integration, enabling a 30% increase in study size and shortening calibration workload by 25%, which accelerated project completion. Collaborated with cross-functional teams to ensure seamless implementation.</li>
                      <li>Enhanced system reliability and efficiency by profiling models and optimizing job scheduling, addressing frequent job failures and system bottlenecks. This resulted in an 80% reduction in tickets for lost processes and jobs after migration. Communicated effectively with stakeholders to identify issues, decreasing operational costs and boosting user satisfaction across teams.</li>
                      <li>Migrated infrastructure from Azure Batch to Kubernetes on AKS, eliminating cold start overhead and improving resource utilization, which increased operational efficiency. Faced and resolved challenges related to resource contention and deployment complexities, ensuring a smooth transition with minimal downtime. Coordinated closely with the DevOps team to streamline processes.</li>
                      <li>Improved system responsiveness and throughput for production model training and inference, enabling seamless scaling and better performance. Collaborated with data scientists and engineers to optimize algorithms, leading to faster deployment of features and improved customer satisfaction. Facilitated regular communication between teams to align goals and deliverables.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Research Assistant</CardTitle>
                        <p className="text-gray-500">Science of Science and Computational Discovery Lab</p>
                      </div>
                      <p className="text-sm text-gray-500">02/2021 – 12/2021</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Implemented sentiment analysis using pre-trained models to identify gender biases within word embeddings.</li>
                      <li>Engineered scalable big data pipelines using Hadoop, Apache Spark, and Apache Airflow.</li>
                      <li>Developed Python-based data collection and analysis tools using REST APIs and machine learning models.</li>
                      <li>Researched AI-driven speech recognition systems using Amazon Alexa, AWS Lex API, and AWS Transcribe.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Master of Science in Applied Data Science</CardTitle>
                        <p className="text-gray-500">Syracuse University</p>
                      </div>
                      <p className="text-sm text-gray-500">Sept. 2020 - Dec. 2021</p>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Bachelor of Science in Information Management & Technology</CardTitle>
                        <p className="text-gray-500">Syracuse University</p>
                      </div>
                      <p className="text-sm text-gray-500">Sept. 2016 - May. 2020</p>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-medium mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>Java</Badge>
                    <Badge>R</Badge>
                    <Badge>SQL</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Frameworks and Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>PyTorch</Badge>
                    <Badge>TensorFlow</Badge>
                    <Badge>Scikit-learn</Badge>
                    <Badge>Pandas</Badge>
                    <Badge>NumPy</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Big Data Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Apache Spark</Badge>
                    <Badge>Hadoop</Badge>
                    <Badge>Kafka</Badge>
                    <Badge>MapReduce</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Kubernetes</Badge>
                    <Badge>Airflow</Badge>
                    <Badge>Elasticsearch</Badge>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Scientific Publications</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm">
                    Acuna, D.E., Yi, Z., Liang, L., Zhuang, H., Predicting the usage of scientific datasets based on the article, author, institution, and journal bibliometrics (2022 iConference) - [Mar.2022]
                  </p>
                </CardContent>
              </Card>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

