import { useActiveSectionContext } from "@/context/active-section-context";
import { MutableRefObject, useEffect, useLayoutEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/context/active-section-context";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref }
}

interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = (ref: MutableRefObject<HTMLElement | null>): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight
        });
      }
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [ref]);

  return dimensions;
};
