import React, {useState, useEffect} from 'react'; //1行目にuseStateを変更する
import axios from 'axios';　//追記する
import PostForm from '../components/PostForm';
import {Link} from "react-router-dom";
import PostEdit from "./PostEdit";

//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];

function Home() {
    //postsの状態を管理する
    const [posts, setPosts] = useState([]);
    //フォームの入力値を管理するステートの定義
    const [formData, setFormData] = useState({name:'', content:''});　　　　//追記

    //画面に到着したらgetPostsDataを呼ぶ
    useEffect(() => {
        getPostsData();
    }, [])

    //一覧情報を取得しステートpostsにセットする
    const getPostsData = () => {
        axios
            .get('/api/posts')
            .then(response => {
                console.log(response.data)
                setPosts(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    const createPost = async() => {
        //空だと弾く
        if(formData == ''){
            return;
        }
        //入力値を投げる
        await axios
            .post('/api/post/create', {
                name: formData.name,
                content: formData.content
            })
            .then((res) => {
                //戻り値をtodosにセット
                const tempPosts = posts

                tempPosts.push(res.data);

                setPosts(tempPosts)

                console.log(posts)

                setFormData({name:'', content:''});
            })
            .catch(error => {
                console.log(error);
            });
    }

    // createPostの下に記載
    const deletePost = async (post) => {
        await axios
            .post('/api/delete', {
                id: post.id
            })
            .then((res) => {
                setPosts(res.data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    //入力がされたら（都度）入力値を変更するためのfunction
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    }

    //空配列として定義する
    let rows = [];
    //postsの要素ごとにrowsで使える形式に変換する
    posts.map((post) =>
        rows.push({
            name: post.name,
            content: post.content,
            editBtn: <Link to={`/post/edit/${post.id}`} key={post.id} className="btn btn-dark">編集</Link>,
            deleteBtn: <button className="btn btn-danger" onClick={() => deletePost(post)} >完了</button>,
        })
    );

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <Link to='/example'>Exampleへ</Link>
                    <div className="card">
                        <div className="card-header">
                            <h1>タスク管理</h1>
                            <div className="card">
                                <PostForm data={formData} inputChange={inputChange} btnFunc={createPost} />
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        {
                                            headerList.map((item, index) => (
                                                    <th key={index}>{item}</th>
                                                )
                                            )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        rows.map((row, index) => (
                                            <tr key={index}>
                                                {
                                                    Object.keys(row).map(function (key, i) {
                                                        return (
                                                            <td key={i}>{row[key]}</td>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;