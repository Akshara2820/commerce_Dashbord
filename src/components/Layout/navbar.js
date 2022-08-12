import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";

function Navbar() {
  const [ismenu, setIsMenu] = useState(false);
  console.log(ismenu, "Menu.....");
  return (
    <>
      <MenuBar className="">
        <div className="">
          <button
            className="menu-bar p-5"
            onClick={() => {
              ismenu ? setIsMenu(false) : setIsMenu(true);
            }}
          >
            <AiOutlineMenu className="text-[24px]  " />
          </button>
        </div>

        <div className="absolute box rounded-lg">
          <div className={`${ismenu ? "" : "view_menu"} menu-bar bar `}>
            <div className="bar-menu w-[200px] h-[200px] "></div>
          </div>
        </div>
      </MenuBar>
    </>
  );
}

export default Navbar;

const MenuBar = styled.div`
  .menu-bar {
    visibility: visible;
    padding: 10px;
    background-color: red;
    border-radius: 20px;
    color: white;

  }
  .view_menu {
    display: none;
  }
  .bar {
    background-color: white;
    color: gray;
    filter: drop-shadow(0 0.3rem 0.4rem rgba(0, 0, 0, 0.2));
  }
  .box{
    visibility: visible;
    top:130%;
    right:0;
  }
`;
