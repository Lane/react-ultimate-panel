import React from 'react'
import PropTypes from 'prop-types'

const PanelBody = props => {
  return (
    <div className="ui container">
      { props.children }
    </div>
  )
}

PanelBody.propTypes = {

}

export default PanelBody
