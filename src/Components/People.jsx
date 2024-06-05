import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Topnav } from "./partials/Topnav";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import { Loading } from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  document.title = "People ";
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");

  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      // setPopular(data.results);

      if (data.results.length > 0) {
        setperson((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setpage(1);
      setperson([]);
      GetPerson();
    }
  };

  // console.log(Popular)
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-screen h-screen  ">
      <div className=" fixed z-10 sm:px-[5%] mt-0  w-full bg-[#1F1E24]  flex  sm:flex-row flex-col items-center sm:gap-0 gap-10 justify-between">
        <h1 className="text-2xl  font-semibold sm:mr-0 mr-32  text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className=" sm:mr-6 mr-[100px] hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          People
        </h1>
        <div className="flex items-center sm:flex-row sm:gap-0 gap-5 flex-col sm:w-[80%]">
          <Topnav />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        laoder={<h1>Loading... </h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};
export default People;
