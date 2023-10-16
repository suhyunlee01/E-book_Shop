//리덕스로부터 가져옴
import { configureStore, createSlice } from "@reduxjs/toolkit";
import ToonDetails from "./pages/ToonDetails";

//redux에서 state = slice 를 보관하는 법. usestate = createSlice
//let temp = useState('test') === createSlice({name: 'temp', initialState : 'test'})

let user = createSlice({
    name : 'userName',
    initialState : 'kim',
    //초기값에서 값 변경
    reducers : {
        //변경함수 지정하기
        changeName(){
            return 'park'
        }
    }
})

//user.actions 내에 user 슬라이스의 모든 것이 담긴다.
//외부로 변경함수 가져옴
export let {changeName} = user.actions


let stock = createSlice({
    name : 'stockName',
    initialState : [1,2,3]
})
 
//cart.js로 보낼 데이터 slice test code
let product = createSlice({
    name: 'product',
    initialState: [
        { id: 0, name: '광마회귀', count: 1 },
        { id: 1, name: '화산귀환', count: 2}
    ],
});



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
