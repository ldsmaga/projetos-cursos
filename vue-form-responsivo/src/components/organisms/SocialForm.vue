<template>
  <div>
    <span v-for="inputField in inputs" :key="inputField.id">
      <input-field
        v-model="self()[inputField.model]"
        :label="inputField.label"
        :class="inputField.classes"
        :type="inputField.type"
      ></input-field>
    </span>

    <generic-button text="Next" :func="goToCertificates"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import GenericButton from "../atoms/GenericButton.vue";
import InputField from "../atoms/InputField.vue";
import self from '../../mixins/self';

export default {
  name: "App",
  mixins: [self],
  components: {
    "input-field": InputField,
    "generic-button": GenericButton,
  },
  data() {
    return {
      inputs: [
        { label: "Linkedin", model: "linkedin",  type: 'text', classes: "" },
        { label: "Github", model: "github",  type: 'text', classes: "" },
      ],
    };
  },
  methods:{
    ...mapActions(['changeLinkedin', 'changeGithub']),
    goToCertificates(){
      this.$router.push("/certificates")
    }
  },
  computed: {
    linkedin: {
      get() {
        return this.$store.state.form.linkedin;
      },
      set(value) {
        this.changeLinkedin(value)
      },
    },
    github: {
      get() {
        return this.$store.state.form.github;
      },
      set(value) {
        this.changeGithub(value)
      },
    },
  },
};
</script>
<style lang="scss" scoped>
</style>