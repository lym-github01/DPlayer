function initPlayers(num) {
    window.dp1 = new DPlayer({
        container: document.getElementById('dplayer' + num),
        preload: 'none',
        autoplay: true,//自动播放
        hotkey: true,//热键
        screenshot: true,//开启截图功能
        live:true,//直播形式
        // screenshot: true,//后期配给视频的字幕显示
        mutex:false,
        //播放地址
        video: {
            url:"http://192.168.0.200:81/live?port=1935&app=hls&stream=mystream",//视频地址
            type:"flv",//视频类型
            pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',//首先显示背景图
            thumbnails: 'https://i.loli.net/2019/06/06/5cf8c5d9cec8510758.jpg',//缩略图
        },
        //后期给视频配的字幕数据
        subtitle: {
            url: 'https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.vtt',
        },
        //弹幕
        danmaku: {
            id: '9E2E3368B56CDBB4',
            api: 'https://api.prprpr.me/dplayer/',
            addition: ['https://s-sh-17-dplayercdn.oss.dogecdn.com/1678963.json'],
        },
    });
}
var data = document.getElementsByClassName('bofang').length;
for (var i = 1; i <= data; i++) {
    initPlayers(i);
}
