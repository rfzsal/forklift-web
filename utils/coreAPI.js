import axios from 'axios';

class coreAPI {
  async addRiwayatPengecekan(data) {
    try {
      const res = await axios.post('/api/pengecekan/add', data);

      return [null, res.data];
    } catch (error) {
      return [error, null];
    }
  }

  async getRiwayatPengecekan(filter) {
    try {
      if (filter) {
        const res = await axios.get(
          `/api/riwayat?from=${filter.from}&to=${filter.to}&status=${filter.status}`
        );

        return [null, res.data.data];
      }

      const res = await axios.get('/api/pengecekan');

      return [null, res.data.data];
    } catch (error) {
      return [error, null];
    }
  }
}

export default coreAPI;
