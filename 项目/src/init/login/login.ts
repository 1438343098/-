
// 登录
class Login extends egret.Sprite{
    
    constructor(){
        super()
        this.addInput()
    }

    private addInput(){
        let Input:egret.TextField = new egret.TextField()
        Input.type = egret.TextFieldType.INPUT
        Input.width = 300;
        Input.height = 50;
        // 起始x
        Input.x = App.StageUtils.getWidth() / 2 - Input.width / 2;
        // 起始y
        Input.y = App.StageUtils.getWidth() / 2 - Input.height / 2;
        this.addChild(Input)
    }
}