##vueapimanage


###example
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

###USAGE:  
```
import api from './api';
import ApiManage from './apiManage'

Vue.use(ApiManage,{api});
```
//TODO 