import React, { useState } from "react";
import "./Search.scss";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export let index;

export default function Search() {
  const { data } = useQuery({
    queryKey: ["search"],
    queryFn: () =>
      axios.get("http://localhost:3000/songs").then((res) => res.data),
  });


  function songName(input) {
    const matchedSong = data.find((item) => item.songName === input);

    if (matchedSong.songName === input) {
      index = matchedSong;
    }
  }

  return (
    <div className="search-container">
      <img src="/assets/search.svg" alt="search icon" />
      <input
        className="poppins-regular"
        type="search"
        onInput={(event) => songName(event.target.value)}
        placeholder="Search Song,playlist,artist"
      />
    </div>
  );
}
