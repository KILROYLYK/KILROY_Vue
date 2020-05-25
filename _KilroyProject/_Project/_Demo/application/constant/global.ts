import '../../../_Base/css/common.less';
import '../../../_Base/css/public.less';

import { W, D, Base } from '../../../_Base/javascript/window';

import Config from './config'; // 配置
import Function from './function'; // 函数
import Router from './router'; // 路由

/**
 * Global
 */
export default class Global {
    public readonly static W: Window = W; // Window
    public readonly static D: Document = D; // Document
    
    public readonly static Base: object = Base;
    
    public static Width: number = W.innerWidth;
    public static Height: number = W.innerHeight;
    
    readonly static Config: object = Config; // 配置
    readonly static Function: object = Function; // 函数
    readonly static Router: object = Router; // 路由
    
    public static Main: any = null; // Vue主对象
}
