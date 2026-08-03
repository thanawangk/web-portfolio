// Joins class fragments, dropping falsy values from conditional styling
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
