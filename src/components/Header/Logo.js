import React from 'react'
import {Image} from 'semantic-ui-react'

import qualityLogo from '../../images/QualityWorksLogo.jpg'

const Logo = () => (
  <Image
    size="mini"
    src={qualityLogo}
    style={{marginRight: '1.5em'}}
    alt="I love Lamp"
  />
)

export default Logo
