/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ data }) => {
  // console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
      className="w-full h-[60vh]  sm:text-left sm:flex sm:flex-col sm:justify-end  sm:items-start  p-[5%]  "
    >
      <h1 className="w-[70%] sm:text-4xl sm:mt-0 mt-10 text-2xl font-black  text-white ">
        {data.name || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] text-white sm:text-base text-xs sm:mt-3 mt-10 mb-3">
        {data.overview.slice(0, 200)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">
          more
        </Link>
      </p>
      <p className="text-white flex sm:mb-0 mb-12 ">
        <i className="text-yellow-500 ri-megaphone-fill"></i>
        {data.release_date || "No Information"}
        <i className="text-yellow-500 ml-5 ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-4 sm:mt-5  rounded text-white font-semibold bg-[#6556CD]">
        Watch Trailer
      </Link>
    </div>
  );
};
