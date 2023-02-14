import SearchInput from "./searchinput";
import SearchView from "./searchview";
import {useState, useEffect} from 'react'
import axios from 'axios'
function Search() {
    const [datas, setdatas] = useState([]);
    const [userdata, setuserdata] = useState('');
    const [phonedata, setphonedata] = useState('');
    console.log(datas);
    useEffect(() => {
        axios
            .get('http://retailapi.pos1230.vn/api/get-customers')
            .then(res=>{
                setdatas(res.data.data);
            })
            .catch(e=>console.log(e))
    }, []);

    // lay ky tu nguoi dung nhap vao
    const handleUser = (e) =>{
        setuserdata(e.target.value)
    }
    const handlePhone = (e) =>{
        setphonedata(e.target.value)
    }
    //lay du lieu gan vao mang result
    // const handleSearch = (data) =>{
    //     setresult(data)
    // }
    // tat su kien reload trang cua form
    const handleSubmid = (e) =>{
        e.preventDefault()
    }
    return ( 
        <div className="wrap">
            <SearchInput 
                handleUser={handleUser} 
                handlePhone = {handlePhone}
                userdata={userdata}
                phonedata = {phonedata}
                handleSubmid={handleSubmid}
               />
            <SearchView
                datas={datas}
                userdata={userdata}
                phonedata = {phonedata}
            />
        </div>
    );
}

export default Search;