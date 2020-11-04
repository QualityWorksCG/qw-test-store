/* eslint-disable camelcase */
import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import Img from 'gatsby-image'
import {Link, navigate} from 'gatsby'

import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'

const FrequentlyBoughtTogether = currentProduct => {
  const data = useStaticQuery(graphql`
    query AllProducts {
      site {
        siteMetadata {
          title
        }
      }
      allMoltinProduct {
        edges {
          node {
            id
            name
            description
            mainImageHref
            meta {
              display_price {
                with_tax {
                  amount
                  currency
                  formatted
                }
              }
            }
            mainImage {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  `)

  //name === 'Mod' | name === 'Crown' |

  const allProducts = get(data, 'allMoltinProduct.edges')
  const products = allProducts.filter(v => v.node.mainImageHref)
  const thisProductName = Object.values(currentProduct)

  return products.map(({node: {name, id, meta, mainImage}}) => {
    const price = meta.display_price.with_tax.formatted || null
    if (
      (name == thisProductName) |
      (name === 'Mod') |
      (name === 'Crown') |
      (name === 'Multi-Vibe')
    ) {
      return (
        <Card>
          <div key={id}>
            <Img sizes={mainImage.childImageSharp.sizes} alt={name} />
            {name}
            <br />
            <Card.Meta style={{color: 'dimgray'}}>{price}</Card.Meta>
          </div>
          <Link to={`/product/${id}`}> View Product </Link>
        </Card>
      )
    } else {
      return <div></div>
    }
  })
}

export default FrequentlyBoughtTogether
