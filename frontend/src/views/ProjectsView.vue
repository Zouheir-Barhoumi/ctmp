<template>
  <!-- <Header /> -->
  <div class="main_container">
    <div class="wrapper projects_wrapper">
      <NewFieldSvg
        :limit="50"
        @transmit-data="receiveProjInput"
        @transmit-add="createNewProj"
        text="Create a new Project"
      />
      <div class="created_projects">
        <ul>
          <!-- <li><Card :text="$store.state.projects[0].text"></Card></li> -->
          <li v-for="proj in allProjects" :key="proj.id">
            <Card @click="getProjId(proj)" :text="proj.text"></Card>
          </li>
        </ul>
      </div>
    </div>
    <div class="lists_main_section">
      <div class="created_lists">
        <div v-show="listIsLoading" class="loading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="
              margin: auto;
              background: rgb(249, 249, 249);
              display: block;
              shape-rendering: auto;
            "
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <g transform="translate(80,50)">
              <g transform="rotate(0)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="1">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.875s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.875s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(71.21320343559643,71.21320343559643)">
              <g transform="rotate(45)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.875">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.75s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.75s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(50,80)">
              <g transform="rotate(90)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.75">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.625s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.625s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(28.786796564403577,71.21320343559643)">
              <g transform="rotate(135)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.625">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.5s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.5s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(20,50.00000000000001)">
              <g transform="rotate(180)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.5">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.375s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.375s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(28.78679656440357,28.786796564403577)">
              <g transform="rotate(225)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.375">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.25s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.25s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(49.99999999999999,20)">
              <g transform="rotate(270)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.25">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.125s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.125s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(71.21320343559643,28.78679656440357)">
              <g transform="rotate(315)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.125">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="0s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="0s"
                  ></animate>
                </circle>
              </g>
            </g>
            <!-- [ldio] generated by https://loading.io/ -->
          </svg>
        </div>
        <ul v-show="!listIsLoading">
          <!-- <li><Card :text="$store.state.lists[0].text"></Card></li> -->
          <li v-for="list in allLists" :key="list._id">
            <Card
              @delClick="delList(list._id)"
              @click="getListId(list)"
              :text="list.text"
            ></Card>
          </li>
          <li @click="addNewListInProj()">
            <CardAdd id="card">
              <img src="@/assets/Plust_button_b.png" alt="Add new button" />
            </CardAdd>
          </li>
        </ul>
      </div>
      <div class="details_wrapper" v-show="listClicked">
        <div class="wrapper_titlefield">
          <label for="#">Name:</label>
          <input :value="$store.state.targetListName" type="text" disabled />
        </div>
        <div class="wrapper_field">
          <NewField
            @transmit-data="receiveTasktInput"
            @transmit-add="createNewTask"
            text="Add a new task"
            >Add</NewField
          >
        </div>
        <div v-show="taskIsLoading" class="loadingTasks">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="
              margin: auto;
              background: none;
              display: block;
              shape-rendering: auto;
            "
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <g transform="translate(80,50)">
              <g transform="rotate(0)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="1">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.875s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.875s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(71.21320343559643,71.21320343559643)">
              <g transform="rotate(45)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.875">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.75s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.75s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(50,80)">
              <g transform="rotate(90)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.75">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.625s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.625s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(28.786796564403577,71.21320343559643)">
              <g transform="rotate(135)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.625">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.5s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.5s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(20,50.00000000000001)">
              <g transform="rotate(180)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.5">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.375s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.375s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(28.78679656440357,28.786796564403577)">
              <g transform="rotate(225)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.375">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.25s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.25s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(49.99999999999999,20)">
              <g transform="rotate(270)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.25">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.125s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="-0.125s"
                  ></animate>
                </circle>
              </g>
            </g>
            <g transform="translate(71.21320343559643,28.78679656440357)">
              <g transform="rotate(315)">
                <circle cx="0" cy="0" r="6" fill="#feca57" fill-opacity="0.125">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="0s"
                    values="1.5 1.5;1 1"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="fill-opacity"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    values="1;0"
                    begin="0s"
                  ></animate>
                </circle>
              </g>
            </g>
            <!-- [ldio] generated by https://loading.io/ -->
          </svg>
        </div>
        <div
          v-show="!taskIsLoading"
          class="wrapper_licard"
          v-for="task in allTasks"
          :key="task.id"
        >
          <!-- <Li :text="$store.state.lists[0].text"></Li> -->
          <Li
            :task="task"
            :completed="task.completed"
            @completed-transmit="changeCompleted"
            @deltask-transmit="deltask(task._id)"
            @updateTask-transmit="updateTask(task._id, task)"
            :text="task.text"
          />
        </div>
      </div>
    </div>
    <div v-if="showPopup" class="popup">
      <div class="popup__modal">
        <div class="popup__text">
          <label for="listInPro"
            >New List in {{ $store.state.targetProjectName }}:</label
          >
          <input
            v-model="listIn"
            id="listInPro"
            type="text"
            placeholder="List name"
            :class="{ danger: listInEmpty }"
          />
        </div>
        <div class="popup__btngroup">
          <div class="popup__btngroup-left"></div>
          <div class="popup__btngroup-rightt">
            <button @click.prevent="cancelNewListInput">Cancel</button
            ><button @click="submitNewListInProj">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NewField from "@/components/NewField.vue";
import NewFieldSvg from "@/components/NewFieldSvg.vue";
import Card from "@/components/Card.vue";
import CardAdd from "@/components/CardAdd.vue";
import Li from "@/components/Li.vue";
import UUID, { uuid } from "vue-uuid";

export default {
  components: {
    Header,
    NewField,
    NewFieldSvg,
    Card,
    CardAdd,
    Li,
  },
  data() {
    return {
      // listId: null,
      // projId: null,
      // targetListName: "Not found",
      // targetProjectName: "Not found",
      listClicked: false,
      receivedNewList: "",
      receivedNewTask: "",
      projClicked: false,
      receivedNewProj: "",
      showPopup: false,
      listIn: "",
      listInEmpty: false,
    };
  },
  computed: {
    allProjects() {
      return this.$store.state.projects;
    },
    /**  LISTS PROPERTIES *********/
    allLists() {
      return this.$store.getters.listsByProj;
    },
    allTasks() {
      return this.$store.getters.todosByList;
    },
    listIsLoading() {
      return this.$store.getters.getLoadingStatus;
    },
    taskIsLoading() {
      return this.$store.getters.getTaskLoadingStatus;
    },
    /**  END OF LISTS PROPERTIES **/
  },
  methods: {
    /**  PROJECTS METHODS *********/
    getProjId(proj) {
      let state = this.$store.state;
      this.projClicked = !this.projClicked;
      if (proj.id != state.projId) {
        this.projClicked = true;
      }
      if (proj._id != null) {
        state.projId = proj._id;
        state.targetProjectName = proj.text;
        this.getLists();
      } else {
        alert("Not found");
      }
    },
    getProjects() {
      this.$store.dispatch("GET_projects");
    },
    receiveProjInput(data) {
      this.receivedNewProj = data;
    },
    createNewProj(event) {
      console.log(this.receivedNewProj);
      const newProj = {
        text: this.receivedNewProj,
      };
      console.log(newProj);
      this.$store.dispatch("addNewProject", newProj);
    },

    /**  END OF PROJECTS METHODS **/

    /**  LISTS METHODS *********/

    getListId(list) {
      let state = this.$store.state;
      this.listClicked = !this.listClicked;
      if (list._id != state.listId) {
        this.listClicked = true;
      }
      if (list._id != null) {
        state.listId = list._id;
        state.targetListName = list.text;
        this.getTodosByList(list._id);
      } else {
        alert("No tasks");
      }
    },
    receiveListInput(data) {
      this.receivedNewList = data;
    },
    createNewList(event) {
      console.log(this.receivedNewList);
      const newList = {
        text: this.receivedNewList,
      };
      console.log(newList);
      this.$store.dispatch("addNewList", newList);
    },
    receiveTasktInput(data) {
      this.receivedNewTask = data;
    },
    createNewTask(event) {
      const NewTask = {
        text: this.receivedNewTask,
      };
      const listId = this.$store.state.listId;
      this.$store.dispatch("addNewTask", { task: NewTask, parent: listId });
    },
    getTodosByList(list_id) {
      // console.log(this.$store.state.listId);
      // return this.$store.state.tasks.filter(
      //   (t) => t.parentId == this.$store.state.listId
      // );
      this.$store.dispatch("GET_todos", list_id);
    },
    getLists() {
      this.$store.dispatch("GET_lists");
    },
    delList(id) {
      this.$store.dispatch("DEL_list", id);
      this.$store.state.lists = this.$store.state.lists.filter(
        (list) => list._id != id
      );
      this.listClicked = false;
    },
    deltask(id) {
      this.$store.dispatch("DEL_task", id);
      this.$store.state.tasks = this.$store.state.tasks.filter(
        (task) => task._id != id
      );
    },
    changeCompleted(data) {
      console.log(data._id);
      PUTPUT;
      this.$store.state.task = data;
      this.$store.dispatch("PUT_task", data);
    },
    updateTask(task_id, task) {
      this.$store.state.task = task;
      this.$store.dispatch("PUT_task", task);
    },
    addNewListInProj() {
      this.showPopup = !this.showPopup;
    },
    submitNewListInProj() {
      if (this.listIn.length) {
        const NewList = {
          text: this.listIn,
        };
        const projId = this.$store.state.projId;
        this.$store.dispatch("addListInProj", {
          list: NewList,
          parent: projId,
        });
        this.showPopup = false;
      } else {
        this.listInEmpty = true;
      }
    },
    cancelNewListInput() {
      this.listIn = "";
      this.showPopup = false;
    },
  },

  beforeMount() {
    this.getProjects();
    // this.getLists();
  },
  /**  END OF LISTS METHODS **/
};
</script>

<style scoped>
.danger {
  border: 1px solid var(--color-red);
}
.projects_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.created_projects {
  width: 100%;
  display: flex;
  align-items: start;
  overflow-x: auto;
  overflow-y: hidden;
  min-height: 7rem;
}
.created_projects ul {
  display: flex;
}

/***************
*****************
******************
*****************
****************
/* listsview style */
#lists_wrapper {
  min-height: 7.9rem;
}
.created_lists {
  width: 40%;
  max-height: 100%;
  display: flex;
  align-items: start;
  min-height: 8rem;
  overflow: auto;
  direction: rtl;
  /* margin-right: 1rem; */
  position: relative;
}
.created_lists ul {
  display: flex;
  flex-direction: column;
  direction: ltr;
  text-align: center;
  gap: 1rem;
  margin-right: auto;
}

.details_wrapper {
  border: 0.1rem solid var(--color-secondary-blue);
  background: var(--color-secondary-light);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 15rem;
  background: var(--color-secondary-light);
  padding: 2rem 1rem;
  /* margin-left: 2rem; */
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 2rem;
}
.wrapper_licard {
  width: 80%;
  align-self: center;
}
.wrapper_titlefield {
  color: var(--color-primary-dark);
  display: flex;
  gap: 2rem;
  margin-left: 2rem;
}
.wrapper_titlefield label {
  font-size: 2rem;
}
.wrapper_titlefield input {
  border: none;
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
  min-width: 16rem;
  /* margin-left: 0.5rem; */
  padding: 0 0 0 1rem;
  font-size: 1.93rem;
  color: var(--color-black);
}

.lists_main_section {
  margin-top: 2rem;
  display: flex;
  overflow: auto;
}

.wrapper_field {
  width: 80%;
  margin-left: 2rem;
}

.loading {
  position: absolute;
  width: 5rem;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
}

.loading svg {
  width: 5rem;
}

.loadingTasks {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loadingTasks svg {
  width: 3rem;
}
/***************
*****************
******************
*****************
****************
/* END OF listsview style */
</style>
