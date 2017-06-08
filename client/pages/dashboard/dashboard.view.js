import React from 'react'
import {ButtonGroup, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import cssModules from 'react-css-modules'
// import {Todos} from './components'
import style from './dashboard.style.scss'
import { TextWidget, TodoListWidget, SimpleChartWidget, DatatableWidget, StockWidget, OrgChartWidget } from '../../components/widgets'


export const DashboardView = cssModules(({dashboard, onViewMode, onEditMode}) => {
    return (
        <div styleName='dashboard'>
            <div styleName='dashboard__title'>
                <h4>{dashboard.title}</h4>
                <div styleName='dashboard__layout-selector'>
                    { dashboard.isEdit ?
                      <ButtonGroup>
                          <Button>1 column</Button>
                          <Button>2 columns</Button>
                          <Button>3 colums</Button>
                          <Button>4 colums</Button>
                          <Button>6 colums</Button>
                      </ButtonGroup> : null
                    }
                </div>
            </div>
            <div>
              <ButtonGroup>
              <DropdownButton title="Choose mode" id="bg-nested-dropdown">
                <MenuItem eventKey="1" onClick={() => onViewMode()}>View mode</MenuItem>
                <MenuItem eventKey="2" onClick={() => onEditMode()}>Edit Mode</MenuItem>
              </DropdownButton>
            </ButtonGroup>
            </div>
            <div styleName='dashboard__body'>
              <div className="container-fluid">
                  <h2>Dashboard title</h2>
                  <hr styleName='dashboard__title__line'></hr>
                  <div className="row">
                      <div className="col col-md-4">
                          <TodoListWidget />
                      </div>
                      <div className="col col-md-4">
                          <TextWidget />
                      </div>
                      <div className="col col-md-4">
                          <TextWidget />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col col-md-4">
                          <DatatableWidget />
                      </div>
                      <div className="col col-md-4">
                          <StockWidget />
                      </div>
                      <div className="col col-md-4">
                          <OrgChartWidget />
                      </div>
                  </div>
              </div>
            </div>
        </div>
    )
}, style, {errorWhenNotFound: false})
