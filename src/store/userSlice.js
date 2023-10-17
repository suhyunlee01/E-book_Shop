import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'userName',
    initialState : {name: 'kim', age : 20},
    //초기값에서 값 변경
    reducers : {
        //변경함수 지정하기 //state로 initialState 값이 들어옴
        changeName(state){
            //this.name과 같음.
            state.name = 'park'
        },
        increaseNum(state, a){
            state.age = state.age + a.payload; 
            // state.age = state.age + 1
        }
    }
})

export default user;