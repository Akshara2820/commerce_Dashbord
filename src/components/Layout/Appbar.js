import React from "react";
import {
  APPBAR_HEIGHT,
  Navbar_WIDTH,
  SIDEBAR_WIDTH,
  width_HOME,
} from "../../utils";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import Navbar from "./navbar";

export default function Appbar() {
  return (
    <Navbar_1>
      <div className="navbar fixed bg-orange-200 shadow-lg flex justify-between items-center">
        Appbar
        <div className="relative">
          <Navbar />
        </div>
      </div>
    </Navbar_1>
  );
}

const Navbar_1 = styled.div`
  .navbar {
    height: ${APPBAR_HEIGHT}px;
    width: calc(100% - ${SIDEBAR_WIDTH}px);
    margin-left: ${SIDEBAR_WIDTH}px;
  }
  @media screen and (max-width: 1024px) {
    .navbar {
      width: calc(100% - ${width_HOME}px);
      margin-left: ${width_HOME};
    }
  }
`;
