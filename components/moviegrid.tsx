"use client";

import React from "react";

type MovieGridProps = {
  showFavorites: Boolean;
  title: String;
};

export default function MovieGrid({ showFavorites, title }: MovieGridProps) {
  return (
    <div>
      <p>{title}</p>
      {showFavorites && <p>Favories</p>}
    </div>
  );
}
