export const productFragment = graphql`
  fragment productFragment_item on Product {
    id
    title
    description
    country
    price
    createdAt
  }
`
