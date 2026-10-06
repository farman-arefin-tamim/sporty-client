"use client";

import { Toast } from "@heroui/react";

export default function Providers({ children }) {
  return (
    <>
      {children}
      <Toast.Provider placement="top end" />
    </>
  );
}