import axios from 'axios';

export default {
  fetchMemberOne(memberId) {
    return axios.get(`/api/member/${memberId}`);
  },
  findOneProject(seqProject) {
    return axios.get(`/api/project/${seqProject}`);
  },
  findAllProjectComment({seqProject, pageSize, after}) {
    let url = `/api/project/${seqProject}/projectComment?pageSize=${pageSize}`;

    if (after) {
      url += `&after=${after}`;
    }
    return axios.get(url);
  },
  findAllProjectSponsor() {

  },
};
