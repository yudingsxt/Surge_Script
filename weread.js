var body = $response.body;
var url = $request.url;
const path = "/pay/memberCardSummary";
if (url.indexOf(path) != -1){
  let obj = JSON.parse(body);
  obj.expiredTime= 1747624048;
  obj.remainTime= 189302400;
  body = JSON.stringify(obj);
}
$done({body});