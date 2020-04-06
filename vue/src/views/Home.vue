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
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :defaultOpenKeys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" />Project01</span>
            <a-menu-item key="1" @click="toProject">Sprit1</a-menu-item>
            <a-menu-item key="2">Sprit2</a-menu-item>
            <a-menu-item key="3">Sprit3</a-menu-item>
            <a-menu-item key="4">Sprit4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" />Project02</span>
            <a-menu-item key="5">Sprit1</a-menu-item>
            <a-menu-item key="6">Sprit2</a-menu-item>
            <a-menu-item key="7">Sprit3</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification" />Project03</span>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
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
  components: {
  },
  methods: {
    toProject () {
      this.$router.push('/project')
    }
  }
}
</script>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
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
