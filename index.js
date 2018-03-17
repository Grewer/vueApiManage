let ApiManage = {};
ApiManage.install = (Vue, option) => {
  let {api} = option;
  if(!api){
    throw new Error('请添加数据源');
  }
  let ret = {};
  const getByArray = (arr, path) => {
    for (let i = 0, l = arr.length; i < l; i++) {
      if (arr[i].length) {
        ret[path.split('/')[0] + arr[i]] = path + '/' + arr[i];
      } else {
        getCycle(arr[i], path)
      }
    }
  }

  const getCycle = (obj, path = '') => {
    for (let i in obj) {
      if (obj[i] instanceof Array) {
        getByArray(obj[i], path + '/' + i);
      } else {
        ret[path.split('/')[0] + i] = path + '/' + i;
      }
    }
  }


  for (let i in api) {
    if (api[i] instanceof Array) {
      getByArray(api[i], i);
    } else {
      ret[i] = api[i];
    }
  }

  Vue.prototype.$api = ret;
};

export default ApiManage;
