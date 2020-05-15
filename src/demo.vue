<template>
  <div>
    <div class="dialog">
      <h1>dialog：</h1>
      <zch-dialog v-model="dialogVisible">center</zch-dialog>
      <zch-dialog v-model="dialogVisibleTop" position="top">top</zch-dialog>
      <zch-dialog v-model="dialogVisibleBottom" position="bottom">bottom</zch-dialog>
      <zch-dialog v-model="dialogVisibleLeft" position="left">left</zch-dialog>
      <zch-dialog v-model="dialogVisibleRight" position="right">right</zch-dialog>
      <zch-button @click="dialogVisible=!dialogVisible">center</zch-button>
      <zch-button @click="dialogVisibleTop=!dialogVisibleTop">top</zch-button>
      <zch-button @click="dialogVisibleBottom=!dialogVisibleBottom">bottom</zch-button>
      <zch-button @click="dialogVisibleLeft=!dialogVisibleLeft">left</zch-button>
      <zch-button @click="dialogVisibleRight=!dialogVisibleRight">left</zch-button>
    </div>
    <div class="tag">
      <h1>tag：</h1>
      <zch-tag closeable>232323kjlkjk</zch-tag>
      <zch-tag>232323kjlkjk</zch-tag>
      <zch-tag>232323kjlkjk</zch-tag>
      <zch-tag icon="twitter" type="success" color="#456433">T232323kjlkjk</zch-tag>
      <zch-tag type="success">232323kjlkjk</zch-tag>
      <zch-tag type="info">232323kjlkjk</zch-tag>
      <zch-tag type="warning">232323kjlkjk</zch-tag>
      <zch-tag type="danger">232323kjlkjk</zch-tag>
      <zch-tag size="large">232323kjlkjk</zch-tag>
      <zch-tag size="mini">232323kjlkjk</zch-tag>
    </div>
    <div class="collapse" style="padding-left: 150px;padding-top: 150px;">
      <h1>collapse：</h1>
      <zch-collapse v-model="activeCollapse">
        <zch-collapse-item title="title1" name="title1">
          内容111
        </zch-collapse-item>
        <zch-collapse-item title="title2" name="title2">
          内容222
        </zch-collapse-item>
        <zch-collapse-item title="title3" name="title3">
          内容333
        </zch-collapse-item>
        <zch-collapse-item title="title4" name="title4">
          内容444
        </zch-collapse-item>
      </zch-collapse>
    </div>
    <div class="popover" style="padding-left: 150px;padding-top: 150px;">
      <h1>popover(click)：</h1>
      <zch-popover position="left">
        <template slot="content">这是一段浮层</template>
        <zch-button>left</zch-button>
      </zch-popover>
      <zch-popover>
        <template slot="content">这是一段浮层</template>
        <zch-button>top</zch-button>
      </zch-popover>
      <zch-popover position="bottom">
        <template slot="content">这是一段浮层</template>
        <zch-button>bottom</zch-button>
      </zch-popover>
      <zch-popover position="right">
        <template slot="content">这是一段浮层</template>
        <zch-button>right</zch-button>
      </zch-popover>
    </div>
    <div class="popover" style="padding-left: 150px;padding-top: 150px;">
      <h1>popover(hover)：</h1>
      <zch-popover trigger="hover" position="left">
        <template slot="content">这是一段浮层</template>
        <zch-button>left</zch-button>
      </zch-popover>
      <zch-popover trigger="hover">
        <template slot="content">这是一段浮层</template>
        <zch-button>top</zch-button>
      </zch-popover>
      <zch-popover trigger="hover" position="bottom">
        <template slot="content">这是一段浮层</template>
        <zch-button>bottom</zch-button>
      </zch-popover>
      <zch-popover trigger="hover" position="right">
        <template slot="content">这是一段浮层</template>
        <zch-button>right</zch-button>
      </zch-popover>
    </div>
    <div class="tabsBar">
      <h1>tabs：</h1>
      <zch-tab v-model="activeTab" @click="hClick" @change="hChange">
        <zch-tab-pane label="title1" label-enabled-html name="title1">1111</zch-tab-pane>
        <zch-tab-pane label="title22" label-enabled-html name="title2">2222</zch-tab-pane>
        <zch-tab-pane label="title333" label-enabled-html name="title3">3333</zch-tab-pane>
      </zch-tab>
    </div>
    <div class="buttonBar">
      <h1>button：</h1>
      <zch-button @click="xxx('top')">主要按钮</zch-button>
      <zch-button disabled>禁用按钮</zch-button>
      <zch-button @click="xxx('bottom')" icon="setting" icon-position="right">图标按钮</zch-button>
      <zch-button @click="xxx('middle')" round>圆角按钮</zch-button>
      <zch-button square>方形按钮</zch-button>
      <zch-button-group icon-position="right">
        <zch-button icon="left">上一页</zch-button>
        <zch-button>按钮组</zch-button>
        <zch-button icon="right" icon-position="right">下一页</zch-button>
      </zch-button-group>
    </div>
    <div class="iconBar">
      <h1>icon：</h1>
      <zch-icon icon="setting"></zch-icon>
      <zch-icon icon="setting-fill"></zch-icon>
      <zch-icon icon="left"></zch-icon>
      <zch-icon icon="right"></zch-icon>
    </div>
    <div class="inputBar">
      <h1>input：</h1>
      <zch-input @input="input"></zch-input>
      <zch-input disabled placeholder="禁用状态"></zch-input>
      <zch-input readonly placeholder="只读状态"></zch-input>
      <zch-input v-model="password" password placeholder="密码状态"></zch-input>
      <zch-input type="textarea"></zch-input>
      <zch-input><template slot="prepend">前缀</template></zch-input>
      <zch-input><template slot="prepend">前缀</template><template slot="append">后缀</template></zch-input>
      <zch-input><template slot="append">后缀</template></zch-input>
      <zch-input @blur="input" v-model.trim="message" clearable placeholder="可清空"></zch-input>
    </div>
    <div class="row-col">
      <h1>row-col：</h1>
      <zch-row style="margin-bottom: 20px;" align="bottom">
        <zch-col span="2" :phone="{ span: 11}" :pad="{ span: 5}" :narrow-pc="{ span: 8}"><div style="background-color: aquamarine;border-radius: 10px; height: 60px;"></div></zch-col>
        <zch-col span="20" :phone="{ span: 11}" :pad="{ span: 17}" :narrow-pc="{ span: 14}"><div style="background-color: aquamarine;border-radius: 10px; height: 40px;"></div></zch-col>
      </zch-row>
      <zch-row style="border: 1px solid #ddd;" gutter="20">
        <zch-col span="2"><div style="background-color: aquamarine;border-radius: 10px; height: 40px;"></div></zch-col>
        <zch-col span="5"><div style="background-color: aquamarine;border-radius: 10px; height: 40px;"></div></zch-col>
        <zch-col span="17"><div style="background-color: aquamarine;border-radius: 10px; height: 40px;"></div></zch-col>
      </zch-row>
    </div>
    <div class="layout">
      <h1>layout：</h1>
      <zch-layout style="height: 200px;">
        <zch-header>header</zch-header>
        <zch-layout>
          <zch-content>content</zch-content>
          <zch-side>side</zch-side>
        </zch-layout>
        <zch-footer>footer</zch-footer>
      </zch-layout>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import zchDialog from './components/dialog'
  import zchButton from './components/button'
  import zchButtonGroup from './components/button-group'
  import zchIcon from './components/icon'
  import zchInput from './components/input'
  import zchRow from './components/row'
  import zchCol from './components/col'
  import zchLayout from './components/layout'
  import zchHeader from './components/header'
  import zchContent from './components/content'
  import zchSide from './components/side'
  import zchFooter from './components/footer'
  import zchToast from './components/toast/main.js'
  import zchTab from './components/tabs/tab'
  import zchTabPane from './components/tabs/tab-pane'
  import zchPopover from './components/popover'
  import zchCollapse from './components/collapse/collapse'
  import zchCollapseItem from './components/collapse/collapse-item'
  import zchTag from './components/tag'
  Vue.use(zchToast)

  export default {
    name: "demo",
    components: {
      zchButton,
      zchButtonGroup,
      zchIcon,
      zchInput,
      zchRow,
      zchCol,
      zchLayout,
      zchHeader,
      zchContent,
      zchSide,
      zchFooter,
      zchTab,
      zchTabPane,
      zchPopover,
      zchCollapse,
      zchCollapseItem,
      zchTag,
      zchDialog,
    },
    data () {
      return {
        message: '',
        password: '',
        activeTab: 'title2',
        activeCollapse: [],
        dialogVisible: false,
        dialogVisibleTop: false,
        dialogVisibleBottom: false,
        dialogVisibleLeft: false,
        dialogVisibleRight: false,
      };
    },
    methods: {
      input(e) {
        console.log(e)
      },
      hClick(e) {
        console.log(e, 'click')
      },
      hChange(e) {
        console.log(e, 'change')
      },
      xxx (position) {
        this.$toast({
          message: '<h1>大撒旦撒旦撒多所多所</h1>',
          type: 'success',
          position,
          showClose: true,
        })
      }
    },
  };
</script>
