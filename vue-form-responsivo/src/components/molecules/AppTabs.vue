<template>
  <div class="tab-item">
    <span v-for="genericTab in tabs" :key="genericTab.id">
      <generic-tab-label :class="currentPage.substring(1) == genericTab.tabName.toLowerCase() ? 'active-now' : ''" :tabName="genericTab.tabName"></generic-tab-label>
    </span>
  </div>
</template>
<script>
import GenericTabLabel from "../atoms/GenericTabLabel.vue";
export default {
  components: {
    GenericTabLabel,
  },
  data() {
    return {
      currentPage: this.$route.path,
      tabs: [
        { tabName: "Personal", classes: "" },
        { tabName: "Social", classes: "" },
        { tabName: "Certificates", classes: "" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>


h1 {
  font-family: "Roboto", sans-serif;
  margin: 2vh;
  padding: 5vh;
}

.tab-item {
  text-align: center;
  margin-left: 7vh;
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  width: 80%;
  border-bottom: 2px solid #B8B8B8;

  
  @media screen and (max-width: 705px) {
  font-size: 10px;
  }

  @media screen and (max-width: 320px) {
  font-size: 6px;
  }
  
}
.active-now{
  border-bottom: 3px solid #660099;
}

</style>