import { Component } from "react";
import { GlobalStyle } from "components/GlobalStyle";
import { Layout } from "components/Layout";
import { MaterialEditorForm } from "components/MaterialEditorForm/MaterialEditorForm";
import { MaterialList } from "components/MaterialList/MaterialList";
import * as API from "./services/api";
export default class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async (values) => {
    try {
      const material = await API.addMaterial(values);
      this.setState((state) => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  deleteMaterial = async (id) => {
    try {
      await API.deleteMaterial(id);
      this.setState((state) => ({
        materials: state.materials.filter((material) => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async (fields) => {
    try {
      const updateMaterial = await API.updateMaterial(fields);
      this.setState((state) => ({
        materials: state.materials.map((material) =>
          material.id === fields.id ? updateMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <Layout>
        <GlobalStyle />

        {error && <p>Ups, failed</p>}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading ? (
          "Downloading"
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </Layout>
    );
  }
}
