import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from 'src/containers/LandingPage';
import Host from 'src/containers/Host';
import Play from 'src/containers/Play';

export default function() {
  return (
    <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={LandingPage} />
        <Route path="/host" component={Host} />
        <Route path="/play" component={Play} />
      </Fragment>
    </BrowserRouter>
  );
}
