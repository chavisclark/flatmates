import favicon from '../images/favicon.png';

const config = {
  link: [
    { rel: 'icon', href: favicon },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed', type: 'text/css' },
    { rel: 'stylesheet', href: 'http://d3brgjqtir64ox.cloudfront.net/style.css' },
    { rel: 'stylesheet', href: '/assets/styles/main.css' }
  ],
  meta: [
    { charset: 'utf-8' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'description', content: 'An flatmate servicing app' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'apple-mobile-web-app-title', content: 'Cheers' },
    { name: 'msapplication-TileColor', content: '#3372DF' }
  ]
};

export default config;
