/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../Store/actions/tvActions";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";
import Horizontalcards from "./partials/Horizontalcards";

const TvDetails = () => {
  document.title = "Tvdetails";
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  // console.log(info);
  useEffect(() => {
    dispatch(asyncloadtv(id));

    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="sm:w-screen sm:h-[160vh] sm:px-[10%] h-[270vh] overflow-y-hidden overflow-x-hidden"
    >
      <nav className="relative h-[10vh]  w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="  sm:mr-6 sm:ml-0 ml-6 mr-20 hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDB
        </a>
      </nav>

      <div className="w-full sm:flex relative mb-20 sm:mt-0 mt-10 sm:left-0 left-10  ">
        <img
          className="shadow-[8px_17px_38px_2px_rgb(0,0,0,.5)] sm:h-[50vh] h-[30vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] sm:mt-0 mt-10 text-white">
          <h1 className="sm:text-5xl text-xl font-black ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}

            <small className="text-3xl font-bold text-zinc-200">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>
          <div className="flex text-white items-center sm:gap-x-3 mt-3 mb-10  gap-x-1 ">
            <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className=" w-[60px] font-semibold sm:text-2xl leading-5">
              User Score
            </h1>
            <h1 className="sm:text-base text-xs">({info.detail.first_air_date})</h1>
            <h1 className="sm:text-base text-xs">{info.detail.genres.map((g, i) => g.name).join(",")}</h1>
          </div>

          <h1 className="sm:text-xl  font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="sm:text-xl  font-semibold mb-3 sm:mt-5 mt-72">Overview</h1>
          <p className="sm:text-base text-xs sm:mr-0 mr-20 ">{info.detail.overview}</p>

          <h1 className="text-xl mb-3 mt-3">Tv Translated</h1>
          <p className="mb-10 sm:text-base text-xs sm:mr-0 mr-20  ">{info.translations.join(", ")}</p>
          <Link
            className="absolute  sm:top-20 top-12 right-[60px] sm:right-3 py-5 px-5  bg-[#6556CD] rounded-lg"
            to={`${pathname}/trailer`}
          >
            {" "}
            <i className="text-xl mr-2 ri-play-fill"></i>Play Trailer
          </Link>
        </div>
      </div>

      <div className="absolute top-[57%] sm:left-12 left-5   sm:w-[20%] w-[7%] flex flex-col sm:gap-y-5 sm:mt-10 mt-32 ">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex sm:gap-x-10 gap-x-5  items-center text-white">
            <h1 className="text-base sm:text-xs whitespace-nowrap">Available on Platfroms</h1>

            {info.watchproviders.flatrate.map((w, i) => (
              <img
                title={w.provider_name}
                key={i}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex sm:gap-x-10 gap-x-5 items-center mt-5 text-white">
            <h1 className="text-base sm:text-xs">Available on Rent</h1>

            {info.watchproviders.rent.map((w, i) => (
              <img
                title={w.provider_name}
                key={i}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex sm:gap-x-10 gap-x-5  items-center mt-5 text-white">
            <h1 className="text-base sm:text-xs">Available to Buy</h1>

            {info.watchproviders.buy.map((w, i) => (
              <img
                title={w.provider_name}
                key={i}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      <h1 className="text-3xl font-bold sm:text-left text-center text-white sm:mt-0 mt-10">Seasons</h1>
      <div className="w-[100%] flex  overflow-y-hidden mb-5 p-5 ">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <div key={i} className="w-[15vh] mr-[11%]">
              <img
                className="shadow-[8px_17px_38px_2px_rgb(0,0,0,.5)] min-w-[14vw] h-[30vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                alt=""
              />
              <h1 className="text-2xl mt-3 text-zinc-300 font-semibold">
                {s.name}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-3xl text-white font-black text-center mt-5">
            Nothing to show
          </h1>
        )}
      </div>

      <h1 className="sm:text-2xl text-xl sm:mt-0 mt-10 sm:text-left text-center font-semibold text-white">
        Recommendations & Similar Stuff
      </h1>
      <Horizontalcards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
