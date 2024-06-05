import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Topnav } from "./partials/Topnav";
import { Dropdown } from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import { Loading } from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshows = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");

  const [tv, settvshows] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "Tv Shows " + category.toUpperCase();

  const GetTvshows = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      // setPopular(data.results);

      if (data.results.length > 0) {
        settvshows((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
      GetTvshows();
    } else {
      setpage(1);
      settvshows([]);
      GetTvshows();
    }
  };

  // console.log(Popular)
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tv.length > 0 ? (
    <div className="w-screen h-screen  ">
      <div className=" fixed z-10 sm:px-[5%] mt-0  w-full bg-[#1F1E24]  flex  sm:flex-row flex-col items-center sm:gap-0 gap-4 justify-between">
        <h1 className="text-2xl font-semibold sm:mr-0 mr-20 text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="sm:mr-6 mr-12  hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Tv Shows <small className="text-xs">({category})</small>
        </h1>
        <div className="flex items-center sm:flex-row sm:gap-0 gap-5 flex-col sm:w-[80%]">
          <Topnav />

          <Dropdown
            title="Category"
            options={["on_the_air", "popular","top_rated", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTvshows}
        hasMore={hasMore}
        laoder={<h1>Loading... </h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;
