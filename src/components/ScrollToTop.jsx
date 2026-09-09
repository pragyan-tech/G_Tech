import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Reset scroll on route change. When the URL carries a hash (e.g. the home-page
   industry cards link to /industries#construction), scroll that section into
   view instead — its scroll-margin-top keeps it clear of the sticky header. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
