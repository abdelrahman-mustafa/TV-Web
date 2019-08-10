
let articles =  [
    {
      "id": "cjqf0ayuy000b0847wpsjemkz",
      "publishDate": "2015-11-22T00:00:00.000Z",
      "publishTime": "1970-01-01T00:00:00.000Z"
    },
    {
      "id": "cjqfl911j001w0847gr2koqon",
      "publishDate": "2015-11-22T00:00:00.000Z",
      "publishTime": "2015-11-22T02:15:00.000Z"
    },
    {
      "id": "cjqtfa0a700140847bqq0xasq",
      "publishDate": "2019-01-11T22:00:00.000Z",
      "publishTime": "2015-11-22T00:20:00.000Z"
    },
    {
      "id": "cjqtfj21n0025084762awvwnf",
      "publishDate": "2019-01-10T22:00:00.000Z",
      "publishTime": "2015-11-22T00:49:00.000Z"
    },
    {
      "id": "cjs1u5wky0gt208479rke0lgt",
      "publishDate": "2019-02-11T22:00:00.000Z",
      "publishTime": "1970-01-01T13:00:00.000Z"
    },
    {
      "id": "cjs1uakx20guj0847er8qtcre",
      "publishDate": "2019-02-11T22:00:00.000Z",
      "publishTime": "1970-01-01T14:00:00.000Z"
    },
    {
      "id": "cjs1ucsh00gvd084758x7zvjc",
      "publishDate": "2019-02-11T22:00:00.000Z",
      "publishTime": "1970-01-01T16:00:00.000Z"
    },
    {
      "id": "cjtvdz8jc0zks08479qfvxs57",
      "publishDate": "2019-03-29T22:00:00.000Z",
      "publishTime": "1970-01-01T13:00:00.000Z"
    }]
articles.forEach((article, index) => {
    let time = article.publishTime.substring(
        article.publishTime.lastIndexOf("T") + 1, 
        article.publishTime.lastIndexOf("Z")
    );
    let date = article.publishDate.split('T')[0];
    articles[index].date = date + 'T'+time +'Z'
});
articles.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
});
console.log( articles)

