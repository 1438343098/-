/**
 * 下面的示例使用 WebSocketExample 类创建新 WebSocket 对象，然后与服务器通讯。
 */
class WebSocketExample extends SingtonClass {

    public id:any;
    public statuWin:egret.TextField = new egret.TextField();
    public status:egret.TextField = new egret.TextField();
    public players:any = 0;
    public youID:egret.TextField = new egret.TextField(); 
    public constructor() {
        super();

        this.initWebSocket();
        this.status.y = 100;
        this.statuWin.y = 100;
        this.statuWin.x = 200;
    }



    private socket:egret.WebSocket;

    private initWebSocket():void {
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
        this.socket.connectByUrl("ws://192.168.5.151:8282?uid="+egret.getOption("uid"));
        
    }

    public matchs():void{
         this.sendData('{"id":"match"}')	
    }

    public sendData(text:string=''):void {
        //发送数据
         this.socket.writeUTF(text)	
    }

    private onSocketOpen():void {
        this.trace("WebSocketOpen");
        this.matchs();
    }

    private onSocketClose():void {
        this.trace("WebSocketClose");
    }

    private onSocketError():void {
        this.trace("WebSocketError");
    }

    private onReceiveMessage(e:egret.Event):void {
        console.log('========', App.Chessboards)
        App.Init().addText(this.youID)
        
        //读取字符串信息
        let msg:string = this.socket.readUTF()
        let data = JSON.parse(msg)
        console.log(data)
        if(!data.id){
            return
        }

        switch(data.id){
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
            
                this.status.text = `我方下棋`;
                App.Init().addText(this.status) 
                if(data.d.player){
                    if(this.players == 0){
                        this.players = data.d.player
                    }
                    this.youID.text = `对方id ${data.d.to_uid}`;
                    this.youID.y = 50;
                    App.Chessboards().player(data.d.player)
                }
                break;
            // 等待下棋
            case "await_play":
                if(data.d.player){
                    this.youID.text = `对方id ${data.d.to_uid}`;
                    this.status.text = `对方下棋`;
                    this.youID.y = 50;
                    App.Init().addText(this.status)
                    App.Chessboards().player(data.d.player)
                }
                break;
            // 开始匹配
            case "match_start":
                break;    
            // 游戏结束
            case "play_end":
                if(data.d.player == 1){
                    this.statuWin.text = `红色胜利`;
                }else{
                    this.statuWin.text = `蓝色胜利`;
                }   
                App.Init().addText(this.statuWin)
                App.Chessboards().removeImte()
                this.matchs();
                this.youID.text = ''
                App.Chessboards();
                break; 
            // 游戏下棋
            case "play_location":
                App.Chessboards().cretaeImte(data.d.x,data.d.y,data.d.player)
            
                if(data.d.player != this.players){
                    this.status.text = `我方下棋`;
                }else{
                    this.status.text = `对方下棋`;
                }
                App.Init().addText(this.status) 
                // App.Init().addText(this.status)
                break; 
        }

    }


    private trace(msg:any):void {
        egret.log(msg);
    }
}