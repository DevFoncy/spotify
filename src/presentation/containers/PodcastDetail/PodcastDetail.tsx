import React, { useState, useEffect } from "react";
import { podcastService } from "../../../domain/services/Podcast.service";

import {
  PodcastObject,
  PodCastEpisodesModel,
} from "../../../domain/models/Podcast";

import { useHistory, useLocation, useParams } from "react-router-dom";

import Card from "../../components/Card";
import { msToTime } from "../../../infraestructure/utils/helpers";

import "./index.css";

interface ParamsProps {
  id: string;
}

interface LocationType {
  state: {
    img: string;
    title: string;
    author: string;
    description: string;
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
    <div className="podcast-detail">
      <div className="podcast-detail-container">
        <div className="podcast-detail">
          <Card
            image={location?.state?.img}
            title={location?.state?.title}
            author={location?.state?.author}
            description={location?.state?.description}
            onClick={() => history.goBack()}
          />
        </div>
        <div className="podcast-episode-container">
          <p className="count">Episodes: {episodes?.resultCount}</p>
          <table width={"100%"}>
            <thead>
              <tr>
                <td width="60%">Title</td>
                <td width="20%">Date</td>
                <td width="20%">Duration</td>
              </tr>
            </thead>
            <tbody>
              {episodes?.results.length === 0 && (
                <div>
                  <p> Loading ....</p>
                </div>
              )}
              {episodes?.results.map((episode, index) => (
                <tr
                  key={"item" + index}
                  className="podcast-episode-item"
                  onClick={() => _onClick(episode)}
                >
                  <td width="60%">
                    {" "}
                    <h5>{episode?.trackName}</h5>
                  </td>
                  <td width="20%">
                    {" "}
                    {new Date(episode?.releaseDate).toLocaleString()}
                  </td>
                  <td width="20%"> {msToTime(episode?.trackTimeMillis)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
