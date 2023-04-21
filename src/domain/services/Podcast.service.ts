import { podcastRepository } from "../../infraestructure/repositories/podcast.repository";
import { getAvailableRequest } from "../../infraestructure/utils/helpers";

export const podcastService = {
  getAllPodcast: async () => {
    const getAvailable = getAvailableRequest("podcasts", "podcastsTimestamp");
    if (getAvailable.isAvailable) {
      //@ts-ignore-line
      return JSON.parse(getAvailable.dataSaved);
    } else {
      const actualData = await podcastRepository.getAllPodcast();

      localStorage.setItem("podcasts", JSON.stringify(actualData));
      //@ts-ignore-line
      localStorage.setItem("podcastsTimestamp", new Date().getTime());

      return actualData;
    }
  },

  getDetailPodcastById: async (id: string) => {
    const getAvailable = getAvailableRequest(
      "detailByPodcast",
      "detailByPodcastTimestamp"
    );
    if (getAvailable.isAvailable) {
      //@ts-ignore-line
      return JSON.parse(getAvailable.dataSaved);
    } else {
      const actualData = await podcastRepository.getDetailById(id);

      localStorage.setItem("detailByPodcast", JSON.stringify(actualData));
      //@ts-ignore-line
      localStorage.setItem("detailByPodcastTimestamp", new Date().getTime());

      return actualData;
    }
  },
};
