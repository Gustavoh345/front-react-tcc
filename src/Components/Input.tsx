import type { ChangeEvent, InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  error,
  ...props
}: InputProps) {
  const baseStyle =
    "rounded-xl border bg-black p-2 text-white placeholder-[#6b6b6b] outline-none transition";
  const stateStyle = error
    ? "border-red-500 focus:border-red-400"
    : "border-[#6B6B6B] focus:border-yellow-400";

  const resolvedLabel = label ?? name;

  return (
    <div className="flex flex-col gap-1">
      {resolvedLabel ? (
        <label htmlFor={id} className="text-[#6b6b6b]">
          {resolvedLabel}
        </label>
      ) : null}

      <input
        {...props}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange as ((event: ChangeEvent<HTMLInputElement>) => void) | undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error && id ? `${id}-error` : undefined}
        className={`${baseStyle} ${stateStyle} ${className}`.trim()}
      />

      {error ? (
        <span id={id ? `${id}-error` : undefined} className="text-sm text-red-400">
          {error}
        </span>
      ) : null}
    </div>
  );
}
