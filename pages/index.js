import { ProductList } from '../components/ProductList'
import { allProductsQuery } from './../relay/query/allProductsQuery'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { SearchBar } from '../components/SearchBar'
import { QueryRenderer } from 'react-relay'
import { createEnvironment } from '../relay/relay-environment'
import { createProductPagination } from '../relay/pagination/ProductPagination'
import { SideBar } from '../components/SideBar'

export default function Home() {
  const [environment] = useState(() => createEnvironment())

  const [query, setQuery] = useDebounceState('')
  const [filter, setFilter] = useState({})
  const [sortBy, setSortBy] = useDebounceState('relevance')

  function renderResults({ error, props }) {
    if (error) return <div>Error!</div>

    if (!props) return <span className="spinner" />

    return <ProductPagination query={props} />
  }

  return (
    <div>
      <Head>
        <title>Spocket Search ✨</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar onSortChange={setSortBy} onQueryChange={setQuery} />

      <div
        className="flex mb-4 flex-wrap"
        style={{ maxWidth: 1000, margin: 'auto' }}
      >
        <div className="w-full md:w-1/4 md:pr-3">
          <SideBar setFilter={setFilter} />
        </div>
        <div className="w-full md:w-3/4">
          <QueryRenderer
            environment={environment}
            query={allProductsQuery}
            variables={{
              count: 10,
              query,
              filter,
              sortBy
            }}
            render={renderResults}
          />
        </div>
      </div>
    </div>
  )
}

function useDebounce(effect, deps, timeout = 500) {
  useEffect(() => {
    const id = setTimeout(() => {
      effect()
    }, timeout)

    return () => {
      clearTimeout(id)
    }
  }, deps)
}

function useDebounceState(initialValue, timeout = 500) {
  const [value, setValue] = useState(initialValue)
  const [buffer, setBuffer] = useState(initialValue)

  useDebounce(
    () => {
      setValue(buffer)
    },
    [buffer],
    timeout
  )

  return [value, setBuffer]
}

const ProductPagination = createProductPagination(ProductList)
