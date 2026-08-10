import { PiSparkleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function PrimaryButton({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`uppercase gradient-violet group relative inline-flex items-center gap-3 justify-center overflow-hidden rounded-full px-7 py-3.5 font-sans text-[0.66rem] uppercase tracking-[0.22em] text-paper shadow-[var(--shadow-paper)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(var(--color-burgundy),0.24)] ${className}`}
    >
      <span className="relative z-10">{children}</span>

      <span
        aria-hidden="true"
        className="absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-paper/25 transition-all duration-700 group-hover:left-full"
      />
      <PiSparkleFill className="text-[0.6rem]" />
    </Link>
  );
}