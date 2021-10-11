import React, { useState } from "react";
import styled from "styled-components/macro";
import BlueArrowUpButton from "./BlueArrowUpButton";
import ArrowDownButton from "./ArrowDownButton";
import ArrowUpButton from "./ArrowUpButton";
import RedArrowDownButton from "./RedArrowDownButton";
import getPresentationRating from "../formatting/rating";

export interface RatingProps {
  rating: number;
  vote?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, vote }) => {
  const [localRating, setLocalRating] = useState(rating);
  const [localVote, setLocalVote] = useState(vote ?? 0);
  const [processing, setProcessing] = useState(false);

  function onUp() {
    setProcessing(true);
    setLocalVote((value) => value + 1);
    setLocalRating((value) => value + 1);
    setProcessing(false);
  }

  function onDown() {
    setProcessing(true);
    setLocalVote((value) => value - 1);
    setLocalRating((value) => value - 1);
    setProcessing(false);
  }

  return (
    <StyledRating>
      {localVote > 0 && (
        <>
          <BlueArrowUpButton disabled={true}/>
          <BlueRatingValue>
            {getPresentationRating(localRating)}
          </BlueRatingValue>
          <ArrowDownButton disabled={processing} onClick={onDown} />
        </>
      )}
      {localVote === 0 && (
        <>
          <ArrowUpButton disabled={processing} onClick={onUp} />
          <RatingValue>{getPresentationRating(localRating)}</RatingValue>
          <ArrowDownButton disabled={processing} onClick={onDown} />
        </>
      )}
      {localVote < 0 && (
        <>
          <ArrowUpButton disabled={processing} onClick={onUp} />
          <RedRatingValue>{getPresentationRating(localRating)}</RedRatingValue>
          <RedArrowDownButton disabled={true}/>
        </>
      )}
    </StyledRating>
  );
};

const StyledRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  margin-right: 40px;
`;

const RatingValue = styled.div`
  color: #8f8f8f;
  user-select: none;
  font-weight: bold;
`;

const RedRatingValue = styled(RatingValue)`
  color: #ff304f;
`;

const BlueRatingValue = styled(RatingValue)`
  color: #3d5af1;
`;

export default Rating;
