import React from 'react'
import { Switch, Route } from "react-router-dom"
import Navbar from "../../components/navbar"
import Sidebar from "../../components/sidebar"
import list from "./list"
// import view from "./view"

const Index = ({ location }) => {
  return (
    <>
      <Sidebar location={location}/>
      <div className="main-content">
        <Navbar/>
        <Switch>
          <Route path="/defects" exact component={list} />
        </Switch>
      </div>
    </>
  )
}

export default Index