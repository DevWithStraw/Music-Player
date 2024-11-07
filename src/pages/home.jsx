import React, { useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import HeaderTitle from "../layouts/HeaderTitle";
import "./home.scss";
import Music from "../components/Music";
import { useQuery } from "@tanstack/react-query";
import CategoryList from "../layouts/CategoryList";
import Category from "../components/Category";

function Home() {
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("");

  const {
    data: songs,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["songs"],
    queryFn: () =>
      axios.get("http://localhost:3000/songs").then((res) => res.data),
  });

  const {data : filteredCat , refetch , } = useQuery( {
    refetchInterval : 100,
    queryKey: ["categoryList"],
    queryFn : () => axios.get(`http://localhost:3000/songs?category=${filteredCategory}`).then((res) => res.data),
  })

  function handleSearch(filteredData) {
    setFilteredSongs(filteredData);
    refetch;
    console.log(dataUpdatedAt)
  }

  function handleCategory(filteredData) {
    setFilteredCategory(filteredData);
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const songsToDisplay = filteredSongs.length > 0 ? filteredSongs : songs;
  // const categoryToDisplay = filteredCategory === "" ? filteredCat : filteredCategory;

  return (
    <div className="main">
      <HeaderTitle />
      <Search onSearch={handleSearch} />

      <CategoryList filteredCategory={handleCategory} />

      {filteredCat?.map((category) => (
        <Category
          key={category.id}
          imageSrc={category.imageSrc}
          title={category.title}
          subtitle={category.artist}
        />
      ))}

      {songsToDisplay?.map((music) => (
        <Music
          key={music.id}
          imageSrc={music.imageSrc}
          songName={music.songName}
          artist={music.artist}
          timeline={music.timeline}
        />
      ))}
    </div>
  );
}

export default Home;
