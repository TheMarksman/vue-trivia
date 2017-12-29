<template>
  <div class="questions">
    <question 
      v-for="question in questions"
      v-bind:question="question"
      v-bind:key="question.id">
    </question>
  </div>
</template>

<script>
import Question from 'components/Question'

export default {
  components: {
    Question
  },
  computed: {
    questions () {
      return this.$store.state.questions
    }
  }
}
</script>
