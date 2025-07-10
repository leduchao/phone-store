"use client";

import { useAuth } from "@/context/auth.context";
import SignInModal from "./sign-in-modal";
import { ReactNode } from "react";
import { useModal } from "@/hooks/useModal";

interface RequireSignInProp {
  children: ReactNode;
  onContinue: () => void;
}

export default function RequireSignIn({
  children,
  onContinue,
}: RequireSignInProp) {
  const { isAuthenticated } = useAuth();
  const { isOpen, open, toggle } = useModal();

  const handleAction = () => {
    if (isAuthenticated) {
      onContinue();
    } else {
      open();
    }
  };

  return (
    <>
      <div onClick={handleAction}>{children}</div>
      <SignInModal open={isOpen} onOpenChange={toggle} />
    </>
  );
}
