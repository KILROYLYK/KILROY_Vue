import { Component, VNode } from "vue";

class Class<T> {
}

interface VueInterface {
    name: string,
    
    // 数据
    data: void | Object | Function, // 传入的数据
    props: {}, // 传入的参数
    propsData?: Object, // 对于自定义组件，父级通过`props`传过来的数据
    computed?: { // 传入的计算属性
        [key: string]: Function | {
            get?: Function,
            set?: Function,
            cache?: boolean
        }
    },
    methods?: { // 传入的方法
        [key: string]: Function
    },
    watch?: { // 传入的watch
        [key: string]:
            Function | string
    },
    
    // 节点
    el?: string | Element, // 传入的el字符串
    template?: string, // 传入的模板字符串
    render: (h: () => VNode) => VNode,  // 传入的render函数
    renderError?: (h: () => VNode, err: Error) => VNode,
    staticRenderFns?: Function[],
    
    // 生命周期
    beforeCreate?: Function, // 创建之前
    created?: Function, // 创建之后
    beforeMount?: Function, // 安装之前
    mounted?: Function, // 安装之后
    beforeUpdate?: Function, // 更新前
    updated?: Function, // 更新后
    activated?: Function, // 启用后
    deactivated?: Function, // 停用后
    beforeDestroy?: Function, // 销毁前
    destroyed?: Function, // 销毁后
    
    // 资源
    directives?: { // 指令
        [key: string]: Object
    },
    components?: { // 子组件的定义
        [key: string]: Class<Component>
    },
    transitions?: {
        [key: string]: Object
    },
    filters?: { // 过滤器
        [key: string]: Function
    },
    
    // 关系
    provide?: Object | Function,
    inject?: { [key: string]: string | Symbol } | string[],
    
    // 组件
    model?: {
        prop?: string,
        event?: string,
    },
    
    // 其他
    parent?: Component, // 父组件实例
    mixins?: Object[], // mixins传入的数据
    name?: string, // 当前的组件名
    extends?: Class<Component> | Object, // extends传入的数据
    delimiters?: [string, string], // 模板分隔符
    
    // 私有属性，均为内部创建自定义组件的对象时使用
    _isComponent?: true,  // 是否是组件
    _propKeys?: string[], // props传入对象的键数组
    _parentVnode?: VNode, // 当前组件，在父组件中的VNode对象
    _parentListeners?: Object, // 当前组件，在父组件上绑定的事件
    _renderChildren?: VNode[], // 父组件中定义在当前元素内的子元素的VNode数组（slot）
    _componentTag: string,  // 自定义标签名
    _scopeId: string,
    _base: Class<Component>, // Vue
    _parentElm: Node, // 当前自定义组件的父级dom结点
    _refElm: Node // 当前元素的nextSlibing元素，即当前dom要插入到_parentElm结点下的_refElm前
}
