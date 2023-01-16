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
}

export default coreAPI;
