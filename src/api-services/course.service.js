import Axios from 'axios';

const RESOURCE_NAME = '/Courses';

export default {
  getAll() {
    return Axios.get(RESOURCE_NAME);
  },

  create(data) {
    return Axios.post(RESOURCE_NAME, data);
  }
};
