"use client";

import React from "react";
import { detailContext } from "@/app/context";
import { useDetail } from "../hook/hook-detail";

interface DetailProviderProps {
  children: React.ReactNode;
}

const DetailContext: React.FC<DetailProviderProps> = ({ children }) => {
  const a = useDetail();
  const values = {
    ...a,
  };

  return (
    <detailContext.Provider value={values}>{children}</detailContext.Provider>
  );
};

export default DetailContext;
