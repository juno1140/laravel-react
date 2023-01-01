<!DOCTYPE html>
<html>
<head>
    <title>新年あけましておめでとうございます！</title>
    <style>
        body {
            background-color: #ffffcc;
            font-family: "Helvetica Neue", sans-serif;
            color: #333333;
            text-align: center;
        }

        h1 {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center;
        }

        p {
            font-size: 18px;
            margin: 20px 0;
            text-align: left;
        }

        img {
            width: 600px;
            height: 400px;
            border: 10px solid #333333;
            margin: 20px 0;
        }

        /*ul {*/
        /*    list-style: none;*/
        /*    margin: 20px 0;*/
        /*    padding: 0;*/
        /*    text-align: left;*/
        /*}*/

        /*li {*/
        /*    font-size: 18px;*/
        /*    margin: 10px 0;*/
        /*}*/

        /*a {*/
        /*    color: #333333;*/
        /*    text-decoration: none;*/
        /*}*/

        /*a:hover {*/
        /*    color: #ff6600;*/
        /*    text-decoration: underline;*/
        /*}*/
        ul {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        li {
            list-style: none;
            margin: 20px;
            width: 300px;
            height: 200px;
            background-color: #ffffcc;
            border: 1px solid #333333;
            border-radius: 10px;
            background: url('http://localhost/aa.jpg') no-repeat;
            background-size: cover;
        }

        li::before {
            content: "";
        }

        a {
            display: block;
            padding: 20px;
            color: #333333;
            text-decoration: none;
        }

        a:hover {
            color: #ff6600;
            text-decoration: underline;
        }

        p {
            text-align: center;
        }
    </style>
</head>
<body>
<h1>新年あけましておめでとうございます！</h1>
<p>今年もよろしくお願いいたします。</p>
<img src="24844835_m.jpg" alt="新年の風景">
<p>新年にぴったりの記事をお届けします。</p>
<ul>
    <li><a href="/article1">新年のおすすめレシピ</a></li>
    <li><a href="/article2">新年の抱負</a></li>
    <li><a href="/article3">新年のインテリアアイデア</a></li>
</ul>
</body>
</html>