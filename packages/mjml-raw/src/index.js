import { MJMLElement } from 'mjml-core'
import React, { Component } from 'react'

const tagName = 'mj-raw'
const endingTag = true

@MJMLElement
class Raw extends Component {

  getTagName () {
    const { parentMjml } = this.props

    switch (parentMjml.get('tagName')) {
      case 'mj-column':
        return 'tr'

      default:
        return 'noscript'
    }
  }

  render () {
    const { mjContent } = this.props

    return React.createElement(this.getTagName(), {
      className: 'mj-raw',
      dangerouslySetInnerHTML: { __html: mjContent() }
    })
  }

}

Raw.tagName = tagName
Raw.endingTag = endingTag

export default Raw
