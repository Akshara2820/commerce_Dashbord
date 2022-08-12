import React from "react";
import { APPBAR_HEIGHT, SIDEBAR_WIDTH, width_HOME } from "../../utils";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <div className="lg:h-screen ">
      <Sidebar />
      <div className="md:flex-1  h-full flex flex-col">
        <Appbar />

        <Home_1>
          <div className="home_page bg-gray-200">
            {children}
          </div>
        </Home_1>
      </div>
    </div>
  );
}

const Home_1 = styled.div`
.home_page{
    margin-left:${SIDEBAR_WIDTH}px;
    margin-top: ${APPBAR_HEIGHT}px
}
@media screen and (max-width: 1024px){
.home_page{
    margin-left: ${width_HOME};
}
}
`