import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import Menu from './components/Menu'

import Cliente from './pages/Cliente'
import Home from './pages/Home';
import Produto from './pages/Produto'

export default function Routes() {
    return (
        <BrowserRouter>
            <div className="browser-container">
                <Menu/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/cliente">
                        <Cliente/>
                    </Route>
                    <Route exact path="/produtos">
                        <Produto/>
                    </Route>
                </Switch>
            </div>
            <ToastContainer autoClose={3000} className="toast-container" />
        </BrowserRouter>
    )
}
