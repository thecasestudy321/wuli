function nbTjInit(_nbtonjiData) {
    nbTjgetPosition(_nbtonjiData);
}

function nbTjSetCookie(name,value) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ value + ";expires=" + exp.toGMTString();
}
function nbTjgetCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
/**
 * 定位
 */
function nbTjgetPosition(_data) {
    if (nbTjgetCookie('_positionStatus') === 'success') {
        return;
    }
    AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 5000,          //超过10秒后停止定位，默认：5s
        });
        geolocation.getCurrentPosition(function(status,result){
            if(status=='complete'){
                nbTjpositionOnComplete(_data, result)
            }
        });
    });
}

//解析定位结果
function nbTjpositionOnComplete(_data, _result) {
    var positionInfo = JSON.stringify({
        country: _result.addressComponent.country,
        province: _result.addressComponent.province,
        city: _result.addressComponent.city,
        district: _result.addressComponent.district,
        township: _result.addressComponent.township,
        street: _result.addressComponent.street,
        lng: _result.position.lng,
        lat: _result.position.lat,
    });

    nbTjSetCookie('_positionStatus', 'success');
    var _param = 'userId='+_data.userId+'&type=position&positionInfo='+positionInfo
    nbTjsend(_param);
}

function nbTjsend(_data) {
   
}
