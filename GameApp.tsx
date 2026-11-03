"use client";

import { useEffect } from "react";
import { MARKUP } from "@/game/markup";

export default function GameApp() {
  useEffect(() => {
    // The game module runs once (cached) after the DOM markup is in the document.
    import("@/game/game");
  }, []);

  return <div id="root" dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
