<template>
  <v-container fluid class="pa-0 text-xs-center" grid-list-lg>
    <v-layout row wrap>
      <v-flex class="social-content" xs12>
        <tool-bar :title="title" color="transparent"></tool-bar>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="social-content-title">Famence</div>
          </v-flex>
          <v-flex class="px-5" xs12>
            <div
              class="social-content-subtitle"
            >A small river named Dudden flows by their place and supplies</div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="social-buttons">
        <div @click="authenticate('facebook');">
          <v-btn color="#4872ba" depressed dark round>
            <v-layout row wrap>
              <v-flex xs3>
                <v-icon>fab fa-facebook-f</v-icon>
              </v-flex>
              <v-flex xs7>
                <span>페이스북으로 쉬운시작</span>
              </v-flex>
            </v-layout>
          </v-btn>
        </div>
        <div @click="authenticate('google');">
          <v-btn color="#f45c4c" depressed dark round>
            <v-layout row wrap>
              <v-flex xs3>
                <v-icon>fab fa-google-plus-g</v-icon>
              </v-flex>
              <v-flex xs7>
                <span>구글로 쉬운시작</span>
              </v-flex>
            </v-layout>
          </v-btn>
        </div>
        <div @click="authenticate('instagram');">
          <v-btn color="#50abf1" depressed dark round>
            <v-layout row wrap>
              <v-flex xs3>
                <v-icon>fab fa-twitter</v-icon>
              </v-flex>
              <v-flex xs7>
                <span>인스타그램으로 쉬운시작</span>
              </v-flex>
            </v-layout>
          </v-btn>
        </div>
      </v-flex>

      <v-flex xs12>
        <div class="social-caption">
          <div>By clicking «registration» you agree to our</div>
          <div>Terms of Service</div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import ToolBar from '../components/ToolBar';

export default {
  name: 'LoginSocial',
  components: {
    ToolBar,
  },
  data() {
    return {
      title: '회원가입',
      response: null,
    };
  },
  methods: {
    authenticate(provider) {
      this.response = null;

      const this_ = this;
      this.$auth
        .authenticate(provider)
        .then(
          authResponse =>
            new Promise((resolve, reject) => {
              switch (provider) {
                case 'facebook':
                  this_.$http.get('https://graph.facebook.com/me', {
                      params: { access_token: this_.$auth.getToken() },
                    })
                    .then(response => resolve(response.data))
                    .catch(err => reject(err));
                  break;
                case 'google':
                  this_.axios
                    .get('https://www.googleapis.com/plus/v1/people/me')
                    .then((response) => {
                      const result = response;
                      result.data.name = result.data.displayName;
                      return resolve(result.data);
                    })
                    .catch(err => reject(err));
                  break;
                case 'instagram':
                  const result = authResponse.data;
                  result.id = result.user.id;
                  result.name = result.user.full_name;
                  return resolve(result);
                default:
                  this_.response = null;
              }
            }),
        )
        .then((response) => {
          if (response) {
            const result = response;

            if (!result.data) {
              result.data = {};
              result.data.provider = provider;
            } else {
              result.data.provider = provider;
            }

            this_.axios
              .post('http://localhost:8080/api/auth/login', result)
              .then((user) => {
                this.setMember(user.data.user);
                this.$router.push('/');
              });
          }
        })
        .catch((err) => {
          console.log(err);
          alert('Login Failed!!! ');
        });
    },
    ...mapActions(['setMember']),
  },
};
</script>

<style scoped>
.social-content {
  height: 341.5px;
  background-color: #adadad;
  color: #ffffff;
  border-radius: 0 0 50px 50px;
}
.social-content-title {
  font-size: 26.3px;
  font-weight: bold;
}
.social-content-subtitle {
  font-size: 13.3px;
  font-weight: 500;
}
.social-buttons button {
  min-width: 293px;
  height: 43px;
}
.v-btn--round {
  border-radius: 20px;
}
.social-caption {
  font-size: 10.3px;
  font-weight: 500;
}
</style>
