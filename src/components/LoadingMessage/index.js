import React, { Fragment } from 'react';
import Loading from 'src/components/Loading';

export default function(props) {
  return (
    <Fragment>
      <Loading />
      {props.message}
    </Fragment>
  );
}
