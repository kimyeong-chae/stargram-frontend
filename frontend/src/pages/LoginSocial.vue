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
import ToolBar from '../components/ToolBar';
import { mapActions } from 'vuex';

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
              console.log(`${provider} authResponse :`, authResponse);
              switch (provider) {
                case 'facebook':
                  this_.axios
                    .get('https://graph.facebook.com/me', {
                      params: { access_token: this_.$auth.getToken() },
                    })
                    .then(response => resolve(response))
                    .catch(err => reject(err));
                  break;
                case 'google':
                  this_.axios
                    .get('https://www.googleapis.com/plus/v1/people/me')
                    .then((response) => {
                      console.log('google response :', response);
                      response.data.name = response.data.displayName;
                      return resolve(response);
                    })
                    .catch(err => reject(err));
                  break;
                case 'instagram':
                  console.log('instagram response :', authResponse);
                  return resolve(authResponse);
                  break;
                default:
                  this_.response = null;
              }
            }),
        )
        .then((response) => {
          if (response) {
            response.data.provider = provider;
            this.axios
              .post('http://localhost:8080/api/auth/login', response.data)
              .then((user) => {
                console.log('login user : ', user);
                this.setMember(user.data.user);
                this.$router.push('/');
              });
          }
        })
        .catch((err) => {
          console.log(err);
          alert('Login Failed!!!');
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
