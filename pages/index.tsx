import Image from "next/image";
import type { MouseEventHandler } from "react";
import { useState } from "react";
import { Inter } from "next/font/google";
import { RandomFox } from "@/components/RandomFox";
import { log } from "console";

const inter = Inter({ subsets: ["latin"] });

type ImageItem = { id: string; url: string };

const generateRandomNumber = (): number => Math.floor(Math.random() * 123) + 1;

const generateId = (): string =>
  Math.random().toString(36).substring(2) + Date.now().toString(36);

export default function Home() {
  //Otra Opcion es  = useState<Array<string>>
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {

    const newImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${generateRandomNumber()}.jpg`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold">Hola Guate!</h1>
      <button onClick={addNewFox}> Add a new Fox </button>
      {images.map((i) => (
        <div key={i.id} className="p-4">
          <RandomFox image={i.url} />
        </div>
      ))}
    </main>
  );
}

