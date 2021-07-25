import React from 'react'
import Top from '../Top/Top'
import Location from './Location/Location'
import Add from './Add/Add'
import Model from './Model/Model'
import style from './OrderPages.module.scss'
import { BrowserRouter, Route } from 'react-router-dom';

let OrderPages = () => {
    return(
        <BrowserRouter>
            <div className={style.order_page}>
                <Top />
 
                <Route  path="/orderPages/location"  render={ () => 
                    <Location />
                }/>
                <Route  path="/orderPages/model"  render={ () => 
                    <Model />
                }/>
                <Route  path="/orderPages/add"  render={ () => 
                    <Add />
                }/>
                
            </div>
        </BrowserRouter>
    )
}

export default OrderPages