import React, { useState, useEffect } from "react";
import { podcastService } from "../../domain/services/Podcast.service";

import {
  PodcastObject,
  PodCastEpisodesModel,
} from "../../domain/models/Podcast";

import "./styles.css";
import { useHistory, useLocation, useParams } from "react-router-dom";

interface ParamsProps {
  id: string;
}

interface LocationType {
  state: {
    img: string;
    title: string;
    author: string;
  };
  pathname: string;
}

export const PodcastDetail = (props: any) => {
  const params: ParamsProps = useParams();
  const location: LocationType = useLocation();
  const history = useHistory();

  const [episodes, setEpisodes] = useState<PodCastEpisodesModel>({
    resultCount: 0,
    results: [
      {
        collectionId: 0,
        releaseDate: "",
        trackName: "",
        trackTimeMillis: 0,
        description: "",
        episodeUrl: "",
      },
    ],
  });

  const _onClick = (episode: PodcastObject) => {
    history.push({
      pathname: location.pathname + "/episode/" + episode?.collectionId,
      state: {
        title: episode?.trackName,
        description: episode?.description,
        audio: episode?.episodeUrl,
      },
    });
  };

  useEffect(() => {
    podcastService.getDetailPodcastById(params?.id).then(setEpisodes);
  }, []);

  return (
    <div className="podcast-episode">
      <h1>Podcast Detail</h1>
      <div className="podcast-container">
        <div className="podcast-detail">
          <div>
            <img src={location?.state?.img} alt="" />
          </div>
          <h1> {location?.state?.title}</h1>
          <h2>Author: {location?.state?.author}</h2>
        </div>
        <div className="podcast-episode-container">
          <p>Episodes: {episodes?.resultCount}</p>
          <table>
            <thead>
              <tr>
                <td width="60%">Title</td>
                <td width="20%">Date</td>
                <td width="20%">Duration</td>
              </tr>
            </thead>
            <tbody>
              {episodes?.results.map((episode) => (
                <tr
                  className="podcast-episode-item"
                  onClick={() => _onClick(episode)}
                >
                  <td width="60%">
                    {" "}
                    <h2>{episode?.trackName}</h2>
                  </td>
                  <td width="20%">
                    {" "}
                    <p>{episode?.releaseDate}</p>
                  </td>
                  <td width="20%">
                    {" "}
                    <p>{episode?.trackTimeMillis}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
