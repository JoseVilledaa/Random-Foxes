import React from "react";

//Funcion para generar numeros del 1 al 123
const generateRandomNumber = (): number => Math.floor(Math.random() * 123) + 1;

console.log(generateRandomNumber)   

export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${generateRandomNumber()}.jpg`;

  return <img width={320} height="auto" className="rounded" src={image} />;
};
