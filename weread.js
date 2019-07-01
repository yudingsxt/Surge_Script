var body = $response.body;
var url = $request.url;
const path = "/pay/memberCardSummary";
if (url.indexOf(path) != -1){
  let obj = JSON.parse(body);
  obj.expiredTime= 1747624048;
  obj.remainTime= 189302400;
  obj.expired= 0;
  obj.day= 189302400;
  obj.isPaying=1;
  obj.hintsForRecharge.predictedChapterPrice=0;
  
  body = JSON.stringify(obj);
}
$done({body});
