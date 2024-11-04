import axios from "axios";
import Search from "../components/Search";
import HeaderTitle from "../layouts/HeaderTitle";
import "./home.scss";

import { useQuery } from "@tanstack/react-query";
import Music from "../components/Music";

import { index } from "../components/Search";

function Home() {
  console.log(index)

  const {data , isLoading , error , isError} = useQuery({
    queryKey : ["songs"],
    queryFn : () => axios.get('http://localhost:3000/songs').then(res => res.data)
  })

  return (
    <div className="main">
      <HeaderTitle />
      <Search />

      {data?.map((music)=>(
        <Music key={music.id} imageSrc={music.imageSrc} songName={music.songName} artist={music.artist} timeline={music.timeline} />
      ))}
    </div>
  );
}

export default Home;
