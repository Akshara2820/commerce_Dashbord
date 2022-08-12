import React from 'react'
import Card1 from "./card1";
import styled from "styled-components";


export const RowBox = styled.div`
  gap: 50px;
  display: flex;
@media screen and (max-width:770px){
display:grid
}  

`;
export const PaperBox = styled.div`
gap: 20px;
`;




function Styled() {
  return (
   <>
   <RowBox className="bg-black" style={{ flexDirection: "column" }}>
      <RowBox>
        <Card1 />
      </RowBox>

      <RowBox>
        <PaperBox className="bg-white">asd</PaperBox>
        <PaperBox className="bg-white">asd</PaperBox>
        <PaperBox className="bg-white">asd</PaperBox>
        <PaperBox className="bg-white">asdasd</PaperBox>
      </RowBox>
    </RowBox>
   </>
  )
}

export default Styled
