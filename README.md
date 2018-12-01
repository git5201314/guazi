# guazi

> 瓜子二手车直卖网

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 第一天

创建头部

```
在 style 标签中导入 scss

1. import 前面需要使用 “@” 符号
2. 路径里面的 "@" 表示 src 目录, 在 style 里面引入路径需要在前面加 "~" 符
   @import "~@/assets/css/variable.scss";
   引入之后就可以使用 variable.scss 里面定义的变量了
   width: \$iconWidth;

穿透
在 Swipe.vue 组件中，如果想修改 mt-swipe 组件下的 “小圆点” 样式

<style lang="scss" scoped>
因为 scoped 的作用，样式仅仅在当前组件下起作用，如果在 Swipe.vue 组件下修改 mt-swipe 组件的样式是无效的
.header-swipe {
    .mint-swipe-indicator.is-active {
        background: $activeColor;
    }
}
想要修改其他组件的样式，就需要使用 “穿透” 了
在 sass/less 中，穿透 使用 /deep/
.header-swipe /deep/ .mint-swipe-indicator.is-active {
  background: $activeColor;
}

在 stylus 中，穿透 使用 >>>
.header-swipe >>> .mint-swipe-indicator.is-active {
  background: $activeColor;
}

书写 css3 样式的时候，只需要写 简写
transform: scaleY(0.5);
vue-cli 构建工具，会自动加上 浏览器厂商  前缀

```

# 第二天

添加头部滚动区域

# 第三天

添加导航内容图标区域

```
头部图标区域，需要对数据做处理，数据拿过来的时候应该是一个 一维数组，需要把这个 一维数组 转成 二维数组
computedIcons: function() {
    this.icons.forEach((item, index) => {
        var i = Math.floor(index / 8);
        if (!this.pages[i]) {
            this.pages[i] = [];
        }
        this.pages[i].push(this.icons[index]);
    });
    return this.pages;
}

每一页都是8个图标，做一个分页的效果，数据初始化后，渲染数据 使用 二层循环
<section class="nav-content clearfix">
    <mt-swipe :auto="0" class="content-swipe">
        <mt-swipe-item v-for="(page, index) of computedIcons" :key="index">
            <p class="clearfix nav-content-item" v-for="item of page" :key="item.id">
                <a href="javascript:void(0);" :style="item.imgUrl">
                    {{item.msg}}
                    <span class="iconfree" v-if="item.free">{{item.freeText}}</span>
                </a>
            </p>
        </mt-swipe-item>
    </mt-swipe>
</section>
```

# 第四天

瓜子头条动画制作

# 第五天

热门二手车 开发

# 第六天

瓜子二手车严选直卖店 制作

# 第七天

瓜子金融 制作

# 第八天

底部导航列表 制作

# 第九天

城市列表制作

```
使用axios 发送 ajax请求
axios.get("/api/city.json").then(function(res) {
    var data = res.data;
    if (data.ret) {
    data = data.data;
    v.city = data.city;
    v.cities = data.cities;
    v.hotCities = data.hotCities;
    }
});
/api/city.json 是本地的一个静态文件，在 /static/mock/city.json，在 /confit/index.js配置路径映射
proxyTable: {
    '/api': {
        target: 'http://localhost:8082',
        pathRewrite: {
            '^/api': '/static/mock'
        }
    }
}

城市列表过多，使用 better-scroll，可以做出类似 原生app 的滚动效果
1. 安装better-scroll
    npm install better-scroll --save
2. 导入
    import BScroll from 'better-scroll'
3. 在 mounted 钩子函数中使用
    mounted() {
        this.scroll = new BScroll(this.$refs.con);
    }
注意：要使用 better-scroll，html 结构有强制要求
<div class="wrapper">   // 这一层要设置 overflow: hidden
  <ul class="content">  // 滚动内容区域
    <li>...</li>
    <li>...</li>
    ...
  </ul>
  <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
</div>
```

# 第十天

城市列表联动制作

```
点击 A、B、C 字母，要定位到对应的列表项
在 字母列表上滑动，也要定位对应的列表项

处理字母列表上滑动时，使用的是 touchmove 事件，需要做节流优化
touchmove的事件对象event的 touches 返回一个TouchList 对象，是一个Touch组合
Touch对象的属性如下：
target：触摸点开始时的元素
clientX：触摸点相对于浏览器窗口左上角的水平距离
clientY：触摸点相对于浏览器窗口左上角的垂直距离
screenX：触摸点相对于屏幕左上角的水平距离
screenY：触摸点相对于屏幕左上角的垂直距离
pageX：触摸点相对于网页左上角的水平距离（包括页面的滚动距离）
pageY：触摸点相对于网页左上角的垂直距离（包括页面的滚动距离）

moveHandler(event) {
  if (this.touchStatus) {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      var alphaA = this.$refs.alphabet[0],
        alphaATop = alphaA.getBoundingClientRect().top,
        alphaAHeight = alphaA.offsetHeight,
        touchY = event.touches[0].clientY - alphaATop,
        index = Math.floor(touchY / alphaAHeight);

      if (index >= 0 && index < this.citiesName.length) {
        this.$emit("alphabetChange", this.citiesName[index], index);
      }
    }, 20);
  }
}
```

# 第十一天

城市列表搜索制作
如果多个组件之间没有关联，可以使用 vuex 实现数据共享
组件不应该直接修改 state 数据，而是通过 $store.dispatch('name', para) 方法 actions，也可以直接通过$store.commit('name', para) 提交 state 的数据
