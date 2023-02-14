function SearchView({datas,userdata,phonedata}) {
    let rows = []
    {datas.forEach(item => {
        if((item.name.toLowerCase().includes(userdata.toLowerCase()) && item.phone.includes(phonedata))){
            rows.push(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                </tr>
            )
        }
    })}
    return (
        <div>
             <table>
                 <tr>
                     <th>Id</th>
                     <th>Họ và tên</th>
                     <th>Số điện thoại</th>
                     <th>Địa chỉ</th>
                 </tr>  
                {rows}
            </table>
        </div>
    )
}
export default SearchView