// AVERAGE ARITHMATIC

// const avg = (...numbers) => {
//   let avgResult = numbers.reduce((accm, num) => accm + num, 0) / numbers.length;
//   resultAvg.value = avgResult;
// };

const resultAvg = document.getElementById("avgresult");

document.getElementById("avgbtn").addEventListener("click", function () {
  const avgEntryStr = document.getElementById("avgentry").value; //numbers to calculat de average
  const avgEntryArr = avgEntryStr.split(",").map(Number); //numvers entry in array of integer
  let avgResult =
    avgEntryArr.reduce((accm, num) => accm + num, 0) / avgEntryArr.length;
  return (resultAvg.value = avgResult);
});

document.getElementById("clearavg").addEventListener("click", function () {
  resultAvg.value = "";
  const avgEntryStr = document.getElementById("avgentry");
  avgEntryStr.value = "";
});

document.getElementById("copyavg").addEventListener("click", function (ev) {
  const btn = ev.currentTarget;
  if (btn.innerText === "COPY") {
    btn.innerText = "COPIED!";
    btn.classList.add("success");
    navigator.clipboard.writeText(resultAvg.value);
  } else {
    btn.innerText = "COPY";
    btn.classList.remove("success");
  }
});

// WEIGHTED ARITHMETIC AVERAGE

const resultWAvg = document.getElementById("avgwresult");

document.getElementById("avgwbtn").addEventListener("click", function () {
  const avgWEntryStr = document.getElementById("avgwentry").value;
  const avgWEntryArr = avgWEntryStr.split(",").map(Number);

  let arr = []; //empty array for add the arrays with the number and the weight
  for (let i = 0; i < avgWEntryArr.length; i += 2) {
    arr.push(avgWEntryArr.slice(i, i + 2));
  } //arrays with the number and it's weight

  function convertArrayToParams(arrayOfArrays) {
    var paramsList = [];

    for (var i = 0; i < arrayOfArrays.length; i++) {
      var currentArray = arrayOfArrays[i];
      var params = {};

      for (var j = 0; j < currentArray.length; j++) {
        var paramName = "param" + j;
        params[paramName] = currentArray[j];
      }

      paramsList.push(params);
    }

    return paramsList;
  }

  const obj = convertArrayToParams(arr);
  console.log(arr);
  console.log(obj);

  const WeightedAvg = (...entries) => {
    const sum = entries.reduce(
      (accum, { param0, param1 }) => accum + param0 * (param1 ?? 1),
      0
    );
    const sumWeight = entries.reduce(
      (accum, entry) => accum + (entry.param1 ?? 1),
      0
    );
    return sum / sumWeight;
  };

  resultWAvg.value = WeightedAvg(...obj);
});

document.getElementById("clearwavg").addEventListener("click", function () {
  resultWAvg.value = "";
  const avgWEntryStr = document.getElementById("avgwentry");
  avgWEntryStr.value = "";
});

document.getElementById("copywavg").addEventListener("click", function (ev) {
  const btn = ev.currentTarget;
  if (btn.innerText === "COPY") {
    btn.innerText = "COPIED!";
    btn.classList.add("success");
    navigator.clipboard.writeText(resultWAvg.value);
  } else {
    btn.innerText = "COPY";
    btn.classList.remove("success");
  }
});

// MEDIAN

const resultMedian = document.getElementById("medianresult");

document.getElementById("medianbtn").addEventListener("click", function () {
  const medianEntryStr = document.getElementById("median").value;
  const medianEntryArr = medianEntryStr.split(",").map(Number);

  const ordenedMedianEntryArr = medianEntryArr.sort((a, b) => a - b);
  const midle = Math.floor(ordenedMedianEntryArr.length / 2);

  if (ordenedMedianEntryArr.length % 2 == 0) {
    let medianResult =
      ordenedMedianEntryArr[midle - 1] + ordenedMedianEntryArr[midle] / 2;
    return (resultMedian.value = medianResult);
  } else {
    let medianResult = ordenedMedianEntryArr[midle];
    return (resultMedian.value = medianResult);
  }
});

document.getElementById("clearmedian").addEventListener("click", function () {
  resultMedian.value = "";
  const medianEntryStr = document.getElementById("median");
  medianEntryStr.value = "";
});

document.getElementById("copymedian").addEventListener("click", function (ev) {
  const btn = ev.currentTarget;
  if (btn.innerText === "COPY") {
    btn.innerText = "COPIED!";
    btn.classList.add("success");
    navigator.clipboard.writeText(resultMedian.value);
  } else {
    btn.innerText = "COPY";
    btn.classList.remove("success");
  }
});

//MODA

const resultModa = document.getElementById("modaresult");

document.getElementById("modabtn").addEventListener("click", function () {
  const modaEntryStr = document.getElementById("moda").value;
  const modaEntryArr = modaEntryStr.split(",").map(Number);

  const quantities = modaEntryArr.map((num) => [
    num,
    modaEntryArr.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  const modaResult = quantities[0][0];
  return (resultModa.value = modaResult);
});

document.getElementById("clearmoda").addEventListener("click", function () {
  resultModa.value = "";
  const modaEntryStr = document.getElementById("moda");
  modaEntryStr.value = "";
});

document.getElementById("copymoda").addEventListener("click", function (ev) {
  const btn = ev.currentTarget;
  if (btn.innerText === "COPY") {
    btn.innerText = "COPIED!";
    btn.classList.add("success");
    navigator.clipboard.writeText(resultModa.value);
  } else {
    btn.innerText = "COPY";
    btn.classList.remove("success");
  }
});

//THEME SWITCH
const main = document.querySelector("main");
const root = document.querySelector(":root");

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--background-color", "#f4fff8");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#000");
    root.style.setProperty("--color-terciary", "#ededed");
    root.style.setProperty("--color-primary", "#000");
    root.style.setProperty("--btn-color", "#c8c8c8");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--background-color", "#292836");
    root.style.setProperty("--border-color", "#95BF74");
    root.style.setProperty("--font-color", "#292836");
    root.style.setProperty("--color-terciary", "#52a08d");
    root.style.setProperty("--color-primary", "#fff");
    root.style.setProperty("--btn-color", "#c1ceda");
    main.dataset.theme = "dark";
  }
});
