import Lenis from "lenis";
import { useEffect } from "react";
import type { ReactNode } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const stop = () => lenis.stop();
    const start = () => lenis.start();

    window.addEventListener("lenis:stop", stop);
    window.addEventListener("lenis:start", start);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener("lenis:stop", stop);
      window.removeEventListener("lenis:start", start);
    };
  }, []);

  return <>{children}</>;
}
