// ToggleSwitch: accessible on/off switch. Needs React + Tailwind CSS.
import { useState } from "react";

interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export default function ToggleSwitch({ defaultChecked = false, onChange, label }: ToggleSwitchProps) {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-white">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={toggle}
        className={`relative h-7 w-12 rounded-full transition-colors duration-300 ${
          checked ? "bg-purple-500" : "bg-neutral-700"
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      {label}
    </label>
  );
}
