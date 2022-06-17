<template>
  <div>
      <app-tabs />
      <social-form />
  </div>
</template>

<script>
import SocialForm from '@/components/organisms/SocialForm.vue'
import AppTabs from '@/components/molecules/AppTabs.vue'

export default {
  name: 'App',
  components: { 
    SocialForm,
    AppTabs
  },
}
</script>
<style lang="scss" scoped>

</style>