import TopicApiBase from "../abstract/TopicApiBase";
import { fuzzSleep } from "../../utils/time";
import { TopicPage } from "../../types/Topic";
import {Vote} from "../../types/Vote";

export default class TopicApi extends TopicApiBase {
  async getTopics(page: number = 1): Promise<TopicPage> {
    const itemsPerPage = 3;
    const id = (page - 1) * itemsPerPage;
    const topics = [
      {
        id: id,
        name: `Page - ${page} What does the fox say?`,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper ex vel justo efficitur elementum. Integer pharetra viverra tellus facilisis vehicula. Maecenas felis nibh, placerat vel ornare et, viverra id sem. Nunc sollicitudin pharetra libero non facilisis. Morbi mattis molestie consequat. In eget hendrerit elit, id condimentum risus. Nulla ultricies luctus eros eu tempor. Maecenas in convallis ipsum.",
        author: {
          id: 1,
          nickname: "Johny",
          photoPath: "",
          rating: 100,
        },
        date: new Date(),
        rating: 100,
        commentsCount: 50,
        vote: Vote.unset,
      },
      {
        id: id + 1,
        name: `Page - ${page} Lorem ipsum dolor sit amet.`,
        description:
          "Pellentesque pellentesque sagittis diam eget aliquam. Duis ultricies diam odio, a tempor arcu aliquet in. Donec a elit diam. Donec ornare est id turpis consequat, sed pellentesque justo dictum. Nunc accumsan sit amet dolor nec pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent aliquet, sem nec ornare vestibulum, sapien ligula dapibus enim, quis ultricies mi felis ut purus. Curabitur id purus ornare, placerat urna ut, vestibulum ligula.",
        author: {
          id: 2,
          nickname: "Tom",
          photoPath: "",
          rating: 100,
        },
        date: new Date(),
        rating: -3,
        commentsCount: 9,
        vote: Vote.down,
      },
      {
        id: id + 2,
        name: `Page - ${page} Proin feugiat vulputate turpis.`,
        description:
          "Pellentesque pellentesque sagittis diam eget aliquam. Duis ultricies diam odio, a tempor arcu aliquet in. Donec a elit diam. Donec ornare est id turpis consequat, sed pellentesque justo dictum. Nunc accumsan sit amet dolor nec pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent aliquet, sem nec ornare vestibulum, sapien ligula dapibus enim, quis ultricies mi felis ut purus. Curabitur id purus ornare, placerat urna ut, vestibulum ligula.",
        author: {
          id: 3,
          nickname: "Jerry",
          photoPath: "",
          rating: 13784,
        },
        date: new Date(),
        rating: 3254,
        commentsCount: 27,
        vote: Vote.up,
      },
    ];
    await fuzzSleep(1500);
    return {
      page,
      topics,
    };
  }
}
