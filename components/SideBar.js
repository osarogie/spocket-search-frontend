import { QueryRenderer } from 'react-relay'
import { allCountriesQuery } from '../relay/query/allCountries'
import { createEnvironment } from '../relay/relay-environment'
import { useState } from 'react'

export function SideBar({ setFilter }) {
  const [environment] = useState(() => createEnvironment())
  const [selectedCountries, setSelectedCountries] = useState({})

  function applyFilter() {
    setFilter({
      country: Object.keys(selectedCountries).filter(
        k => selectedCountries[k] === true
      )
    })
  }

  function onCountryFilter(e) {
    setSelectedCountries({
      ...selectedCountries,
      [e.target.name]: e.target.checked
    })
  }

  function renderCountries({ props }) {
    if (!props) return 'Loading countries'

    return props.allCountries.map(country => {
      const id = `country_${country.replace(' ', '_')}`

      return (
        <div
          key={country}
          className="border px-4 py-2 text-lg text-grey-darkest border-b-0"
        >
          <input
            onChange={onCountryFilter}
            id={id}
            name={country}
            type="checkbox"
          />
          <label htmlFor={id} className="pl-2">
            {country}
          </label>
        </div>
      )
    })
  }

  return (
    <>
      <div className="overflow-hidden shadow-lg bg-white mb-4 rounded-b-lg  border-red-light">
        <div className="px-6 py-4 mt-4">
          <div className="uppercase tracking-wide text-c2 mb-4">By Country</div>
          <QueryRenderer
            environment={environment}
            query={allCountriesQuery}
            render={renderCountries}
          />
          {/* <div className="uppercase tracking-wide text-c2 mb-4 mt-8">
            Prices
          </div>
          <div className="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest">
            <div className="pl-2">Fourth</div>
          </div>
          <div>
            <div className="uppercase tracking-wide text-c2 mb-4 mt-8">
              Section 3
            </div>
            <div className="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest">
              <div className="pl-2">Fifth</div>
            </div>
          </div> */}
          <button
            onClick={applyFilter}
            className="bg-blue-500 hover:bg-blue-700 text-white mt-8 font-bold py-2 px-4 rounded-full"
          >
            Apply filter
          </button>
        </div>
      </div>
    </>
  )
}
