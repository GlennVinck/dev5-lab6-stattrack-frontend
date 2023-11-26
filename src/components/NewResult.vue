<script setup></script>

<template>
  <div id="main-container">
    <h1>New match result</h1>
    <h2>Send in your latest match result.</h2>
    <div id="input-container">
      <div id="teams-selector">
        <label for="team">Team</label>
        <select id="teams" name="teams">
          <option value="Astralis">Astralis</option>
          <option value="FaZe Clan">FaZe Clan</option>
          <option value="Ninjas In Pyjamas">Ninjas In Pyjamas</option>
          <option value="Team Liquid">Team Liquid</option>
          <option value="Virtus.pro">Virtus.pro</option>
          <option value="G2 Esports">G2 Esports</option>
          <option value="Cloud9">Cloud9</option>
          <option value="Complexity Gaming">Complexity Gaming</option>
        </select>
      </div>
      <div id="result-selector">
        <label for="result">Result</label>
        <input type="radio" name="result" id="win" value="Win" required />
        <label for="win">Win</label>
        <input type="radio" name="result" id="loss" value="Loss" required />
        <label for="loss">Loss</label>
      </div>
    </div>

    <button @click="sendNewStats">Send</button>
  </div>
</template>

<style scoped>
#input-container {
  background-color: #1a1a20;
  padding: 16px;
  margin: 32px 0 16px 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 400px;
}

#teams-selector {
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

#result-selector {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

#teams {
  padding: 6px 36px 6px 12px;
  border-radius: 6px;
  border: 1px solid #bfbfcb;
  background-color: #1a1a20;
  color: #ffffff;
  font-size: 16px;
  appearance: none;
  background-image: url("../public/chevron-down.svg");
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 1em auto, 100%;
}

#teams:focus {
  outline: none;
}

label {
  color: #bfbfcb;
  margin-right: 16px;
  font-weight: 200;
  font-size: 14px;
}

input[type="radio"] {
  margin: 0 8px 0 0;
}

label[for="win"],
label[for="loss"] {
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
}
</style>
