import { useEffect, useRef } from "react"; 

export const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add("reveal-visible");
            }
          }, delay);
          observer.unobserve(ref.current); // Stop observing once visible
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="reveal opacity-0 transition-opacity duration-700 ease-out">
      {children}
    </div>
  );
};
