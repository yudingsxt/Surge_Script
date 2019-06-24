const weaapi = "https://www.tianqiapi.com/api/?version=v6"

$httpClient.get(weaapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } else {
        var obj = JSON.parse(data);
        console.log(obj);
        var city = "所在城市： " + obj.city;
        var wea = "天气状况： " + obj.wea + "  " + obj.win + obj.win_speed + "  风速" + obj.win_meter;
        var air = "空气指数： " + obj.air + "  " + obj.air_level + "\n更新时间： " + obj.date + " "+ obj.update_time;
        let wmation = [city,wea,air];
        $notification.post(wmation[0], wmation[1], wmation[2]);
        $done();
    }
}
);
