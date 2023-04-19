import { http } from '../http/http'
import { PodCastDTO } from '../http/dto/RangeDTO'
import { PodCastEpisodesModel,PodCastModel } from "../../domain/models/Podcast"

export const podcastRepository = {
    async getAllPodcast(): Promise <PodCastModel> {
        const response = await http.get<PodCastDTO>(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=10/genre=1310/json')}`)
        const data = response.contents;
        //@ts-ignore-line
        return JSON.parse(data)
    },

    async getDetailById(id: string): Promise <PodCastEpisodesModel> {
        const response = await http.get<PodCastDTO>(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`)}`)
        const data = response.contents;
        //@ts-ignore-line
        return JSON.parse(data)
    },

   
}