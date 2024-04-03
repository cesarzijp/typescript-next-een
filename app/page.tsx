"use client";

import PartijKnoppen from "@/components/partijKnoppen";
import ZetelData from "@/components/zeteldata";
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
    { zetels: 24, naam: "VVD", kleur: "#7C4DFF" },
    { zetels: 25, naam: "GLPvdA", kleur: "#FFC107" },
    { zetels: 37, naam: "PVV", kleur: "#4CAF50" },
    { zetels: 20, naam: "NSC", kleur: "#FFC07F" },
    { zetels: 9, naam: "D66", kleur: "#9FE77E" },
    { zetels: 7, naam: "BBB", kleur: "#52796f" },
    { zetels: 5, naam: "CDA", kleur: "#5FA72C" },
    { zetels: 5, naam: "SP", kleur: "#E1220D" },
    { zetels: 3, naam: "FvD", kleur: "#B91BD5" },
    { zetels: 3, naam: "SGP", kleur: "#66C1DA" },
    { zetels: 3, naam: "CU", kleur: "#A3FF6A" },
    { zetels: 3, naam: "Denk", kleur: "#6A96FF" },
    { zetels: 2, naam: "Volt", kleur: "#441E67" },
    { zetels: 1, naam: "Ja21", kleur: "#1E6738" },
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
    <main className='flex min-h-screen flex-col items-center gap-3 p-2 container max-w-96 mx-auto'>
      <h1 className=' text-2xl font-bold'>Coalitie bouwer</h1>
      <PartijKnoppen
        onPartijClick={partijClickHandler}
        partijData={partijData}
        partijLijst={partijLijst}
      />
      <ZetelData partijLijst={partijLijst} />
      <ZetelLayout zetelArray={zetelArray} />
    </main>
  );
}
