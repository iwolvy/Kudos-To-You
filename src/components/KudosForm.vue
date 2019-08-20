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
        <input v-model="kudos.imgSrc" placeholder="imgSrc" v-on:input="sendKudosDetails()" />
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
    }
  }
};
</script>

<style>
</style>