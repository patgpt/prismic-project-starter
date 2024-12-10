import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using `clsx` and merges Tailwind CSS classes using `twMerge`.
 *
 * @param {...ClassValue[]} args - The class names to combine.
 * @returns {string} The combined class string.
 */
export default function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
