"use client";

type partijDataProps = {
  partijData: { naam: string; zetels: number; kleur: string }[];
  onPartijClick: (data: any) => void;
  partijLijst: partijLijsttArray;
};

interface partijLijstType {
  naam: string;
  zetels: number;
  kleur: string;
}
interface partijLijsttArray extends Array<partijLijstType> {}

export default function PartijKnoppen({
  partijData,
  onPartijClick,
  partijLijst,
}: partijDataProps) {
  let actievePartijen: string[] = [];

  partijLijst.forEach((listItem) => {
    actievePartijen.push(listItem.naam);
  });

  console.log("actievePartijen 2", actievePartijen);

  return (
    <div>
      {partijData.map((partij) => (
        <button
          onClick={onPartijClick.bind(null, partij)}
          className={`px-3 py-1 border-[1px] hover:bg-gray-900 hover:border-gray-600 border-gray-800 rounded-lg m-2 ${
            actievePartijen.includes(partij.naam)
              ? "bg-green-900 border-green-700 hover:bg-green-800 hover:border-green-600 "
              : ""
          } `}
          key={partij.naam}
        >
          {partij.naam}{" "}
          <span className=' text-opacity-40 text-white'>({partij.zetels})</span>
        </button>
      ))}
    </div>
  );
}
