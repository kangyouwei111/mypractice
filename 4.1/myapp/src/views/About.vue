<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(item, index) in list" :key="index">
      {{ item.name }}-{{ item.age }}
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      axios({
        url: 'http://localhost:8000/user/query',
        method: 'get',
      }).then((res) => {
        console.log('数据', res)
        this.list = res.data.data
      })
    },
  },
}
</script>
