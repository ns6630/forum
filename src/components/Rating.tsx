import React from "react";
import styled from "styled-components/macro";
import getPresentationRating from "../utils/rating";
import IconButton from "./IconButton";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export enum RatingType {
  unset,
  up,
  down,
}

export interface RatingProps {
  rating: number;
  vote?: RatingType;
  processing: boolean;
  onUpVote: () => void;
  onDownVote: () => void;
  onVoteReset: () => void;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  vote = RatingType.unset,
  processing,
  onUpVote,
  onDownVote,
  onVoteReset,
}) => {
  return (
    <StyledRating>
      {vote === RatingType.unset && (
        <>
          <IconButton onClick={onUpVote} disabled={processing}>
            <FontAwesomeIcon icon={faArrowUp} />
          </IconButton>
          <RatingValue>{getPresentationRating(rating)}</RatingValue>
          <IconButton onClick={onDownVote} disabled={processing}>
            <FontAwesomeIcon icon={faArrowDown} />
          </IconButton>
        </>
      )}
      {vote === RatingType.up && (
        <>
          <IconButton
            kind={"success"}
            onClick={onVoteReset}
            disabled={processing}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </IconButton>
          <RatingValue kind={RatingType.up}>
            {getPresentationRating(rating)}
          </RatingValue>
          <IconButton onClick={onDownVote} disabled={processing}>
            <FontAwesomeIcon icon={faArrowDown} />
          </IconButton>
        </>
      )}
      {vote === RatingType.down && (
        <>
          <IconButton onClick={onUpVote} disabled={processing}>
            <FontAwesomeIcon icon={faArrowUp} />
          </IconButton>
          <RatingValue kind={RatingType.down}>
            {getPresentationRating(rating)}
          </RatingValue>
          <IconButton
            kind={"error"}
            onClick={onVoteReset}
            disabled={processing}
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
  kind?: RatingType;
}

const RatingValue = styled.div<RatingValueProps>`
  color: ${({ kind = RatingType.unset }) => colors[kind]};
  user-select: none;
  font-weight: bold;
`;

const colors = {
  [RatingType.unset]: "#8f8f8f",
  [RatingType.up]: "#3d5af1",
  [RatingType.down]: "#ff304f",
};

export default Rating;
