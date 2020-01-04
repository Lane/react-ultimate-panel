import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import PanelBody from './PanelBody'
import PanelTitle from './PanelTitle'


const Panel = ({title, open, dock, onOpenChange, children, ...rest}) => {
  return (
    <div className={classNames("panel", dock, { "collapsed": !open })} {...rest}>
      { title && <PanelTitle {...{title, open, onOpenChange}}></PanelTitle> }
      { open && 
        <PanelBody>
          { children }
        </PanelBody>
      }
    </div>
  )
}

Panel.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
}

export default Panel
