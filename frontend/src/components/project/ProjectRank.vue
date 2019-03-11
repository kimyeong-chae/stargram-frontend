<template>
  <v-flex xs12>
    <v-card flat class="project-rank">
      <div class="project-card--px-1 pb-2 bg-purple">
        <div class="project-card-title text-color--white">{{ $t("project.후원.제목")}}</div>

        <v-layout class="px-3 pt-3" text-xs-center>
          <v-flex v-if="sponsor[1]" class="pa-1" align-self-center>
            <div class="project-img--wrap">
                        <span class="project-img--overlap">
                          <img src="../../assets/images/crown-bg-2.png">
                        </span>
              <v-avatar class="project-avatar" size="68" color="grey lighten-2">
                <img :src="user.profileUrl" alt="alt">
              </v-avatar>
              <span class="project-badge project-badge--overlap bg-silver">{{ sponsor[1].heart }}</span>
            </div>
            <div class="py-1 project-rank-subtitle">{{ sponsor[1].Member.nickname }}</div>
          </v-flex>

          <v-flex v-if="sponsor[0]" class="pa-1" align-self-center shrink>
            <div class="project-img--wrap">
                        <span class="project-img--overlap">
                          <img src="../../assets/images/crown-bg-1.png">
                        </span>
              <v-avatar class="project-avatar" size="83" color="grey lighten-2">
                <img :src="user.profileUrl" alt="alt">
              </v-avatar>
              <span class="project-badge project-badge--overlap bg-gold">{{ sponsor[0].heart }}</span>
            </div>
            <div class="py-1 project-rank-subtitle">{{ sponsor[0].Member.nickname }}</div>
          </v-flex>

          <v-flex v-if="sponsor[2]" class="pa-1" align-self-center>
            <div class="project-img--wrap">
                        <span class="project-img--overlap">
                          <img src="../../assets/images/crown-bg-3.png">
                        </span>
              <v-avatar class="project-avatar" size="68" color="grey lighten-2">
                <img :src="user.profileUrl" alt="alt">
              </v-avatar>
              <span class="project-badge project-badge--overlap bg-bronze">{{ sponsor[2].heart }}</span>
            </div>
            <div class="py-1 project-rank-subtitle">{{ sponsor[2].Member.nickname }}</div>
          </v-flex>
        </v-layout>
      </div>

      <div class="project-rank-list border-btm" v-for="i in 2" :key="i">
        <div v-if="sponsor[i+2]">
          <v-layout class="ma-0">
            <v-flex align-self-center shrink>
              <span class="project-rank-text__1">{{ i+3 }}</span>
            </v-flex>

            <v-flex align-self-center shrink>
              <v-avatar size="31" color="grey lighten-2">
                <img :src="user.profileUrl">
              </v-avatar>
            </v-flex>

            <v-flex align-self-center grow>
              <span class="project-rank-text__2">{{ sponsor[i+2].Member.nickname }}</span>
            </v-flex>

            <v-flex align-self-center shrink>
              <span class="project-rank-text__3">{{ sponsor[i+2].heart }}</span>
            </v-flex>
          </v-layout>
        </div>
      </div>

      <div class="py-3 project-card-readmore" @click.stop="loadMore()">{{ $t("comm.더보기")}}</div>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'ProjectRank',
  props: ['seqProject'],
  data() {
    return {
      user: {
        profileUrl:
          'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
      },
      sponsor: [],
    };
  },
  created() {
    this.getProjectSponsor();
  },
  methods: {
    getProjectSponsor() {
      this.axios.get(`/api/project/${this.seqProject}/heartHist?pageSize=5`).then((result) => {
        if (result) {
          this.sponsor = result.data.results;
        }
      });
    },
  },
};
</script>

<style scoped>
  .project-header-time > span {
    font-size: 15.3px;
    font-weight: 600;
    color: white;
  }
  .project-card-title {
    font-size: 13px;
    font-weight: bold;
  }
  .project-card--px-1 {
    padding: 10px 10px 0px 10px;
  }
  .project-progress .v-progress-linear {
    border-radius: 18px;
  }
  .bg-purple {
    background: linear-gradient(281deg, #8e59ff, #b58bff);
  }
  .bg-gold {
    background-color: #ffc842;
  }
  .bg-silver {
    background-color: #d1dadf;
  }
  .bg-bronze {
    background-color: #d0bba9;
  }
  .border-btm {
    border-bottom: 1px solid #e8e8e8;
  }
  .text-color--white {
    color: white;
  }

  .project-avatar > img {
    border: 4px solid #ffffff;
  }

  .project-img--wrap {
    position: relative;
  }
  .project-img--overlap {
    position: absolute;
    top: -15px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .project-badge {
    width: 45px;
    height: 20px;
    border-radius: 10px;
    color: #ffffff;
  }
  .project-badge--overlap {
    position: absolute;
    top: auto;
    bottom: -3px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .project-rank-subtitle {
    font-size: 13px;
    font-weight: 500;
  }
  .project-rank-list {
    padding: 0;
    margin: 0 10px;
  }
  .project-rank-text__1 {
    font-size: 14px;
    color: #9d9d9d;
  }
  .project-rank-text__2 {
    font-size: 13px;
    color: #333333;
  }
  .project-rank-text__3 {
    font-size: 15px;
    color: #333333;
  }
  .project-card-readmore {
    font-size: 14px;
    font-weight: normal;
    color: #9a5af7;
    cursor: pointer;
    text-align: center;
  }
</style>
