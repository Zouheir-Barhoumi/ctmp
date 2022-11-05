import { createStore } from "vuex";
import UUID, { uuid } from "vue-uuid";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  plugins: [createPersistedState()],
  state: {
    loggedIn: false,
    loadingTask: false,
    loadingList: false,
    listClicked: false,
    projClicked: false,
    teamClicked: false,
    taskId: null,
    listId: null,
    projId: null,
    teamId: null,
    targetListName: "Not found",
    targetProjectName: "Not found",
    targetTeamName: "Not found",
    user: {
      id: uuid.v4(),
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      password: "helloworld",
    },
    tasks: [],
    lists: [],
    projects: [],
    teams: [],
  },
  getters: {
    todos: (state) => {
      return state.tasks;
    },
    todosByList: (state) => {
      state.loadingTask = true;

      const filtered = state.tasks.filter(
        // (task) => task.parentId === state.listId
        (task) => task.parentId == state.listId
      );

      state.loadingTask = false;
      return filtered;
    },
    listsByProj: (state) => {
      // state.loadingList = true;

      const filtered = state.lists.filter(
        (list) => list.parentId == state.projId
      );

      // state.loadingList = false;
      return filtered;
    },
    membersByTeam: (state) => {
      const filtered = state.teams.filter(
        // (task) => task.parentId === state.listId
        (team) => team._id == state.teamId
      );
      return filtered;
    },
    getLoadingStatus(state) {
      return state.loadingList;
    },
    getTaskLoadingStatus(state) {
      return state.loadingList;
    },
  },
  mutations: {
    SET_listLoadingStatus(state, bool) {
      state.loadingList = bool;
      // console.log(state.loadingList);
    },
    SET_taskLoadingStatus(state) {
      state.loadingTask = !state.loadingTask;
      // console.log(state.loadingTask;
    },
    addNewTask(state, obj) {
      state.tasks = [...state.tasks, obj];
    },
    addNewList(state, obj) {
      state.lists = [...state.lists, obj];
    },
    addNewTeam(state, obj) {
      state.teams = [...state.teams, obj];
    },
    addNewProject(state, obj) {
      state.projects = [...state.projects, obj];
    },
    SET_allTasks(state, arr) {
      state.loadingTask = true;
      state.tasks = arr;
      state.loadingTask = false;
    },
    SET_allLists(state, arr) {
      state.lists = arr;
    },
    SET_allprojects(state, arr) {
      state.projects = arr;
    },
    SET_allTeams(state, arr) {
      state.teams = arr;
    },
    SET_user(state, obj) {
      state.user = obj;
    },
  },
  actions: {
    async addListInProj(ctx, obj) {
      ctx.commit("addNewList", obj);
      console.log(obj.parent);
      console.log(obj.list);
      try {
        const res = await axios.post(
          `http://localhost:5000/projects/${obj.parent}/newlist`,
          {
            ...obj.list,
          },
          { withCredentials: true }
        );
        ctx.commit("SET_listLoadingStatus", true);

        await axios
          .get("http://localhost:5000/lists/", { withCredentials: true })
          .then((resolve) => {
            ctx.commit("SET_allLists", resolve.data);
            console.log("lists");
            console.log(resolve.data);
            ctx.commit("SET_listLoadingStatus", false);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } catch (error) {
        console.log(error.message);
      }
    },
    async addNewList(ctx, obj) {
      ctx.commit("addNewList", obj);

      try {
        const res = await axios.post(
          "http://localhost:5000/lists/newlist",
          {
            ...obj,
          },
          { withCredentials: true }
        );
        ctx.commit("SET_listLoadingStatus", true);

        await axios
          .get("http://localhost:5000/lists/", { withCredentials: true })
          .then((resolve) => {
            ctx.commit("SET_allLists", resolve.data);
            console.log("lists");
            console.log(resolve.data);
            ctx.commit("SET_listLoadingStatus", false);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } catch (error) {
        console.log(error.message);
      }
    },
    async addNewTask(ctx, obj) {
      ctx.commit("addNewTask", obj);
      console.log(obj.parent);
      console.log(obj.task);
      try {
        const res = await axios.post(
          `http://localhost:5000/lists/${obj.parent}/newtask`,
          {
            ...obj.task,
          },
          { withCredentials: true }
        );
        const tasks = await axios.get("http://localhost:5000/tasks", {
          withCredentials: true,
        });

        ctx.commit("SET_allTasks", tasks.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async addNewProject({ commit }, obj) {
      commit("addNewProject", obj);
      try {
        const res = await axios.post(
          "http://localhost:5000/projects/newproject",
          {
            ...obj,
          },
          { withCredentials: true }
        );
        // commit("SET_listLoadingStatus");

        await axios
          .get("http://localhost:5000/projects/", { withCredentials: true })
          .then((resolve) => {
            commit("SET_allprojects", resolve.data);
            console.log("lists");
            console.log(resolve.data);
            // commit("SET_listLoadingStatus");
          })
          .catch((error) => {
            console.log(error.message);
          });
      } catch (error) {
        console.log(error.message);
      }
    },
    async GET_todos(ctx) {
      try {
        const res = await axios.get("http://localhost:5000/tasks", {
          withCredentials: true,
        });

        ctx.commit("SET_allTasks", res.data);

        // console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    GET_lists(ctx, list_id) {
      ctx.commit("SET_listLoadingStatus", true);
      axios
        .get("http://localhost:5000/lists/", { withCredentials: true })
        .then((resolve) => {
          ctx.commit("SET_allLists", resolve.data);
          ctx.commit("SET_listLoadingStatus", false);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    GET_projects(ctx) {
      // ctx.commit("SET_listLoadingStatus");
      axios
        .get("http://localhost:5000/projects/", { withCredentials: true })
        .then((resolve) => {
          ctx.commit("SET_allprojects", resolve.data);
          // ctx.commit("SET_listLoadingStatus");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    async DEL_task(ctx, task_id) {
      try {
        const del = await axios.delete(
          "http://localhost:5000/tasks/" + task_id,
          { withCredentials: true }
        );
        console.log(del.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async DEL_list(ctx, list_id) {
      try {
        const del = await axios.delete(
          "http://localhost:5000/lists/" + list_id,
          { withCredentials: true }
        );
        console.log(del.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async PUT_task(ctx, data) {
      const task_id = data._id;
      try {
        ctx.commit("SET_taskLoadingStatus");

        const updated = await axios.put(
          "http://localhost:5000/tasks/" + task_id,
          { ...data },
          { withCredentials: true }
        );

        const tasks = await axios.get("http://localhost:5000/tasks", {
          withCredentials: true,
        });

        ctx.commit("SET_allTasks", tasks.data);
        ctx.commit("SET_taskLoadingStatus");
      } catch (error) {
        console.log(error.message);
      }
    },
    async DEL_task(ctx, task_id) {
      try {
        const del = await axios.delete(
          "http://localhost:5000/tasks/" + task_id,
          { withCredentials: true }
        );
        console.log(del.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async GET_user(ctx, userId) {
      try {
        console.log(userId);
        const res = await axios.get("http://localhost:5000/users/" + userId, {
          withCredentials: true,
        });
        console.log(res);
        ctx.commit("SET_user", res);
      } catch (error) {
        console.log(error);
      }
    },
    async GET_teams(ctx) {
      ctx.commit("SET_listLoadingStatus", true);

      try {
        const res = await axios.get("http://localhost:5000/teams", {
          withCredentials: true,
        });
        ctx.commit("SET_allTeams", res.data);
        ctx.commit("SET_listLoadingStatus", false);
        // console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async addNewTeam(ctx, obj) {
      ctx.commit("addNewTeam", obj.team);

      try {
        const res = await axios.post(
          "http://localhost:5000/teams/newteam",
          {
            ...obj.team,
          },
          { withCredentials: true }
        );
        ctx.commit("SET_listLoadingStatus", true);

        await axios
          .get("http://localhost:5000/teams/", { withCredentials: true })
          .then((resolve) => {
            ctx.commit("SET_allTeams", resolve.data);
            console.log("teams");
            console.log(resolve.data);
            ctx.commit("SET_listLoadingStatus", false);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } catch (error) {
        console.log(error.message);
      }
    },
    async PUT_team(ctx, data) {
      try {
        const updated = await axios.put(
          "http://localhost:5000/teams/" + data.parent,
          data.member,
          { withCredentials: true }
        );

        const res = await axios.get("http://localhost:5000/teams", {
          withCredentials: true,
        });
        ctx.commit("SET_allTeams", res.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async DEL_team(ctx, team_id) {
      try {
        const del = await axios.delete(
          "http://localhost:5000/teams/" + team_id,
          { withCredentials: true }
        );
        console.log(del.data);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  modules: {},
});
