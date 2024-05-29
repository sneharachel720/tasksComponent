<template>
    <h1>Data Fetching</h1>   
    <TaskList />
</template>


<script>
import TaskList from '@/components/TaskList.vue';
export default {
  name: 'HomeScreen',
  components: {
    TaskList
  }
}
</script>