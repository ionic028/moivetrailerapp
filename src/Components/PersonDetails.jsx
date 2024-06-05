/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../Store/actions/personActions";
import { Link, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";
import Horizontalcards from "./partials/Horizontalcards";
import { Dropdown } from "./partials/Dropdown";

const PersonDetails = () => {
  document.title = "Persondetails";
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const [category, setcategory] = useState("movie");
  // console.log(info);
  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="px-[10%] w-screen flex-col sm:h-[200vh] h-[420vh] bg-[#1F1E24] ">
      <nav className="relative h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className=" mr-6 hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full flex  sm:flex-row flex-col justify-center">
        <div className="sm:w-[20%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgb(0,0,0,.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />

          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Personal Info
          </h1>
          <h1 className="text-lg text-zinc-400">Known For</h1>
          <h1 className=" text-zinc-400">{info.detail.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 mt-3">Gender</h1>
          <h1 className=" text-zinc-400">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 mt-3">Birthday</h1>
          <h1 className=" text-zinc-400">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 mt-3">Death Day</h1>
          <h1 className=" text-zinc-400">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>
          <h1 className="text-lg text-zinc-400 mt-3">Place of Birth</h1>
          <h1 className=" text-zinc-400">{info.detail.place_of_birth}</h1>
          <h1 className="text-lg text-zinc-400 mt-3">Also Known As</h1>
          <h1 className=" text-zinc-400">
            {info.detail.also_known_as.join(",")}
          </h1>
        </div>

        <div className="w-[80%] ml-[5%]">
          <h1 className="text-6xl text-zinc-400 font-black my-5">
            {info.detail.name}
          </h1>
          <h1 className="text-xl text-zinc-400">Biography</h1>
          <p className="text-zinc-400 mt-3">{info.detail.biography}</p>
          <h1 className="text-lg text-zinc-400 font-semibold mt-5">
            Known For{" "}
          </h1>
          <Horizontalcards data={info.combinedCredits.cast} />

          <div className="w-full flex sm:flex-row flex-col sm:gap-0 gap-10 sm:justify-between justify-center items-center">
            <h1 className="text-xl text-zinc-400">Acting</h1>

            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
          <div className=" list-disc text-zinc-400 w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl   shadow-[rgba(255,255,255,.3)] mt-5 border-2 border-zinc-700 p-5">
            {info[category + "Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-white duration-300 cursor-pointer"
              >
                <Link to={`/${category}/details/${c.id}`} className="">
                  <span>
                    {" "}
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
                  <span className="block ml-5 mt-2">
                    {c.character && `Character Name: ${c.character}`}{" "}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default PersonDetails;
