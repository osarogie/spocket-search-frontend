/**
 * @flow
 * @relayHash 25c6674aadfd7c65bebf61348d145285
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductPagination_query$ref = any;
export type Filter = {|
  minPrice?: ?number,
  maxPrice?: ?number,
  country?: ?$ReadOnlyArray<string>,
|};
export type ProductPaginationQueryVariables = {|
  count: number,
  cursor?: ?string,
  query?: ?string,
  filter?: ?Filter,
  sortBy?: ?string,
|};
export type ProductPaginationQueryResponse = {|
  +$fragmentRefs: ProductPagination_query$ref
|};
export type ProductPaginationQuery = {|
  variables: ProductPaginationQueryVariables,
  response: ProductPaginationQueryResponse,
|};
*/


/*
query ProductPaginationQuery(
  $count: Int!
  $cursor: String
  $query: String
  $filter: Filter
  $sortBy: String
) {
  ...ProductPagination_query_19afey
}

fragment ProductPagination_query_19afey on Query {
  allProducts(first: $count, after: $cursor, query: $query, filter: $filter, sortBy: $sortBy) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        ...productFragment_item
        __typename
      }
      cursor
    }
  }
}

fragment productFragment_item on Product {
  id
  title
  description
  country
  price
  createdAt
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "Filter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sortBy",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "filter",
  "variableName": "filter"
},
v2 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v3 = {
  "kind": "Variable",
  "name": "sortBy",
  "variableName": "sortBy"
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v2/*: any*/),
  (v3/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProductPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProductPagination_query",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allProducts",
        "storageKey": null,
        "args": (v4/*: any*/),
        "concreteType": "ProductConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ProductEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Product",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "description",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "country",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "price",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "allProducts",
        "args": (v4/*: any*/),
        "handle": "connection",
        "key": "Product_allProducts",
        "filters": [
          "query",
          "filter",
          "sortBy"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProductPaginationQuery",
    "id": null,
    "text": "query ProductPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $query: String\n  $filter: Filter\n  $sortBy: String\n) {\n  ...ProductPagination_query_19afey\n}\n\nfragment ProductPagination_query_19afey on Query {\n  allProducts(first: $count, after: $cursor, query: $query, filter: $filter, sortBy: $sortBy) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...productFragment_item\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment productFragment_item on Product {\n  id\n  title\n  description\n  country\n  price\n  createdAt\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e118da185d089820a2d37cb2599e9703';
module.exports = node;
