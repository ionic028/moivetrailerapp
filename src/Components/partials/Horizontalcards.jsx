/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg"

const Horizontalcards = ({ data, func }) => {
  return (
    <div className="w-[100%] flex h-[45vh] overflow-y-hidden  mb-5 p-5   ">
      {data.length >0 ? data.map((d, i) => (
        <Link to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="sm:min-w-[15%]  h-[50vh] bg-zinc-900 h-full mr-5 mb-5"
        >
          <img
            className="w-full h-[45%] object-cover"
            src={   d.backdrop_path || d.poster_path ?`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`: noimage
          }
            alt=""
          />

          <div className=" text-white p-3 h-[45%] overflow-y-auto">
            <h1 className="text-xl font-semibold ">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="">
              {d.overview.slice(0, 50)}...
              <span to="" className="text-zinc-300">
                more
              </span>
            </p>
          </div>
        </Link>
      )) : <h1 className="text-3xl text-white font-black text-center mt-5">Nothing to show</h1>}
    </div>
  );
};

export default Horizontalcards;
