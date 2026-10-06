import { Spinner } from "@heroui/react";

export default function LoadingSpinner({ label = "Loading" }) {
  return (
    <div
      role="status"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-3"
    >
      <Spinner size="lg" />
      <span className="text-sm text-muted">{label}...</span>
    </div>
  );
}