import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from 'containers/LandingPage';
import Host from 'containers/Host';
import Play from 'containers/Play';

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
