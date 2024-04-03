import React from "react";

type partijDataProps = {
  partijLijst: partijLijsttArray;
};

interface partijLijstType {
  naam: string;
  zetels: number;
  kleur: string;
}
interface partijLijsttArray extends Array<partijLijstType> {}

export default function ZetelData({ partijLijst }: partijDataProps) {
  const berekenTotaalZetels = () => {
    let totaal = 0;
    partijLijst.forEach((item) => {
      totaal += item.zetels;
    });
    return totaal.toString();
  };

  const zetelAantal = berekenTotaalZetels();

  const berekenPercentageZetels = (): number => {
    let totaal: number = 0;
    partijLijst.forEach((item) => {
      totaal += item.zetels;
    });
    return Math.round((totaal / 150) * 100);
  };

  let meerderheid = false;

  if (berekenPercentageZetels() >= 50) {
    meerderheid = true;
  }

  const zetelPercentage = berekenPercentageZetels().toString();

  return (
    <div className=' flex w-full justify-between  '>
      <span>{zetelAantal} zetels</span>
      <span className={`${meerderheid ? "text-green-600 font-bold " : ""}`}>
        {zetelPercentage}%
      </span>
    </div>
  );
}
