export const isMobile = () => {
  return window.innerWidth < 780;
}

export const shift = () => {
  if (isMobile()) {
    return 20;
  }
  return Math.max(60, (window.innerWidth - 1300) / 2);
}