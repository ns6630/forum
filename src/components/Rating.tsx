import React from "react";
import styled from "styled-components/macro";
import getPresentationRating from "../utils/rating";
import IconButton from "./IconButton";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Vote} from "../types/Vote";

export interface RatingProps {
  rating: number;
  vote?: Vote;
  onUpVote: () => void;
  onDownVote: () => void;
  onVoteReset: () => void;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  vote = Vote.unset,
  onUpVote,
  onDownVote,
  onVoteReset,
}) => {
  return (
    <StyledRating>
      {vote === Vote.unset && (
        <>
          <IconButton onClick={onUpVote}>
            <FontAwesomeIcon icon={faArrowUp} />
          </IconButton>
          <RatingValue>{getPresentationRating(rating)}</RatingValue>
          <IconButton onClick={onDownVote}>
            <FontAwesomeIcon icon={faArrowDown} />
          </IconButton>
        </>
      )}
      {vote === Vote.up && (
        <>
          <IconButton
            kind={"success"}
            onClick={onVoteReset}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </IconButton>
          <RatingValue kind={Vote.up}>
            {getPresentationRating(rating)}
          </RatingValue>
          <IconButton onClick={onDownVote}>
            <FontAwesomeIcon icon={faArrowDown} />
          </IconButton>
        </>
      )}
      {vote === Vote.down && (
        <>
          <IconButton onClick={onUpVote}>
            <FontAwesomeIcon icon={faArrowUp} />
          </IconButton>
          <RatingValue kind={Vote.down}>
            {getPresentationRating(rating)}
          </RatingValue>
          <IconButton
            kind={"error"}
            onClick={onVoteReset}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </IconButton>
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

interface RatingValueProps {
  kind?: Vote;
}

const RatingValue = styled.div<RatingValueProps>`
  color: ${({ kind = Vote.unset }) => colors[kind]};
  user-select: none;
  font-weight: bold;
`;

const colors = {
  [Vote.unset]: "#8f8f8f",
  [Vote.up]: "#3d5af1",
  [Vote.down]: "#ff304f",
};

export default Rating;
