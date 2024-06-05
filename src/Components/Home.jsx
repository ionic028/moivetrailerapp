/* eslint-disable no-unused-vars */
import axios from "../utils/axios";
import React, { useState, useEffect } from "react";
import Sidenav from "./partials/Sidenav";
import { Topnav } from "./partials/Topnav";
import { Header } from "./partials/Header";
import Horizontalcards from "./partials/Horizontalcards";
import { Dropdown } from "./partials/Dropdown";
import { Loading } from "./Loading";
import BottomToggle from "./partials/BottomToggle";



const Home = () => {
  document.title = "Moive App | Homepage";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null)
  const [category, setcategory] = useState("all")
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      // console.log(data);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error", error);
    }
  };
  // console.log(wallpaper)

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      // console.log(data);

      settrending(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
     GetTrending();
  }, [category]);

  // console.log(trending)

  return wallpaper && trending ?(
    <>
      <Sidenav />

      <div className="sm:w-[80%] w-full h-full overflow-auto overflow-x-hidden">
        <Topnav />

        <Header data={wallpaper} />

        <div className="sm:flex  justify-between p-5">
        <h1 className="text-3xl font-semibold text-zinc-400 sm:mb-0 mb-4 ">Trending</h1> 
        <Dropdown className="" title="Filter" options={['tv', 'movie','all' ]} func={(e) => setcategory(e.target.value)}/>
      </div>


        <Horizontalcards data={trending}   />
        <BottomToggle/>
      </div>
    </>
  ):(
    <Loading/>
  );
};

export default Home;
