"use client";

import { useState } from "react";

export function useOptionSelection(initialValue = "") {
  const [selectedOption, setSelectedOption] = useState(initialValue);

  return {
    selectedOption,
    setSelectedOption,
  };
}
