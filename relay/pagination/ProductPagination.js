import { graphql, createPaginationContainer } from 'react-relay'

export function createProductPagination(Component) {
  return createPaginationContainer(
    Component,
    {
      query: graphql`
        fragment ProductPagination_query on Query
          @argumentDefinitions(
            count: { type: "Int", defaultValue: 10 }
            cursor: { type: "String" }
            query: { type: "String" }
            filter: { type: "Filter", defaultValue: {} }
            sortBy: { type: "String", defaultValue: "relevance" }
          ) {
          allProducts(
            first: $count
            after: $cursor
            query: $query
            filter: $filter
            sortBy: $sortBy
          ) @connection(key: "Product_allProducts") {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                id
                ...productFragment_item
              }
            }
          }
        }
      `
    },
    {
      direction: 'forward',
      getConnectionFromProps(props) {
        return props.query && props.query.allProducts
      },
      getFragmentVariables(prevVars, totalCount) {
        return { ...prevVars, count: totalCount }
      },
      getVariables(props, { count, cursor }, { query, sortBy, filter }) {
        return { count, cursor, query, sortBy, filter }
      },
      variables: { cursor: null },
      query: graphql`
        query ProductPaginationQuery(
          $count: Int!
          $cursor: String
          $query: String
          $filter: Filter
          $sortBy: String
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
    }
  )
}
