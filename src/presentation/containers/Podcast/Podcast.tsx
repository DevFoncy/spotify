import React, { useState, useEffect } from "react";
import { podcastService } from "../../../domain/services/Podcast.service";

import { PodCastModel, EntryObject } from "../../../domain/models/Podcast";

import { useHistory } from "react-router-dom";

import Search from "../../components/Search";
import Card from "../../components/Card";

import "./index.css";

export const Podcast = () => {
  const [query, setQuery] = useState("");
  const [podcastList, setPodCastList] = useState<PodCastModel>({
    feed: { entry: [] },
  });

  const [filterData, setFilterData] = useState<EntryObject[]>([]);

  const history = useHistory();

  const _onClick = (music: EntryObject) => {
    history.push({
      pathname: "/podcast/" + music?.id?.attributes?.["im:id"],
      state: {
        img: music?.["im:image"][0].label,
        title: music?.title?.label,
        author: music?.["im:artist"].label,
        description: music?.summary.label,
      },
    });
  };

  const _onSearch = (e: any) => {
    const data = [...podcastList.feed.entry];

    const results = data.filter((music) => {
      if (e.target.value === "") return data;
      return (
        music.title.label
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        music["im:artist"].label
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    });
    setFilterData(results);
    setQuery(e.target.value);
  };

  useEffect(() => {
    podcastService.getAllPodcast().then((args) => {
      setPodCastList(args);
      setFilterData(args?.feed?.entry);
    });
  }, []);

  return (
    <div className="podcast">
      <Search count={filterData.length} query={query} _onSearch={_onSearch} />
      <div className="podcast-container">
        {filterData.length === 0 && (
          <div>
            <p> Loading ....</p>
          </div>
        )}
        {filterData.map((music, index) => (
          <Card
            className="podcast-item"
            onClick={() => _onClick(music)}
            key={"music" + index}
            image={music?.["im:image"][0].label}
            title={music?.title?.label}
            author={music?.["im:artist"].label}
          />
        ))}
      </div>
    </div>
  );
};
