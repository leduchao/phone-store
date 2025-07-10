"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type ModalType = "form" | "alert" | "custom";

interface BaseModalProps {
  type?: ModalType;
  title: string;
  description?: string;
  children: React.ReactNode;
  closeText?: string;
  saveText?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAfterOpenChange?: () => void;
  onCancel?: () => void;
  onSave?: () => void | boolean | Promise<void | boolean>;
}

export default function BaseModal({
  type = "alert",
  title,
  description,
  children,
  closeText = "Đóng",
  saveText = "Lưu thay đổi",
  open,
  onOpenChange,
  onAfterOpenChange,
  onCancel,
  onSave,
}: BaseModalProps) {
  const handleSave = async () => {
    const result = await onSave?.();
    if (result !== false) {
      onOpenChange(false);
      onAfterOpenChange?.();
    }
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : (
            <DialogDescription />
          )}
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
