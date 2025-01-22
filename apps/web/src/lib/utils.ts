import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { PresenceEvent, PresenceOrganization } from "@/types/presence"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string) {
  if (!name) return ''

  const parts = name.split(' ')

  const initials = parts
    .map((part) => part.charAt(0).toUpperCase())
    .join('')

  return initials
}