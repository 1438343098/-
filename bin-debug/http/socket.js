var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 下面的示例使用 WebSocketExample 类创建新 WebSocket 对象，然后与服务器通讯。
 */
var WebSocketExample = (function (_super) {
    __extends(WebSocketExample, _super);
    function WebSocketExample() {
        var _this = _super.call(this) || this;
        _this.statuWin = new egret.TextField();
        _this.status = new egret.TextField();
        _this.players = 0;
        _this.youID = new egret.TextField();
        _this.initWebSocket();
        _this.status.y = 100;
        _this.statuWin.y = 100;
        _this.statuWin.x = 200;
        return _this;
    }
    WebSocketExample.prototype.initWebSocket = function () {
        //创建 WebSocket 对象
        this.socket = new egret.WebSocket();
        //设置数据格式为二进制，默认为字符串
        this.socket.type = egret.WebSocket.TYPE_STRING;
        //添加收到数据侦听，收到数据会调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        //添加链接打开侦听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //添加异常侦听，出现异常会调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        this.id = egret.getOption("uid");
        //连接服务器
        this.socket.connectByUrl("ws://192.168.5.151:8282?uid=" + egret.getOption("uid"));
    };
    WebSocketExample.prototype.matchs = function () {
        this.sendData('{"id":"match"}');
    };
    WebSocketExample.prototype.sendData = function (text) {
        if (text === void 0) { text = ''; }
        //发送数据
        this.socket.writeUTF(text);
    };
    WebSocketExample.prototype.onSocketOpen = function () {
        this.trace("WebSocketOpen");
        this.matchs();
    };
    WebSocketExample.prototype.onSocketClose = function () {
        this.trace("WebSocketClose");
    };
    WebSocketExample.prototype.onSocketError = function () {
        this.trace("WebSocketError");
    };
    WebSocketExample.prototype.onReceiveMessage = function (e) {
        console.log('========', App.Chessboards);
        App.Init().addText(this.youID);
        //读取字符串信息
        var msg = this.socket.readUTF();
        var data = JSON.parse(msg);
        console.log(data);
        if (!data.id) {
            return;
        }
        switch (data.id) {
            // 正在匹配中
            case "matching":
                break;
            // 游戏中
            case "playing":
                break;
            // 游戏开始
            case "play_start":
                break;
            // 我方下棋
            case "play":
                this.status.text = "\u6211\u65B9\u4E0B\u68CB";
                App.Init().addText(this.status);
                if (data.d.player) {
                    if (this.players == 0) {
                        this.players = data.d.player;
                    }
                    this.youID.text = "\u5BF9\u65B9id " + data.d.to_uid;
                    this.youID.y = 50;
                    App.Chessboards().player(data.d.player);
                }
                break;
            // 等待下棋
            case "await_play":
                if (data.d.player) {
                    this.youID.text = "\u5BF9\u65B9id " + data.d.to_uid;
                    this.status.text = "\u5BF9\u65B9\u4E0B\u68CB";
                    this.youID.y = 50;
                    App.Init().addText(this.status);
                    App.Chessboards().player(data.d.player);
                }
                break;
            // 开始匹配
            case "match_start":
                break;
            // 游戏结束
            case "play_end":
                if (data.d.player == 1) {
                    this.statuWin.text = "\u7EA2\u8272\u80DC\u5229";
                }
                else {
                    this.statuWin.text = "\u84DD\u8272\u80DC\u5229";
                }
                App.Init().addText(this.statuWin);
                App.Chessboards().removeImte();
                this.matchs();
                this.youID.text = '';
                App.Chessboards();
                break;
            // 游戏下棋
            case "play_location":
                App.Chessboards().cretaeImte(data.d.x, data.d.y, data.d.player);
                if (data.d.player != this.players) {
                    this.status.text = "\u6211\u65B9\u4E0B\u68CB";
                }
                else {
                    this.status.text = "\u5BF9\u65B9\u4E0B\u68CB";
                }
                App.Init().addText(this.status);
                // App.Init().addText(this.status)
                break;
        }
    };
    WebSocketExample.prototype.trace = function (msg) {
        egret.log(msg);
    };
    return WebSocketExample;
}(SingtonClass));
__reflect(WebSocketExample.prototype, "WebSocketExample");
