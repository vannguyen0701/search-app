
function SearchInput({userdata,phonedata,handleUser,handlePhone,handleSubmid}) {
    return (    
        <form  onClick={handleSubmid}>
            <div className="form-container">
                <div className='form-group'>
                    <input 
                        value={userdata}
                        onChange = {handleUser}
                        placeholder='Họ và tên'
                        className='form-control'
                        />
                </div>
                <div className='form-group'>
                    <input 
                        value = {phonedata}
                        onChange = {handlePhone}
                        placeholder='Số điện thoại'
                        className='form-control'/>
                </div>
                <button 
                    type="submit"
                    className="btn btnw">Tra cứu</button>
            </div>      
        </form>
    );
}

export default SearchInput;