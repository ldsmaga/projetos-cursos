<template>
  <div>
      <app-tabs />
      <personal-form />
  </div>
</template>

<script>
import PersonalForm from '@/components/organisms/PersonalForm.vue'
import AppTabs from '@/components/molecules/AppTabs.vue'

export default {
  name: 'App',
  components: { 
    PersonalForm,
    AppTabs
  },
}
</script>
<style lang="scss" scoped>

</style>