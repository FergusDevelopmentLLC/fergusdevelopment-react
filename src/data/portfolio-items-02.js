export const portfolioItems02 = [
  {
    title: 'Games Guide',
    description: 'GamesGuide is a demonstration Ruby/Sinatra web application created to keep track of a board game collection. Users can login, add games, comment on games and tag them.',
    url: 'https://gamesguide.herokuapp.com/',
    imageUrl: 'https://res.cloudinary.com/fergusdev/image/upload/v1611091204/portfolio/games_guide_800x400_wcrgcq.png',
    btnText: 'Demo',
    links : [
      {
        prefix: 'Sinatra Front and Back end - ',
        url: 'https://github.com/FergusDevelopmentLLC/GameGuide',
        linkText: 'Github repository'
      },
      {
        prefix: 'Blog post: ',
        url: 'https://will-carter.medium.com/building-a-games-guide-5c1791524ca5',
        linkText: 'Building a Games Guide'
      }
    ]
  },
  {
    title: 'Starbucks Location Density: 1991-2017',
    description: 'This Leaflet map uses hexbinning to convey Starbucks location density. Hexbins are redrawn to make them appropriate to zoom level.',
    url: 'http://104.236.16.91:8660/starbucks/',
    imageUrl: 'https://res.cloudinary.com/fergusdev/image/upload/v1611091197/portfolio/starbucks_800x400_obkv6p.png',
    btnText: 'Map',
    links : [
      {
        prefix: 'Back end: ',
        url: 'http://postgis.net/',
        linkText: 'SQL/PostGIS'
      },
      {
        prefix: 'Front end - Vanilla JS - ',
        url: 'https://github.com/FergusDevelopmentLLC/starbucks',
        linkText: 'Github repository'
      },
      {
        prefix: 'Featured map library: ',
        url: 'https://leafletjs.com/',
        linkText: 'Leaflet.js'
      }
    ]
  },
  {
    title: 'Top Boy/Girl names of the Last Century (1910-2016)',
    description: 'This D3.js based map shows a different perspective on the names data. The map shows top Boy/Girl name occurrences for each year by state. A Python script processed the raw data from the Social Security Administration.',
    url: 'http://104.236.16.91:8645/top-names',
    imageUrl: 'https://res.cloudinary.com/fergusdev/image/upload/v1611091196/portfolio/top_names_800x400_shyhjy.png',
    btnText: 'Map',
    links : [
      {
        prefix: 'Back end: ',
        url: 'http://postgis.net/',
        linkText: 'SQL/PostGIS'
      },
      {
        prefix: 'Front end - Vanilla JS - ',
        url: 'https://github.com/FergusDevelopmentLLC/top-names-map',
        linkText: 'Github repository'
      },
      {
        prefix: 'Featured library: ',
        url: 'https://d3js.com/',
        linkText: 'd3.js'
      }
    ]
  },
  {
    title: 'U.S. Federal Lands (GeoDev Web Stack)',
    description: 'This project involved building a full web stack from database to front end. Static geojson, PostGRES, and PostGIS queries are compared to deliver large geospatial datasets.',
    url: 'http://104.236.16.91:8641/',
    imageUrl: 'https://res.cloudinary.com/fergusdev/image/upload/v1611091196/portfolio/fedlands_700x300_mehqkm.png',
    btnText: 'Map',
    links : [
      {
        prefix: 'Back end: ',
        url: 'http://postgis.net/',
        linkText: 'SQL/PostGIS'
      },
      {
        prefix: 'Featured library: ',
        url: 'https://vuejs.org/',
        linkText: 'Vue.js'
      },
      {
        prefix: 'Featured library: ',
        url: 'http://knexjs.org/',
        linkText: 'Knex.js'
      },
      {
        prefix: 'Featured library: ',
        url: 'https://github.com/hapijs/joi',
        linkText: 'Joi.js'
      },
      {
        prefix: 'Featured map library: ',
        url: 'https://leafletjs.com/',
        linkText: 'Leaflet.js'
      }
    ]
  },
  {
    title: 'U.S. 2017 Weekly Drought Conditions',
    description: 'This D3.js based map shows drought conditions in the U.S. by week during 2017. The speed of D3.js can seen by cycling through the geospatial data for each week.',
    url: 'http://104.236.16.91:8650/us-weekly-drought-conditions/',
    imageUrl: 'https://res.cloudinary.com/fergusdev/image/upload/v1611091196/portfolio/drought_v6_eyyldb.gif',
    btnText: 'Map',
    links : [
      {
        prefix: 'Featured library: ',
        url: 'https://www.mapbox.com/',
        linkText: 'D3.js'
      }
    ]
  },
]