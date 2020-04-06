<template>
  <div class="home">
    <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">member1</a-menu-item>
        <a-menu-item key="2">member2</a-menu-item>
        <a-menu-item key="3">member3</a-menu-item>
      </a-menu>
      <div class="user">
        <div class="head">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586162493767&di=250797a35e25f6c098adc61a4fc6a856&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1e2e62e6f57458ca32394a10211a9616498d25bd5459-K2uzdk_fw658" alt="">
        </div>
        <div class="username">bibi</div>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          @click="handleClick"
          mode="inline"
          :defaultOpenKeys="['project1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="project1">
            <span slot="title"><a-icon type="user" />Project01</span>
            <a-menu-item key="Project01 Sprit1" @click="toProject">Sprit1</a-menu-item>
            <a-menu-item key="Project01 Sprit2">Sprit2</a-menu-item>
            <a-menu-item key="Project01 Sprit3">Sprit3</a-menu-item>
            <a-menu-item key="Project01 Sprit4">Sprit4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="project2">
            <span slot="title"><a-icon type="user" />Project02</span>
            <a-menu-item key="Project02 Sprit1" @click="toProject">Sprit1</a-menu-item>
            <a-menu-item key="Project02 Sprit2">Sprit2</a-menu-item>
            <a-menu-item key="Project02 Sprit3">Sprit3</a-menu-item>
            <a-menu-item key="Project02 Sprit4">Sprit4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="project3">
            <span slot="title"><a-icon type="user" />Project03</span>
            <a-menu-item key="Project03 Sprit1" @click="toProject">Sprit1</a-menu-item>
            <a-menu-item key="Project03 Sprit2">Sprit2</a-menu-item>
            <a-menu-item key="Project03 Sprit3">Sprit3</a-menu-item>
            <a-menu-item key="Project03 Sprit4">Sprit4</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0" v-if="projectItem !== ''">
          <a-breadcrumb-item>my</a-breadcrumb-item>
            <a-breadcrumb-item>{{projectItem}}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-breadcrumb style="margin: 16px 0" v-else>
          <a-breadcrumb-item>my</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      projectItem: ''
    }
  },
  components: {
  },
  methods: {
    toProject () {
      this.$router.push('/project')
    },
    handleClick (val) {
      this.projectItem = val.key
      console.log(val)
    }
  }
}
</script>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
  .header {
    .user {
      float: right;
    }
  }
  .index {
    display: inline-block;
  }
}
  #components-layout-demo-top-side-2 {
    width: 100%;
    height: 100%;
    .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 28px 16px 0;
      float: left;
    }
  }
</style>
