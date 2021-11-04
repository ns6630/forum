import {User} from "./User";
import {makeAutoObservable} from "mobx";
import {Vote} from "./Vote";

export default interface ITopic {
  id: number;
  name: string;
  description: string;
  author: User;
  date: Date;
  rating: number;
  commentsCount: number;
  vote?: Vote;
}

export class Topic implements ITopic {
  id: number;
  name: string;
  description: string;
  author: User;
  date: Date;
  rating: number;
  commentsCount: number;
  vote?: Vote;

  constructor(topic: ITopic) {
    makeAutoObservable(this);
    this.id = topic.id;
    this.name = topic.name;
    this.description = topic.description;
    this.author = topic.author;
    this.date = topic.date;
    this.rating = topic.rating;
    this.commentsCount = topic.commentsCount;
    this.vote = topic.vote ?? Vote.unset;
  }

  public voteUp() {
    this.vote = Vote.up;
    console.log(`User voted for topic №${this.id} up.`);
  }

  public voteReset() {
    this.vote = Vote.unset;
    console.log(`User voted for topic №${this.id} reset.`);
  }

  public voteDown() {
    this.vote = Vote.down;
    console.log(`User voted for topic №${this.id} down.`);
  }
}

export type TopicPageNum = number;
export type TopicPaginator = [TopicPageNum, ITopic[]];

export interface TopicPage {
  page: number;
  topics: ITopic[];
}
