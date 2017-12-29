<template>
    <div>
        <div>
            <h4>{{question.category}}</h4>
            <p>{{question.question}}</p>
        </div>

        <div v-if="!isMultipleChoice">
            <form>
                <input id="is-true" name="question" value="true" type="radio">
                <label for="is-true">True</label>
                <input id="is-false" name="question" value="false" type="radio">
                <label for="is-false">False</label>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  props: ['question'],
  computed: {
    isMultipleChoice () {
        return this.question.type === 'multiple'
    }
  }
}
</script>

<style>

</style>
