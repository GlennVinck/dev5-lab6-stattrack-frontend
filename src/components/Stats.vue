<script setup>
import { ref, onMounted } from "vue";

const socket = new WebSocket("wss://stattrack-websocket.onrender.com/primus");
const teams = ref([
  {
    name: "Astralis",
    wins: 12,
    losses: 3,
    matchesPlayed: 15,
    prizeMoney: 120000,
    seasonPoints: 36,
    logo: "astralis.png",
  },
  {
    name: "FaZe Clan",
    wins: 10,
    losses: 5,
    matchesPlayed: 15,
    prizeMoney: 100000,
    seasonPoints: 30,
    logo: "fazeclan.png",
  },
  {
    name: "Ninjas In Pyjamas",
    wins: 8,
    losses: 7,
    matchesPlayed: 15,
    prizeMoney: 80000,
    seasonPoints: 24,
    logo: "nip.png",
  },
  {
    name: "Team Liquid",
    wins: 6,
    losses: 9,
    matchesPlayed: 15,
    prizeMoney: 60000,
    seasonPoints: 18,
    logo: "teamliquid.png",
  },
  {
    name: "Virtus.pro",
    wins: 4,
    losses: 11,
    matchesPlayed: 15,
    prizeMoney: 40000,
    seasonPoints: 12,
    logo: "virtuspro.png",
  },
  {
    name: "G2 Esports",
    wins: 2,
    losses: 13,
    matchesPlayed: 15,
    prizeMoney: 20000,
    seasonPoints: 6,
    logo: "g2esports.png",
  },
  {
    name: "Cloud9",
    wins: 0,
    losses: 15,
    matchesPlayed: 15,
    prizeMoney: 0,
    seasonPoints: 0,
    logo: "cloud9.png",
  },
  {
    name: "Fnatic",
    wins: 0,
    losses: 15,
    matchesPlayed: 15,
    prizeMoney: 0,
    seasonPoints: 0,
    logo: "fnatic.png",
  },
]);

// array of teamnames
// const teamNames = [
//   "Astralis",
//   "FaZe Clan",
//   "Ninjas In Pyjamas",
//   "Team Liquid",
//   "Virtus.pro",
//   "G2 Esports",
//   "Cloud9",
//   "Fnatic",
// ];

// const teamsLowercase = teamNames.map((team) => team.toLowerCase());

// console.log(teamsLowercase);

onMounted(() => {
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.action === "newResult") {
      console.log("data received");

      const team = teams.value.find((team) => team.name === data.data.team);
      console.log(team);
      if (data.data.result === "win") {
        team.wins++;
        team.prizeMoney += 10000;
        team.seasonPoints += 3;
      } else {
        team.losses++;
      }
      team.matchesPlayed++;
    }
  };
});
</script>

<template>
  <div id="main-container">
    <h1>CS2 esports teams statistics</h1>
    <h2>Statistics based on results from season 2023 matches.</h2>
    <div id="stats-container">
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>matches played</th>
            <th>Prize Money</th>
            <th>Season Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in teams" :key="team.name">
            <td>
              <div>
                <img :src="'./' + team.logo" alt="Logo" />
              </div>
              {{ team.name }}
            </td>
            <td>{{ team.wins }}</td>
            <td>{{ team.losses }}</td>
            <td>{{ team.matchesPlayed }}</td>
            <td>${{ team.prizeMoney.toLocaleString() }}</td>
            <td>{{ team.seasonPoints }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
#stats-container {
  background-color: #1a1a20;
  margin: 32px 0;
  border-radius: 8px;
  width: 100%;
  max-width: 870px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  color: #bfbfcb;
  height: 3.5rem;
  border-bottom: 1px solid #2f2f36;
  font-size: 0.75rem;
  height: 3.5rem;
  text-align: left;
}

th {
  font-weight: 600;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  text-align: right;
}

th:first-child {
  text-align: left;
  padding-left: 1.5rem;
}

th:last-child {
  padding-right: 1.5rem;
}

td {
  height: 3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #bfbfcb;
  text-align: right;
  font-weight: 200;
}

td:first-child {
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 400;
  font-size: 0.9rem;
}

td:last-child {
  padding-right: 1.5rem;
}

td div,
td div img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
}

tr:nth-child(even) {
  background-color: #15151a;
}
</style>
