import {User} from "./User";
import {RatingType} from "../components/Rating";

export default interface TopicType {
  id: number;
  name: string;
  description: string;
  author: User;
  date: Date;
  rating: number;
  commentsCount: number;
  vote?: RatingType;
}

export type TopicPaginator = [TopicPageNum, TopicType[]];
type TopicPageNum = number;

export interface TopicPage {
  page: number;
  topics: TopicType[];
}
