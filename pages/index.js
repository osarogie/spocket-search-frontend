import { ProductList } from '../components/ProductList'
import { allProductsQuery } from './../relay/query/allProductsQuery'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { SearchBar } from '../components/SearchBar'
import { QueryRenderer } from 'react-relay'
import { createEnvironment } from '../relay/relay-environment'
import { createProductPagination } from '../relay/pagination/ProductPagination'
import { SideBar } from '../components/SideBar'
import Modal from 'react-modal'

Modal.setAppElement('#__next')

export default function Home() {
  const [environment] = useState(() => createEnvironment())

  const [query, setQuery] = useDebounceState('')
  const [filter, setFilter] = useState({})
  const [sortBy, setSortBy] = useDebounceState('relevance')
  const [selectedProduct, setSelectedProduct] = useDebounceState(null)

  function renderResults({ error, props }) {
    if (error) return <div>Error!</div>

    if (!props) return <span className="spinner" />

    return <ProductPagination query={props} onItemClick={setSelectedProduct} />
  }

  function closeModal() {
    setSelectedProduct(null)
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
      <Modal
        isOpen={!!selectedProduct}
        onRequestClose={closeModal}
        style={{
          content: { height: 300, width: 300, margin: 'auto' },
          overlay: { backgroundColor: '#000000a8' }
        }}
      >
        <button onClick={closeModal}>Close</button>
        {selectedProduct && (
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white h-56">
            <div className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {selectedProduct.title}
              </div>
              <p className="text-gray-700 text-base">
                {selectedProduct.description}
              </p>
              <p className="text-gray-900 mb-2 border-t pt-2 border-gray-200 text-base mt-2">
                Price: {selectedProduct.price}
              </p>
              <p className="text-gray-900 mb-2 text-base">
                Country: {selectedProduct.country}
              </p>
              <p className="text-gray-900 mb-2 text-base">
                Date added: {selectedProduct.createdAt}
              </p>
            </div>
          </div>
        )}
      </Modal>
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
