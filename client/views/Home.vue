<template>
  <div class="page">
    <questions />
  </div>
</template>

<script>
import Questions from 'components/Questions'

export default {
  components: {
    Questions
  },
  mounted: function () {
    this.$store.dispatch('LOAD_QUESTIONS')
  }
}
</script>
