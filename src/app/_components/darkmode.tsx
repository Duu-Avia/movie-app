"use client";
import { useState } from "react";

export function DarkMode({ isClicked }) {
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
  };

  const setWhiteMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "white");
  };
  if (isClicked === true) {
    setDarkMode;
  } else setWhiteMode;
  DarkMode({ isClicked });
  return <></>;
}
