import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const half = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= half ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{tempStars}</div>
      {/*   <div className="stars">
         begin stars
        {stars >= 1 ? (
          <BsStarFill />
        ) : stars >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
        {/* end of stars 
        {/* begin stars 
        {stars >= 2 ? (
          <BsStarFill />
        ) : stars >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
        {/* end of stars  {/* begin stars 
        {stars >= 3 ? (
          <BsStarFill />
        ) : stars >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
        {/* end of stars  {/* begin stars 
        {stars >= 4 ? (
          <BsStarFill />
        ) : stars >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
        {/* end of stars  {/* begin stars 
        {stars >= 5 ? (
          <BsStarFill />
        ) : stars >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
        end of stars 
     
      

      </div>*/}
      <p className="reviews">{reviews} customer reviews</p>
    </Wrapper>
  );
};

export default Stars;

const Wrapper = styled.div``;
