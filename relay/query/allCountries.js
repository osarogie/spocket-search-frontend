import { graphql } from 'react-relay'

export const allCountriesQuery = graphql`
  query allCountriesQuery {
    allCountries
  }
`
