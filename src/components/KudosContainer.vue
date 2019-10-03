<template>
  <div>
    <b-row class="kudos-container" id="kudosContainer">
      <b-col cols="12">
        <b-row>
          <div class="kudos-info px-5">
            <div class="kudos-header my-5">
              Thank You,
              <span
                class="kudos-recipientName"
                id="recipientName"
              >{{kudos.recipientName ? kudos.recipientName : "People"}}</span>!
            </div>

            <div
              class="kudos-description mb-5"
            >{{kudos.description ? kudos.description : "This Generator will help you to express the Gratitude towards your fellow beings. Spread Happiness."}}</div>

            <b-row>
              <b-col class="mb-5">
                <div class="float-left">- {{kudos.thanksGiver ? kudos.thanksGiver : "The Creator" }}</div>
                <div class="float-right signature">Crafted with &#128158; &amp; Vue</div>
              </b-col>
            </b-row>
          </div>

          <div class="kudos-pic">
            <b-row class="kudos">
              <b-col>
                <div
                  class="kudos-img"
                  v-bind:style="{ 'background-image': 'url(' + (kudos.imgSrc ? kudos.imgSrc : `http://res.cloudinary.com/the-corp-in/image/upload/v1570084864/buddhism-drawing-clipart-2_rd2hdt.png`) + ')' }"
                ></div>
              </b-col>
            </b-row>
            <b-row class="text-center kudos-word-wrapper">
              <b-col>
                <span class="kudos-word">{{kudos.imgDesc ? kudos.imgDesc : "Spread Love"}}</span>
              </b-col>
            </b-row>
          </div>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "KudosContainer",
  components: {},
  props: {
    kudos: {
      type: Object,
      required: false,
      default: {
        recipientName: "Nijin",
        description:
          "You gave me a chance to share my ideas with other great players...! Thank you for inspiring me every day.",
        thanksGiver: "Ashwin",
        gradient: "",
        imgSrc:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dc5imax-50902825-aebf-445b-8afd-906270c1e368.png/v1/fill/w_769,h_1039,strp/avengers_infinity_war___hulk_png_by_davidbksandrade_dc5imax-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE1OCIsInBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGM1aW1heC01MDkwMjgyNS1hZWJmLTQ0NWItOGFmZC05MDYyNzBjMWUzNjgucG5nIiwid2lkdGgiOiI8PTg1OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xqhEgUPsLs9S7wvIaU67ojKVcc_VM4HdxNVitQlumoQ",
        imgDesc: "INCREDIBLE HULK!"
      }
    }
  },

  data: () => {
    return {};
  }
};
</script>

<style lang="scss" >
.kudos-header {
  font-size: 2rem;
}

.kudos-container {
  background: $color-code-white;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.kudos-recipientName {
  color: $color-code-orange;
}

.kudos-description {
  text-align: justify;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
}
.kudos-img {
  margin-top: 10px;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  background-position: 50% 50%;
}

.kudos-word-wrapper {
  margin: 5% 0;
}

.kudos-pic {
  background: $gradient-code-red-blue;
  border-radius: 0 15px 15px 0;
}

.kudos {
  height: 80%;
}

.kudos-word {
  color: $color-code-white;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1.5rem;
  text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
}

.kudos-info {
  width: 65%;
}

.kudos-pic {
  width: 35%;
}

.signature {
  color: $color-code-dark-grey;
}
</style>