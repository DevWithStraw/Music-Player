import React, { useState } from "react";
import "./home.scss";

import HeaderTitle from "../layouts/HeaderTitle";
import CategoryList from "../layouts/CategoryList";

import Search from "../components/Search";
import Music from "../components/Music";
import Category from "../components/Category";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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

  const { data: filteredCat, refetch } = useQuery({
    refetchInterval: 100,
    queryKey: ["categoryList"],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/songs?category=${filteredCategory}`)
        .then((res) => res.data),
  });

  function handleSearch(filteredData) {
    setFilteredSongs(filteredData);
    refetch;
    console.log(dataUpdatedAt);
  }

  function handleCategory(filteredData) {
    setFilteredCategory(filteredData);
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const songsToDisplay = filteredSongs.length > 0 ? filteredSongs : songs;

  return (
    <div className="main">
      <HeaderTitle />
      <Search onSearch={handleSearch} />

      <CategoryList filteredCategory={handleCategory} />

      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        freeMode={true}
        modules={[FreeMode]}
        className="category-swipers"
      >
        {filteredCat?.map((category) => (
          <SwiperSlide key={category.id}>
            <Category
              imageSrc={category.imageSrc}
              title={category.title}
              subtitle={category.artist}
            />
          </SwiperSlide>
        ))}
      </Swiper>

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
