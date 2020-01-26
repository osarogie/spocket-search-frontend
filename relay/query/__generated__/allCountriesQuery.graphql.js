/**
 * @flow
 * @relayHash 534413d85766b8068d06b7fee2c74315
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type allCountriesQueryVariables = {||};
export type allCountriesQueryResponse = {|
  +allCountries: $ReadOnlyArray<string>
|};
export type allCountriesQuery = {|
  variables: allCountriesQueryVariables,
  response: allCountriesQueryResponse,
|};
*/


/*
query allCountriesQuery {
  allCountries
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "allCountries",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "allCountriesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "allCountriesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "allCountriesQuery",
    "id": null,
    "text": "query allCountriesQuery {\n  allCountries\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '96c658fc3d117299bbf5f1b2969de78a';
module.exports = node;
