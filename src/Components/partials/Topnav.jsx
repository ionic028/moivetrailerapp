// eslint-disable-next-line no-unused-vars

import axios from "../../utils/axios";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

export const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  // console.log(query);

  // eslint-disable-next-line no-unused-vars
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);

      // console.log(data);
      setsearches(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    GetSearches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="sm:w-[80%] h-[10vh] relative flex  mx-auto items-center  px-10 sm:px-0 mt-2 sm:mt-0 ">
      <i className="sm:text-3xl text-xl   text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="sm:w-[50%] w-[100%]  text-white mx-10  sm:p-5 py-10 sm:text-xl outline-none border-none bg-transparent" 
        type="text" 
        name=""
        id=""
        placeholder="Search anything"
      />

      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-3xl  text-zinc-200 ri-close-fill sm:right-0"
        ></i>
      )}

      <div className=" z-[100] absolute  sm:w-[50%] w-[80%] bg-zinc-200 max-h-[50vh] top-[100%] sm:left-[10%] overflow-auto rounded ">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300  font-semibold w-[100%] text-zinc-600 p-10 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>{s.name || s.original_name || s.original_title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
