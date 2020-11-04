/* eslint-disable */
import React from 'react'
import {graphql} from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'
import PurchasedTogether from '../components/PurchasedTogether'
import Layout from '../components/Layout'
import {Input, Icon, Transition} from 'semantic-ui-react'

class ProductPageTemplate extends React.PureComponent {
  render() {
    const productInfo = get(this, 'props.data.allMoltinProduct')
    const data = productInfo.edges[0].node
    const name = data.name
    const slug = data.slug
    const image = get(data, 'mainImageHref')
    const sizes = get(data, 'mainImage.childImageSharp.sizes')
    const product = {
      ...data,
      id: data.id,
      image,
      mainImage: data.mainImage,
      header: data.name,
      meta: data.meta,
      sku: data.sku,
    }

    if (!sizes) return null
    return (
      <Layout location={this.props.location}>
        <SEO title={slug} />
        <h4>{`< Back to Gallery Page`}</h4>
        <ProductSummary {...product} />
        <ProductAttributes {...product} />
        <br />
        <Input
          type="string"
          placeholder="Quantity"
          action={{
            color: 'orange',
            content: 'Use Coupon',
          }}
        />
        <h2>Consider Purchasing these similar items</h2>
        <PurchasedTogether currentProduct={name} />
      </Layout>
    )
  }
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductsQuery($id: String!) {
    allMoltinProduct(filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          name
          description
          meta {
            display_price {
              with_tax {
                amount
                currency
                formatted
              }
            }
          }
          mainImageHref
          mainImage {
            childImageSharp {
              sizes(maxWidth: 400) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          slug
          material
          max_watt
          bulb_qty
          bulb
          sku
          finish
        }
      }
    }
  }
`
