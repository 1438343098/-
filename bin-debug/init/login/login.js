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
// 登录
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.addInput();
        return _this;
    }
    Login.prototype.addInput = function () {
        var Input = new egret.TextField();
        Input.type = egret.TextFieldType.INPUT;
        Input.width = 300;
        Input.height = 50;
        // 起始x
        Input.x = App.StageUtils.getWidth() / 2 - Input.width / 2;
        // 起始y
        Input.y = App.StageUtils.getWidth() / 2 - Input.height / 2;
        this.addChild(Input);
    };
    return Login;
}(egret.Sprite));
__reflect(Login.prototype, "Login");
