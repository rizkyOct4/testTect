"use client";

import React, { useContext } from "react";
import { eachCategoriesContext } from "@/app/context";
import { useEachCategories } from "../hook/hook-each-categories";
import { indexContext } from "@/app/context";

interface EachCategoriesProviderProps {
  children: React.ReactNode;
}

const EachCategoriesContext: React.FC<EachCategoriesProviderProps> = ({
  children,
}) => {
  const { categoryActive } = useContext(indexContext);

  const data = useEachCategories(categoryActive);
  const values = {
    ...data,
  };

  return (
    <eachCategoriesContext.Provider value={values}>
      {children}
    </eachCategoriesContext.Provider>
  );
};

export default EachCategoriesContext;
