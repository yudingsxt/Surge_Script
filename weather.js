const weaapi = "https://www.tianqiapi.com/api/?version=v6"

$httpClient.get(weaapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } 
    else {
        var obj = JSON.parse(data);
        console.log(obj);
        var tem = obj.tem;
        var wea = obj.wea;
        var air = obj.air;
        let wmation = [tem,wea,air];
        $notification.post(wmation[1], wmation[0], wmation[2]);
        $done();
    }
}
);
