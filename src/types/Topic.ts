import {User} from "./User";
import {makeAutoObservable} from "mobx";
import {VoteType} from "./VoteType";

export default interface ITopic {
  id: number;
  name: string;
  description: string;
  author: User;
  date: Date;
  rating: number;
  commentsCount: number;
  vote?: VoteType;
}

export class Topic implements ITopic {
  id: number;
  name: string;
  description: string;
  author: User;
  date: Date;
  rating: number;
  commentsCount: number;
  vote?: VoteType;

  constructor(topic: ITopic) {
    makeAutoObservable(this);
    this.id = topic.id;
    this.name = topic.name;
    this.description = topic.description;
    this.author = topic.author;
    this.date = topic.date;
    this.rating = topic.rating;
    this.commentsCount = topic.commentsCount;
    this.vote = topic.vote ?? VoteType.unset;
  }

  public voteUp() {
    this.vote = VoteType.up;
    console.log(`User voted for topic №${this.id} up.`);
  }

  public voteReset() {
    this.vote = VoteType.unset;
    console.log(`User voted for topic №${this.id} reset.`);
  }

  public voteDown() {
    this.vote = VoteType.down;
    console.log(`User voted for topic №${this.id} down.`);
  }
}

export type TopicPageNum = number;
export type TopicPaginator = [TopicPageNum, ITopic[]];

export interface TopicPage {
  page: number;
  topics: ITopic[];
}
