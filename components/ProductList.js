import { RelayProductItem } from './ProductItem'

export class ProductList extends React.Component {
  state = {
    isFetchingTop: false,
    isLoading: false,
    hasMore: false
  }

  elid = 'productlist'

  onEndReached = _ => {
    const { query } = this.props
    const allProducts = query.allProducts

    if (!allProducts.edges || allProducts.edges.length === 0) return

    const hasMore = this.props.relay.hasMore()
    const isLoading = this.props.relay.isLoading()

    this.setState({
      hasMore,
      isLoading
    })
  }

  loadMore = () => {
    this.props.relay.loadMore(10, err => {
      this.setState({
        hasMore: this.props.relay.hasMore(),
        isLoading: this.props.relay.isLoading()
      })
    })

    this.setState({
      hasMore: this.props.relay.hasMore(),
      isLoading: this.props.relay.isLoading()
    })
  }

  renderFooter() {
    const { query } = this.props
    const allProducts = query.allProducts

    if (allProducts.edges.length == 0) {
      return <div> No Products yet</div>
    }

    if (this.state.hasMore) {
      return (
        <span
          className="bg-blue-500 hover:bg-blue-700 text-white mt-8 mb-12 table cursor-pointer mx-auto font-bold py-2 px-4 rounded-full"
          onClick={this.loadMore}
        >
          Load more
        </span>
      )
    }

    return null
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling)
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById(this.elid)
    if (this.isBottom(wrappedElement)) {
      this.onEndReached()
    }
  }

  render() {
    const { allProducts } = this.props.query

    return (
      <div
        id={this.elid}
        className="px-2"
        style={{ maxWidth: 800, margin: 'auto' }}
      >
        <div className="flex flex-wrap -mx-2" id={this.elid}>
          {allProducts.edges.map(({ node }) => (
            <RelayProductItem key={node.id} item={node} />
          ))}
        </div>
        {this.renderFooter()}
      </div>
    )
  }
}
