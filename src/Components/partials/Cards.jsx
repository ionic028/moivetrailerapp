/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";
const Cards = ({ data, title }) => {
  // console.log(title)
  return (
    <div className="flex flex-wrap w-full p-20 sm:my-5 my-40 sm:mt-0 mt-52 items-center justify-center bg-[#1F1E24]  ">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          key={i}
          className="relative w-[25vh] mr-[2%] hover:scale-75  mb-[5%] "
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgb(0,0,0,.5)] w-full h-full object-cover"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-2xl mt-2 text-zinc-300 font-semibold">
            {c.name || c.original_name || c.original_title}
          </h1>
          {c.vote_average && (
            <div className="  absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(c.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
