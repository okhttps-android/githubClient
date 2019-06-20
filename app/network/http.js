
import api from "../axios/interApi";

class Http {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'GET'
            })
                .then(res => res)
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    }

    // post方式
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res=>res.data);
        })
    }


    //put 修改
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    }

    //delete
    delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve('数据删除成功!'))
                .catch(err => reject(err))
        })
    }
}
export default new Http();//ES6导出
