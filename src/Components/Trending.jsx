// eslint-disable-next-line no-unused-vars
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Topnav } from "./partials/Topnav";
import { Dropdown } from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import { Loading } from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {

  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "Trending "  + category.toUpperCase();


  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

      // console.log(data);

      // settrending(data.results);

      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };

  // console.log(trending)
  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className=" fixed z-10 w-full sm:px-[5%]  flex sm:flex-row flex-col   sm:gap-0 gap-4 items-center  justify-between bg-[#1F1E24]">
        <h1 className=" z-10  sm:mr-0 mr-32  text-2xl font-semibold   text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="   sm:mr-6 mr-[100px] hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="flex items-center sm:flex-row flex-col sm:gap-0 gap-2  sm:w-[80%]">
          <Topnav/>
             
          <Dropdown
            title="Category"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>

          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        laoder={<h1>Loading... </h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
