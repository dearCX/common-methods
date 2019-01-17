import { http } from './http'
/* 
  可以配合vuex使用，写在actions里面，再调用的时候在组件里面配合mapActions()使用
  例子：配合vuex里面使用
  testApi ({commit, state}, params) {
    return http.put('api地址', params).then(res => res)
  }
  <------------------------------------------------------------------------------------------------->
  在组件中使用
  <script>
    import { mapActions } from 'vuex'
    export default {
      name: '',
      data () {
        retun {
        }
      },
      methods: {
        getTestApi () {
          testApi({}).then(res => {
            // 处理数据
          })
        },
        ...mapActions([
          testApi
        ])
      }
    }
  </script>
*/
export default {
  // 调用API示例
  testApi () {
    return http.get('api地址').then(res => res)
  },
  testApi1 (params) {
    return http.put('api地址', params).then(res => res)
  },
  testApi2 (id) {
    return http.delete('api地址', id).then(res => res)
  }
}
