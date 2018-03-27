## vueapimanage  

**about:**  vue api conversion tool

### dependencies 
webpack   
vue project

### example  
api/index.js:
```
export default {
  'login':'login',
  'registered':'registered',
  'article':['list','info'],
  'person':['info',{
    'set':['name']
    }],
  'orders':['list',
    {'inquire':['byName','byId']
  }],
  'foo':[{'foo':[{'foo':[{'foo':['bar']}]}]}]
}
```

==(resolve)==> 
```
{
  "login":"/login",
  "registered":"/registered",
  "articleList":"/article/list",
  "articleInfo":"/article/info",
  "personInfo":"/person/info",
  "personName":"/person/set/name",
  "ordersList":"/orders/list",
  "ordersByName":"/orders/inquire/byName",
  "ordersById":"/orders/inquire/byId",
  "fooBar":"/foo/foo/foo/foo/bar"
}
```

### install:  
```
npm install --save vueapimanage
```


### usage:   

```
import api from './api';
import ApiManage from 'vueapimanage'

Vue.use(ApiManage,{api});
```

```
<script>
export default {
  name: 'App',
  created(){
    console.log(this.$api)
  }
}
</script>
```

### grammar:  
param | explanation | type
------|---------- | ----
api | necessary,api file | file
path | Is there a slash before the path,default false | boolean
capital | Is it a Camel-Case named,default false | boolean

**[github](https://github.com/Grewer/appleCameraFix)**


[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, Grewer
