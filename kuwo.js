var body=$response.body;
var url=$request.url;
const path = '/vip/v2/user/vip';

if (url.indexOf(path) != -1) {
    let jsbody = JSON.parse(body);
    jsbody.data.isNewUser= 2;
    jsbody.data.vipLuxuryExpire= 1738717749000;
    jsbody.data.isYearUser= 2;
    jsbody.data.vipmExpire= 1738717749000;
    jsbody.datavipOverSeasExpire= 1738717749000;
    jsbody.data.vipExpire= 1738717749000;
    jsbody.data.vip3Expire= 1738717749000;
    body = JSON.stringify(jsbody);
}
$done({body});
