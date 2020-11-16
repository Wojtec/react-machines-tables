import React, { Component } from "react";
import { getMachines } from "../actions";
import BrandFilter from "../components/filterList/brandFilter";
import { Table, Row, Col, Button, Container } from "reactstrap";
import PriceFilter from "../components/filterList/priceFilter";

class ListMachines extends Component {
  state = {
    machines: [],
    priceFrom: "",
    priceTo: "",
    brand: "",
    update: false,
  };

  async componentDidMount() {
    const machines = await getMachines();

    this.setState({
      machines,
    });
  }

  componentWillReceiveProps = async (nextProps) => {
    const { update } = this.props;
    console.log("aaaa", nextProps, "BB", update);
    if (nextProps.update !== update) {
      const machines = await getMachines();

      this.setState({
        machines,
      });
    }
  };

  setBrand = (brandName) => {
    this.setState({ brand: brandName, priceFrom: "", priceTo: "" });
  };

  setPrice = (valueOne, valueTwo) => {
    this.setState({ priceFrom: valueOne, priceTo: valueTwo, brand: "" });
  };

  filterByPrice(machines, priceFrom, priceTo) {
    const filterMachines = machines.filter(
      (m) => m.price >= priceFrom && m.price <= priceTo
    );

    filterMachines.sort((a, b) => a.price - b.price);

    return this.returnMachines(filterMachines);
  }

  filterByBrand(machines, brand) {
    const filterMachines = machines.filter((m) => m.brand === brand);

    return this.returnMachines(filterMachines);
  }

  getAllMachines(machines, priceFrom, priceTo, brand) {
    if (brand) {
      return this.filterByBrand(machines, brand);
    }
    if (priceFrom && priceTo) {
      return this.filterByPrice(machines, priceFrom, priceTo);
    } else {
      return this.returnMachines(machines);
    }
  }

  returnMachines(machines) {
    const { setId, machineModal } = this.props;

    const machineList = machines.map((m, index) => {
      return (
        <tr key={m.id}>
          <th scope="row">{index + 1}</th>
          <td>{m.brand}</td>
          <td>{m.model}</td>
          <td>{m.manufacturer}</td>
          <td>{m.price}</td>
          <td>
            <Button
              onClick={() => {
                setId(m.id);
                return machineModal(m.id);
              }}
            >
              More
            </Button>
          </td>
        </tr>
      );
    });

    return machineList;
  }

  render() {
    const { machines, priceFrom, priceTo, brand } = this.state;
    const { clickModal } = this.props;

    return (
      <Container>
        <Row>
          <Col md="12" className="d-flex justify-content-center">
            <BrandFilter setBrand={this.setBrand}></BrandFilter>
          </Col>
          <Col md="12" className="d-flex justify-content-center">
            <Col md="4">
              <PriceFilter setPrice={this.setPrice}></PriceFilter>
            </Col>
            <Col md="8">
              <Table dark striped bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>Price</th>
                    <th>
                      <Button color="primary" onClick={clickModal}>
                        Create++
                      </Button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.getAllMachines(machines, priceFrom, priceTo, brand)}
                </tbody>
              </Table>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ListMachines;
