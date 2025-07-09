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
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onAfterOpenChange?: () => void;
  onCancel?: () => void;
  onSave?: () => void | boolean | Promise<void | boolean>;
}

export default function BaseModal({
  type = "alert",
  title,
  description,
  children,
  triggerButtonText = "Mở Modal",
  triggerButtonVariant = "default",
  closeText = "Đóng",
  saveText = "Lưu thay đổi",
  open,
  onOpenChange,
  onAfterOpenChange,
  onCancel,
  onSave,
}: BaseModalProps) {
  const isControlled = open !== undefined && onOpenChange !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (next: boolean) => {
    if (isControlled) {
      onOpenChange(next);
    } else {
      setInternalOpen(next);
    }

    onAfterOpenChange?.();
  };

  const handleSave = async () => {
    const result = await onSave?.();
    if (result !== false && !isControlled) {
      setInternalOpen(false);
    }
  };

  const handleCancel = () => {
    onCancel?.();
    if (!isControlled) setInternalOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {!isControlled && (
        <DialogTrigger asChild>
          <Button variant={triggerButtonVariant}>{triggerButtonText}</Button>
        </DialogTrigger>
      )}
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
