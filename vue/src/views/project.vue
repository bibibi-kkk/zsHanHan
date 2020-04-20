<template>
  <div class="project">
    <div class="title">Project1</div>
    <a-collapse class="subtitle">
      <a-collapse-panel header="Spirt1" key="1">
        <p>testing task</p>
      </a-collapse-panel>
    </a-collapse>
    <div class="item">
      <div class="tag">Testing</div>
      <a-list itemLayout="horizontal" :dataSource="showdata">
        <a-list-item v-for="item in showdata" :key="item.id">
          <a-list-item-meta @click="addSub(item.id)" :description="item.title">
          </a-list-item-meta>
        </a-list-item>
      </a-list>
      <br />
      <br />
      <!-- <button v-on:click="addTask">Add New Task</button> -->
      <button id="show-modal" @click="showAdd">Add New Task</button>
      <!-- use the modal component, pass in the prop -->
      <modal name="addnewtask">
        <div class="addform">
          <div class="forM">
            <h3>Add a new task</h3>
            <input v-model="input" placeholder="New task describe" />
            <br />
            <br />
            <button id="show-modal" @click="addTask()">Submit</button>
          </div>
        </div>
      </modal>
      <modal name="taskDetail" :width="800" :height="700">
        <div class="addform">
          <div class="forM">
            <h3>Task Detail</h3>
            <br />
            <br />
            <a-list itemLayout="horizontal" :dataSource="subTask">
              <a-list-item v-for="item in subTask" :key="item.id">
                <a-list-item-meta
                  @click="addSub(item.id)"
                  :description="item.title"
                >
                </a-list-item-meta>
              </a-list-item>
            </a-list>
            <br />
            <input v-model="input" placeholder="Add a new sub task" />
            <br />

            <br />
            <button id="show-modal" @click="addSubTask()">Submit</button>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      input: "",
      showdata: [],
      showModal: false,
      curid: "",
      subTask: []
    };
  },
  mounted() {
    this.loadTask();
  },
  methods: {
    showtask() {
      this.$modal.show("taskDetail");
    },
    hidetask() {
      this.$modal.hide("taskDetail");
    },
    showAdd() {
      this.$modal.show("addnewtask");
    },
    hideAdd() {
      this.$modal.hide("addnewtask");
    },
    addSub(id) {
      this.curid = id;
      console.log(this.curid);
      //find all sub task
      this.subTask = [];
      for (let c = 0; c < this.data.data.alltasks.length; c++) {
        if (this.data.data.alltasks[c].parentid === this.curid) {
          const buf = { title: "", parentid: "", id: "" };
          buf.title = this.data.data.alltasks[c].taskdes;
          buf.parentid = this.data.data.alltasks[c].parentid;
          buf.id = this.data.data.alltasks[c]._id;
          this.subTask.push(buf);
        }
      }
      this.showtask();
    },
    async addTask() {
      const query = `mutation{posttask(taskdes: "${this.input}", parentid: "0") {_id taskdes parentid }}`;
      const response = await fetch("http://localhost:5000/teamssgapi", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          query: query
        })
      });
      console.log("add a new task success");
      this.hideAdd();
      window.location.reload()
    },
    async addSubTask() {
      const query = `mutation{posttask(taskdes: "${this.input}", parentid: "${this.curid}") {_id taskdes parentid }}`;
      const response = await fetch("http://localhost:5000/teamssgapi", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          query: query
        })
      });
      console.log("add a new task success");
      this.hidetask();
      window.location.reload()
    },
    async loadTask() {
      const query = "{alltasks {_id taskdes parentid}}";
      const response = await fetch("http://localhost:5000/teamssgapi", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          query: query
        })
      });
      this.data = await response.json();
      console.log(this.data);
      console.log(this.data.data.alltasks);
      for (let c = 0; c < this.data.data.alltasks.length; c++) {
        if (this.data.data.alltasks[c].parentid === "0") {
          const buf = { title: "", parentid: "", id: "" };
          buf.title = this.data.data.alltasks[c].taskdes;
          buf.parentid = this.data.data.alltasks[c].parentid;
          buf.id = this.data.data.alltasks[c]._id;
          this.showdata.push(buf);
        }
      }
      console.log(this.showdata);
    }
  }
};
</script>

<style lang="less">
.addform {
  width: 100%;
  height: 100%;
  .forM {
    width: 100%;
    height: 100%;
    margin: auto;
  }
}
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
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
      padding-left: 20px;
    }
  }
}
</style>
