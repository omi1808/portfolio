import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer
            </h3>
            <p className="text-muted-foreground">
              Motivated and detail-oriented Full-Stack Developer with a strong
              foundation in Java, Spring Boot, Spring Secu- rity, and SQL for
              backend development, along with hands-on experience in React.js,
              JavaScript, HTML, CSS, and Tailwind CSS for building modern,
              responsive frontends. Proficient in creating RESTful APIs,
              implementing JWT-based authentication, and developing
              user-friendly UIs. Continuously enhancing skills to build
              scalable, secure, and high-performance applications across the
              full technology stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch{" "}
              </a>

              <a
                href="/assects/Om_CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download Cv
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold ktext-lg"> Frontend Devlopment </h4>
                  <p className="text-muted-foreground">
                    Crafting responsive, user-friendly interfaces using React, HTML, CSS, and modern JavaScript.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold ktext-lg"> Backend Development </h4>
                  <p className="text-muted-foreground">
                    Developing secure, scalable APIs and logic using Java, Spring Boot, and databases like MySQL.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold ktext-lg"> Full Stack Development </h4>
                  <p className="text-muted-foreground">
                    Creating end-to-end applications with clean UI, powerful backend, and seamless integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
