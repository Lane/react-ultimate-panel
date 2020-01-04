import React from 'react'
import PropTypes from 'prop-types'

const PanelTitle = ({title, open, onOpenChange, children, ...rest}) => {
  return (
    <div className="ui title row row-5 align-end" {...rest}>
      <h1 className="text"> { title } { children }</h1>
      <button 
        className="button text"
        onClick={() => onOpenChange(!open)}
      >
        { open ? 'show' : 'hide' }
      </button>
    </div>
  )
}

PanelTitle.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  onOpenChange: PropTypes.func,
}


export default PanelTitle
