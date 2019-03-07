import axios from 'axios';

export default {
  fetchMemberOne(memberId) {
    return axios.get(`/api/member/${memberId}`);
  },
};
