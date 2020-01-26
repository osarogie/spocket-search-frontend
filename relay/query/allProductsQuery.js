import { graphql } from 'react-relay'

export const allProductsQuery = graphql`
  query allProductsQuery(
    $count: Int!
    $cursor: String
    $query: String
    $filter: Filter = {}
    $sortBy: String = "relevance"
  ) {
    ...ProductPagination_query
      @arguments(
        count: $count
        cursor: $cursor
        query: $query
        filter: $filter
        sortBy: $sortBy
      )
  }
`
