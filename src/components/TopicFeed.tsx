import React, { useCallback, useEffect, useState } from "react";
import Topic from "./Topic";
import useQuery from "../hooks/useQuery";
import { topicApi } from "../App";
import Loader from "./Loader";
import styled from "styled-components/macro";
import { compareTopicPages } from "../utils/sort";
import TopicType, { TopicPage } from "../types/Topic";

const TopicFeed: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [topics, setTopics] = useState<Map<number, TopicType[]>>(new Map());
  const getTopics = useCallback(() => topicApi.getTopics(page), [page]);
  const { isLoading, data, error } = useQuery<TopicPage, Error>(getTopics);

  useEffect(() => {
    if (data) {
      setTopics((topics) => {
        let newTopics = new Map(topics);
        newTopics.set(data.page, data.topics);
        newTopics = new Map(Array.from(newTopics).sort(compareTopicPages));
        return newTopics;
      });
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  useEffect(() => {
    const target = document.querySelector("#topic_feed__footer");

    const intersectionObserverCallback: IntersectionObserverCallback =
      function (entries) {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setPage((page) => page + 1);
        }
      };

    const intersectionObserverOptions = {
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      intersectionObserverCallback,
      intersectionObserverOptions
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div id={"topic_feed"}>
      {Array.from(topics.values())
        .flat()
        .map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      {isLoading && <Loader />}
      <TopicFeedFooter id={"topic_feed__footer"} />
    </div>
  );
};

const TopicFeedFooter = styled.div`
  height: 50px;
`;

export default TopicFeed;
