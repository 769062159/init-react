import React,{Component,Fragment} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../containers/home'

export default ()=>(
    <div>
        <Header />
        <Switch>
            <Route path='/' exact component={Home}></Route>
        </Switch>
        <Footer />
    </div>
)