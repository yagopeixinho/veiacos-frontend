import CoreApiService, { api } from "./api.service";

import jwt_decode from "jwt-decode";

export default class AuthenticationService extends CoreApiService {
  constructor() {
    super(undefined, "auth");
  }

  async authUser(values) {
    const response = await api.post(`/users/${this.endPoint}`, values);

    localStorage.setItem("token", JSON.stringify(response.data.token));
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    const decodedToken = jwt_decode(response.data.token);

    response.data = { ...response.data, ...decodedToken };

    return response;
  }
}
