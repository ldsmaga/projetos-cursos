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
    <span v-for="option in optionsSelect" :key="option.id">
      <generic-select
        v-model="self()[option.model]"
        :options="option.option"
        :label="option.label"
        :class="option.classes"
      />
    </span>
    <input-field
      label="Age"
      class="short-field same-line disabled"
      v-model="age"
    ></input-field>

    <checkbox-field text="I accept the terms and privacy" :value="terms"/>
    <generic-button text="Next" :func="goToSocial"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CheckboxField from "../atoms/CheckboxField.vue";
import GenericButton from "../atoms/GenericButton.vue";
import InputField from "../atoms/InputField.vue";
import GenericSelect from "../atoms/GenericSelect.vue";
import self from "../../mixins/self";

export default {
  name: "App",
  mixins: [self],
  components: {
    "input-field": InputField,
    "generic-button": GenericButton,
    "checkbox-field": CheckboxField,
    GenericSelect,
  },
  data() {
    return {
      inputs: [
        { label: "Full name", model: "fullname", type: 'text', classes: "" },
        { label: "Nickname", model: "nickname",  type: 'text', classes: "" },
        { label: "Email", model: "email",  type: 'text', classes: "email-field same-line" },
        {
          label: "Phone",
          model: "phone", 
          type: 'number', 
          classes: "short-field same-line short-space",
        },
      ],
      optionsSelect: [
        {
          label: "Day",
          option: Array.from({ length: 31 }, (_, i) => i + 1),
          model: "day",
          classes: "short-field same-line",
        },
        {
          label: "Month",
          option: [
            {name: "January", id: 1},
            {name: "February", id: 2},
            {name: "March", id: 3},
            {name: "April", id: 4},
            {name: "May", id: 5},
            {name: "June", id: 6},
            {name: "July", id: 7},
            {name: "August", id: 8},
            {name: "September", id: 9},
            {name: "October", id: 10},
            {name: "November", id: 11},
            {name: "December", id: 12},
          ],
          model: "month",
          classes: "short-field same-line",
        },
        {
          label: "Year",
          option: this.getYears(),
          model: "year",
          classes: "short-field same-line",
        },
      ],
    };
  },
  methods: {
    ...mapActions([
      "changeFullname",
      "changeNickname",
      "changeEmail",
      "changePhone",
      "changeDay",
      "changeMonth",
      "changeYear",
    ]),
    getYears() {
      let max = new Date().getFullYear();
      let min = max - 110;
      let years = [];

      for (let i = max; i >= min; i--) {
        years.push(i);
      }
      return years;
    },
    goToSocial(){
      this.$router.push("/social")
    }
  },
  computed: {
    fullname: {
      get() {
        return this.$store.state.form.fullname;
      },
      set(value) {
        this.changeFullname(value);
      },
    },
    nickname: {
      get() {
        return this.$store.state.form.nickname;
      },
      set(value) {
        this.changeNickname(value);
      },
    },
    email: {
      get() {
        return this.$store.state.form.email;
      },
      set(value) {
        this.changeEmail(value);
      },
    },
    phone: {
      get() {
        return this.$store.state.form.phone;
      },
      set(value) {
        this.$store.commit("setPhone", value);
      },
    },
    day: {
      get() {
        return this.$store.state.form.day;
      },
      set(value) {
        this.$store.commit("setDay", value);
      },
    },
    month: {
      get() {
        return this.$store.state.form.month;
      },
      set(value) {
        this.$store.commit("setMonth", value);
      },
    },
    year: {
      get() {
        return this.$store.state.form.year;
      },
      set(value) {
        this.$store.commit("setYear", value);
      },
    },
    age() {
      if (this.year && this.month && this.day) {
        let today = new Date();
        let birthDate = new Date(this.year + "-" + this.month + "-" + this.day);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age.toString();
      }
      return "";
    },
    terms: {
      get() {
        return this.$store.state.form.term;
      },
      set(value) {
        this.$store.commit("setTerm", value);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
</style>