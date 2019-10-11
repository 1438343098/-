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
var Init = (function (_super) {
    __extends(Init, _super);
    // 初始
    function Init() {
        var _this = _super.call(this) || this;
        _this.box = new LayerManager();
        // 棋盘大小
        App.Size = 15;
        // 绘制棋盘
        var chess = App.Chessboards();
        // 链接
        App.Socket();
        // 起始x
        chess.x = App.StageUtils.getWidth() / 2 - chess.width / 2;
        // 起始y
        chess.y = App.StageUtils.getWidth() / 2 - chess.height / 2;
        _this.createGameScene();
        var myID = new egret.TextField();
        myID.text = "\u6211\u65B9id " + App.Socket().id;
        myID.y = 0;
        _this.addChild(myID);
        // 登录
        _this.addChild(new Login());
        // 添加棋盘
        _this.addChild(chess);
        return _this;
    }
    //添加文字
    Init.prototype.addText = function (youID) {
        this.addChild(youID);
    };
    /**
   * 创建游戏场景
   * Create a game scene
   */
    Init.prototype.createGameScene = function () {
        var sky = this.createBitmapByName("BG_jpg");
        sky.width = App.StageUtils.getWidth();
        sky.height = App.StageUtils.getHeight();
        this.addChild(sky);
    };
    // 注册场景
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Init.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Init;
}(egret.DisplayObjectContainer));
__reflect(Init.prototype, "Init");
