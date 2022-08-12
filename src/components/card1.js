import React from "react";
import { PaperBox, RowBox } from "./styled";
import { RiQuestionLine } from "react-icons/ri";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function Card1() {
  return (
    <>
  
      <RowBox> 
        <PaperBox className="bg-white shadow-lg rounded-lg p-5" style={{ flex: 0.25 }}>
          <div className="flex justify-between">
            <div>Gross Sales</div>
            <div>
              <RiQuestionLine />
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="text-[24px] font-semibold">$3,854.15</div>
            <div className="flex gap-2">
              <div> <button className="bg-green-100 rounded-lg p-1 text-green-600">+10%</button></div>
              <div>
                <AiOutlineArrowUp className="text-green-600 text-[20px] mt-1"/>
              </div>
            </div>
          </div>
        </PaperBox>


        <PaperBox className="bg-white shadow-lg rounded-lg p-5" style={{ flex: 0.25 }}>
        <div className="flex justify-between">
          <div>Customers</div>
          <div>
            <RiQuestionLine />
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="text-[24px] font-semibold">347</div>
          <div className="flex gap-2">
            <div> <button className="bg-red-100 rounded-lg p-1 text-red-600">-5.2%</button></div>
            <div>
              <AiOutlineArrowDown className="text-red-600 text-[20px] mt-1"/>
            </div>
          </div>
        </div>
      </PaperBox>



      <PaperBox className="bg-white shadow-lg rounded-lg p-5" style={{ flex: 0.25 }}>
      <div className="flex justify-between">
        <div>Orders</div>
        <div>
          <RiQuestionLine />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="text-[24px] font-semibold">843</div>
        <div className="flex gap-2">
          <div> <button className="bg-green-100 rounded-lg p-1 text-green-600">+10%</button></div>
          <div>
            <AiOutlineArrowUp className="text-green-600 text-[20px] mt-1"/>
          </div>
        </div>
      </div>
    </PaperBox>



    <PaperBox className="bg-white shadow-lg rounded-lg p-5" style={{ flex: 0.25 }}>
    <div className="flex justify-between">
      <div>Refunds</div>
      <div>
        <RiQuestionLine />
      </div>
    </div>
    <div className="flex flex-wrap justify-between">
      <div className="text-[24px] font-semibold">2</div>
      <div className="flex gap-2">
        <div> <button className="bg-red-100 rounded-lg p-1 text-red-600">-50%</button></div>
        <div>
          <AiOutlineArrowDown className="text-red-600 text-[20px] mt-1"/>
        </div>
      </div>
    </div>
  </PaperBox>


      

     


      

        
      </RowBox>

    </>
  );
}

export default Card1;
