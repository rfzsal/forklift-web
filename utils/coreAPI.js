import axios from 'axios';

class coreAPI {
  async addRiwayatPengecekan(data) {
    try {
      const res = await axios.post('/api/riwayat/add', data);

      return [null, res.data];
    } catch (error) {
      return [error, null];
    }
  }

  async getRiwayatPengecekan(from, to) {
    try {
      const res = await axios.get('/api/riwayat');

      return [null, res.data.data];
    } catch (error) {
      return [error, null];
    }
  }
}

export default coreAPI;
