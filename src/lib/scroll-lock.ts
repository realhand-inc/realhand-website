let lockCount = 0;
let previousHtmlOverflow = "";
let previousBodyOverflow = "";
let previousScrollbarWidth = "";

const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

export const lockBodyScroll = () => {
  lockCount += 1;
  if (lockCount > 1) return;

  const html = document.documentElement;
  previousHtmlOverflow = html.style.overflow;
  previousBodyOverflow = document.body.style.overflow;
  previousScrollbarWidth = html.style.getPropertyValue("--scrollbar-width");

  const scrollbarWidth = getScrollbarWidth();
  html.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
  html.classList.add("scroll-locked");
  html.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

export const unlockBodyScroll = () => {
  if (lockCount === 0) return;
  lockCount -= 1;
  if (lockCount > 0) return;

  const html = document.documentElement;
  html.classList.remove("scroll-locked");
  html.style.overflow = previousHtmlOverflow;
  document.body.style.overflow = previousBodyOverflow;

  if (previousScrollbarWidth) {
    html.style.setProperty("--scrollbar-width", previousScrollbarWidth);
  } else {
    html.style.removeProperty("--scrollbar-width");
  }
};
