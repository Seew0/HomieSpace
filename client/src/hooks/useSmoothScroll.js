import { useRef } from "react";

const useSmoothScroll = () => {
  const scrollRef = useRef();

  const smoothScroll = (target) => {
    const element = target ? document.querySelector(target) : null;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return { smoothScroll, scrollRef };
};

export default useSmoothScroll;
