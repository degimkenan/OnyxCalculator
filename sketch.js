let CurXPPool = NaN;
let CurDRPool = NaN;
let CurACPool = NaN;
let CurGearXP = NaN;
let CurOnyxCount = 0;

let CurDailyXP = NaN;
let CurDailyDR = NaN;
let CurDailyAC = NaN;
let CurDailyTpose = NaN;

let CurCTFarming = false;
let CurCTTpose = false;

let CurBombard = false;

let optimizedCalculation;
let playerCalculation;

let PlayerXPPool = document.getElementById("XPPool");
let PlayerDRPool = document.getElementById("DRPool");
let PlayerACPool = document.getElementById("ACPool");
let PlayerGearXP = document.getElementById("GearXP");
let PlayerOnyxCount = document.getElementById("OnyxCount");

let PlayerDailyXP = document.getElementById("DailyXP");
let PlayerDailyDR = document.getElementById("DailyDR");
let PlayerDailyAC = document.getElementById("DailyAC");
let PlayerDailyTpose = document.getElementById("DailyTpose");
let PlayerBombard = document.getElementById("Bombard");

let PlayerCTFarming = document.getElementById("CTFarming");
let PlayerCTTpose = document.getElementById("CTTpose");

let button1 = document.getElementById("but1");
let button2 = document.getElementById("but2");
let button3 = document.getElementById("but3");
let calculateButton = document.getElementById("page1calculate");
let optimizationTableButton = document.getElementById(
  "optimizationTableButton"
);
let playerTableButton = document.getElementById("playerTableButton");

PlayerXPPool.oninput = function () {
  if (typeof Number(PlayerXPPool.value.split(",").join("")) == "number"
  && Number(PlayerXPPool.value.split(",").join("")) >= 0) {
    CurXPPool = Number(PlayerXPPool.value.split(",").join(""));
  } else {
    CurXPPool = NaN;
  }
  calculateButtonAvailability();
};

PlayerDRPool.oninput = function () {
  if (typeof Number(PlayerDRPool.value.split(",").join("")) == "number"
  && Number(PlayerDRPool.value.split(",").join("")) >= 0) {
    CurDRPool = Number(PlayerDRPool.value.split(",").join(""));
  } else {
    CurDRPool = NaN;
  }
  calculateButtonAvailability();
};

PlayerACPool.oninput = function () {
  if (typeof Number(PlayerACPool.value.split(",").join("")) == "number"
  && Number(PlayerACPool.value.split(",").join("")) >= 0) {
    CurACPool = Number(PlayerACPool.value.split(",").join(""));
  } else {
    CurACPool = NaN;
  }
  calculateButtonAvailability();
};

PlayerGearXP.oninput = function () {
  if (typeof Number(PlayerGearXP.value.split(",").join("")) == "number"
  && Number(PlayerGearXP.value.split(",").join("")) >= 0) {
    CurGearXP = Number(PlayerGearXP.value.split(",").join(""));
  } else {
    CurGearXP = NaN;
  }
  calculateButtonAvailability();
};

PlayerOnyxCount.onchange = function () {
  CurOnyxCount = Number(PlayerOnyxCount.value);
};

PlayerDailyXP.oninput = function () {
  if (typeof Number(PlayerDailyXP.value.split(",").join("")) == "number"
  && Number(PlayerDailyXP.value.split(",").join("")) >= 0) {
    CurDailyXP = Number(PlayerDailyXP.value.split(",").join(""));
  } else {
    CurDailyXP = NaN;
  }
  calculateButtonAvailability();
};

PlayerDailyDR.oninput = function () {
  if (typeof Number(PlayerDailyDR.value.split(",").join("")) == "number"
  && Number(PlayerDailyDR.value.split(",").join("")) >= 0) {
    CurDailyDR = Number(PlayerDailyDR.value.split(",").join(""));
  } else {
    CurDailyDR = NaN;
  }
  calculateButtonAvailability();
};

PlayerDailyAC.oninput = function () {
  if (typeof Number(PlayerDailyAC.value.split(",").join("")) == "number"
  && Number(PlayerDailyAC.value.split(",").join("")) >= 0) {
    CurDailyAC = Number(PlayerDailyAC.value.split(",").join(""));
  } else {
    CurDailyAC = NaN;
  }
  calculateButtonAvailability();
};

PlayerDailyTpose.oninput = function () {
  if (typeof Number(PlayerDailyTpose.value.split(",").join("")) == "number"
  && Number(PlayerDailyTpose.value.split(",").join("")) >= 0) {
    CurDailyTpose = Number(PlayerDailyTpose.value.split(",").join(""));
  } else {
    CurDailyTpose = NaN;
  }
  calculateButtonAvailability();
};

PlayerCTTpose.onchange = function () {
  let CTFarmingDisplay = document.getElementById("CTFarmingDisplay");
  if (PlayerCTTpose.checked == true) {
    CurCTTpose = true;
    CTFarmingDisplay.style.display = "block";
  } else {
    CurCTTpose = false;
    CurCTFarming = false;
    PlayerCTFarming.checked = false;
    CTFarmingDisplay.style.display = "none";
  }
};

PlayerCTFarming.onchange = function () {
  if (CurCTFarming == true) {
    CurCTFarming = false;
  } else {
    CurCTFarming = true;
  }
};

PlayerBombard.onchange = function () {
  if (PlayerBombard.checked == true) {
    CurBombard = true;
  } else {
    CurBombard = false;
  }
};

function calculateButtonAvailability() {
  if (
    isNaN(CurXPPool) ||
    isNaN(CurDRPool) ||
    isNaN(CurACPool) ||
    isNaN(CurGearXP) ||
    isNaN(CurDailyXP) ||
    isNaN(CurDailyDR) ||
    isNaN(CurDailyAC) ||
    isNaN(CurDailyTpose)
  ) {
    calculateButton.disabled = true;
  } else {
    calculateButton.disabled = false;
  }
}

button1.onclick = function () {
  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");
  let page3 = document.getElementById("page3");
  page1.style.display = "block";
  page2.style.display = "none";
  page3.style.display = "none";
};

button2.onclick = function () {
  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");
  let page3 = document.getElementById("page3");
  page1.style.display = "none";
  page2.style.display = "block";
  page3.style.display = "none";
  button3.disabled = false;
};

button3.onclick = function () {
  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");
  let page3 = document.getElementById("page3");
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "block";
};

calculateButton.onclick = function () {
  calculate();
  button2.disabled = false;
  let TotalXPTposes = 0;
  let TotalDRTposes = 0;
  for(let i = 0; i < playerCalculation.Table.length; i++){
    TotalXPTposes += playerCalculation.Table[i][5];
    TotalDRTposes += playerCalculation.Table[i][6];
  }
  let Page1Summary = `
  </br>Days Left to Onyx: ${playerCalculation.Table.length - 1}
  </br>Total AC Spent: ${CurACPool + (playerCalculation.Table.length - 1) * CurDailyAC - playerCalculation.ACPool}
  </br>Total Tranpose Count (XP / DR): ${TotalXPTposes + TotalDRTposes} (${TotalXPTposes} / ${TotalDRTposes})
  </br>XP Pool by the end: ${playerCalculation.XPPool.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
  </br>ACs left by the end (AC Fund + Gained AC - Spent): ${playerCalculation.ACPool} (${CurACPool}+${(playerCalculation.Table.length - 1) * CurDailyAC}-${CurACPool + (playerCalculation.Table.length - 1) * CurDailyAC - playerCalculation.ACPool})
  `
  document.getElementById("page1summary").innerHTML = Page1Summary;

  
  let Page2SummaryDays;
  if(optimizedCalculation.Table.length < playerCalculation.Table.length){
  Page2SummaryDays = `
  </br></br>Optimization will allow you to get Onyx ${playerCalculation.Table.length - optimizedCalculation.Table.length} days earlier!
  `
  } else {
    Page2SummaryDays = `
  </br></br>Your settings already optimized to get Onyx as soon as possible.
  `
  }

  let Page2SummaryAC;
  if(optimizedCalculation.ACPool > playerCalculation.ACPool){
  Page2SummaryAC = `
  </br>Optimization will save ${optimizedCalculation.ACPool - playerCalculation.ACPool} ACs for you!
  </br>If you optimize you will have ${optimizedCalculation.ACPool} ACs left.
  `
  } else if(optimizedCalculation.ACPool < playerCalculation.ACPool){
    Page2SummaryAC = `
  </br>Optimization will cost ${playerCalculation.ACPool - optimizedCalculation.ACPool} extra ACs for you!
  </br>If you optimize you will have ${optimizedCalculation.ACPool} ACs left. Maybe it's worth it?
  `
  } else {
    Page2SummaryAC = "";
  }
  let Page2SummaryEnd = `
  </br>Check out "Optimization" to see which settings you need to change for optimization!

  </br></br>The table below shows the details of each day.
  `
  

  document.getElementById("page2summary").innerHTML = Page1Summary + Page2SummaryDays + Page2SummaryAC + Page2SummaryEnd;
  
  let Page3SummaryDailyTpose;
  if(optimizedCalculation.DailyTpose == playerCalculation.DailyTpose){
    Page3SummaryDailyTpose = `
  </br></br>Optimization Suggestions:
  </br>Your Daily Transpose Count is already optimized.
  `
  } else {
    Page3SummaryDailyTpose = `
    </br></br>Optimization Suggestions:
    </br>Change Daily Tranpose Count to: ${optimizedCalculation.DailyTpose}
  `
  }

  let Page3Bombard = "";
  if(CurBombard == false){
    let finaldaytposes = optimizedCalculation.Table[optimizedCalculation.Table.length-1][5]+optimizedCalculation.Table[optimizedCalculation.Table.length-1][6];
    if(finaldaytposes > optimizedCalculation.DailyTpose){
      Page3Bombard = `
    </br>Turn Bombard on, it will help you!
    `
    }
  }
  
  if(CurBombard == true){
    let finaldaytposes = playerCalculation.Table[playerCalculation.Table.length-1][5]+playerCalculation.Table[playerCalculation.Table.length-1][6];
    if(finaldaytposes > playerCalculation.DailyTpose){
      Page3Bombard = `
    </br>Keep Bombard on, it helps you!
    `
    }
  }



  let Page3SummaryEnd = `
  </br></br>The table below shows the details of each day.
  `
  
  document.getElementById("page3summary").innerHTML = Page2SummaryDays + Page2SummaryAC + Page3SummaryDailyTpose + Page3Bombard + Page3SummaryEnd;

};

playerTableButton.onclick = function () {
  let table = document.getElementById("playerTableContainer");
  if (table.style.display === "none") {
    table.style.display = "block";
  } else {
    table.style.display = "none";
  }
};

optimizationTableButton.onclick = function () {
  let table = document.getElementById("optimizationTableContainer");
  if (table.style.display === "none") {
    table.style.display = "block";
  } else {
    table.style.display = "none";
  }
};

function setup() {
  noCanvas();
}

function calculate() {
  calculatePlayer();
  calculateOptimized();
}

function calculatePlayer() {
  playerCalculation = new Calculator(
    CurXPPool,
    CurDRPool,
    CurACPool,
    CurGearXP,
    CurOnyxCount,
    CurDailyXP,
    CurDailyDR,
    CurDailyAC,
    CurDailyTpose,
    CurCTFarming,
    CurCTTpose,
    CurBombard
  );
  playerCalculation.calculate();
  let table = document.getElementById("playerTable");
  buildTable(playerCalculation.Table, table);
}

function calculateOptimized() {
  let OptDailyTpose = 0;
  let minDay = 100000;
  let ACLeft = 0;
  for (let i = 0; i < 50; i++) {
    optimizedCalculation = new Calculator(
      CurXPPool,
      CurDRPool,
      CurACPool,
      CurGearXP,
      CurOnyxCount,
      CurDailyXP,
      CurDailyDR,
      CurDailyAC,
      i,
      CurCTFarming,
      CurCTTpose,
      true
    );
    optimizedCalculation.calculate();
    if (optimizedCalculation.Table.length < minDay) {
      minDay = optimizedCalculation.Table.length;
      OptDailyTpose = i;
    }
    if (optimizedCalculation.Table.length == minDay && optimizedCalculation.ACPool > ACLeft){
      minDay = optimizedCalculation.Table.length;
      OptDailyTpose = i;
      ACLeft = optimizedCalculation.ACPool;
    }
  }
  optimizedCalculation = new Calculator(
    CurXPPool,
    CurDRPool,
    CurACPool,
    CurGearXP,
    CurOnyxCount,
    CurDailyXP,
    CurDailyDR,
    CurDailyAC,
    OptDailyTpose,
    CurCTFarming,
    CurCTTpose,
    true
  );
  optimizedCalculation.calculate();
  let table = document.getElementById("optimizationTable");
  buildTable(optimizedCalculation.Table, table);
}

function buildTable(data, table) {
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
            <td>${data[i][0]}</td>
            <td>${data[i][1]}</td>
            <td>${data[i][2]}</td>
            <td>${data[i][3]}</td>
            <td>${data[i][4]}</td>
            <td>${data[i][5]}</td>
            <td>${data[i][6]}</td>
          </tr>`;
    table.innerHTML += row;
  }
}
