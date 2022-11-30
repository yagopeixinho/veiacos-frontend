import CoreApiService, { api } from "./api.service";

export class VeiacoService extends CoreApiService {
  constructor() {
    super(undefined, "veiacos");
  }
  async getVeiaco(id) {
    const response = await api.get(`${this.endPoint}/${id}`);

    return response.data;
  }

  async createVeiaco(data) {
    const response = await api.post(`${this.endPoint}`, data);

    return response.data;
  }

  async updateVeiaco(data, veiacoId) {
    const response = await api.put(`${this.endPoint}/${veiacoId}`, data);

    debugger;
    return response.data;
  }
}
