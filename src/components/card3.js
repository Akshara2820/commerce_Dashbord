import React from "react";
import { PaperBox, RowBox } from "./styled";
import { BsArrowRightShort } from "react-icons/bs";

function Card3() {
  return (
    <>
      <RowBox>
        <PaperBox className="rounded-lg " style={{ flex: 2.5 }}>
          <PaperBox className="bg-white rounded-lg p-5 shadow-lg" style={{ flex: 2.5 }}>
            <div className="">
              <div className="flex flex-wrap justify-between p-5">
                <div className="">
                  <div className="md:text-start font-semibold">
                    Want full report?
                  </div>
                  <div>Get it today by clicking the button below.</div>
                </div>
                <div className="">
                  <img
                    src="https://tokyo.bloomui.com/static/images/placeholders/illustrations/5.svg"
                    alt="loading..."
                  />
                </div>
              </div>
              <div className="">
                <button className="p-4 text-blue-500 font-semibold border border-blue-500 rounded-lg">
                  Download Now
                </button>
              </div>
            </div>
          </PaperBox>

          <PaperBox
            className="bg-white rounded-lg p-5 shadow-lg mt-8 "
            style={{ flex: 2.5 }}
          >
            <div className="flex flex-wrap">
              <div className="text-[20px] p-3">Sales by Category </div>
            </div>
            <hr />
            <div className="flex flex-wrap">
              <img
                src="https://apexcharts.com/wp-content/uploads/2018/05/simple-donut-chart.svg"
                alt="loading.."
              />
            </div>
          </PaperBox>
        </PaperBox>

        <PaperBox className="bg-white rounded-lg p-5 shadow-lg" style={{ flex: 5 }}>
          <div className="flex justify-between p-3 flex-wrap">
            <div> Top Product</div>
            <div className="">
                <button className="boeder bg-indigo-600 rounded-lg text-white font-semibold p-2 flex gap-3">
                  Create Product
                  <div>
                    <BsArrowRightShort className="text-[24px]"/>
                  </div>
                </button>
              </div>
            </div>
          <hr></hr>

          <div className="flex justify-between p-5 bg-slate-50 text-gray-600 flex-wrap overflow-auto">
            <div>Product</div> <div>orers</div> <div>REVENUE</div>
          </div>
          <hr></hr>

          <div className="flex justify-between flex-wrap p-5">
            <div className="flex md:gap-10 flex-wrap">
              <div>
                <img
                  className="h-32"
                  src="https://tokyo.bloomui.com/static/images/placeholders/products/1.png"
                  alt="loading"
                />
              </div>
              <div className="m-auto text-gray-500">Apple Macbook PRO 16</div>
            </div>
            <div className="p-10">
              <div className=" font-semibold">321</div>
              <div className="text-gray-500">99 Units</div>
            </div>
            <div className="p-10">
              <div className="font-semibold ">$6,748.00</div>
              <div className="text-gray-500">59% of sales</div>
            </div>
          </div>
          <hr />

          <div className="flex justify-between flex-wrap p-5">
            <div className="flex md:gap-10 flex-wrap">
              <div>
                <img
                  className="h-32"
                  src="https://tokyo.bloomui.com/static/images/placeholders/products/2.png"
                  alt="loading"
                />
              </div>
              <div className="m-auto text-gray-500">Apple Macbook PRO 16</div>
            </div>
            <div className="p-10">
              <div className=" font-semibold">321</div>
              <div className="text-gray-500">99 Units</div>
            </div>
            <div className="p-10">
              <div className="font-semibold ">$6,748.00</div>
              <div className="text-gray-500">59% of sales</div>
            </div>
          </div>
          <hr />

          <div className="flex justify-between flex-wrap p-5">
            <div className="flex md:gap-10 flex-wrap">
              <div>
                <img
                  className="h-32"
                  src="https://tokyo.bloomui.com/static/images/placeholders/products/3.png"
                  alt="loading"
                />
              </div>
              <div className="m-auto text-gray-500">Apple Macbook PRO 16</div>
            </div>
            <div className="p-10">
              <div className=" font-semibold">321</div>
              <div className="text-gray-500">99 Units</div>
            </div>
            <div className="p-10">
              <div className="font-semibold ">$6,748.00</div>
              <div className="text-gray-500">59% of sales</div>
            </div>
          </div>
          <hr />

          <div className="p-5">
            <button className="border border-indigo-500 p-5 text-indigo-700 font-semibold rounded-lg">
              View all product
            </button>
          </div>
        </PaperBox>
      </RowBox>
    </>
  );
}

export default Card3;
