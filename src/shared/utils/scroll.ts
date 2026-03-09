export function scrollToSection(id: string): void {
  if (typeof document === 'undefined') return;

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

