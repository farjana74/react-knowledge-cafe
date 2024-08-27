import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between item-center">
      <div>
        <h1 className="text-2xl font-sans font-bold  p-5">Knowledge Cafe</h1>
      </div>
      <div>
        <img  src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
