<template>
  <!-- <Header /> -->
  <div class="main_container">
    <div class="lists_main_section">
      <div class="created_lists">
        <ul>
          <!-- <li><Card :text="$store.state.lists[0].text"></Card></li> -->
          <li v-for="team in allTeams" :key="team.id">
            <Card
              @delClick="delTeam(team._id)"
              @click="getTeamId(team)"
              :text="team.text"
            ></Card>
          </li>
          <li @click="addNewTeam()">
            <CardAdd id="card">
              <img src="@/assets/Plust_button_b.png" alt="Add new button" />
            </CardAdd>
          </li>
        </ul>
      </div>
      <div class="details_wrapper" v-if="teamClicked">
        <div class="wrapper_titlefield">
          <label for="#">Name:</label>
          <input :value="$store.state.targetTeamName" type="text" disabled />
        </div>
        <div class="wrapper_field">
          <NewField
            @transmit-data="receiveMemInput"
            @transmit-add="addNewMem"
            text="Enter email to invite"
            >Invite</NewField
          >
        </div>
        <div
          class="wrapper_licard"
          v-for="member in allMembers[0].members"
          :key="member.email"
        >
          <!-- <Li :text="$store.state.teams[0].text"></Li> -->
          <li>{{ member.email }}</li>
        </div>
      </div>
    </div>
    <div v-if="showPopup" class="popup">
      <div class="popup__modal">
        <div class="popup__text">
          <label for="teamInPro"
            >New List in {{ $store.state.targetProjectName }}:</label
          >
          <input
            v-model="teamIn"
            id="teamInPro"
            type="text"
            placeholder="List name"
            :class="{ danger: teamInEmpty }"
          />
        </div>
        <div class="popup__btngroup">
          <div class="popup__btngroup-left"></div>
          <div class="popup__btngroup-rightt">
            <button @click.prevent="cancelNewTeamInput">Cancel</button
            ><button @click="submitNewTeam">Create</button>
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
      // targetTeamName: "not found",
      teamClicked: false,
      showPopup: false,
      teamIn: "",
      teamInEmpty: false,
      meme: null,
      receivedNewMem: "",
    };
  },
  computed: {
    allTeams() {
      return this.$store.state.teams;
    },
    allMembers() {
      return this.$store.getters.membersByTeam;
    },
  },
  methods: {
    getTeamId(team) {
      let state = this.$store.state;
      this.teamClicked = !this.teamClicked;
      if (team._id != state.teamId) {
        this.teamClicked = true;
      }
      if (team._id != null) {
        state.teamId = team._id;
        state.targetTeamName = team.text;
      } else {
        alert("Not found");
      }
    },

    delTeam(id) {
      this.$store.dispatch("DEL_team", id);
      this.$store.state.teams = this.$store.state.teams.filter(
        (team) => team._id != id
      );
      this.teamClicked = false;
    },

    getTeams(list_id) {
      this.$store.dispatch("GET_teams");
    },

    receiveMemInput(data) {
      this.receivedNewMem = data;
    },

    addNewMem(event) {
      const NewMember = {
        email: this.receivedNewMem,
      };
      const teamId = this.$store.state.teamId;
      this.$store.dispatch("PUT_team", {
        member: NewMember,
        parent: teamId,
      });
    },
    // TODO: adapt to team

    // MODAL METHODS
    cancelNewTeamInput() {
      this.showPopup = false;
    },

    addNewTeam() {
      this.showPopup = !this.showPopup;
    },
    submitNewTeam() {
      if (this.teamIn.length) {
        const NewTeam = {
          text: this.teamIn,
        };
        console.log(NewTeam);
        this.$store.dispatch("addNewTeam", {
          team: NewTeam,
        });
        this.showPopup = false;
      } else {
        this.teamInEmpty = true;
      }
    },
    cancelNewTeamInput() {
      this.teamIn = "";
      this.showPopup = false;
    },
  },
  beforeMount() {
    this.getTeams();
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid var(--color-red);
}
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
  border: 0.1rem solid var(--color-tertiary-light);
  background: var(--color-secondary-light);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 15rem;
  background: var(--color-primary-light);
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
  background: #000;
  color: #000;
}
.wrapper_licard li {
  color: #000;
  background: orange;
}
.wrapper_titlefield {
  color: var(--color-primary-dark);
  display: flex;
  gap: 2rem;
  margin-left: 2rem;
}
.wrapper_titlefield label {
  font-size: 1.6rem;
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

/*************
/* SCROLL STYLES */
/* width */
::-webkit-scrollbar {
  width: 1rem;
}
</style>
