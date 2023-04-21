import React, { useState, useEffect } from "react";
import { podcastService } from "../../../domain/services/Podcast.service";

import {
  PodcastObject,
  PodCastEpisodesModel,
} from "../../../domain/models/Podcast";

import "./index.css";
import { useHistory, useLocation, useParams } from "react-router-dom";

interface EpisodeType {
  state: {
    audio: string;
    title: string;
    description: string;
  };
}

export const PodcastEpisode = (props: any) => {
  const location: EpisodeType = useLocation();

  useEffect(() => {}, []);

  return (
    <div className="podcast-episode">
      <div className="podcast-episode-container">
        <h1> {location?.state?.title}</h1>
        <p>Author: {location?.state?.description}</p>
        <audio controls muted>
          <source src={location?.state?.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};
