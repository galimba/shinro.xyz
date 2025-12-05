import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";
  const combinedClass = `${baseClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
