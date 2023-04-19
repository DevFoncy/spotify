export type EntryObject = {
  id: {
    label: string;
    attributes: {
      ["im:id"]: string;
    };
  };
  title: {
    label: string;
  };
  summary: {
    label: string;
  };
  ["im:image"]: Array<{
    label: string;
  }>;
  ["im:artist"]: {
    label: string;
  };
};

export type PodcastObject = {
  collectionId: number;
  trackName: string;
  trackTimeMillis: number;
  releaseDate: string;
  description: string;
  episodeUrl: string;
};

export type PodCastModel = {
  feed: {
    entry: Array<EntryObject>;
  };
};

export type PodCastEpisodesModel = {
  results: Array<PodcastObject>;
  resultCount: number;
};

export type FixedRangeModel = Array<number>;
