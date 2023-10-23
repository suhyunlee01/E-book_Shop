import { changeName } from "../store";
import { useDispatch, useSelector } from "react-redux";
import user from "../store/userSlice";

function About(){
  let userData = useSelector((state) => {return state.user});
  console.log(userData);
  let dispatch = useDispatch();

  return(
    <div>
      <img width={300} height={300}></img>
      <form>
        <input type="text" onChange={(e)=>{
          if(e.target.value){
            dispatch(changeName(e.target.value));
          }
        }}></input>
        <button type="submit" onClick={(e)=>{
          if(e.target.value){
            dispatch(changeName(e.target.value));
          }
        }}>저장</button>
      </form>
      <p>이름:  {userData.name}</p>
      <p>나이:  {userData.age} 세</p>
      <p>이메일:  {userData.email}</p>
      <p>전화번호:  {userData.phone}</p>
      <p>회원 등급:  {userData.grade}</p>
    </div>
  )
}

export default About;