import {TopicPaginator} from "../types/Topic";

export function compareTopicPages(a: TopicPaginator, b: TopicPaginator): number {
  const [pageNumA] = a;
  const [pageNumB] = b;
  return pageNumA - pageNumB;
}