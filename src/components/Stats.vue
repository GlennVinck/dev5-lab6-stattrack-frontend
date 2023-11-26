<script setup></script>

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
          <tr>
            <td>
              <div>
                <img src="../assets/astralis.png" alt="Logo" />
              </div>
              Astralis
            </td>
            <td>12</td>
            <td>3</td>
            <td>15</td>
            <td>$1,000,000</td>
            <td>100</td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="../assets/faze.png" alt="Logo" />
              </div>
              FaZe Clan
            </td>
            <td>10</td>
            <td>5</td>
            <td>15</td>
            <td>$800,000</td>
            <td>80</td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="../assets/nip.png" alt="Logo" />
              </div>
              Ninjas In Pyjamas
            </td>
            <td>8</td>
            <td>7</td>
            <td>15</td>
            <td>$600,000</td>
            <td>60</td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="../assets/liquid.png" alt="Logo" />
              </div>
              Team Liquid
            </td>
            <td>6</td>
            <td>9</td>
            <td>15</td>
            <td>$400,000</td>
            <td>40</td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="../assets/virtuspro.png" alt="Logo" />
              </div>
              Virtus.pro
            </td>
            <td>4</td>
            <td>11</td>
            <td>15</td>
            <td>$200,000</td>
            <td>20</td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="../assets/g2.png" alt="Logo" />
              </div>
              G2 Esports
            </td>
            <td>2</td>
            <td>13</td>
            <td>15</td>
            <td>$100,000</td>
            <td>10</td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="../assets/cloud9.png" alt="Logo" />
              </div>
              Cloud9
            </td>
            <td>0</td>
            <td>15</td>
            <td>15</td>
            <td>$0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="../assets/fnatic.png" alt="Logo" />
              </div>
              Fnatic
            </td>
            <td>0</td>
            <td>15</td>
            <td>15</td>
            <td>$0</td>
            <td>0</td>
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
