## vueapimanage  

**about:**  vue api conversion tool

### example  
api/index.js:
```
export default {
  'login':'login',
  'registered':'registered',
  'article':['list','info'],
  'person':['info',{'set':['name']}],
  'orders':['list',{'inquire':['byName','byId']}],
  'foo':[{'foo':[{'foo':[{'foo':['bar']}]}]}]
}
```

==(resolve)==> 
```
{
  articleinfo:"article/info"
  articlelist:"article/list"
  foobar:"foo/foo/foo/foo/bar"
  login:"login"
  ordersbyId:"orders/inquire/byId"
  ordersbyName:"orders/inquire/byName"
  orderslist:"orders/list"
  personinfo:"person/info"
  personname:"person/set/name"
  registered:"registered"
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
