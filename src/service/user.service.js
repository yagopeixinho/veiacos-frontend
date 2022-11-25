import CoreApiService, { api } from "./api.service";

export class UserService extends CoreApiService {
  constructor() {
    super(undefined, "users");
  }

  async createUser(data) {
    const response = await api.post(`/${this.endPoint}`, data);

    return response.data;
  }

  async getUserVeiacos(id) {
    this.parentEndPoint = "veiacos";

    const response = await api.get(`/${this.endPoint}/${this.parentEndPoint}`);

    return response.data[0];
  }
}
