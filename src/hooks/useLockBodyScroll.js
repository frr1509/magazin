// import { useEffect } from "react";

// export function useLockBodyScroll(lock, fixedSelector = null) {
//     useEffect(() => {
//         if (lock) {
//             document.body.style.overflow = "hidden";
//             document.body.style.paddingRight = "15px";
//             if (fixedSelector) {
//                 const fixedEl = document.querySelector(fixedSelector);
//                 if (fixedEl) fixedEl.style.paddingRight = "55px";
//             }
//         } else {
//             document.body.style.overflow = "";
//             document.body.style.paddingRight = "";
//             if (fixedSelector) {
//                 const fixedEl = document.querySelector(fixedSelector);
//                 if (fixedEl) fixedEl.style.paddingRight = "";
//             }
//         }
//         return () => {
//             document.body.style.overflow = "";
//             document.body.style.paddingRight = "";
//             if (fixedSelector) {
//                 const fixedEl = document.querySelector(fixedSelector);
//                 if (fixedEl) fixedEl.style.paddingRight = "";
//             }
//         };
//     }, [lock, fixedSelector]);
// }

import { useEffect, useRef } from "react";

function getScrollbarWidth() {
  const scrollDiv = document.createElement("div");
  scrollDiv.style.visibility = "hidden";
  scrollDiv.style.overflow = "scroll";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  scrollDiv.style.width = "100px";
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

export function useLockBodyScroll(lock, fixedSelector = null) {
  const originalBodyPadding = useRef();
  const originalFixedPadding = useRef();

  useEffect(() => {
    const scrollbarWidth = getScrollbarWidth();
    const fixedEl = fixedSelector ? document.querySelector(fixedSelector) : null;

    if (lock) {
      originalBodyPadding.current = document.body.style.paddingRight;
      if (fixedEl) {
        originalFixedPadding.current = fixedEl.style.paddingRight;
      }


      const hadScrollbar = window.innerWidth > document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";

      if (hadScrollbar) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        if (fixedEl) fixedEl.style.paddingRight = `${scrollbarWidth + 40}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = originalBodyPadding.current || "";
      if (fixedEl) fixedEl.style.paddingRight = originalFixedPadding.current || "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = originalBodyPadding.current || "";
      if (fixedEl) fixedEl.style.paddingRight = originalFixedPadding.current || "";
    };
  }, [lock, fixedSelector]);


  useEffect(() => {
    if (!lock) {
      const handleResize = () => {
        const scrollbarWidth = getScrollbarWidth();
        const hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
        if (!hasScrollbar) {
          document.body.style.paddingRight = `${scrollbarWidth}px`;
          if (fixedSelector) {
            const fixedEl = document.querySelector(fixedSelector);
            if (fixedEl) fixedEl.style.paddingRight = `${scrollbarWidth + 40}px`;
          }
        } else {
          document.body.style.paddingRight = "";
          if (fixedSelector) {
            const fixedEl = document.querySelector(fixedSelector);
            if (fixedEl) fixedEl.style.paddingRight = "";
          }
        }
      };
      window.addEventListener("resize", handleResize);
     
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [lock, fixedSelector]);
}
