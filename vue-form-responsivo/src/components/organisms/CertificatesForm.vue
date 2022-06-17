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
    <generic-button text="Finish" :func="finish"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import GenericButton from "../atoms/GenericButton.vue";
import InputField from "../atoms/InputField.vue";
import self from "../../mixins/self";

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
        { label: "Institution", model: "institution",  type: 'text', classes: "" },
        { label: "Graduation", model: "graduation",  type: 'text', classes: "" },
        { label: "Certificates", model: "certificate",  type: 'text', classes: "" },
      ],
    };
  },
  methods: {
    ...mapActions([
      "changeInstitution",
      "changeGraduation",
      "changeCertificate",
    ]),
    finish(){
      this.$router.push("/success")
    }
  },
  computed: {
    institution: {
      get() {
        return this.$store.state.form.institution;
      },
      set(value) {
        this.changeInstitution(value);
      },
    },
    graduation: {
      get() {
        return this.$store.state.form.graduation;
      },
      set(value) {
        this.changeGraduation(value);
      },
    },
    certificate: {
      get() {
        return this.$store.state.form.certificate;
      },
      set(value) {
        this.changeCertificate(value);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
</style>