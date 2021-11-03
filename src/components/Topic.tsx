import styled from "styled-components/macro";
import React from "react";
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import getFormattedDate from "../utils/date";
import UserPhoto from "./UserPhoto";
import Link from "./Link";
import { Topic as TopicClass } from "../types/Topic";
import { observer } from "mobx-react-lite";

export interface TopicProps {
  topic: TopicClass;
}

const Topic: React.FC<TopicProps> = ({ topic }) => {
  return (
    <StyledTopic>
      <Rating
        rating={topic.rating}
        vote={topic.vote}
        onUpVote={() => topic.voteUp()}
        onDownVote={() => topic.voteDown()}
        onVoteReset={() => topic.voteReset()}
      />
      <div>
        <TopicName>
          <TopicLink to={"/"}>{topic.name}</TopicLink>
        </TopicName>
        <TopicDescription>{topic.description}</TopicDescription>
        <TopicFooter>
          <UserPhoto imgPath={topic.author.photoPath} />
          <TopicPostedBy>
            Posted by <Link to={"/"}>{topic.author.nickname}</Link>{" "}
            {getFormattedDate(topic.date)}
          </TopicPostedBy>
          <TopicComments>{topic.commentsCount}</TopicComments>
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
  margin-bottom: 40px;
`;

const TopicName = styled.h2`
  margin-top: 0;
  color: #444444;
`;

const TopicLink = styled(Link)`
  color: inherit;
`;

const TopicDescription = styled.p`
  text-align: justify;
  color: #8c8c8c;
  line-height: 1.5em;
  padding-bottom: 1em;
  border-bottom: 1px solid #d9d9d9;
  margin: 1em 0;
`;

const TopicFooter = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #8c8c8c;
`;

const TopicPostedBy = styled.div`
  margin-right: 1em;
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

export default observer(Topic);
