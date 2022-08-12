import React from "react";
import { PaperBox, RowBox } from "./styled";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function Card4() {
  return (
    <>
      <RowBox>
        <PaperBox className="bg-white rounded-lg p-5 shadow-lg" style={{ flex: 6 }}>
          <div className="p-5 flex gap-2 flex-wrap">
            <div className="font-semibold">Monthly Comparison</div>
            <div className="text-gray-500">(12 weeks)</div>
          </div>
          <div className="lg:grid grid-cols-3 lg:divide-x p-10 ">
            <div className="">
              <div className="text-gray-500">REVENUE</div>
              <div className="font-semibold text-[30px]">$8,486</div>

              <div className="flex justify-center">
                <button className="bg-green-100 rounded-lg p-2 text-green-600">
                  7%
                </button>
                <div>
                  <AiOutlineArrowUp className="text-green-500 text-[20px] mt-2" />
                </div>
              </div>
            </div>

            <div className="md:mt-0 mt-10">
              <div className="text-gray-500">VISITORS</div>
              <div className="font-semibold text-[30px]">65.485</div>

              <div className="flex justify-center">
                <button className="bg-red-100 rounded-lg p-2 text-red-600">
                  8%
                </button>
                <div>
                  <AiOutlineArrowDown className="text-red-500 text-[20px] mt-2" />
                </div>
              </div>
            </div>

            <div className="md:mt-0 mt-10">
              <div className="text-gray-500">CONVERSION</div>
              <div className="font-semibold text-[30px]">15.65%</div>

              <div className="flex justify-center">
                <button className="bg-green-100 rounded-lg p-2 text-green-600">
                  17%
                </button>
                <div>
                  <AiOutlineArrowUp className="text-green-500 text-[20px] mt-2" />
                </div>
              </div>
            </div>
          </div>
        </PaperBox>

        <PaperBox className="bg-white rounded-lg p-5 shadow-lg" style={{ flex: 4 }}>
          <div className="p-5 flex flex-wrap justify-between">
            
            <div className="font-semibold">Monthly Goals (manual)</div>
            <div className="text-indigo-500 font-semibold ">setup</div>
          </div>
          <div className="md:flex flex-wrap gap-10">
            <div className="lg:flex gap-5">
              
              <div>
                <img
                  src="https://tokyo.bloomui.com/static/images/placeholders/illustrations/3.svg"
                  alt="loading..."
                />
              </div>
              <div>
                
                <div>
                  <div className="font-semibold text-[20px] text-start">Achived</div>
                  <div className="text-gray-500 text-start">
                    30% of $5000 manual set goal
                  </div>
                </div>
                <div className="font-semibold text-[20px] text-start">Forecasted</div>
                <div className="text-gray-500 text-start">
                  February Sales: $32,594.00
                </div>
              </div>
            </div>
          </div>
        </PaperBox>
      </RowBox>
    </>
  );
}

export default Card4;
