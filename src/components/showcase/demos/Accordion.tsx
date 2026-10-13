// Accordion: one-open-at-a-time collapsible list. Needs React + Tailwind CSS.
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="w-full max-w-md divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium transition-colors hover:bg-white/5"
            >
              {item.title}
              <span className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden px-5 text-sm text-gray-400">
                <span className="block pb-4">{item.content}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
