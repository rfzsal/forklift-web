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
          `/api/pengecekan?from=${filter.from}&to=${filter.to}&status=${filter.status}`
        );

        return [null, res.data.data];
      }

      const res = await axios.get('/api/pengecekan');

      return [null, res.data.data];
    } catch (error) {
      return [error, null];
    }
  }

  async getRiwayatPengecekanByID(id) {
    try {
      const res = await axios.get(`/api/pengecekan?id=${id}`);

      return [null, res.data.data];
    } catch (error) {
      return [error, null];
    }
  }

  async getRiwayatPerbaikan(filter) {
    try {
      if (filter) {
        const res = await axios.get(
          `/api/perbaikan?from=${filter.from}&to=${filter.to}&status=${filter.status}`
        );

        return [null, res.data.data];
      }

      const res = await axios.get('/api/perbaikan');

      return [null, res.data.data];
    } catch (error) {
      return [error, null];
    }
  }

  async updateStatusPerbaikan(id, data) {
    try {
      const res = await axios.post(
        `/api/perbaikan/update-status?id=${id}`,
        data
      );

      return [null, res.data.data];
    } catch (error) {
      return [error, null];
    }
  }
}

export default coreAPI;
