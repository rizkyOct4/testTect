"use client";

import React from "react";
import { indexContext } from "@/app/context";
import { useIndex } from "../hook/hook-index";

interface IndexProviderProps {
  children: React.ReactNode;
}

const IndexContext: React.FC<IndexProviderProps> = ({ children }) => {
  const data = useIndex();
  const values = {
    ...data,
  };

  return (
    <indexContext.Provider value={values}>{children}</indexContext.Provider>
  );
};

export default IndexContext;
