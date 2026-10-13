import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonGradient from "../assets/svg/ButtonGradient";
import PlusSvg from "../assets/svg/PlusSvg";
import collinsImage from "../assets/collinsImage.jpg";
import { grid } from "../assets";
import { FloatingDockBottom } from "../components/design/FloatingDock";
import Footer from "../components/Footer";
import Section from "../components/Section";
import TagLine from "../components/Tagline";

// TODO: add your own origin story here (where you grew up, what first got you into code).
// Everything below is taken from the experience already shown on the site.
const story = [
  "I'm Collins, a Full Stack Developer who loves turning ideas into software that works as beautifully as it looks.",
  "My journey began in 2023 with an internship at Tigerweb, where I started in IT support: troubleshooting, system installations and helping clients on site. That hands-on start taught me how software really lands with the people who use it.",
  "From there I grew into building websites, inventory and POS systems, and e-invoicing solutions with fiscal QR codes, working across the full stack from requirements to deployment and client training.",
  "Today I work as a Software Engineer at Omnicontact International, integrating large language models, vector databases and RAG systems into enterprise applications, while still building the web and mobile products I started out with.",
];

const milestones = [
  { year: "2023", role: "IT Support Intern", place: "Tigerweb", text: "First steps in the industry: IT support, troubleshooting and system installations." },
  { year: "2024", role: "Junior Software Developer", place: "Tigerweb", text: "Websites, inventory and POS systems, and ZIMRA-compliant e-invoicing." },
  { year: "2025", role: "Full Stack Developer", place: "Tourista AR", text: "Led web and mobile platforms for an AI and AR tourism company." },
  { year: "2026", role: "Software Engineer", place: "Omnicontact International", text: "AI-driven enterprise software: LLMs, embeddings and RAG." },
];

const skills = ["React", "Node.js", "Python / Django", "Flutter", "MongoDB", "Firebase", "LLMs & RAG", "REST APIs"];

const corners = [
  "-top-[5.5px] -left-[5.5px]",
  "-top-[5.5px] -right-[5.5px]",
  "-bottom-[5.5px] -left-[5.5px]",
  "-bottom-[5.5px] -right-[5.5px]",
];

const Crosses = () =>
  corners.map((pos) => <PlusSvg key={pos} className={`absolute ${pos} z-2 pointer-events-none`} />);

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <FloatingDockBottom />

        <Section className="overflow-hidden" id="about">
          <div className="container">
            <Link
              to="/"
              className="font-code text-xs uppercase tracking-wider text-gray-400 transition-colors hover:text-color-1"
            >
              ← Back to portfolio
            </Link>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
              {/* Portrait: the photo has empty space on the right, so it is cropped to the person. */}
              <div className="relative mx-auto w-full max-w-[26rem] border border-gray-800 bg-gray-300 p-0.25">
                <Crosses />
                <div className="relative bg-neutral-900">
                  <div
                    role="img"
                    aria-label="Portrait of Collins Chimbganda"
                    className="aspect-[4/5] w-full bg-no-repeat"
                    style={{
                      backgroundImage: `url(${collinsImage})`,
                      backgroundSize: "175% auto",
                      backgroundPosition: "0% 33%",
                    }}
                  />
                  <img
                    className="pointer-events-none absolute top-0 left-0 w-full opacity-20 mix-blend-overlay"
                    src={grid}
                    width={550}
                    height={550}
                    alt=""
                  />
                  <div className="border-t border-stroke-1 p-5">
                    <TagLine className="text-white">Full Stack Developer</TagLine>
                    <h2 className="h4 mt-2 text-white">Chimbganda Collins</h2>
                  </div>
                </div>
              </div>

              <div>
                <TagLine className="mb-4 text-gray-400">About me</TagLine>
                <h1 className="h2 mb-8 text-white">My background and how I got here</h1>
                <div className="space-y-5">
                  {story.map((paragraph) => (
                    <p key={paragraph} className="body-2 text-gray-400">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="border border-stroke-1 bg-white/5 px-3 py-1 text-xs text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href="https://wa.me/263771472798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center border border-stroke-1 bg-white/5 px-6 py-3 font-code text-xs uppercase tracking-wider text-white"
                >
                  Let's talk on WhatsApp →
                </a>
              </div>
            </div>

            <div className="mt-24">
              <div className="mb-8 flex items-center gap-4">
                <span className="h4 text-white">The path so far</span>
                <div className="h-0.25 flex-1 bg-stroke-1" />
              </div>

              <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {milestones.map((item) => (
                  <li key={item.year + item.place} className="relative border border-gray-800 p-0.25">
                    <Crosses />
                    <div className="relative h-full overflow-hidden bg-neutral-900 p-6">
                      <div className="pointer-events-none absolute top-0 left-0 max-w-full opacity-20">
                        <img className="w-full" src={grid} width={550} height={550} alt="" />
                      </div>
                      <div className="relative z-1">
                        <TagLine className="mb-5 text-white">{item.year}</TagLine>
                        <h4 className="h5 mb-1 text-white">{item.role}</h4>
                        <h3 className="mb-3 text-purple-600">{item.place}</h3>
                        <p className="body-2 text-gray-400">{item.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default AboutPage;
