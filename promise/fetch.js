const fetch = require('node-fetch');
const images = [
    'http://urlecho.appspot.com/echo?body=0',
    'http://urlecho.appspot.com/echo?body=1',
    'http://urlecho.appspot.com/echo?body=2',
    'http://urlecho.appspot.com/echo?body=3',
    'http://urlecho.appspot.com/echo?body=4',
    'http://urlecho.appspot.com/echo?body=5',
    'http://urlecho.appspot.com/echo?body=6',
    'http://urlecho.appspot.com/echo?body=7',
    'http://urlecho.appspot.com/echo?body=8',
    'http://urlecho.appspot.com/echo?body=9',
]
const downloadImages = (imagesArray) => {
    let index = 0;
    const download = (url) => fetch(url)
        .then((response) => response.text())
        .then((body) => {
            console.log(body)
            if(url) {
                download(url)
            }
        })

    

    download(imagesArray[index++])

};
downloadImages(images);