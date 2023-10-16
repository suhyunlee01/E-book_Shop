import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from 'react-redux';
import { changeName } from '../store';


function Cart() {

    //index.js에서 <Provider store = {store}>로 전달한 slice 데이터들을 useSelector로 가져올 수 있다.
    //리덕스 스토어 안에 있는 product slice만 가져옴.
    let myData = useSelector((state)=>{return state.product});
    let dispatch = useDispatch();
    
    //product slice는 [{ id: 0, name: '광마회귀', count: 1 }, { id: 1, name: '화산귀환', count: 2}]라는 배열을 가짐.
    console.log(myData[1]); //product 데이터 배열의 첫번째 제품
    console.log(myData[2]); ////product 데이터 배열의 두번째 제품
    
    return (
        <div>
            {myData.user}
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>상품번호</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>삭제하기</th>
                    </tr>
                </thead>
                {/* myData = product slice 이기 때문에 배열이라서 map을 통해 구현 */}
                {myData.map((data, index)=>{
                    return(
                        <tbody>
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.count}</td>
                                <td><button className='btnUpate' onClick={()=>{
                                    //dispatch를 통해서 변경함수인 changeName을 불러와달라고 부탁함
                                    dispatch(changeName());
                                }}>+</button></td>
                                <td><button className='btnDelete'>삭제</button></td>
                            </tr>
                        </tbody>
                        )
                    })
                }
            </Table>
        </div>
    );
}

export default Cart;