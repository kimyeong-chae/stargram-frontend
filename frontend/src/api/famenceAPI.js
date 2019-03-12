import axios from 'axios';

export default {
  findOneMember(idMember) {
    return axios.get(`/api/member/${idMember}`);
  },
  updateMemberProfile(idMember, formData) {
    return axios.put(`/api/member/${idMember}/profile`, formData);
  },
  findOneProject(seqProject) {
    return axios.get(`/api/project/${seqProject}`);
  },
  findAllProjectComment({ seqProject, pageSize, after }) {
    let url = `/api/project/${seqProject}/projectComment?pageSize=${pageSize}`;

    if (after) {
      url += `&after=${after}`;
    }
    return axios.get(url);
  },
  findAllProjectSponsor() {

  },
};
