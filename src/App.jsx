import React, { Component } from 'react';
import './App.css';
import ContryDetail from './views/CountryDetail';
import data from './countries.json';
import Table from 'react-bootstrap/Table';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import CountryDetail from './views/CountryDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div class="row">
          <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <Table striped bordered hover>
              <tbody>
                {data.map(item => (
                  <Link class="list-group-item list-group-item-action" to={item.cca3}>
                    {item.flag}
                    {item.name.common}
                  </Link>
                ))}
              </tbody>
            </Table>
          </div>
          <div class="col-7">
            <Switch>
              <Route path="/:cca3" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
