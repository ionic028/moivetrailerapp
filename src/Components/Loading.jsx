// eslint-disable-next-line no-unused-vars
import React from "react";
import { Vortex } from "react-loader-spinner";
export const Loading = () => {
  return (
    <div className=" w-full h-full flex items-center justify-center bg-black ">
      <Vortex
        visible={true}
        height="500"
        width="500"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};
