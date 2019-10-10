class Slider {
    constructor(selector) {
            //实例属性
            //大盒子
            this.ele = document.querySelector(selector);
            //缩略图
            this.small = document.querySelectorAll(".suo");
            // 下划线
            this.line = document.querySelectorAll(".line");
            //子节点(所有的大图)
            this.ullis = this.ele.children[0].children;
            //计算大图的数量
            this.num = this.ullis.length;
            //当前下标
            this.indexA = 0;
            //调用轮播
            this.slide();
            //调用添加事件
            this.timer = null;
            this.autoPlay();
        }
            //原型方法
addEle(){
    // 遮罩
    let mark = this.createEle('div');
    mark.id = 'mark';
    this.small.appendChild(mark);

}    
    //设置轮播
slide() {
        for (let i = 0; i < this.num; i++) {
            //所有的大图隐藏
            this.ullis[i].style.display = 'none';
            this.small[i].style.opacity = '0.6';
            this.line[i].style.visibility= 'hidden';
        }
        //当前大图显示
        this.ullis[this.indexA].style.display = 'block';
        this.small[this.indexA].style.opacity = '1';
        this.line[this.indexA].style.visibility= 'visible';
    }

    //自动轮播
autoPlay() {
        this.timer = setInterval(() => {
            this.indexA++;
            if (this.indexA === this.num) {
                this.indexA = 0;
            }
            this.slide();
        }, 3000);
    }
    //获取元素
$get(selector) {
        return document.querySelector(selector);
    }
    //创建对象
createEle(tagName) {
        return document.createElement(tagName);
    }
}
