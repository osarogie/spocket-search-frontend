import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { apiBaseUrl } from '../config'
import 'isomorphic-unfetch'

let relayEnvironment = null

export function createEnvironment() {
  const fetchQuery = (operation, variables) => {
    return fetch(`${apiBaseUrl}v1`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: operation.text,
        variables
      })
    })
      .then(response => response.json())
      .then(json => {
        return json
      })
  }

  const source = new RecordSource({})
  const store = new Store(source)
  const network = Network.create(fetchQuery)

  if (!process.browser) {
    return new Environment({
      network,
      store
    })
  }

  relayEnvironment = new Environment({ network, store })

  return relayEnvironment
}
