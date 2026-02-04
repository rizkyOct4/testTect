"use client";

import React, { useState } from "react";
import { indexContext } from "@/app/context";
import { useIndex } from "../hook/hook-index";

interface IndexProviderProps {
  children: React.ReactNode;
}

export type CategoryType =
  | "terkini"
  | "nasional"
  | "internasional"
  | "ekonomi"
  | "olahraga"
  | "teknologi"
  | "hiburan"
  | "gaya-hidup"
  | "";

const IndexContext: React.FC<IndexProviderProps> = ({ children }) => {
  const [categoryActive, setCategoryActive] = useState<CategoryType>("");

  const data = useIndex();
  const values = {
    ...data,
    categoryActive,
    setCategoryActive,
  };

  return (
    <indexContext.Provider value={values}>{children}</indexContext.Provider>
  );
};

export default IndexContext;
