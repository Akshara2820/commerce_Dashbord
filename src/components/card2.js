import React from "react";
import { PaperBox, RowBox } from "./styled";
import { MdOutlineClose } from "react-icons/md";
import { FiTrendingDown } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

function Card2() {
  return (
    <>
      <RowBox>
        <PaperBox className="bg-white rounded-lg p-5 shadow-lg" style={{ flex: 6 }}>
          <div className="">
            <img
              src="https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41598-022-04791-1/MediaObjects/41598_2022_4791_Fig1_HTML.png"
              alt="loading..."
            />
          </div>
          <div className="flex flex-wrap justify-around mt-5">
            <div>
              VISITORS <div className="text-[24px] fonrt-semibold">23.584</div>
            </div>
            <div>
              CONVERSION
              <div className="text-[24px] fonrt-semibold">23.584</div>
            </div>
            <div>
              REVENUE/VISITOR
              <div className="text-[24px] fonrt-semibold">23.584</div>
            </div>
          </div>
        </PaperBox>

        <PaperBox className="bg-white rounded-lg p-5 shadow-lg" style={{ flex: 4 }}>
          <div>
            <div className="flex flex-wrap justify-between p-5">
              <div>Recent Transactions</div>
              <div>View All</div>
            </div>
            <hr />
            <div className="flex gap-5 p-5 ">
            <div className="">
            <TiTick className="bg-green-100 rounded-full  text-green-500 mt-1 text-[30px]" />
          </div>
              <div>
                <div className="">
                  <span className="font-semibold">$2499</span> paid by{" "}
                  <span className="font-semibold">Randy Smith</span> for Macbook
                  PRO 16
                </div>
                <div className="text-green-500 text-start">
                  Completed Successfully
                </div>
              </div>
            </div>
            <hr />

            <div className="flex  gap-5 p-5">
              <div className="">
                <FiTrendingDown className="text-yellow-500 mt-1 bg-yellow-100 rounded-full text-[30px]" />
              </div>
              <div>
                <div className="">
                  <span className="font-semibold">$2499</span> paid by{" "}
                  <span className="font-semibold">Randy Smith</span> for Macbook
                  PRO 16
                </div>
                <div className="text-yellow-500 text-start">
                  Pending Payment
                </div>
              </div>
            </div>
            <hr />

            <div className="flex  gap-5 p-5">
              <div className="">
                <MdOutlineClose className="text-red-500 bg-red-50  rounded-full text-[30px] mt-1" />
              </div>
              
              <div>
              <div className="">
                <span className="font-semibold">$2499</span> paid by{" "}
                <span className="font-semibold">Randy Smith</span> for Macbook
                PRO 16
              </div>
              <div className="text-red-500 text-start">
                Payment Failed
              </div>
            </div>
              
            </div>
            <hr />

            <div className="flex  gap-5 p-5">
              <div className="">
                <TiTick className="bg-green-100 rounded-full  text-green-500 mt-1 text-[30px]" />
              </div>
              <div>
                <div className="">
                  <span className="font-semibold">$2499</span> paid by{" "}
                  <span className="font-semibold">Randy Smith</span> for Macbook
                  PRO 16
                </div>
                <div className="text-green-500 text-start">
                  Completed Successfully
                </div>
              </div>
            </div>
          </div>
        </PaperBox>
      </RowBox>
    </>
  );
}

export default Card2;
