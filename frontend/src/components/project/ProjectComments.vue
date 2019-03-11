<template>
  <v-flex xs12>
    <v-card flat class="project-reply">
      <v-card-title class="project-card--px-1">
        <span class="project-card-title">{{ $t("project.댓글.제목")}}</span>
      </v-card-title>

      <div
        class="project-reply-list border-btm"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <v-layout row wrap>
          <v-flex class="py-0" xs12>
            <v-layout class="ma-0">
              <v-flex class="pa-0" align-self-center shrink>
                <v-avatar size="31" color="grey lighten-2">
                  <img :src="user.profileUrl">
                </v-avatar>
              </v-flex>

              <v-flex class="py-1" align-self-center grow>
                <div class="project-reply-id">{{comment.createdBy}}</div>
                <div class="project-reply-date">{{comment.createdAt | moment("YYYY. MM. DD. h:mm:ss")}}</div>
              </v-flex>

              <v-flex align-self-center shrink>
                <div v-if="comment.createdBy === user.name" class="project-reply--btn">
                  <span>owner</span>
                </div>

                <span v-if="comment.ynLike == 'Y'" class="project-reply--heart">
                            <div class="project-img--wrap">
                              <v-avatar size="28" color="grey lighten-2">
                                <img :src="user.profileUrl" alt="alt">
                              </v-avatar>
                              <span class="project-img--overlap-2">
                                <img src="../../assets/images/heart-icon-bg-2.png">
                              </span>
                            </div>
                          </span>

              </v-flex>

            </v-layout>
          </v-flex>

          <v-flex class="py-0" xs12>
            <v-layout class="ma-0">
              <v-flex class="pt-0 project-reply-list-bottom" align-self-center>
                <div class="project-reply-content">
                  {{comment.commentContent}}
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>

      <div v-if="this.hasNext" class="py-3 project-card-readmore" @click.stop="appendComments()">{{ $t("comm.더보기") }}</div>
    </v-card>
  </v-flex>
</template>

<script>
  import famenceAPI from '../../api/famenceAPI';

  export default {
    props: ['seqProject'],
    name: 'ProjectComments',
    data() {
      return {
        hasNext: false,
        after: false,
        comments: [],
        user: {
          name: 'Jack Jones',
          profileUrl:
            'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
        },
        pageSize: 5,
      }
    },
    created() {
      this.setComments();
    },
    methods: {
      async setComments() {
        let option = {
          seqProject: this.seqProject,
          pageSize: this.pageSize,
        };
        let result = await famenceAPI.findAllProjectComment(option);
        console.log('result : ', result);
        this.setResult(result, true);
      },
      async appendComments() {
        let option = {
          seqProject: this.seqProject,
          pageSize: this.pageSize,
          after: this.after
        };
        let result = await famenceAPI.findAllProjectComment(option);
        this.setResult(result, false);
      },
      setResult(result, isInit) {
        this.hasNext = result.data.cursors.hasNext;
        this.after = result.data.cursors.after;

        if (isInit)
          this.comments = result.data.results;
        else
          this.comments.push(...result.data.results);
      }
    }
  }
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
  .border-btm {
    border-bottom: 1px solid #e8e8e8;
  }
  .project-avatar > img {
    border: 4px solid #ffffff;
  }

  .project-img--wrap {
    position: relative;
  }
  .project-card-readmore {
    font-size: 14px;
    font-weight: normal;
    color: #9a5af7;
    cursor: pointer;
    text-align: center;
  }

  .project-avatar > img {
    border: 4px solid #ffffff;
  }

  .project-reply-list {
    padding: 10px 0;
    margin: 0 10px;
  }
  .project-reply--btn {
    width: 53px;
    height: 17px;
    border-radius: 6px;
    background-color: #a168f8;
    font-size: 12.3px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    font-family: NotoSansKR;
  }
  .project-reply-list-bottom {
    margin-left: 31px;
  }
  .project-reply-id {
    font-size: 13px;
    font-weight: 600;
    color: #333333;
  }
  .project-reply-date {
    font-size: 11px;
    font-weight: 500;
    color: #b0b0b0;
  }
  .project-reply-content {
    font-family: NotoSansKR;
    font-size: 12px;
    line-height: 1.25;
    color: #444444;
  }
  .project-img--overlap-2 {
    position: absolute;
    top: auto;
    bottom: -6px;
    left: auto;
    right: -3px;
  }
</style>
