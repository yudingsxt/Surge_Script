var body=$response.body;
var url=$request.url;
const path = '/mp/getappmsgad?f=';

if (url.indexOf(path) != -1) {
    let obj = JSON.parse(body);
    obj.advertisement_info = [];
    body = JSON.stringify(obj);
}

$done({body});
