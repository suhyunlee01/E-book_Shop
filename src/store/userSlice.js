import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'userName',
    initialState : {name: 'User1234', age : 24, grade:'VIP 회원', phone:'010-1111-1111', email: 'leesuhyun05505@gmail.com'},
    //초기값에서 값 변경
    reducers : {
        //변경함수 지정하기 //state로 initialState 값이 들어옴
        changeName(state, action){
            //this.name과 같음.
            state.name = action.payload;
        },
        increaseNum(state, a){
            state.age = state.age + a.payload; 
            // state.age = state.age + 1
        }
    }
})

export default user;