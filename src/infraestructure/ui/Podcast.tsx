import React, { useState, useEffect } from "react";
import { podcastService } from "../../domain/services/Podcast.service";

import { PodCastModel, EntryObject } from "../../domain/models/Podcast";

import "./styles.css";
import { useHistory } from "react-router-dom";

export const Podcast = () => {
  const [podcastList, setPodCastList] = useState<PodCastModel>({
    feed: { entry: [] },
  });
  const history = useHistory();
  const _onClick = (music: EntryObject) => {
    history.push({
      pathname: "/podcast/" + music?.id?.attributes?.["im:id"],
      state: {
        img: music?.["im:image"][0].label,
        title: music?.title?.label,
        author: music?.["im:artist"].label,
      },
    });
  };

  useEffect(() => {
    podcastService.getAllPodcast().then(setPodCastList);
  }, []);

  return (
    <div className="podcast">
      <h1>Podcaster</h1>
      <div className="podcast-container">
        {podcastList.feed.entry.map((music) => {
          return (
            <div className="podcast-item" onClick={() => _onClick(music)}>
              <div>
                <img src={music?.["im:image"][0].label} alt="" />
              </div>
              <h1> {music?.title?.label}</h1>
              <hr />
              <h2>Author: {music?.["im:artist"].label}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
