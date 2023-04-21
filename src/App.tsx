import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Podcast } from "./presentation/containers/Podcast/Podcast";
import { PodcastDetail } from "./presentation/containers/PodcastDetail/PodcastDetail";
import { PodcastEpisode } from "./presentation/containers/PodcastEpisode/PodcastEpisode";

function App() {
  return (
    <main>
      <Router>
        <Link to={"/"}>Podcaster</Link> <hr />
        <Switch>
          <Route exact path="/">
            <Podcast />
          </Route>
          <Route exact path="/podcast/:id">
            <PodcastDetail />
          </Route>
          <Route exact path="/podcast/:id/episode/:id">
            <PodcastEpisode />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
