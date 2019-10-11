class Init extends egret.DisplayObjectContainer{
	
	public box:LayerManager = new LayerManager();

	// 初始
	constructor(){
		super()
        
        // 棋盘大小
        App.Size = 15
		// 绘制棋盘
        let chess = App.Chessboards()
        // 链接
        App.Socket()
        // 起始x
        chess.x = App.StageUtils.getWidth() / 2 - chess.width / 2;
        // 起始y
        chess.y = App.StageUtils.getWidth() / 2 - chess.height / 2;
		this.createGameScene()

        let myID:egret.TextField = new egret.TextField(); 
        
        myID.text = `我方id ${App.Socket().id}`
        myID.y = 0;
        
		this.addChild(myID);
        // 登录
		this.addChild(new Login());
        // 添加棋盘
		this.addChild(chess);
	}

    //添加文字
    public addText(youID):void{
        this.addChild(youID);
    }

	  /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        let sky = this.createBitmapByName("BG_jpg");
        sky.width = App.StageUtils.getWidth()
        sky.height = App.StageUtils.getHeight()
		this.addChild(sky);
    }

	// 注册场景
	

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

}