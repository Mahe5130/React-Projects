import React from "react";
import ".././style.css";

function viewTitle() {
  return (
    <div className="flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="md:w-full md:px-4 pb-4">
        <h2 className="text-[28px] font-semibold text-[#65451F]">
          ALL EVENTS & EXHIBITIONS
        </h2>
        {/* <p className="text-[16px] text-[#836a4b] text-bold">
          Meet Our Clients Here
        </p> */}
      </div>
    </div>
  );
}

export default viewTitle;
