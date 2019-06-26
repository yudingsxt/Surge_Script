const hfapi = "https://free-api.heweather.net/s6/weather/now?&location=auto_ip&key=4164877b3cf24582ae8d1cbc1d33dd2f"
function getwmatioin(data){
    var obj = JSON.parse(data);
    console.log(obj);
    let city = obj.HeWeather6[0].basic["location"];
    let wea = obj.HeWeather6[0].now["cond_txt"];
    let temp = obj.HeWeather6[0].now["fl"];
    let wind = obj.HeWeather6[0].now["wind_dir"];
    let wind_spd = obj.HeWeather6[0].now["wind_spd"];
    let pcpn = obj.HeWeather6[0].now["pcpn"];
    let hum = obj.HeWeather6[0].now["hum"];
    let updatetime = obj.HeWeather6[0].update["loc"];
    let mm = [city, wea, temp, wind, hum, wind_spd, pcpn, updatetime];
    return mm


}

$httpClient.get(hfapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } else {
        var mm = getwmatioin(data);
        var title = "所在城市："+ mm[0];
        var subtitle = "天气状况："+mm[1]+"  "+mm[3]+"  "+mm[5]+"Km/s";
        var mation = "体感温度："+mm[2]+"℃"+"  "+"空气湿度："+mm[4]+"%"+"  "+ "降水量 ："+mm[6]+ "毫升"+"\n更新时间: "+mm[7];
        $notification.post(title, subtitle, mation);
        $done();
    }
}
);
