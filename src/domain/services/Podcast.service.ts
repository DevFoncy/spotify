import { podcastRepository } from '../../infraestructure/repositories/podcast.repository'

export const podcastService = {
  getAllPodcast: () => {
    return podcastRepository.getAllPodcast()
  },

  getDetailPodcastById: (id:string) => {
    return podcastRepository.getDetailById(id)
  },
}
