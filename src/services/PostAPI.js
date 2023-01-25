import axios from "axios";
import { API_KEY } from "constans/api";

const PostAPI = axios.create({
  baseURL: "https://api.novaposhta.ua/v2.0/json/",
});

export const getCity = async (CityName = "") => {
  try {
    const response = await PostAPI.post("", {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "searchSettlements",
      methodProperties: {
        CityName,
        Limit: "50",
        Page: "1",
      },
    });
    console.log("CITIES", response.data);
    return response.data.data[0]?.Addresses || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getWarehouse = async ({ deliveryRef, TypeOfWarehouseRef }) => {
  try {
    const response = await PostAPI.post("", {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityRef: deliveryRef,
        Page: "1",
        Limit: "50",
        Language: "UA",
        TypeOfWarehouseRef,
      },
    });
    console.log("WAREHOUESES", response.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseTypes = async () => {
  try {
    const response = await PostAPI.post("", {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouseTypes",
      methodProperties: {},
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
