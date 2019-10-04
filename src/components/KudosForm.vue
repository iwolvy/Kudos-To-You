<template>
  <div>
    <b-row class="my-1 mb-4">
      <b-col>
        <b-row class="label">RECIPIENT NAME</b-row>
        <b-row class="inputGroup">
          <input v-model="kudos.recipientName" placeholder v-on:input="sendKudosDetails()" />
        </b-row>
      </b-col>
    </b-row>

    <b-row class="my-1 mb-4">
      <b-col>
        <b-row class="label">KUDOS MESSAGE</b-row>
        <b-row class="inputGroup">
          <textarea v-model="kudos.description" placeholder v-on:input="sendKudosDetails()"></textarea>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="my-1 mb-4">
      <b-col>
        <b-row class="label">THANKS GIVER</b-row>
        <b-row class="inputGroup">
          <input
            v-model="kudos.thanksGiver"
            placeholder=""
            v-on:input="sendKudosDetails()"
          />
        </b-row>
      </b-col>
    </b-row>

    <b-row class="my-1 mb-4">
      <b-col>
        <b-row class="label">SELECT IMAGE </b-row>
        <b-row class="inputGroup">
          <input
            v-model="kudos.imgSrc"
            placeholder="imgSrc"
            type="hidden"
            v-on:change="uploadPhoto()"
            v-on:input="sendKudosDetails()"
            v-on:paste="sendKudosDetails()"
          />
          <button
            id="upload_widget"
            class="cloudinary-button"
            v-on:click="uploadPhoto()"
          >Upload files</button>
          <span>{{kudos.imgSrc}}</span>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="my-1 mb-4">
      <b-col>
        <b-row class="label">KUDOS AVATAR</b-row>
        <b-row class="inputGroup">
          <input v-model="kudos.imgDesc" placeholder="" v-on:input="sendKudosDetails()" />
        </b-row>
      </b-col>
    </b-row>

    <b-row class="my-1 mb-4 d-none">
      <b-col>
        <b-row class="label">GRADIENT</b-row>
        <b-row class="inputGroup">
          <input v-model="kudos.gradient" placeholder="gradient" v-on:input="sendKudosDetails()" />
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "KudosForm",
  components: {},

  data: () => {
    return {
      kudos: {
        recipientName: "",
        description: "",
        thanksGiver: "",
        gradient: "",
        imgSrc: "",
        imgDesc: ""
      },
      myWidget: null
    };
  },

  mounted: function() {
    var kudosInstance = this.kudos;
    var instance = this;

    this.myWidget = cloudinary.createUploadWidget(
      {
        cloudName: "the-corp-in",
        uploadPreset: "khpggro6"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          kudosInstance.imgSrc = result.info.url;
          instance.sendKudosDetails();
        }
      }
    );

    var widgetInstance = this.myWidget;

    document.getElementById("upload_widget").addEventListener(
      "click",
      function() {
        widgetInstance.open();
      },
      false
    );
  },
  methods: {
    sendKudosDetails: function() {
      this.$emit("inputChange", this.kudos);
    },

    uploadPhoto: function() {
      var widgetInstance = this.myWidget;

      document.getElementById("upload_widget").addEventListener(
        "click",
        function() {
          widgetInstance.open();
        },
        false
      );
    }
  }
};
</script>

<style  lang="scss" >
.label {
  color: $color-code-dark-grey;
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
}
.inputGroup input,
.inputGroup textarea {
  font-size: 18px;
  color: $color-code-black;
  box-shadow: none;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 2px solid $color-code-grey-title;
  padding: 10px 0;
  width: 100%;
}
</style>