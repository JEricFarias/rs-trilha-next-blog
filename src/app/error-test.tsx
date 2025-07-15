"use client";
import { useEffect } from "react";

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error("Não foi possivel acessar o conteudo.");
  }, []);

  return <h2 className="mt-20 text-white">componente com erro</h2>;
};
