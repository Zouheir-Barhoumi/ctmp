<template>
  <!-- <Header /> -->
  <div class="main_container">
    <div class="wrapper" id="lists_wrapper">
      <NewFieldSvg
        :limit="50"
        @transmit-data="receiveListInput"
        @transmit-add="createNewList"
        text="create a new list"
      >
      </NewFieldSvg>
    </div>
    <div class="lists_main_section">
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
      <div v-show="!listIsLoading" class="created_lists">
        <ul>
          <!-- <li><Card :text="$store.state.lists[0].text"></Card></li> -->
          <li v-for="list in allLists" :key="list._id">
            <Card
              @delClick="delList(list._id)"
              @click="getListId(list)"
              :text="list.text"
            ></Card>
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
        <div v-if="taskIsLoading" class="loadingTasks">
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
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NewField from "@/components/NewField.vue";
import NewFieldSvg from "@/components/NewFieldSvg.vue";
import Card from "@/components/Card.vue";
import Li from "@/components/Li.vue";
import UUID, { uuid } from "vue-uuid";
import { getUser } from "../content";

export default {
  components: {
    Header,
    NewField,
    NewFieldSvg,
    Card,
    Li,
  },
  data() {
    return {
      // listId: null,
      // targetListName: "not found",
      listClicked: false,
      receivedNewList: "",
      receivedNewTask: "",
    };
  },
  computed: {
    allLists() {
      return this.$store.state.lists;
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
  },
  methods: {
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
    getLists(list_id) {
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
      this.$store.state.task = data;
      this.$store.dispatch("PUT_task", data);
    },
    updateTask(task_id, task) {
      this.$store.state.task = task;
      this.$store.dispatch("PUT_task", task);
    },
  },

  beforeMount() {
    this.getLists();
  },
};
</script>

<style scoped>
#lists_wrapper {
  min-height: 7.9rem;
}
.created_lists {
  width: 40%;
  max-height: 100%;
  display: flex;
  align-items: flex-start;
  min-height: 8rem;
  overflow: auto;
  direction: rtl;
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
  position: relative;
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
  justify-self: center;
  display: grid;
  width: 40%;
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
/*************
/* SCROLL STYLES */
/* width */
::-webkit-scrollbar {
  width: 1rem;
}
</style>
