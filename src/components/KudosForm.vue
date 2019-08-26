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
        <input v-model="kudos.imgSrc" placeholder="imgSrc" v-on:change="uploadPhoto()" />
        <button id="upload_widget" class="cloudinary-button" v-on:click="uploadPhoto()">Upload files</button>
        <div>
          </div>
        <cld-image cloudName="demo" publicId="sample" width="300" height="300" crop="scale" />
         <div>
          </div>
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
      }
    };
  },
  methods: {
    sendKudosDetails: function() {
      //console.log(this.book)
      this.$emit("inputChange", this.kudos);
    },
    uploadPhoto: function() {
      var myWidget = cloudinary.createUploadWidget(
        {
          cloudName: "my_cloud_name",
          uploadPreset: "my_preset"
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
          }
        }
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        function() {
          myWidget.open();
        },
        false
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        function() {
          myWidget.open();
        },
        false
      );
    }
  }
};
</script>

<style>
</style>