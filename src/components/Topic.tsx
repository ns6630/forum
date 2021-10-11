import styled from "styled-components/macro";
import { User } from "../types/User";
import React from "react";
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import getFormatedDate from "../formatting/date";

export interface TopicProps {
  id: number;
  name: string;
  description: string;
  author: User;
  date: Date;
  rating: number;
  commentsCount: number;
  vote?: number;
}

const Topic: React.FC<TopicProps> = ({
  id,
  name,
  description,
  author,
  date,
  rating,
  commentsCount,
  vote,
}) => {
  return (
    <StyledTopic>
      <Rating rating={rating} vote={vote} />
      <div>
        <TopicName>
          <TopicLink to={"/"}>{name}</TopicLink>
        </TopicName>
        <TopicDescription>{description}</TopicDescription>
        <TopicFooter>
          <TopicAuthorPhoto>
            {author.avatar && <img src={author.avatar} alt={"author"} />}
            {!author.avatar && <FontAwesomeIcon icon={faCircleUser} />}
          </TopicAuthorPhoto>
          <TopicPostedBy>
            Posted by{" "}
            <TopicAuthorLink to={"/"}>{author.nickname}</TopicAuthorLink>{" "}
            {getFormatedDate(date)}
          </TopicPostedBy>
          <TopicComments>{commentsCount}</TopicComments>
        </TopicFooter>
      </div>
    </StyledTopic>
  );
};

const StyledTopic = styled.article`
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  box-shadow: 0 15px 15px -3px rgba(143, 143, 143, 0.1);
  padding: 20px 40px;
`;

const TopicName = styled.h2`
  margin-top: 0;
  color: #444444;
`;

const TopicLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const TopicDescription = styled.p`
  text-align: justify;
  color: #8c8c8c;
  line-height: 1.5em;
  padding-bottom: 1em;
  border-bottom: 1px #8c8c8c solid;
  margin: 1em 0;
`;

const TopicFooter = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  color: #8c8c8c;
`;

const TopicAuthorPhoto = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1em;

  > img {
    width: 100%;
  }

  > svg {
    width: 100%;
    height: 100%;
  }
`;

const TopicPostedBy = styled.div`
  margin-right: 1em;
`;

const TopicAuthorLink = styled(Link)`
  color: #3d5af1;
  text-decoration: none;
  font-weight: bold;
  margin-right: 0.5em;
`;

const TopicComments: React.FC = ({ children }) => {
  return (
    <StyledTopicComments>
      <FontAwesomeIcon icon={faComment} />
      {children}
    </StyledTopicComments>
  );
};

const StyledTopicComments = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1 1 auto;

  & > svg {
    margin-right: 0.5em;
    height: 1rem;
  }
`;

export default Topic;
