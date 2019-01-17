<template>
  <div class="hello">
    <h1>汇总公共方法的使用</h1>
    <ul>
      <li>去除字符串前后空格</li>
      <li>表单元素置空</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'methods',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
