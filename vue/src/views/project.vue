<template>
  <div class="project">
    <div class="title">项目一</div>
    <a-collapse v-model="activeKey" class="subtitle">
      <a-collapse-panel header="周期1" key="1">
        <p>嘚嘚嘚</p>
      </a-collapse-panel>
    </a-collapse>
    <div class="item">
      <div class="tag">测试
      </div>
      <a-list itemLayout="horizontal" :dataSource="data">
        <a-list-item slot="renderItem">
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
]
export default {
  data () {
    return {
      data
    }
  }
}
</script>

<style lang="less">
.project {
  .title {

  }
  .subtitle {
    margin: 20px 0;
  }
  .item {
    position: relative;
    .tag {
      width: 60px;
      text-align: center;
      background: pink;
      color: #fff;
      line-height: 18px;
      padding: 0 8px;
      border-radius: 4px 4px 0 0;
      font-size: 11px;
    }
    .ant-list-split .ant-list-item {
      background: #fff;
      border: 1px solid #fff;
      box-shadow: 0 0 10px 0 rgba(0,0,0,.05);
      padding-left: 20px;
    }
  }
}
</style>
