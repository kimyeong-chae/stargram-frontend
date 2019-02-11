 <template>
  <v-container fluid class="pa-0 text-xs-center">
    <tool-bar :title="title" color="white"></tool-bar>

    <v-layout wrap row>
      <v-flex class="charge-content-1 py-2" xs12>
        <v-layout class="pa-2" row wrap>
          <v-flex align-self-center shrink>
            <v-img class="ml-2 mr-2" width="22" :src="heart"></v-img>
          </v-flex>
          <v-flex shrink>
            <span>0</span>
          </v-flex>
          <v-spacer></v-spacer>
        </v-layout>

        <div class="charge-warning">
          <v-icon small>far fa-question-circle</v-icon>
          <span>충전한 코인은 환불이 안됩니다. 유의하시기 바랍니다.</span>
        </div>
      </v-flex>

      <v-flex class="charge-content-2 py-2" xs12>
        <v-list-tile class="my-1" v-for="(item, index) in chargeList" :key="index">
          <v-list-tile-content>
            <v-list-tile-title>
              <v-layout row wrap>
                <v-flex align-self-center shrink>
                  <v-img class="mr-2" width="15" :src="heart"></v-img>
                </v-flex>
                <v-flex shrink>
                  <span>{{ item.amount | withHeart}}</span>
                </v-flex>
              </v-layout>
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn class="charge-button" color="#f1f1f3" depressed small>{{ item.price | toUSD }}</v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import heart from '@/assets/images/heart-icon-bg.png';
import ToolBar from '../components/ToolBar';

export default {
  components: {
    ToolBar,
  },
  data() {
    return {
      heart,
      user: {
        heart: 0,
      },
      title: '코인 충전',
      chargeList: [
        { amount: 10, price: 10 },
        { amount: 50, price: 50 },
        { amount: 100, price: 100 },
        { amount: 200, price: 200 },
        { amount: 500, price: 500 },
        { amount: 1000, price: 1000 },
        { amount: 3000, price: 3000 },
      ],
    };
  },
  filters: {
    toUSD(price) {
      return `$${price}`;
    },
    withHeart(amount) {
      return `${amount} HEART`;
    },
  },
};
</script>

<style scoped>
.charge-content-1 {
  border-bottom: 10px solid #f1f1f3;
}
.charge-content-1 {
  text-align: left;
}
.charge-content-1 .flex > span {
  font-size: 21px;
  font-weight: 900;
}
.charge-warning {
  margin: 5px 17px;
  font-size: 11px;
  color: #9a9a9a;
}
.charge-content-2 > div {
  border-bottom: 1px solid #f1f1f3;
}
.charge-content-2 .flex > span {
  font-size: 16px;
  font-weight: bold;
}
.charge-content-2 button {
  min-width: 68px;
  height: 24px;
  font-size: 12px;
  font-weight: bold;
}
</style>
