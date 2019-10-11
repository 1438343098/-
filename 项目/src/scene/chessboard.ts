// TypeScript file
// 棋盘 容器
class Chessboards extends egret.DisplayObjectContainer{
    
    // 棋盘大小
    private size:number;
    // 玩家
    public playType:any;

    public box:any;

    public constructor(size:number){
        super()
        this.size = size;
        // 绘制棋盘
        this.cell(size)
        
    }  

    // 绘制棋盘的方法
    private cell(size:number):void{
         this.box = new egret.Sprite();
        for(let x = 0; x<size ;x++){
            for(let y = 0; y<size ;y++){
               
                this.box.graphics.lineStyle(2,0x000000,0.8);
                this.box.graphics.beginFill(0xffffff,.8);
                this.box.graphics.drawRect(x*40,y*40,40,40);
                this.box.graphics.endFill();
                this.box.touchEnabled = true; 
                
            }     
        }  
        // 点击棋盘
        this.box.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickChess,this)
        this.addChild(this.box)
    }
    
    // 玩家
    public players(play:any){
        this.playType = play;
    }
    // 点击棋盘
    public clickChess(evt:egret.TouchEvent){
        let offsetX:number = App.StageUtils.getWidth() / 2 - this.width / 2
        let offsetY:number = App.StageUtils.getWidth() / 2 - this.height / 2
        let x:number = Math.floor((evt.$stageX - offsetX)/40);
        let y:number = Math.floor((evt.$stageY - offsetY)/40);
        console.log(x,y)
        // 下棋
        App.Socket().sendData(`{"id":"play","d":{"x":${x},"y":${y}}}`)
    }

     /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    
    // 生成棋子
    public cretaeImte(x:any,y:any,type:any):void{
        let item:egret.Bitmap;
        if(type == 1){
            item = this.createBitmapByName("red_png");
        }else{
            item = this.createBitmapByName("blue_png");
        }
        item.width = 25
        item.height = 25
        item.x = x*40+8;
        item.y = y*40+8;
        this.box.addChildAt(item,1);
    }
    // 清空棋子
    public removeImte():void{
         this.box.removeChildren()
    }
}



