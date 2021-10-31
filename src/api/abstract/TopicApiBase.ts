import { TopicPage } from "../../types/Topic";

export default abstract class TopicApiBase {
  abstract getTopics(page?: number): Promise<TopicPage>;
}
