import React from "react";
import { motion } from "framer-motion";
import { IconCertificate, IconRosetteDiscountCheck, IconExternalLink } from "@tabler/icons-react";
import Section from "./Section";
import Heading from "./Heading";
import TagLine from "./Tagline";
import { grid } from "../assets";
import PlusSvg from "../assets/svg/PlusSvg";
import awsAiCertificate from "../assets/certificates/aws-ai-certificate.png";
import awsAiBadge from "../assets/certificates/aws-simulearn-ai-practitioner-training-badge.png";
import ciscoDataAnalyticsCertificate from "../assets/certificates/cisco-data-analytics-essentials-certificate.png";
import secureSoftwareBadge from "../assets/certificates/lfd121-developing-secure-software-badge.png";
import secureSoftwareCertificate from "../assets/certificates/lfd121-developing-secure-software-certifcate.png";

const certificates = [
  {
    id: "0",
    title: "AWS AI Practitioner",
    issuer: "AWS Skill Builder",
    date: "2025",
    text: "Covers foundational AI concepts, AWS AI services, and practical use cases for building responsible, business-ready intelligent solutions.",
    image: awsAiCertificate,
    link: "",
  },
  {
    id: "1",
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    text: "Develops core analytics skills, including working with data, extracting insights, and supporting better business decisions with evidence.",
    image: ciscoDataAnalyticsCertificate,
    link: "",
  },
  {
    id: "2",
    title: "Developing Secure Software",
    issuer: "Linux Foundation",
    date: "2024",
    text: "Focuses on secure software engineering practices, threat awareness, and writing safer code throughout the development lifecycle.",
    image: secureSoftwareCertificate,
    link: "",
  },
];

const badges = [
  {
    id: "0",
    title: "AWS AI Practitioner",
    issuer: "AWS / SimuLearn",
    image: awsAiBadge,
    link: "",
  },
  {
    id: "1",
    title: "Developing Secure Software",
    issuer: "Linux Foundation",
    image: secureSoftwareBadge,
    link: "",
  },
];

const Wrapper = ({ link, className, children }) =>
  link ? (
    <a href={link} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );

export function Certificates() {
  return (
    <Section className="overflow-hidden" id="certificates">
      <div className="container md:pb-10">
        <Heading tag="Proof of learning" title="Certificates & Badges" />

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Wrapper
                link={item.link}
                className="relative block h-full p-0.25 border border-gray-800"
              >
                <PlusSvg className="absolute -top-[5.5px] -left-[5.5px] z-2 pointer-events-none" />
                <PlusSvg className="absolute -top-[5.5px] -right-[5.5px] z-2 pointer-events-none" />
                <PlusSvg className="absolute -bottom-[5.5px] -left-[5.5px] z-2 pointer-events-none" />
                <PlusSvg className="absolute -bottom-[5.5px] -right-[5.5px] z-2 pointer-events-none" />
                <div className="relative flex h-full flex-col p-6 bg-neutral-900 overflow-hidden">
                  <div className="absolute top-0 left-0 max-w-full opacity-20 pointer-events-none">
                    <img className="w-full" src={grid} width={550} height={550} alt="" />
                  </div>

                  <div className="relative z-1 flex h-full flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <TagLine className="text-white">{item.date}</TagLine>
                      {item.link && <IconExternalLink className="h-5 w-5 text-color-1" />}
                    </div>

                    <div className="mb-5 flex h-40 items-center justify-center overflow-hidden bg-neutral-800 border border-stroke-1">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                      ) : (
                        <IconCertificate className="h-16 w-16 text-neutral-500" stroke={1.2} />
                      )}
                    </div>

                    <h4 className="h5 mb-2 text-white">{item.title}</h4>
                    <h2 className="text-purple-600">{item.issuer}</h2>
                    <p className="body-2 text-gray-400 line-clamp-3">{item.text}</p>
                    {item.link && (
                      <span className="font-code text-xs text-color-1 uppercase tracking-wider mt-auto pt-6">
                        Verify credential →
                      </span>
                    )}
                  </div>
                </div>
              </Wrapper>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-16 mb-8">
          <span className="h4 text-white">Badges</span>
          <div className="flex-1 h-0.25 bg-stroke-1" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
            >
              <Wrapper
                link={badge.link}
                className="relative flex h-full flex-col items-center p-0.25 border border-gray-800"
              >
                <PlusSvg className="absolute -top-[5.5px] -left-[5.5px] z-2 pointer-events-none" />
                <PlusSvg className="absolute -top-[5.5px] -right-[5.5px] z-2 pointer-events-none" />
                <PlusSvg className="absolute -bottom-[5.5px] -left-[5.5px] z-2 pointer-events-none" />
                <PlusSvg className="absolute -bottom-[5.5px] -right-[5.5px] z-2 pointer-events-none" />
                <div className="flex h-full w-full flex-col items-center p-6 text-center bg-neutral-900">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-800 border border-stroke-1">
                    {badge.image ? (
                      <img src={badge.image} alt={badge.title} className="h-16 w-16 object-contain" />
                    ) : (
                      <IconRosetteDiscountCheck className="h-12 w-12 text-color-1" stroke={1.5} />
                    )}
                  </div>
                  <h5 className="text-sm font-medium text-white">{badge.title}</h5>
                  <p className="mt-1 text-xs text-gray-400">{badge.issuer}</p>
                </div>
              </Wrapper>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Certificates;
