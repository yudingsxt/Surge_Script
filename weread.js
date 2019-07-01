var body = $response.body;
var url = $request.url;
const path = "/pay/memberCardSummary";
if (url.indexOf(path) != -1){
  let obj = JSON.parse(body);
  obj.hintsForRecharge.predictedChapterPrice=0;
  obj.expired=0;
  obj.permanent=1;
  body = JSON.stringify(obj);
}
$done({body});
