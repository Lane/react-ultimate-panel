import React, { useRef, useLayoutEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'



const PanelGroup = ({
  docked, 
  position, 
  open,
  autoDock,
  visible, 
  children, 
  ...rest
}) => {

  const el = useRef(null);

  const shouldDock = autoDock && el.current &&
    el.current.clientHeight < el.current.scrollHeight;

  // useLayoutEffect(() => {
  //   const panelEls = 
  //     el.current && el.current.getElementsByClassName('panel')

  //   const totalHeight = panelEls && [...panelEls].reduce((acc, p) => {
  //     acc += p.clientHeight
  //     return acc;
  //   }, 0);

  //   console.log(totalHeight)
  // }, [el.current])

  console.log('group render')


  return (
    <div 
      className={
        classNames({
          'panel-group': true,
          'docked': docked || shouldDock,
          [position]: true,
          'open': open
        })
      }
      ref={el}
      {...rest}
    >
      { children }
      <pre style={{"position":"absolute", bottom:0, right:0}}>height: </pre>
    </div>
  )
}

PanelGroup.propTypes = {

}

export default PanelGroup
