var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "StageUtils", {
        /**
         * Stage操作相关工具类
         */
        get: function () {
            return StageUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Http请求
     * @type {Http}
     */
    // public static get Http(): Http {
    //     return Http.getSingtonInstance();
    // }
    /**
     * Socket请求
     * @type {null}
     */
    App.Socket = function () {
        var Apps = this;
        if (Apps.socket == null) {
            Apps.socket = new WebSocketExample();
        }
        console.log(Apps.socket);
        return Apps.socket;
        // return WebSocketExample.getSingtonInstance();
    };
    /**
     * 棋盘
     * @number {number}
     */
    // public static Chessboards = new Chessboards(this.Size);
    App.Chessboards = function () {
        var Apps = this;
        if (Apps.chess == null) {
            Apps.chess = new Chessboards(this.Size);
        }
        console.log(Apps.chess);
        return Apps.chess;
    };
    /**
     * 初始化
     *
     */
    App.Init = function () {
        var Class = this;
        if (Class._instance == null) {
            Class._instance = new Init();
        }
        return Class._instance;
    };
    /**
    * 请求服务器使用的用户标识  token
    * @type {string}
    */
    App.Token = "";
    /**
     * url
     * @type {null}
     */
    App.Url = null;
    /**
     * size
     * @type {number}
     */
    App.Size = 0;
    return App;
}());
__reflect(App.prototype, "App");
