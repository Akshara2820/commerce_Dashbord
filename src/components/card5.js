import React from "react";
import { PaperBox, RowBox } from "./styled";
import { BsArrowRightShort } from "react-icons/bs";
import { FiTrendingDown , FiTrendingUp} from "react-icons/fi";

function Card5() {
  return (
    <>
      <RowBox>
        <PaperBox
          className="bg-white rounded-lg p-5 shadow-lg"
          style={{ flex: 4 }}
        >
          <div className="p-5 text-start"> Sales by Country </div>
          <hr />
          <div className="p-5 ">
            
            <div className="flex flex-wrap justify-between ">
              <div className="flex">
                
                <img
                  className="md:h-8 h-6"
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="loading..."
                />
                <h2 className="font-semibold">USA</h2>
              </div>
              <div>
                <div className="text-gray-500">Orders</div>
                <div className="font-semibold">8</div>
              </div>
              <div>
                
                <div className="text-gray-500">total</div>
                <div className="font-semibold">$5,493.22</div>
              </div>
            </div>
            <div className=""></div>
          </div>
          <hr />
          <div className="p-5 ">
            
            <div className="flex flex-wrap justify-between ">
              <div className="flex">
                
                <img
                  className="md:h-10 h-6"
                  src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
                  alt="loading..."
                />
                <h2 className="font-semibold">Spain</h2>
              </div>
              <div>
                <div className="text-gray-500">Orders</div>
                <div className="font-semibold">41</div>
              </div>
              <div>
                
                <div className="text-gray-500">total</div>
                <div className="font-semibold">$7,489.00</div>
              </div>
            </div>
            <div className=""></div>
          </div>
          <hr />
          <div className="p-5 ">
            
            <div className="flex flex-wrap justify-between ">
              <div className="flex">
                
                <img
                  className="md:h-10 h-6"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
                  alt="loading..."
                />
                <h2 className="font-semibold">Germany</h2>
              </div>
              <div>
                <div className="text-gray-500">Orders</div>
                <div className="font-semibold">12</div>
              </div>
              <div>
                
                <div className="text-gray-500">total</div>
                <div className="font-semibold">$3,589.22</div>
              </div>
            </div>
            <div className=""></div>
          </div>
          <hr />
        </PaperBox>

        <PaperBox
          className="bg-white rounded-lg p-5 shadow-lg"
          style={{ flex: 4 }}
        >
          <div className="flex justify-between p-5">
            
            <div className="font-semibold">Traffic</div>
            <div className="text-indigo-500 font-semibold flex">
              More
              <div className="text-[24px]">
                
                <BsArrowRightShort />
              </div>
            </div>
          </div>
          <hr />
          <div className="xl:flex gap-5 justify-between p-5">
            
            <div className="xl:grid sm:flex grid gap-10">
            <div>
              <div className="text-gray-500 text-start">TOTAL STORE VISITS</div>
              <div className="text-start text-[30px] font-semibold">57.483</div>
              <div className="flex gap-2">
                
                <div><button className="bg-green-100 text-green-500 rounded-lg p-2">649 (10.23%)</button></div> <div className="text-green-500 text-[24px]"> <FiTrendingUp/></div>
              </div>
            </div>

            <div className="">
              <div className="text-gray-500 text-start">AVERAGE DAILY VISITORS</div>
              <div className="text-start text-[30px] font-semibold">7.492</div>
              <div className="flex gap-2">
                
                <div><button className="bg-red-100 text-red-500 rounded-lg p-2">-589 (8.69%)</button></div> <div className="text-red-500 text-[24px]"> <FiTrendingDown/></div>
              </div>
            </div>
            </div>
            <div ><img src="https://freepikpsd.com/file/2019/10/stock-market-graph-png-5-1-Transparent-Images.png" alt="loading..."/> </div>
          </div>
        </PaperBox>
      </RowBox>
    </>
  );
}

export default Card5;
