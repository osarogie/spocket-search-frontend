import { productFragment } from '../relay/fragments/productFragment'
import { createFragmentContainer } from 'react-relay'

export function ProductItem({ item, onItemClick }) {
  function handleClick() {
    onItemClick && onItemClick(item)
  }

  return (
    <div
      className="cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-6 px-2"
      onClick={handleClick}
    >
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white h-56">
        <div className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.title}</div>
          <p className="text-gray-700 text-base">{item.description}</p>
          <p className="text-gray-900 border-t pt-2 border-gray-200 text-base mt-2">
            Price: {item.price}
          </p>
          <p className="text-gray-900 text-base">Country: {item.country}</p>
        </div>
      </div>
    </div>
  )
}

export const RelayProductItem = createFragmentContainer(ProductItem, {
  item: productFragment
})
