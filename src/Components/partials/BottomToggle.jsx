import { Link } from "react-router-dom";

const BottomToggle = () => {
  return (
       
      <div className=" absolute sm:hidden bottom-0 w-full h-12   flex gap-8  bg-[#6556CD] px-10 rounded-tr-2xl rounded-tl-2xl  ">
         <Link to={"/trending" } className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-2 "> <i className="ri-fire-fill mr-2"></i> </Link>
        <Link to={"/popular" } className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-2 "><i className="ri-bard-fill mr-2"></i> </Link>
        <Link to={"/movie" } className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-2 "> <i className="ri-movie-fill mr-2 "></i></Link>
        <Link to={"/tvshows" } className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-2 "> <i className="ri-tv-2-fill mr-2"></i></Link>
        <Link to={"/person" } className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg hover:scale-110 p-2 "> <i className="ri-team-fill mr-2"></i></Link>
         </div>
    
  )
}

export default BottomToggle
