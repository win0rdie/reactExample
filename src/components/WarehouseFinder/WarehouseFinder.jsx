import { PureComponent } from "react";
import { getWarehouse } from "services/PostAPI";

export default class WarehouseFinder extends PureComponent {
  state = {
    selectedWarehouseId: 0,
    warehouses: [],
  };
  componentDidMount() {
    this.fetchCities();
  }

  componentDidUpdate(prevProps, prevState) {}

  handleChangeValue = (e) => {
    this.setState({ selectedWarehouseId: e.target.value });
  };

  fetchCities = async () => {
    const { CityName, CityRef } = this.props;
    try {
      const warehouses = await getWarehouse({ CityName, CityRef });
      this.setState({ warehouses });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { selectedWarehouseId, warehouses } = this.state;
    return (
      <select value={selectedWarehouseId} onChange={this.handleChangeValue}>
        {Object.entries(warehouses).map((entry) => (
          <option key={entry[1].Ref} value={entry[1].Present}>
            {entry[1].Present}
          </option>
        ))}
      </select>
    );
  }
}
