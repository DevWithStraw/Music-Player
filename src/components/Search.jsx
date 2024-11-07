import React from "react";
import "./Search.scss";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Search({ onSearch }) {
  const { data } = useQuery({
    queryKey: ["search"],
    queryFn: () =>
      axios.get("http://localhost:3000/songs").then((res) => res.data),
  });

  function handleSearch(input) {
    if (data) {
      const matchedSongs = data.filter((item) =>
        item.songName.toLowerCase().startsWith(input.toLowerCase())
      );
      onSearch(matchedSongs);
    }
  }

  return (
    <div className="search-container">
      <img src="/assets/search.svg" alt="search icon" />
      <input
        className="poppins-regular"
        type="search"
        onInput={(event) => handleSearch(event.target.value)}
        placeholder="Search Song, playlist, artist"
      />
    </div>
  );
}