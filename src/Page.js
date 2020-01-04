import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Page = ({ children, className, ...rest }) => {

  
  return (
    <div className={classNames("page", className)} {...rest}>
      { children }
    </div>
  )
}

Page.propTypes = {

}

export default Page
