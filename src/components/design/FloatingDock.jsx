import React from "react";
import { FloatingDock } from "./FloatingDockUI";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconQuestionMark
} from "@tabler/icons-react";

export function FloatingDockBottom() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: <IconQuestionMark className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
  ];

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-10 rounded-4xl flex justify-center bg-white dark:bg-neutral-900 z-50 py-2">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
