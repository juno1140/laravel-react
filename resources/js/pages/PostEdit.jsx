import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';

function PostEdit() {
    const params = useParams();
    console.log(params)

    const navigate = useNavigate()

    const [editData, setEditData] = useState({name:'', content:''});


    useEffect(() => {
        getEditData();
    }, [])

    function getEditData(){
        console.log(params)
        axios
            .post('/api/edit', {
                id: params.id
            })
            .then(res => {
                setEditData(res.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    function updatePost(){
        if(editData == ''){
            return;
        }
        //入力値を投げる
        console.log(params.id, editData.name,editData.content)
        axios
            .post('/api/update', {
                id: params.id,
                name: editData.name,
                content: editData.content
            })
            .then((res) => {
                console.log(res.data)
                setEditData(res.data);
                navigate("/")
            })
            .catch(error => {
                console.log(error);
            });
    }

    function inputChange(e){
        const key = e.target.name;
        const value = e.target.value;
        editData[key] = value;
        let data = Object.assign({}, editData);
        setEditData(data);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h1>タスク編集</h1>
                        <div className="card">
                            <PostForm data={editData}  inputChange={inputChange} btnFunc={updatePost}　/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostEdit;