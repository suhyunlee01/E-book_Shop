//리덕스로부터 가져옴
import { configureStore, createSlice } from "@reduxjs/toolkit";
import ToonDetails from "./pages/ToonDetails";
//user라는 이름의 slice를 따로 분할해서 import해줌.
import user from "./store/userSlice";

//redux에서 state = slice 를 보관하는 법. usestate = createSlice
//let temp = useState('test') === createSlice({name: 'temp', initialState : 'test'})


//user.actions 내에 user 슬라이스의 모든 것이 담긴다.
//외부로 변경함수 내보냄
export let {changeName, increaseNum} = user.actions;


let stock = createSlice({
    name : 'stockName',
    initialState : [1,2,3]
})
 
//cart.js로 보낼 데이터 slice test code
let product = createSlice({
    name: 'product',
    initialState: [
        { id: 0, name: '테스트아이템', count: 1 },
        { id: 1, name: '테스트아이템2', count: 1}
    ],
    reducers: {
        incraseCount(state, action){
            //오브젝트로 보낸 action 인자.payload.index의 값
            console.log(action.payload.index);
             //오브젝트로 보낸 action 인자.payload.IncreaseNum의 값
            console.log(action.payload.IncreaseNum);

            //만약 인자로 받아온 index와, product 배열의 인덱스 내의 id 값이 같은 경우,
            //인자로 받아온 index의 값을 변수에 저장
            let index = state.findIndex((a)=>{return action.payload.index === state[action.payload.index].id})
            
            //product 배열에 인자로 받아온 index 값을 배열의 index로 해서, 배열 내부 객체 안의 count에 접근한다.
            state[index].count += action.payload.IncreaseNum; //인자로 받아온 숫자만큼 수를 더해준다.
        },
        //action으로 추가할 아이템 받아오기
        addItem(state, action){
            state.push( action.payload );
        }
    }
});

export let {incraseCount, addItem} = product.actions;



//상태를 담고 있는 객체인 리덕스 스토어 //export를 통해 index.js에 전달
export default configureStore({
    //리듀서는 현재의 상태와 액션을 받아 새로운 상태를 반환함. 상태의 변화를 일으키는 역할.
    reducer : {
        //약간 C# 객체지향 구조처럼 user 데이터를 캡슐화 하고 configureStore를 통해서 초기화 하는 느낌
        //외부에서 user slice에 접근하는 방법은 configureStore라는 인터페이스를 통해서이다.
        
        user : user.reducer, //kim
        stock : stock.reducer, //money
        product : product.reducer,
    }
})
