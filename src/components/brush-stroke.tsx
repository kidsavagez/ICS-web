type Props = { className?: string };

export function BrushStroke({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 600 60"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 5 38 Q 90 10, 200 24 T 400 18 Q 480 14, 595 8 L 595 18 Q 470 30, 380 32 T 180 40 Q 90 44, 5 50 Z"
        fill="currentColor"
      />
    </svg>
  );
}
