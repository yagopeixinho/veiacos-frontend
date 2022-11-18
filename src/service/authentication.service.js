import { api } from "./api.service";

export default class AuthenticationService {
  async authUser(values) {

    const response = await api.post("/users/auth", values);

    localStorage.setItem("token", JSON.stringify(response.data.token));
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    return response;
  }
}
