<template>
  <div>
    <b-row>
      <b-col>
        <input v-model="kudos.recipientName" placeholder="Name" v-on:input="sendKudosDetails()" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <textarea
          v-model="kudos.description"
          placeholder="description"
          v-on:input="sendKudosDetails()"
        ></textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <input
          v-model="kudos.thanksGiver"
          placeholder="thanksGiver"
          v-on:input="sendKudosDetails()"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <input v-model="kudos.gradient" placeholder="gradient" v-on:input="sendKudosDetails()" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <input
          v-model="kudos.imgSrc"
          placeholder="imgSrc"
          type="hidden"
          v-on:change="uploadPhoto()"
          v-on:input="sendKudosDetails()"
          v-on:paste="sendKudosDetails()"
        />
        <button id="upload_widget" class="cloudinary-button" v-on:click="uploadPhoto()">Upload files</button>
        <div></div>
        <div></div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <input v-model="kudos.imgDesc" placeholder="imgDesc" v-on:input="sendKudosDetails()" />
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

<style>
</style>