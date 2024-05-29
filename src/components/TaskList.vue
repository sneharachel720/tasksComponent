<template>
  <div>
    <div  style="display: flex;gap:300px">
      <table>
        <caption>Component Task</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.id }}</td>
            <td>{{ task.name }}</td>
          </tr>
        </tbody>
      </table>
        <table>
        <caption>Vuex API Task</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userDetails" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
   
    
  </div>
</template>

<script>
import axios from 'axios';
// import {mapGetters} from 'vuex';
export default {
  name: 'TaskList',
 data: () => ({
  tasks:[],
 }),
 computed: {
  // ...mapGetters(['userDetails']);
  userDetails(){
    return this.$store.state.userDetails;
  }
 },
created() {
axios.get('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    // console.log(res.data);
    this.tasks = res.data
  })
 },
 mounted(){
  this.$store.dispatch('getUserDetails');
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
th,td {
  border:1px solid black;
}

table {
  border-collapse: collapse;
  border:1px solid black;
  text-align: center;
  vertical-align: middle;
  width:300px;
}

thead th{
 width:50%;
}

body{
  font-family: sans-serif;
}

caption{
  font-weight: bold;
  font-size: 24px;;
  text-align:center;
  color:#333;
  margin-bottom: 16px;
}

thead{
  background-color: #333333c5;
  color:white;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2%;
}
</style>
