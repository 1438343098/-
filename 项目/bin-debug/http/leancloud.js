var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Leancloud;
(function (Leancloud) {
    var leancloud = (function () {
        function leancloud() {
            // var realtime = new Realtime({
            // 	appId: '1urIVe1NOcPXMEd4CM0ey5Nc-gzGzoHsz',
            // 	appKey: 'tA8ywHDj4QKDkfd5bamKGvUw',
            // 	server: 'https://xxx.example.com',
            // });
            // // Tom 用自己的名字作为 clientId 来登录即时通讯服务
            // realtime.createIMClient('Tom').then(function(tom) {
            // // 成功登录
            // }).catch(console.error);
        }
        return leancloud;
    }());
    Leancloud.leancloud = leancloud;
    __reflect(leancloud.prototype, "Leancloud.leancloud");
})(Leancloud || (Leancloud = {}));
