/* eslint-disable camelcase */
import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const mapProductsToItems = products =>
  products.map(({node: {name, id, meta, mainImage}}) => {
    const price = meta.display_price.with_tax.formatted || null
    if (name === 'Mod' || name === 'Jewellery') {
      return {
        as: Link,
        to: `/product/`,
        childKey: id,
        image: (
          <Image>
            <Img sizes={mainImage.childImageSharp.sizes} alt={name} />
          </Image>
        ),
        header: name,
        meta: <Card.Meta style={{color: 'dimgray'}}>{price}</Card.Meta>,
      }
    } else if (name === 'Blue Desk') {
      return {
        as: Link,
        to: `/product/${id}/`,
        childKey: id,
        image: (
          <Image style={{color: 'red'}}>
            <Img
              style={{color: 'red'}}
              sizes={mainImage.childImageSharp.sizes}
              alt={name}
            />
          </Image>
        ),
        header: name,
        meta: <Card.Meta style={{color: 'red'}}>{price}</Card.Meta>,
      }
    } else if (name === 'Little Grey') {
      return {
        as: Link,
        to: `/product/${id}`,
        childKey: id,
        image: (
          <Image>
            {/* <Img style={{color: 'red'}} sizes={mainImage.childImageSharp.sizes} alt={name} /> */}
          </Image>
        ),
        header: name,
        meta: <Card.Meta>{price}</Card.Meta>,
      }
    } else {
      return {
        as: Link,
        to: `/product/${id}/`,
        childKey: id,
        image: (
          <Image>
            <Img sizes={mainImage.childImageSharp.sizes} alt={name} />
          </Image>
        ),
        header: name,
        meta: <Card.Meta style={{color: 'dimgray'}}>{price}</Card.Meta>,
      }
    }
  })

export default ({products}) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={2} stackable />
)
