<template>
  <div>
    <h2>Personal</h2>
    <generic-divider />
    <ul>
      <li>{{ fullname }}</li>
      <li>{{ nickname }}</li>
      <li>{{ email }}</li>
    </ul>
    <ul class="second-group">
      <li>{{ phone }}</li>
      <li>{{ birthday }}</li>
    </ul>
    <h2>Social</h2>
    <generic-divider />
    <ul>
      <li>{{ github }}</li>
      <li>{{ linkedin }}</li>
    </ul>
    <h2>Certificates</h2>
    <generic-divider />
    <div class="certification-group">
      <ul>
        <li>
          <h3>{{ institution }}</h3>
          <span>{{ graduation }}</span> <br />
          <span>{{ certificate }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import GenericDivider from "@/components/atoms/GenericDivider.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    GenericDivider,
  },
  computed: {
    ...mapGetters([
      "fullname",
      "nickname",
      "email",
      "phone",
      "birthday",
      "github",
      "linkedin",
      "certificate",
      "graduation",
      "institution",
    ]),
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-family: "Roboto";
  font-weight: normal;
  margin-left: 7vh;
}

li {
  font-family: "Roboto";
  font-weight: normal;
}
ul {
  margin-left: 5vh;
  display: inline-block;
  vertical-align: top;
}

.second-group {
  margin-left: 20vh;
}

.certification-group {
  ul {
    list-style: none;
  }
  li {
    position: relative;
  }
  li:before {
    position: sticky;
    left: -1.2em;
    bottom: 0.3em;
    content: " ";
    display: block;
    width: 0.45em;
    height: 0.45em;
    border: 2px solid #660099;
    border-radius: 50%;
  }
}
</style>