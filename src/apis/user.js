const sleep = n => new Promise(resolve => setTimeout(resolve, n));


const data = [
  {
    id: 1,
    Text: '리덕스 미들웨어를 배워봅시다',
    toggle: false
  },
  {
    id: 2,
    Text: 'redux-thunk를 사용해봅시다',
    toggle: false
  },
  {
    id: 3,
    Text: 'redux-saga도 사용해봅시다',
    toggle: true
  }
];

export const getUsers = async () => {
  await sleep(500);
  return data;
};