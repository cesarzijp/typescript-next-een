"use client";
import React from "react";
import tweedeKamerImg from "../assets/tweedekamer.png";

type ZetelLayoutProps = {
  zetelArray: zetelArrayType;
};

type zetelArrayType = { naam: string; kleur: string }[];

export default function ZetelLayout({ zetelArray }: ZetelLayoutProps) {
  return (
    <>
      <div
        className='zetel-bolletjes'
        style={{ backgroundImage: `url(${tweedeKamerImg.src})` }}
      >
        {zetelArray.map((item, index) => (
          <div
            key={index}
            id={`zetel-${index}`}
            style={{ backgroundColor: item.kleur }}
          >
            {item.naam}
          </div>
        ))}
      </div>
    </>
  );
}
