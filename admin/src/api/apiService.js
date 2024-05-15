import axios from 'axios';
const API_URL = "http://localhost:5019/api";
export const IMAGE_URL = "http://localhost:5019/api/Gallary/";

export function callApi(endpoint, method = 'GET', body) {
  return axios({
    method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  }).catch(e => {
    console.log(e);
  });
}

export function getAllProducts(endpoint) {
  return callApi(endpoint, "GET");
}

export function getProductById(endpoint, id) {
  return callApi(`${endpoint}/${id}`, "GET");
}

export function addProduct(endpoint, data) {
  return callApi(endpoint, "POST", data);
}

export function editProduct(endpoint, data) {
  return callApi(endpoint, "PUT", data);
}

export function deleteProductById(endpoint,id) {
  return callApi(`${endpoint}/${id}`, "DELETE");
}

export function getAllCategories(endpoint) {
  return callApi(endpoint, "GET");
}
export function addCategory(endpoint, data) {
    return callApi(endpoint, "POST", data);
  }
