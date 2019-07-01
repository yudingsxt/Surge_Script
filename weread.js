var body = $response.body;
var url = $request.url;
const path = "/pay/memberCardSummary";
if (url.indexOf(path) != -1){
  let obj = JSON.parse(body);
  obj.expired=0;
  obj.remainTime=999999999;
  obj.expiredTime=9999999999;
  obj.permanent=1;
  body = JSON.stringify(obj);
}
$done({body});
