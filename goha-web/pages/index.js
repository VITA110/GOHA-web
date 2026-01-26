"use client";

import useViewport from "../hooks/useViewport";
import HomeDesktop from "./home/HomeDesktop";
import HomeMobile from "./home/HomeMobile";

export default function Home() {
  const isMobile = useViewport(768);

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
