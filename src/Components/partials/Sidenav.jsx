// eslint-disable-next-line no-unused-vars

import { Link } from "react-router-dom";


const Sidenav = () => {

  // eslint-disable-next-line no-unused-vars
  

  return (
    <div className="      w-[20%] h-full border-r-2 border-zinc-400 p-5 hidden sm:block ">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2 "></i>
        <span className="">MOVIE APP.</span>
      </h1>
      <nav className="flex flex-col  text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-8 mb-5 ">
          New feeds             
        </h1>                   

        <Link to={"/trending" } className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-2 "> <i className="ri-fire-fill mr-2"></i> Trending</Link>
        <Link to={"/popular" } className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-2 "><i className="ri-bard-fill mr-2"></i> Popular</Link>
        <Link to={"/movie" } className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-2 "> <i className="ri-movie-fill mr-2 "></i>Movies</Link>
        <Link to={"/tvshows" } className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-2 "> <i className="ri-tv-2-fill mr-2"></i>Tv Show</Link>
        <Link to={"/person" } className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-2 "> <i className="ri-team-fill mr-2"></i>People</Link>
      </nav>
      <hr  className="border-none h-[1px] bg-zinc-400 mt-5"/>
      <nav className="flex flex-col  text-zinc-400 text-xl gap-3 mt-2">
      <h1 className="text-white font-semibold text-xl mt-5 mb-2 mr-2">
           Website Information          
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-3 ">  <i className="ri-phone-fill mr-2              "></i> About</Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-3 "> <i className="ri-information-fill mr-2"></i> Contact US</Link>
       
      </nav>                    
         
         
      
    </div>
  );
};

export default Sidenav;
