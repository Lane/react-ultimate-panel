import React, { useState } from 'react'
import classNames from 'classnames'
import './App.css';
import Page from './Page';
import PropTypes from 'prop-types'
import PanelGroup from './Panel/PanelGroup'
import Panel from './Panel/Panel'
 

const createId = () => Math.random().toString(36).substring(7);

function App() {

  const [panels, setPanels] = useState([
    {
      id: 'locations',
      open: true,
      children: <img src="https://placehold.it/500x300" />
    }
  ])

  // control panel visibility
  const toggleVisibility = (id) =>
    setPanels(panels.map((p) => {
      p.open = p.id === id ? !p.open : p.open
      return p
    }))

  const addPanel = (
    id = createId(), 
    title = 'Panel Title', 
    children = <img src="https://placehold.it/500x300" />
  ) =>
    setPanels([
      ...panels,
      { id, title, children, open: true }
    ])

  // control panel open / closed
  const [open, setOpen] = useState(true);
  
  // control docked status
  const [docked, setDocked] = useState(false);
  
  // control position
  const [position, setPosition] = useState('left');

  const autoDock = true;

  return (
    <Page 
      className={classNames({
        'panel-group-left': docked && open && position === 'left',
        'panel-group-right': docked && open && position === 'right',
        'panel-group-visible': open
      })}
    >
      <PanelGroup {...{ docked, position, open, autoDock }}>
        { panels.map((p, i) =>
          <Panel 
            {...p}
            key={p.id}
            dock={i === 0 ? 'top' : ((i === panels.length - 1) ? 'bottom' : null)}
            onOpenChange={() => toggleVisibility(p.id)} 
          />
        )}
      </PanelGroup>
      <div className="main ui container">
        <div className="controls">
          <h1>Ultimate Panel</h1>
          <p></p>
          <h2>Panel Group</h2>
          <div className="ui row">
            <label>Docked:</label>
            <input 
              type="checkbox" 
              onChange={(e) => setDocked(e.target.checked)} 
            />
          </div>
          <div className="ui row">
            <label>Visible:</label>
            <input 
              type="checkbox"
              checked={open}
              onChange={(e) => setOpen(e.target.checked)} 
            />
          </div>
          <div className="ui row">
            <label>Position:</label>
            <label>
              <input 
                type="radio" 
                value="left" 
                checked={position === 'left'}
                onChange={(e) => setPosition(e.target.value)}
              />
              Left
            </label>
            <label>
              <input 
                type="radio" 
                value="right" 
                checked={position === 'right'}
                onChange={(e) => setPosition(e.target.value)}
              />
              Right
            </label>
          </div>
          <h2>Panel</h2>
          <button onClick={() => addPanel()}>Add Panel</button>
        </div>
        
      </div>
    </Page>
  );
}

export default App;
