import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Podcast } from "./infraestructure/ui/Podcast";
import { PodcastDetail } from "./infraestructure/ui/PodcastDetail";
import { PodcastEpisode } from "./infraestructure/ui/PodcastEpisode";

function App() {
  return (
    <Router>
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
  );
}

export default App;
