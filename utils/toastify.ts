"use client"

import { toast } from "sonner";

export function toastified(msg: string): void {
  toast(msg, {duration: 3000})
}