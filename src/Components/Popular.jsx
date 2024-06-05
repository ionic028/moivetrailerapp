// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Topnav } from "./partials/Topnav";
import { Dropdown } from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import { Loading } from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
 

  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");

  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "Pouplar "  + category.toUpperCase();


  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);



      // setPopular(data.results);

      if (data.results.length > 0) {
        setpopular((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setpopular([]);
      GetPopular();
    }
  };

  // console.log(Popular)
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen  ">
      <div className=" fixed z-10 sm:px-[5%] mt-0  w-full bg-[#1F1E24]  flex  sm:flex-row flex-col items-center sm:gap-0 gap-4 justify-between">
        <h1 className=" text-2xl   font-semibold sm:mr-0 mr-32  text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className=" sm:mr-6 mr-[100px] hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Popular
        </h1>
        <div className="flex items-center sm:flex-row sm:gap-0 gap-5 flex-col sm:w-[80%]">
          <Topnav />

          <Dropdown
            title="Category"
            options={["tv", "movie"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        laoder={<h1>Loading... </h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
