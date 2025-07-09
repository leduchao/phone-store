"use client";

import { useAuth } from "@/context/auth.context";
import { useModal } from "@/hooks/useModal";
import SignInModal from "./sign-in-modal";

export default function RequireSignIn({
  children,
  onContinue,
}: {
  children: React.ReactNode;
  onContinue: () => void;
}) {
  const { isAuthenticated } = useAuth();
  const { isOpen, open, close } = useModal();

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
      <SignInModal
        isOpen={isOpen}
        onOpenChange={close}
        onSuccess={onContinue}
      />
    </>
  );
}
