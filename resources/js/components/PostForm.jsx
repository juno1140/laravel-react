import React from 'react';

function PostFrom(props) {
    const { data, inputChange, btnFunc } = props;//追記
    return (
        <form>
            <div className="form-group">
                <label htmlFor="">タスク名</label>
                <input type='text' id="name" className="form-control" name="name"  value={data.name} onChange={inputChange}  />
            </div>
            <div className="form-group">
                <label htmlFor="">内容</label>
                <input type='text' id="content" className="form-control" name="content" value={data.content} onChange={inputChange} />
            </div>
            <button type='button' color="primary" className="btn btn-primary" onClick={btnFunc}>登録</button>
        </form>
    );
}

export default PostFrom;