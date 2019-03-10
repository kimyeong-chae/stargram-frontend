<template>
  <v-flex xs12>
    <v-card flat class="project-rank">
      <div class="project-card--px-1 pb-2 bg-purple">
        <div class="project-card-title text-color--white" data-i18n="project.sponsor.title"></div>

        <v-layout class="px-3 pt-3" text-xs-center>
          <v-flex class="pa-1" align-self-center>
            <div class="project-img--wrap">
                        <span class="project-img--overlap">
                          <img src="../assets/images/crown-bg-2.png">
                        </span>
              <v-avatar class="project-avatar" size="68" color="grey lighten-2">
                <img :src="user.profileUrl" alt="alt">
              </v-avatar>
              <span class="project-badge project-badge--overlap bg-silver">500</span>
            </div>
            <div class="py-1 project-rank-subtitle">username</div>
          </v-flex>

          <v-flex class="pa-1" align-self-center shrink>
            <div class="project-img--wrap">
                        <span class="project-img--overlap">
                          <img src="../assets/images/crown-bg-1.png">
                        </span>
              <v-avatar class="project-avatar" size="83" color="grey lighten-2">
                <img :src="user.profileUrl" alt="alt">
              </v-avatar>
              <span class="project-badge project-badge--overlap bg-gold">1000</span>
            </div>
            <div class="py-1 project-rank-subtitle">username</div>
          </v-flex>

          <v-flex class="pa-1" align-self-center>
            <div class="project-img--wrap">
                        <span class="project-img--overlap">
                          <img src="../assets/images/crown-bg-3.png">
                        </span>
              <v-avatar class="project-avatar" size="68" color="grey lighten-2">
                <img :src="user.profileUrl" alt="alt">
              </v-avatar>
              <span class="project-badge project-badge--overlap bg-bronze">300</span>
            </div>
            <div class="py-1 project-rank-subtitle">username</div>
          </v-flex>
        </v-layout>
      </div>

      <div class="project-rank-list border-btm" v-for="i in 2" :key="i">
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
            <span class="project-rank-text__2">username</span>
          </v-flex>

          <v-flex align-self-center shrink>
            <span class="project-rank-text__3">point</span>
          </v-flex>
        </v-layout>
      </div>

      <div class="py-3 project-card-readmore" @click.stop="loadMore()">더보기</div>
    </v-card>
  </v-flex>
</template>

<script>
    export default {
        name: "ProjectSponsor"
    }
</script>

<style scoped>

</style>
