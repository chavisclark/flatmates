import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import config from '../config/helmet.js';

if (__DEVSERVER__) {
  config.link = config.link.filter(l => l.rel !== 'stylesheet');
}
console.log('===>  ⛑  Straping on Helmet . . .')
const Meta = () => (
  <Helmet
    htmlAttributes={{"lang": "en", "amp": undefined}}
    title="FlatMates" meta={config.meta}
    link={config.link}
  />
)

ReactDOMServer.renderToString(<Meta />);
const header = Helmet.rewind();

export default header;
