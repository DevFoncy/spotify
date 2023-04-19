import React, { useState, useEffect } from "react";
import { podcastService } from "../../domain/services/Podcast.service";

import {
  PodcastObject,
  PodCastEpisodesModel,
} from "../../domain/models/Podcast";

import "./styles.css";
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
      <h1>Podcast Episode</h1>
      <div className="">
        <div className="">
          <h1> {location?.state?.title}</h1>
          <h2>Author: {location?.state?.description}</h2>
          <audio controls muted>
            <source src={location?.state?.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};
