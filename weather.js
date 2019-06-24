const weaapi = "https://www.tianqiapi.com/api/?version=v6"

$httpClient.get(weaapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } 
    else {
        var obj = JSON.parse(data);
        console.log(obj);
        var win_speed = obj.win_speed;
        var tem = obj.tem;
        var wea = obj.wea;
        var city = obj.city;
        var time = "更新于："+obj.update_time;
        let wmation = [tem,wea,time,city,win_speed];
        $notification.post(wmation[2],wmation[3], wmation[1], wmation[0],wmation[4]);
        $done();
    }
}
);
