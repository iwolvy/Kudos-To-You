<template>
  <b-row>
    <b-col class="leftSideContainer px-5">
      <b-row class="cardContainerHead">
        <b-col>
          <div class="heading sub-header my-5 float-left">Details</div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <KudosForm v-on:inputChange="handleChange" />
    </b-col>
    <b-col class="rightSideContainer px-5">
      <b-row class="cardContainerHead">
        <b-col>
          <div class="heading my-5 float-left">Kudos!</div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <div class="clear-fix"></div>
      <b-row class="cardContainer">
        <KudosContainer id="kudosCard" v-bind:kudos="kudos" />
        <button @click="downloadKudos()" class="button my-5 align-center mx-auto">{{displayText}}</button>
      </b-row>
    </b-col>
  </b-row>
</template>


<script>
import KudosForm from "./components/KudosForm.vue";
import KudosContainer from "./components/KudosContainer.vue";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";

export default {
  name: "App",
  components: {
    KudosContainer,
    KudosForm
  },

  data: () => {
    return {
      displayText: "Download",
      kudos: {
        recipientName: "",
        description: "",
        thanksGiver: "",
        gradient: "",
        imgSrc: "",
        imgDesc: "",
        imgName : ""
      }
    };
  },
  methods: {
    downloadKudos: function(event) {
      var recipientName = document.getElementById("recipientName").innerHTML;
      var scale = 1.5;
      var node = document.getElementById("kudosCard");
      domtoimage
        .toPng(node, {
          height: node.offsetHeight * scale,
          width: node.offsetWidth * scale,
          style: {
            transform: "scale(" + scale + ")",
            transformOrigin: "top left",
            width: node.offsetWidth + "px",
            height: node.offsetHeight + "px"
          }
        })
        .then(function(dataUrl) {
          var link = document.createElement("a");
          link.download = recipientName + ".png";
          link.href = dataUrl;
          link.click();
        });
    },
    handleChange: function(kudos) {
      this.kudos = kudos;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap");

* {
  padding: 0px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
}

.heading {
  font-weight: bold;
  font-size: 64px;
  line-height: 87px;
  color: #1d1d1d;
}
.rightSideContainer {
  height: 100vh;
  background: $color-code-grey;
}
.button {
  width: 192px;
  height: 53px;
  left: 895px;
  top: 669px;
  background: linear-gradient(180deg, #03d0b8 0%, #005c71 100%);
  border-radius: 8px;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-fix {
  clear: both;
}

div.row {
  margin-right: unset;
  margin-left: unset;
}
div[class*="col-"] {
  padding-right: unset;
  padding-left: unset;
}

.cardContainerHead {
  height: 20%;
}
.cardContainer {
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.sub-header {
  color: $color-code-grey-title;
}
</style>