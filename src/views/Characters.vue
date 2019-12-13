<template>
  <div id="characters">
    <audio id="myAudio" controls autoplay loop style="display:none;">
      <source src="../assets/audio/characters.mp3" type="audio/mpeg" />
    </audio>
    <audio id="buttonHover" controls style="display:none;">
      <source src="../assets/audio/hoverchar.mp3" type="audio/mpeg" />
    </audio>
    <audio id="buttonClick" controls style="display:none;">
      <source src="../assets/audio/clickchar.mp3" type="audio/mpeg" />
    </audio>
    <div class="character-series">
      <h1>Select Your Character</h1>
      <h2>
        <span>Yu-Gi-Oh Duel Monsters</span>
      </h2>
      <ul class="character-list">
        <li v-for="char in dm" :key="char.name">
          <a
            :name="char.name"
            :style="char.style"
            @mouseover="onSound"
            @mouseleave="offSound"
            @click="selectChar(char.image)"
          >
            <img
              class="hover"
              src="https://www.konami.com/yugioh/duel_links/en/character/images/icon_hover.png"
              alt="img"
            />
          </a>
        </li>
      </ul>
      <h2>
        <span>Yu-Gi-Oh GX</span>
      </h2>
      <ul class="character-list">
        <li v-for="char in gx" :key="char.name">
          <a
            :name="char.name"
            :style="char.style"
            @mouseover="onSound"
            @mouseleave="offSound"
            @click="selectChar(char.image)"
          >
            <img
              class="hover"
              src="https://www.konami.com/yugioh/duel_links/en/character/images/icon_hover.png"
              alt="img"
            />
          </a>
        </li>
      </ul>
      <h2>
        <span>Yu-Gi-Oh 5D's</span>
      </h2>
      <ul class="character-list">
        <li v-for="char in sd" :key="char.name">
          <a
            :name="char.name"
            :style="char.style"
            @mouseover="onSound"
            @mouseleave="offSound"
            @click="selectChar(char.image)"
          >
            <img
              class="hover"
              src="https://www.konami.com/yugioh/duel_links/en/character/images/icon_hover.png"
              alt="img"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Characters",
  data() {
    return {
      dm: [
        {
          name: "dm1",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm01.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm01.png"
        },
        {
          name: "dm2",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm02.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm02.png"
        },
        {
          name: "dm3",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm03.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm03.png"
        },
        {
          name: "dm4",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm04.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm04.png"
        },
        {
          name: "dm5",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm05.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm05.png"
        },
        {
          name: "dm6",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm06.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm06.png"
        },
        {
          name: "dm7",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm07.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm07.png"
        },
        {
          name: "dm8",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm08.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm08.png"
        },
        {
          name: "dm9",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm09.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm09.png"
        },
        {
          name: "dm10",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm10.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm10.png"
        },
        {
          name: "dm11",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm11.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm11.png"
        },
        {
          name: "dm12",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm12.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm12.png"
        },
        {
          name: "dm13",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm13.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm13.png"
        },
        {
          name: "dm14",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm14.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm14.png"
        },
        {
          name: "dm15",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm15.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm15.png"
        },
        {
          name: "dm16",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm17.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm17.png"
        },
        {
          name: "dm17",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm19.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm19.png"
        },
        {
          name: "dm18",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm22.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm22.png"
        },
        {
          name: "dm19",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm23.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm23.png"
        },
        {
          name: "dm20",
          style:
            "background-image: url(https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm24.png)",
          image:
            "https://www.konami.com/yugioh/duel_links/en/character/images/icon/dm24.png"
        }
      ],
      gx: [
        {
          name: "gx1",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx01.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx01.png"
        },
        {
          name: "gx2",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx02.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx02.png"
        },
        {
          name: "gx3",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx03.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx03.png"
        },
        {
          name: "gx4",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx04.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx04.png"
        },
        {
          name: "gx5",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx05.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx05.png"
        },
        {
          name: "gx6",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx06.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx06.png"
        },
        {
          name: "gx7",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx07.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx07.png"
        },
        {
          name: "gx8",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx10.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx10.png"
        },
        {
          name: "gx9",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx12.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/gx12.png"
        }
      ],
      sd: [
        {
          name: "5d1",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/5ds01.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/5ds01.png"
        },
        {
          name: "5d2",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/5ds03.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/5ds03.png"
        },
        {
          name: "5d3",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/5ds04.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/5ds04.png"
        },
        {
          name: "5d4",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/5ds05.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/5ds05.png"
        },
        {
          name: "5d5",
          style:
            "background-image: url(https://img.konami.com/yugioh/duel_links/en/character/images/icon/5ds06.png)",
          image:
            "https://img.konami.com/yugioh/duel_links/en/character/images/icon/5ds06.png"
        }
      ]
    };
  },
  methods: {
    selectChar(image) {
      let audio = document.getElementById("buttonClick");
      audio.play();
      alert(image);
    },
    onSound() {
      this.soundOn = true;
      let audio = document.getElementById("buttonHover");
      audio.play();
    },
    offSound() {
      this.soundOn = false;
      let audio = document.getElementById("buttonHover");
      audio.stop();
    }
  }
};
</script>

<style scoped>
@import "../assets/scss/characters.css";
</style>
