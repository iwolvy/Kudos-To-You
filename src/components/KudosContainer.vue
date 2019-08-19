
<template>
  <div class>
    <div class="kudos-info">
      <div class="kudos-header">
        Thanks You,
        
        <span class="kudos-recipientName">{{recipientName}}</span>!
      </div>

      <div class="kudos-description">{{description}}</div>

      <div class="kudos-description">- {{thanksGiver}}</div>
    </div>

    <div class="kudos-pic">
      <div class="kudos"></div>
      <div class>{{imgDesc}}</div>
    </div>
  </div>
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

<style>
</style>