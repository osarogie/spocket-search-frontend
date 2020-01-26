/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type productFragment_item$ref: FragmentReference;
declare export opaque type productFragment_item$fragmentType: productFragment_item$ref;
export type productFragment_item = {|
  +id: string,
  +title: string,
  +description: string,
  +country: string,
  +price: number,
  +createdAt: string,
  +$refType: productFragment_item$ref,
|};
export type productFragment_item$data = productFragment_item;
export type productFragment_item$key = {
  +$data?: productFragment_item$data,
  +$fragmentRefs: productFragment_item$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "productFragment_item",
  "type": "Product",
  "metadata": null,
  "argumentDefinitions": [],
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd5f58236e108b80c3b1ebc2a6788130a';
module.exports = node;
