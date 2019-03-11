<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-flex class="project-header" xs12>
        <tool-bar title="project" color="transparent"></tool-bar>
        <v-layout row wrap justify-center>
          <v-flex class="py-2" xs10 sm10>
            <div class="project-header-title text-xs-center">{{ project.title }}</div>
          </v-flex>
          <v-flex class="py-2" xs7 sm5>
            <div class="project-header-time text-xs-center">
              <span>~ {{ project.dtProjectEnd | moment("YYYY. MM. DD. h:mm:ss") }}</span>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex class="pa-0" xs12>
        <v-container class="project-content" fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card flat class="project-comment">
                <v-card-title class="project-card--px-1">
                  <span class="project-card-title">{{ $t("project.코멘트")}}</span>
                </v-card-title>

                <v-card-text
                  class="project-card--px-1 project-card-text"
                >{{ project.comment }}</v-card-text>

                <v-card-actions class="pt-3">
                  <v-layout>
                    <v-flex shrink>
                      <v-avatar color="grey lighten-2" size="30">
                        <img :src="user.profileUrl">
                      </v-avatar>
                    </v-flex>
                    <v-flex grow align-self-center>
                      <span class="project-card-subtitle">{{ user.name }}</span>
                    </v-flex>
                    <v-flex shrink align-self-center>
                      <span class="project-card-subtitle">35m</span>
                    </v-flex>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card flat class="project-intro">
                <v-card-title class="project-card--px-1">
                  <span class="project-card-title">{{ $t("project.소개")}}</span>
                </v-card-title>

                <v-card-text
                  class="project-card--px-1 pt-1 pb-3 project-card-text-2"
                >{{ project.content }}</v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card flat class="project-progress">
                <v-card-title class="project-card--px-1">
                  <span class="project-card-title">{{ $t("project.모금금액") }}</span>
                </v-card-title>

                <v-card-text class="project-card--px-1 pt-1 project-card-text-3">
                  <span class="project-card-text-3__1">{{ project.heart | numberWithComma }}</span>
                  <span class="project-card-text-3__2">/ {{ project.cntHeartGoal | numberWithComma }}</span>
                  <span class="project-card-text-3__3">points</span>
                </v-card-text>

                <v-card-actions class="pt-1 pb-3">
                  <v-progress-linear
                    class="progress"
                    :value="progressValue"
                    color="#9a5af7"
                    height="13"
                    background-color="#f1f1f1"
                  ></v-progress-linear>
                </v-card-actions>
              </v-card>
            </v-flex>

            <project-rank :seq-project="this.$route.params.seqProject"></project-rank>

            <project-comments :seq-project="this.$route.params.seqProject"></project-comments>

          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>

    <v-bottom-nav color="#f76592" :value="true" height="50" dark>
      <v-btn dark>
        <v-icon>mdi-cards-heart</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-container>
</template>

<script>
import famenceAPI from '../api/famenceAPI';

export default {
  props: ['seqProject'],
  components: {
    ToolBar: () => import('../components/ToolBar'),
    ProjectComments: () => import('@/components/project/ProjectComments'),
    ProjectRank: () => import('@/components/project/ProjectRank'),
  },
  data() {
    return {
      user: {
        name: 'Jack Jones',
        profileUrl:
          'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
      },
      project: {},
    };
  },
  beforeCreate() {

  },
  created() {
    this.setProject(this.$route.params.seqProject);
  },
  computed: {
    progressValue() {
      const progressValue =
        (this.project.point / this.project.goal) * 100;
      return progressValue;
    },
  },
  filters: {
    numberWithComma(value) {
      if (!value) return '';

      return value
        .toString()
        .split('')
        .reverse()
        .reduce((acc, digit, i) => {
          if (i > 0 && i % 3 === 0) acc.push(',');
          return [...acc, digit];
        }, [])
        .reverse()
        .join('');
    },
  },
  methods: {
    setProject(seqProject) {
      famenceAPI.findOneProject(seqProject).then((result) => {
        this.project = result.data;
      }).catch((err) => {
        alert(err);
      });
    },
  },
};
</script>

<style scoped>
.v-card {
  border-radius: 15px;
}
.project-header {
  background: url("../assets/images/main-image.jpeg");
  background-size: 100%;
  height: 250px;
}
.project-header-title {
  font-size: 29px;
  font-weight: 600;
  line-height: 1.15;
  color: white;
}
.project-header-time {
  border-radius: 12px;
  background: rgba(154, 90, 247, 0.7);
}
.project-header-time > span {
  font-size: 15.3px;
  font-weight: 600;
  color: white;
}
.project-content {
  margin-top: -30px;
  padding: 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #f5f5f8;
}
.project-comment {
  background: linear-gradient(281deg, #8e59ff, #b58bff);
  font-family: NotoSansKR;
  color: white;
}
.project-card-title {
  font-size: 13px;
  font-weight: bold;
}
.project-card-text {
  font-size: 18px;
  font-weight: 900;
  line-height: 1.31;
  letter-spacing: -0.2px;
}
.project-card-text-2 {
  font-size: 12.3px;
  font-weight: normal;
  line-height: 1.47;
  letter-spacing: -0.3px;
  color: #9a5af7;
}
.project-card-subtitle {
  font-size: 12px;
  font-weight: bold;
}
.project-card--px-1 {
  padding: 10px 10px 0px 10px;
}
.project-card--mx-1 {
  margin: 0px 10px;
}
.project-progress .v-progress-linear {
  border-radius: 18px;
}
.project-card-text-3 {
  font-family: NotoSans;
  color: #9a5af7;
}
.project-card-text-3__1 {
  font-size: 28.8px;
  font-weight: 900;
}
.project-card-text-3__2 {
  font-size: 14.3px;
  font-weight: bold;
}
.project-card-text-3__3 {
  font-size: 10.8px;
  font-weight: 500;
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
