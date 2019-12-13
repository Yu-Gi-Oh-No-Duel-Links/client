<template>
  <div class="gameplay">
    <audio id="myAudio" controls autoplay loop style="display:none;">
      <source src="../assets/audio/gameplay.mp3" type="audio/mpeg" />
    </audio>
    <b-container fluid class="board">
      <!-- player2 -->
      <div class="main-player2">
        <b-row class="text-right cover-nick2" align-h="end">
          <b-col cols="3" id="nicknamep2" d-flex justify-content-end>
            <h2>ALIF WOW</h2>
          </b-col>
        </b-row>
        <b-row class="cover-lp" align-h="end">
          <b-col cols="1">
            <h2>LP : 400</h2>
          </b-col>
          <b-col cols="1">
            <b-img
              src="https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm01.png"
              fluid
              alt="Responsive image"
              class="player2image"
            ></b-img>
          </b-col>
        </b-row>
      </div>
      <!-- player1 -->
      <div class="main-player1">
        <b-row class="cover-lp" align-h="start">
          <b-col cols="1">
            <b-img
              src="https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm04.png"
              fluid
              alt=""
              class="player1image"
            ></b-img>
          </b-col>
          <b-col cols="1">
            <h2>LP : 400</h2>
          </b-col>
        </b-row>
        <b-row class="text-left cover-nick1" align-h="start">
          <b-col cols="3" id="nicknamep1" d-flex justify-content-start>
            <h2>ALIF WOW</h2>
          </b-col>
          <transition name="fade">
            <div v-if="detailShow" class="big-image">
              <b-img class="detail-card" :src="currentUrl" fluid alt=""></b-img>
            </div>
          </transition>
          <div class="list-cards">
            <b-img
              v-for="(card, index) in listCards"
              :key="index"
              class="card-image"
              :src="card.card_images[0].image_url_small"
              fluid
              alt="Responsive image"
              @mouseover="onDetailShow(card.card_images[0].image_url)"
              @mouseleave="onDetailShow(card.name)"
            ></b-img>
          </div>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "GamePlay",
  computed: {
    ...mapState(["roomName", "username"])
  },
  created() {
    this.$socket.emit("get-room-data", this.roomName, this.username);
  },
  beforeRouteLeave(to, from, next) {
    console.log("???");
    this.$socket.emit("leave-room", this.roomName, this.username);
    next();
  },
  data() {
    return {
      detailShow: false,
      currentUrl: "",
      detailCardNow: [],
      listCards: [
        {
          id: "11714098",
          name: "30,000-Year White Turtle",
          type: "Normal Monster",
          desc: "A huge turtle that has existed for more than 30,000 years.",
          atk: "1250",
          def: "2100",
          level: "5",
          race: "Aqua",
          attribute: "WATER",
          views: "101032",
          formats: "TCG,OCG,OCG GOAT",
          card_images: [
            {
              id: "11714098",
              image_url:
                "https://storage.googleapis.com/ygoprodeck.com/pics/11714098.jpg",
              image_url_small:
                "https://storage.googleapis.com/ygoprodeck.com/pics_small/11714098.jpg"
            }
          ],
          card_prices: {
            cardmarket_price: "0.00",
            tcgplayer_price: "0.00",
            ebay_price: "10.00",
            amazon_price: "0.00"
          }
        },
        {
          id: "23771716",
          name: "7 Colored Fish",
          type: "Normal Monster",
          desc: "A rare rainbow fish that has never been caught by mortal man.",
          atk: "1800",
          def: "800",
          level: "4",
          race: "Fish",
          attribute: "WATER",
          views: "82195",
          formats: "TCG,OCG,GOAT,OCG GOAT",
          card_sets: [
            {
              set_name: "Gold Series",
              set_code: "GLD1-EN001",
              set_rarity: "Common",
              set_price: "0.7"
            },
            {
              set_name: "Metal Raiders",
              set_code: "MRD-098",
              set_rarity: "Common",
              set_price: "1.03"
            },
            {
              set_name: "Metal Raiders",
              set_code: "MRD-E098",
              set_rarity: "Common",
              set_price: "9.65"
            },
            {
              set_name: "Metal Raiders",
              set_code: "MRD-EN098",
              set_rarity: "Common",
              set_price: "2.95"
            },
            {
              set_name: "Starter Deck: Joey",
              set_code: "SDJ-008",
              set_rarity: "Common",
              set_price: "1.05"
            },
            {
              set_name: "Structure Deck: Fury from the Deep",
              set_code: "SD4-EN002",
              set_rarity: "Common",
              set_price: "1.08"
            }
          ],
          card_images: [
            {
              id: "23771716",
              image_url:
                "https://storage.googleapis.com/ygoprodeck.com/pics/23771716.jpg",
              image_url_small:
                "https://storage.googleapis.com/ygoprodeck.com/pics_small/23771716.jpg"
            }
          ],
          card_prices: {
            cardmarket_price: "0.13",
            tcgplayer_price: "0.27",
            ebay_price: "1.75",
            amazon_price: "0.05"
          }
        },
        {
          id: "40387124",
          name: "Abyss Flower",
          type: "Normal Monster",
          desc:
            "A rarely seen flower that blossoms quietly on the edge of darkness.",
          atk: "750",
          def: "400",
          level: "2",
          race: "Plant",
          attribute: "EARTH",
          views: "6711",
          formats: "TCG,OCG,OCG GOAT,Duel Links",
          card_images: [
            {
              id: "40387124",
              image_url:
                "https://storage.googleapis.com/ygoprodeck.com/pics/40387124.jpg",
              image_url_small:
                "https://storage.googleapis.com/ygoprodeck.com/pics_small/40387124.jpg"
            }
          ],
          card_prices: {
            cardmarket_price: "0.00",
            tcgplayer_price: "0.00",
            ebay_price: "10.99",
            amazon_price: "0.00"
          }
        },
        {
          id: "77568553",
          name: "Acid Crawler",
          type: "Normal Monster",
          desc:
            "A giant caterpillar that secretes an acid mist that melts anything.",
          atk: "900",
          def: "700",
          level: "3",
          race: "Insect",
          attribute: "EARTH",
          views: "5100",
          formats: "TCG,OCG,OCG GOAT",
          card_images: [
            {
              id: "77568553",
              image_url:
                "https://storage.googleapis.com/ygoprodeck.com/pics/77568553.jpg",
              image_url_small:
                "https://storage.googleapis.com/ygoprodeck.com/pics_small/77568553.jpg"
            }
          ],
          card_prices: {
            cardmarket_price: "0.00",
            tcgplayer_price: "0.00",
            ebay_price: "5.00",
            amazon_price: "0.00"
          }
        },
        {
          id: "47372349",
          name: "Acrobat Monkey",
          type: "Normal Monster",
          desc:
            "An autonomous monkey type robot which was developed with cutting-edge technology. It moves very acrobatically.",
          atk: "1000",
          def: "1800",
          level: "3",
          race: "Machine",
          attribute: "EARTH",
          views: "8245",
          formats: "TCG,OCG,GOAT,OCG GOAT",
          card_sets: [
            {
              set_name: "Dark Crisis",
              set_code: "DCR-003",
              set_rarity: "Common",
              set_price: "0.99"
            },
            {
              set_name: "Dark Crisis",
              set_code: "DCR-EN003",
              set_rarity: "Common",
              set_price: "0.00"
            },
            {
              set_name: "Dark Revelation Volume 1",
              set_code: "DR1-EN165",
              set_rarity: "Common",
              set_price: "1.05"
            },
            {
              set_name: "Starter Deck: Syrus Truesdale",
              set_code: "YSDS-EN004",
              set_rarity: "Common",
              set_price: "1.03"
            }
          ],
          card_images: [
            {
              id: "47372349",
              image_url:
                "https://storage.googleapis.com/ygoprodeck.com/pics/47372349.jpg",
              image_url_small:
                "https://storage.googleapis.com/ygoprodeck.com/pics_small/47372349.jpg"
            }
          ],
          card_prices: {
            cardmarket_price: "0.10",
            tcgplayer_price: "0.15",
            ebay_price: "0.99",
            amazon_price: "0.05"
          }
        }
      ]
    };
  },
  methods: {
    onDetailShow(url) {
      this.currentUrl = url;
      setTimeout(() => {
        this.detailShow = true;
      }, 100);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
.gameplay {
  font-family: "Roboto", sans-serif;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
}
.board {
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  background-image: url("../assets/img/boardgame.png");
  width: 100%;
  /* height: 100vh; */
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main-player1 {
  position: relative;
  top: 370px;
  padding-left: 20px;
}

.main-player2 {
  position: relative;
  padding-right: 20px;
}

.cover-nick {
  display: flex;
  align-items: center;
  padding: 0px;
}
.cover-nick2 h2 {
  margin-bottom: 0px;
  background: #eb5757; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #000000,
    #eb5757
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #000000,
    #eb5757
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.cover-nick1 h2 {
  margin-bottom: 0px;
  background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.player2image {
  max-width: 100px;
  height: 100px;
}

.player1image {
  max-width: 100px;
  height: 100px;
}
#nicknamep2 {
  color: white;
  border: 2px solid red;
  padding: 0px;
}

#nicknamep1 {
  color: white;
  border: 2px solid blue;
  padding: 0px;
}
.cover-lp {
  color: white;
}

.list-cards {
  position: absolute;
  bottom: 120px;
  left: 224px;
}

.card-image {
  max-width: 250px;
  max-height: 190px;
  margin-right: 52px;
  transition: 0.5s;
}

.card-image:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.big-image {
  position: absolute;
  z-index: 3;
  bottom: 160px;
  left: 5px;
}
.detail-card {
  max-width: 250px;
  max-height: 320px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
