/**
 * Created by yangsong on 15-1-7.
 */
class BaseScene extends SingtonClass{
    //当前所有Layer
    private _layers: Array<egret.DisplayObjectContainer>;

    /**
     * 构造函数
     */
    public constructor() {
        super()
        this._layers = new Array<egret.DisplayObjectContainer>();
    }

    /**
     * 进入Scene调用
     */
    public onEnter(): void {

    }

    /**
     * 添加一个Layer到舞台
     * @param layer
     */
    public addLayer(layer: egret.DisplayObjectContainer): void {
        App.StageUtils.getStage().addChild(layer);
        this._layers.push(layer);
    }

    /**
     * 添加一个Layer到舞台
     * @param layer
     */
    public addLayerAt(layer: egret.DisplayObjectContainer, index: number): void {
        App.StageUtils.getStage().addChildAt(layer, index);
        this._layers.push(layer);
    }

    /**
     * 在舞台移除一个Layer
     * @param layer
     */
    public removeLayer(layer: egret.DisplayObjectContainer): void {
        App.StageUtils.getStage().removeChild(layer);
        this._layers.splice(this._layers.indexOf(layer), 1);
    }

    /**
     * Layer中移除所有
     * @param layer
     */
    public layerRemoveAllChild(layer: egret.DisplayObjectContainer): void {
        layer.removeChildren();
    }

    /**
     * 移除所有Layer
     */
    public removeAllLayer(): void {
        while (this._layers.length) {
            var layer: egret.DisplayObjectContainer = this._layers[0];
            this.layerRemoveAllChild(layer);
            this.removeLayer(layer);
        }
    }
}