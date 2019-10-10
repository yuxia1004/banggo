"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider =
/*#__PURE__*/
function () {
  function Slider(selector) {
    _classCallCheck(this, Slider);

    //实例属性
    //大盒子
    this.ele = document.querySelector(selector); //缩略图

    this.small = document.querySelectorAll(".suo"); // 下划线

    this.line = document.querySelectorAll(".line"); //子节点(所有的大图)

    this.ullis = this.ele.children[0].children; //计算大图的数量

    this.num = this.ullis.length; //当前下标

    this.indexA = 0; //调用轮播

    this.slide(); //调用添加事件

    this.timer = null;
    this.autoPlay();
  } //原型方法


  _createClass(Slider, [{
    key: "addEle",
    value: function addEle() {
      // 遮罩
      var mark = this.createEle('div');
      mark.id = 'mark';
      this.small.appendChild(mark);
    } //设置轮播

  }, {
    key: "slide",
    value: function slide() {
      for (var i = 0; i < this.num; i++) {
        //所有的大图隐藏
        this.ullis[i].style.display = 'none';
        this.small[i].style.opacity = '0.6';
        this.line[i].style.visibility = 'hidden';
      } //当前大图显示


      this.ullis[this.indexA].style.display = 'block';
      this.small[this.indexA].style.opacity = '1';
      this.line[this.indexA].style.visibility = 'visible';
    } //自动轮播

  }, {
    key: "autoPlay",
    value: function autoPlay() {
      var _this = this;

      this.timer = setInterval(function () {
        _this.indexA++;

        if (_this.indexA === _this.num) {
          _this.indexA = 0;
        }

        _this.slide();
      }, 3000);
    } //获取元素

  }, {
    key: "$get",
    value: function $get(selector) {
      return document.querySelector(selector);
    } //创建对象

  }, {
    key: "createEle",
    value: function createEle(tagName) {
      return document.createElement(tagName);
    }
  }]);

  return Slider;
}();