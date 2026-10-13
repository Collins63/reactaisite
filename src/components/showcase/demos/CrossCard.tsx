// CrossCard: a square card with a cross marker on every corner.
// Needs React + Tailwind CSS.
interface CrossCardProps {
  title: string;
  text: string;
  tags?: string[];
  className?: string;
}

const Cross = ({ className = "" }: { className?: string }) => (
  <svg className={`pointer-events-none absolute z-10 ${className}`} width="11" height="11" fill="none">
    <path
      d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
      fill="#ada8c4"
    />
  </svg>
);

export default function CrossCard({ title, text, tags = [], className = "" }: CrossCardProps) {
  return (
    <div className={`relative w-72 border border-gray-800 bg-gray-300 p-px ${className}`}>
      <Cross className="-top-[5.5px] -left-[5.5px]" />
      <Cross className="-top-[5.5px] -right-[5.5px]" />
      <Cross className="-bottom-[5.5px] -left-[5.5px]" />
      <Cross className="-bottom-[5.5px] -right-[5.5px]" />

      <div className="bg-neutral-900 p-6 text-white">
        <h4 className="mb-3 text-lg font-semibold">{title}</h4>
        <p className="mb-5 text-sm text-gray-400">{text}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
