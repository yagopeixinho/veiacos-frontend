import axios from "axios";

export const api = axios.create({
  baseURL: `http://localhost:3333`,
  "Content-Type": "application/json",
  Accept: "application/json",
});

export default class CoreApiService {
  constructor(_parentEndPoint, _endPoint) {
    this.parentEndPoint = _parentEndPoint;
    this.endPoint = _endPoint;
  }
}
