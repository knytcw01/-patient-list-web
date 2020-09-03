import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { PatientsList, PatientsInsert, PatientsUpdate, GridExample } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
			<Switch>
                <Route path="/patients/list" exact component={PatientsList} />
                <Route path="/patients/create" exact component={PatientsInsert} />
	    	<Route path="/patients/realTimeGrid" exact component={GridExample} />
                <Route
                    path="/patients/update/:id"
                    exact
                    component={PatientsUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
