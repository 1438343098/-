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
// TypeScript file
// 棋盘 容器
var Chessboards = (function (_super) {
    __extends(Chessboards, _super);
    function Chessboards(size) {
        var _this = _super.call(this) || this;
        _this.size = size;
        // 绘制棋盘
        _this.cell(size);
        return _this;
    }
    // 绘制棋盘的方法
    Chessboards.prototype.cell = function (size) {
        this.box = new egret.Sprite();
        for (var x = 0; x < size; x++) {
            for (var y = 0; y < size; y++) {
                this.box.graphics.lineStyle(2, 0x000000, 0.8);
                this.box.graphics.beginFill(0xffffff, .8);
                this.box.graphics.drawRect(x * 40, y * 40, 40, 40);
                this.box.graphics.endFill();
                this.box.touchEnabled = true;
            }
        }
        // 点击棋盘
        this.box.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickChess, this);
        this.addChild(this.box);
    };
    // 玩家
    Chessboards.prototype.players = function (play) {
        this.playType = play;
    };
    // 点击棋盘
    Chessboards.prototype.clickChess = function (evt) {
        var offsetX = App.StageUtils.getWidth() / 2 - this.width / 2;
        var offsetY = App.StageUtils.getWidth() / 2 - this.height / 2;
        var x = Math.floor((evt.$stageX - offsetX) / 40);
        var y = Math.floor((evt.$stageY - offsetY) / 40);
        console.log(x, y);
        // 下棋
        App.Socket().sendData("{\"id\":\"play\",\"d\":{\"x\":" + x + ",\"y\":" + y + "}}");
    };
    /**
    * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
    */
    Chessboards.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    // 生成棋子
    Chessboards.prototype.cretaeImte = function (x, y, type) {
        var item;
        if (type == 1) {
            item = this.createBitmapByName("red_png");
        }
        else {
            item = this.createBitmapByName("blue_png");
        }
        item.width = 25;
        item.height = 25;
        item.x = x * 40 + 8;
        item.y = y * 40 + 8;
        this.box.addChildAt(item, 1);
    };
    // 清空棋子
    Chessboards.prototype.removeImte = function () {
        this.box.removeChildren();
    };
    return Chessboards;
}(egret.DisplayObjectContainer));
__reflect(Chessboards.prototype, "Chessboards");
