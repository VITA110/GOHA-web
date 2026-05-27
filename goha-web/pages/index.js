"use client";

import useViewport from "../hooks/useViewport";
import HomeDesktop from "./home/HomeDesktop";
import HomeMobile from "./home/HomeMobile";

export default function Home() {
  const isMobile = useViewport(138);//0

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
