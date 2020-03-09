import React, { Component } from 'react';
import data from './../countries.json';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(previousProps, previousState) {
    const countryChanged = previousProps.match.params.cca3 !== this.props.match.params.cca3;
    if (countryChanged) {
      this.fetchData();
    }
  }

  fetchData() {
    const name = this.props.match.params.cca3;
    const country = data.find(country => country.cca3 == name);
    this.setState({
      country
    });
  }

  changeCCA3ToName(code) {
    return data.filter(country => country.cca3 === code)[0].name.common;
  }

  render() {
    const country = this.state.country;
    return (
      (country && (
        <div>
          <h1>{country.name.common}</h1>
          <Row>
            <Col xs={6}>
              <h3>Capital</h3>
            </Col>
            <Col>
              <p>{country.capital}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <h3>Area</h3>
            </Col>
            <Col>
              <p>
                {country.area} km<sup>2</sup>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <h3>Borders</h3>
            </Col>
            <Col>{country.borders.map(border => this.changeCCA3ToName(border))}</Col>
          </Row>
        </div>
      )) ||
      ''
    );
  }
}
