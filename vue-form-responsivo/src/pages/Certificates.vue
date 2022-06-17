<template>
  <div>
      <app-tabs />
      <certificates-form />
  </div>
</template>

<script>
import CertificatesForm from '@/components/organisms/CertificatesForm.vue'
import AppTabs from '@/components/molecules/AppTabs.vue'

export default {
  name: 'App',
  components: { 
    CertificatesForm,
    AppTabs
  },
}
</script>
<style lang="scss" scoped>

</style>