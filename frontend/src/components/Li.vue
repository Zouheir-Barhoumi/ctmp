<template>
  <div class="list_items_card">
    <div class="list_items_card_meta-top">
      <label class="list_items_card-smol">
        <span>Assignees:</span>
        <span
          ><svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="15" height="15" rx="4" fill="#F2994A" />
            <rect x="2.5" y="6" width="10" height="2.5" fill="white" />
            <rect x="6.5" y="2.5" width="2.5" height="10" fill="white" /></svg
        ></span>
      </label>
      <label class="list_items_card-smol">
        <span>Priority:</span>
        <span
          ><svg
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.75" y="0.75" width="12" height="6.75" fill="#EB5757" />
            <rect width="1.5" height="15" fill="#EB5757" />
          </svg>
        </span>
      </label>
      <label class="list_items_card-smol">
        <span>Status:</span>
        <!-- TODO: create a dropdown menu -->
        <span>
          <select name="status" id="li_status">
            <option value="pending">Pending</option>
            <option value="inprogress">In-progress</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
            <option value="closed">Closed</option>
            <option value="add_new_status">Add New Status</option>
          </select>
        </span>
      </label>
    </div>
    <label class="li">
      <div class="li_text">
        <div v-if="editMode" class="editable">
          <input v-model="editedTask" type="text" autofocus />
        </div>
        <div :class="{ completed: this.completed }">
          {{ text }}
        </div>
        <div @click.prevent="toggleMenu" class="li_options_btn">
          <img src="@/assets/edit-options-48.png" alt="options menu" />
        </div>
        <div v-if="showEditDelete" class="li_menu">
          <div
            @click.prevent="editEvent"
            v-if="!editMode"
            id="li_menu_edit"
            value="edit"
          >
            edit
          </div>
          <div
            @click.prevent="delEvent"
            v-if="!editMode"
            id="li_menu_del"
            value="delete"
          >
            delete
          </div>
          <div
            @click.prevent.stop="saveEvent"
            v-if="editMode"
            id="li_menu_save"
            value="save"
          >
            save
          </div>
        </div>
      </div>
      <input v-model="completed" @change="toggleLineThrough" type="checkbox" />
      <span class="li_checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Li",
  data() {
    return {
      checked: false,
      showEditDelete: false,
      editMode: false,
      editedTask: this.text,
    };
  },

  props: {
    text: { type: String, default: "text" },
    completed: { type: Boolean, default: false },
    task: { type: Object, default: {} },
  },
  computed: {},
  methods: {
    toggleLineThrough(event) {
      event.target.checked = this.completed;

      // event.target.previousSibling.style.textDecoration = this.completed
      //   ? "line-through"
      //   : "none";
      this.checked = event.target.checked;
      this.task.completed = this.checked; // set completed in task object
      this.$store.state.task = this.task; // set task in store
      this.$emit("completed-transmit", this.task);
    },
    toggleMenu() {
      this.showEditDelete = !this.showEditDelete;
    },
    delEvent(event) {
      this.$emit("deltask-transmit", "clicked");
    },
    editEvent(event) {
      this.editMode = !this.editMode;
    },
    saveEvent(event) {
      this.editMode = !this.editMode;
      this.task.text = this.editedTask;
      this.$store.state.task = this.task;
      this.$emit("updateTask-transmit", this.task);
    },
  },
  beforeMount() {},
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
.list_items_card {
  color: var(--color-primary-dark);
  border: 0.1rem solid var(--color-primary-light);
}
.li_text {
  width: 100%;
  background: var(--color-primary-light);
  box-shadow: 0px 0.2rem 0.4rem rgba(37, 121, 146, 0.3);
  border-radius: 0.5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
}
.li_options_btn {
  display: grid;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  z-index: 1000;
}
.li_options_btn img {
  opacity: 0.8;
  height: 2rem;
  align-self: center;
}
.li_menu {
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
  max-width: 10rem;
  min-width: 8rem;
  /* margin-left: 0.5rem; */
  padding: 0 0 0 1rem;
  font-size: 1.4rem;
  display: flex;
  align-content: center;
  flex-direction: row;
}
.li_menu > * {
  display: block;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
  width: 8rem;
  margin-right: 1rem;
  align-self: center;
}
#li_menu_save,
#li_menu_edit,
#li_menu_del {
  text-decoration: none !important;
}
#li_menu_edit {
  color: var(--color-green);
}
#li_menu_del {
  color: var(--color-red);
  margin-right: 1.5rem;
}
#li_menu_save {
  color: var(--color-red);
  margin-left: 4rem;
}
.hide {
  display: none;
}
.editable input {
  width: 100%;
  max-width: 40rem;
  padding: 0.3rem 2.5rem 0.3rem 0.5rem;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: var(--font-sm);
  transform: translateY(-0.1rem);
  border-radius: 0.2rem;
  color: var(--color-primary-dark);

  border: none;
  background-image: none;
  background-color: var(--color-white);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
}
.editable {
  position: absolute;
  width: 80%;
}

/* .li_text input {
  background: var(--color-white);
  width: 100%;
  height: 100%;
} */
/* this style won't apply because it is within the component */
.list_items_card:not(:first-of-type) {
  margin: 1rem 0;
}

.list_items_card_meta-top {
  display: flex;
  justify-content: space-evenly;
}

.list_items_card-smol {
  display: flex;
  margin: 0;
  padding: 0;
}
.list_items_card-smol svg {
  position: relative;
  /* margin: 0; */
  padding: 0;
  display: inline-block;
  margin-left: 1.5rem;
}
.list_items_card-smol svg:hover {
  cursor: pointer;
}

/* CHECKBOX STYLE */
/******************
******************/
.li {
  display: block;
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: 1.2rem;
  cursor: pointer;
  font-size: var(--font-md);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
/* hide the default checkbox */
.li input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* create a custom checkbox */
.li_checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 2.5rem;
  width: 2.5rem;
  background: var(--color-primary-light);
  border: 0.1rem solid var(--color-tertiary-light);
}
/* on mouse-over add a grey bg */
.li:hover input ~ .li_checkmark {
  background: var(--color-primary-light);
  border: 0.1rem double var(--color-primary-blue);
}
/* checkbox bg when checked*/
.li input:checked ~ .li_checkmark {
  background: #219653;
  border: none;
}

/* create the li_checkmark indicator
  hide indicator when not checked
*/
.li_checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* show the li_checkmark indicator*/
.li input:checked ~ .li_checkmark::after {
  display: block;
}
/* style li_checkmark */
.li .li_checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/******************
*******************/
/* END OF CHECKBOX STYLE */

/* DROP DOWN STYLE */
/******************
******************/
select {
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
  max-width: 10rem;
  min-width: 8rem;
  /* margin-left: 0.5rem; */
  padding: 0 0 0 1rem;
  color: var(--color-secondary-blue);
}
select option {
  display: block;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
  width: 8rem;
  margin-left: 1rem;
}
/******************
******************
END OF DROP DOWN STYLE*/
</style>
