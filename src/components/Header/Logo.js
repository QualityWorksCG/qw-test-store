import React from 'react'
import {Image} from 'semantic-ui-react'

import moltin from '../../images/moltin-light-hex.svg.svg'
import qualityLogo from '../../images/QualityWorksLogo.jpg'

const Logo = () => (
  <Image
    size="mini"
    src={qualityLogo}
    style={{marginRight: '1.5em'}}
    alt="I love Quality Lamps"
  />
)

export default Logo
