const weaapi = "https://www.tianqiapi.com/api/?version=v6"

$httpClient.get(weaapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } 
    else {
        var obj = JSON.parse(data);
        console.log(obj);
        var wea = obj.wea;
        var city = obj.city;
        var time = "更新于："+obj.update_time;
        let wmation = [wea,time,city];
        $notification.post(wmation[0], wmation[2], wmation[1]);
        $done();
    }
}
);
