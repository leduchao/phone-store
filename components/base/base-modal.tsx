"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type ModalType = "form" | "alert" | "confirmation" | "custom";

interface BaseModalProps {
  type?: ModalType;
  title: string;
  description?: string;
  children: React.ReactNode;
  triggerButtonText?: string;
  triggerButtonVariant?: "default" | "outline";
  closeText?: string;
  saveText?: string;
  onAfterOpenChange?: () => void;
  onCancel?: () => void;
  onSave?: () => void | boolean | Promise<void | boolean>;
}

export default function BaseModal({
  type = "alert",
  title,
  description,
  children,
  triggerButtonText = "Open Modal",
  triggerButtonVariant = "default",
  closeText = "Close",
  saveText = "Save changes",
  onAfterOpenChange,
  onCancel,
  onSave,
}: BaseModalProps) {
  const [open, setOpen] = useState(false);

  const handleSave = async () => {
    const result = await onSave?.();
    if (result !== false) {
      setOpen(false);
    }
  };

  const handleCancel = () => {
    onCancel?.();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        onAfterOpenChange?.();
      }}
    >
      <DialogTrigger asChild>
        <Button variant={triggerButtonVariant}>{triggerButtonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            {closeText}
          </Button>
          {type === "form" && <Button onClick={handleSave}>{saveText}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
