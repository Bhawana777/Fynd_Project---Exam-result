<template>
  <div class="home-page">
    <CreateResult />
    <EditResult />
    <ViewResult />
    <ViewResultForStudent />
  </div>
</template>

<script>
import CreateResult from '@/components/results/js/CreateResult.vue'
import EditResult from '@/components/results/js/EditResult.vue'
import ViewResult from '@/components/results/js/ViewResult.vue'
import ViewResultForStudent from '@/components/results/js/ViewResultForStudent.vue'

export default {
  components: {
    CreateResult,
    EditResult,
    ViewResult,
    ViewResultForStudent
  }  
}
</script>