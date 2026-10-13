import React from "react";
import { FloatingDock } from "./FloatingDockUI";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconQuestionMark,
  IconBrandLinkedin,
  IconBrandWhatsapp
} from "@tabler/icons-react";

export function FloatingDockBottom() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-200" />,
      href: "/",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-neutral-200" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-neutral-200" />,
      href: "/components",
    },
    {
      title: "About Me",
      icon: <IconQuestionMark className="h-full w-full text-neutral-200" />,
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-200" />,
      href: "https://www.linkedin.com/in/collins-chimbganda-5a86901a1",
    },
    {
      title: "WhatsApp",
      icon: <IconBrandWhatsapp className="h-full w-full text-neutral-200" />,
      href: "https://wa.me/263771472798",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-200" />,
      href: "https://github.com/Collins63",
    },
  ];

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-10 rounded-4xl flex justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20 z-50 py-2">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
