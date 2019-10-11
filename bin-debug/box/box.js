var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
/**
 * Created by yangsong on 2014/11/23.
 * 游戏层级类
 */
var LayerManager = (function () {
    function LayerManager() {
    }
    /**
     * 游戏背景层
     * @type {BaseSpriteLayer}
     */
    LayerManager.Game_Bg = new BaseSpriteLayer();
    /**
     * 主游戏层
     * @type {BaseSpriteLayer}
     */
    LayerManager.Game_Main = new BaseSpriteLayer();
    return LayerManager;
}());
__reflect(LayerManager.prototype, "LayerManager");
