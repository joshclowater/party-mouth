import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from '../LandingPage';
import Host from '../Host';
import Play from '../Play';

export default function () {
  return (
    <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/host" component={Host}/>
        <Route path="/play" component={Play}/>
      </Fragment>
    </BrowserRouter>
  );
}