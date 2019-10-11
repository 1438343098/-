class App {
     /**
     * 请求服务器使用的用户标识  token
     * @type {string}
     */ 
    public static Token: string = "";
    /**
     * url
     * @type {null}
     */
    public static Url: any = null;

    /**
     * size
     * @type {number}
     */
    public static Size: number = 0;

    
    
    /**
     * Stage操作相关工具类
     */
    public static get StageUtils(): StageUtils {
        return StageUtils.getSingtonInstance();
    }
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
    public static Socket(): WebSocketExample {
        let Apps:any = this
      
         if(Apps.socket == null){
            Apps.socket =  new WebSocketExample();
        }
        console.log(Apps.socket)
        return Apps.socket;
        // return WebSocketExample.getSingtonInstance();
    }
    /**
     * 棋盘
     * @number {number}
     */
    // public static Chessboards = new Chessboards(this.Size);
    public static Chessboards() {
        let Apps:any = this
         if(Apps.chess == null){
            Apps.chess =  new Chessboards(this.Size);
        }
        console.log(Apps.chess)
        return Apps.chess;
    }
    /**
     * 初始化
     * 
     */
    public static Init() {
         let Class:any = this
         if(Class._instance == null){
            Class._instance =  new Init();
        }
        return Class._instance;
    }

}