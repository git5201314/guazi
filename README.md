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


# 第二天

添加头部滚动区域

# 第三天

添加导航内容图标区域
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

# 第四天

瓜子头条动画制作
