import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { LucideIcon } from 'lucide-react-native';
import { cssInterop } from 'nativewind';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function iconWithClassName(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}

export function getInitials(name: string) {
  if (!name) return ''

  const parts = name.split(' ')

  const initials = parts
    .map((part) => part.charAt(0).toUpperCase())
    .join('')

  return initials
}