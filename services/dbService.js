import { data } from '../data/todoData.js'

export default (() => {

function getTodos() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(data), 1000)

    //Reject if error
  })
}

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(
      resolve({
        id: '456',
        firstname: '',
        lastname: '',
        todos: [],
      }),
      1000
    )

    //Reject if error
  })
}

function importTopicData(data){
  console.log('inside import data function');
  objArr = [];

  for (_i = 0, _len = 4; _i < _len; _i++) {
    obj = data[_i];
    for (key in obj) {
      _tmp = {};
      _tmp[key] = obj[key];
      objArr.push(_tmp);
      console.log(objArr)
    }
    }
  } 
  return { getTodos, getUser, importTopicData }  
}
);