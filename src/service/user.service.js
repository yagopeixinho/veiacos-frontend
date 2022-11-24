import CoreApiService, { api } from "./api.service";

export class UserService extends CoreApiService {
  constructor() {
    super(undefined, "users");
  }

  async createUser(values) {
    const response = await api.post(`/${this.endPoint}`, values);

    return response.data;
  }
}
