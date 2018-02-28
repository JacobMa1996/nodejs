const fetch = require('node-fetch')
const http = require('http')
const images = [
    'http://localhost:8012/?0',
    'http://localhost:8012/?1',
    'http://localhost:8012/?2',
    'http://localhost:8012/?3',
    'http://localhost:8012/?4',
    'http://localhost:8012/?5',
    'http://localhost:8012/?6',
    'http://localhost:8012/?7',
    'http://localhost:8012/?8',
    'http://localhost:8012/?9',
]
const downloadImages = (imagesArray) => {

    // imagesArray.map(url => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(body => console.log(body))
    // })

    const download = (index) => {
        return new Promise((resolve, reject) => {
            fetch(imagesArray[index++])
                .then(res => res.json())
                .then((body) => {
                    console.log(body)
                    resolve(index)
                })
        })
    }

    const run = () => {
        function next(index) {
            if (index === 10) {
                return false
            }
            download(index).then(index => next(index))
        }

        next(0)
    }

    run()

};
downloadImages(images);

// fetch 获取一个数据 服务器是本地的 server/server
// fetch('http://localhost:8012/?1').then(res => res.json()).then(body => console.log(body))

// http.get 获取一个数据 服务器是本地的 server/server
// http.get('http://localhost:8012/?1', res => {
//     let json = ''
//     res.on('data', (chunk) => {
//         json += chunk
//     })
//     res.on('end', () => {
//         console.log(json)
//     })

// })