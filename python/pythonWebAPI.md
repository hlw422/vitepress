# Python 发布web API

本文介绍Python 发布webAPI的步骤

## 安装插件
```
pip install Flask 
```
## POST 方法

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/post_example', methods=['POST'])
def post_example():
    data = request.get_json()  # 获取POST请求中的JSON数据
    if data:
        name = data.get('name')  # 假设JSON数据中有一个名为'name'的字段
        return jsonify({'message': f'Hello, {name}! Received your POST request.'})
    else:
        return jsonify({'error': 'No JSON data received in the request.'}), 400

if __name__ == '__main__':
    app.run(debug=True)

```
**调用**

```json
http://127.0.0.1:5000/api/post_example

输入
{
    "name":"张山"
}

输出
{
	"message": "Hello, 张山! Received your POST request."
}
```


## GET 方法

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello, World!'})

if __name__ == '__main__':
    app.run(debug=True)

```
**调用**

```json
http://127.0.0.1:5000/api/hello

{
  "message": "Hello, World!"
}
```
