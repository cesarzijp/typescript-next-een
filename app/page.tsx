"use client";

import PartijKnoppen from "@/components/partijKnoppen";
import ZetelLayout from "@/components/zetellayout";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  interface partijLijstType {
    naam: string;
    zetels: number;
    kleur: string;
  }
  interface partijLijsttArray extends Array<partijLijstType> {}

  type zetelArrayType = { naam: string; kleur: string }[];

  const [partijLijst, setPartijLijst] = useState<partijLijsttArray>([]);

  const partijData = [
    {
      naam: "VVD",
      zetels: 10,
      kleur: "#0066ff",
    },
    {
      naam: "Groen Links",
      zetels: 15,
      kleur: "#68edc6",
    },
    {
      naam: "NSC",
      zetels: 22,
      kleur: "#6699ff",
    },
    {
      naam: "PvdA",
      zetels: 26,
      kleur: "#f24c00",
    },
  ];

  let zetelArray: zetelArrayType = [];

  partijLijst.forEach((item) => {
    for (let i = 0; i < item.zetels; i++) {
      zetelArray.unshift({
        naam: item.naam,
        kleur: item.kleur,
      });
    }
  });

  console.log("zetelArray ", zetelArray);

  // voeg partijen toe aan DotList
  const partijClickHandler = (data: {
    naam: string;
    zetels: number;
    kleur: string;
  }) => {
    let actievePartijen: string[] = [];

    partijLijst.forEach((listItem) => {
      actievePartijen.push(listItem.naam);
    });

    console.log("actievePartijen", actievePartijen);
    if (!actievePartijen.includes(data.naam)) {
      setPartijLijst((prev) => [data, ...prev]);
    } else {
      setPartijLijst((prev) => {
        let filteredData = prev.filter((item) => {
          return item.naam !== data.naam;
        });
        return filteredData;
      });
    }
    actievePartijen = [];
  };

  console.log(partijLijst);

  return (
    <main className='flex min-h-screen flex-col items-center gap-3 p-24'>
      <h1>Hello world</h1>
      <PartijKnoppen
        onPartijClick={partijClickHandler}
        partijData={partijData}
        partijLijst={partijLijst}
      />
      <ZetelLayout zetelArray={zetelArray} />
    </main>
  );
}
