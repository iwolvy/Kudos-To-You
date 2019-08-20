
<template>
  <b-row>
    <b-col cols="9" class="kudos-info">
      <div class="kudos-header bold">
        Thanks You,
        <span class="kudos-recipientName">{{recipientName}}</span>!
      </div>

      <div class="kudos-description">{{description}}</div>

      <div class="kudos-description">- {{thanksGiver}}</div>
    </b-col>

    <b-col cols="3" class="kudos-pic">
      <b-row class="kudos">
        <b-col>
          <div class="kudos-img" v-bind:style="{ 'background-image': 'url(' + imgSrc + ')' }"></div>
        </b-col>
      </b-row>
      <b-row class="align-bottom text-center">
        <b-col>
          <span >{{imgDesc}}</span>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "KudosContainer",
  components: {},
  data: () => {
    return {
      recipientName: "Nijin",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      thanksGiver: "Ashwin",
      gradient: "",
      imgSrc: "https://i.dlpng.com/static/png/312581_preview.png",
      imgDesc: "Wonder Women"
    };
  }
};
</script>

<style >
.kudos-img {
  min-height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  background-position: 50% 50%;
}
</style>