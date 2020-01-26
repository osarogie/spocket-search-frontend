const dev = process.env.NODE_ENV !== 'production'

export const apiBaseUrl = dev
  ? 'http://localhost:5000/'
  : 'https://spocket-search-api.herokuapp.com/'
