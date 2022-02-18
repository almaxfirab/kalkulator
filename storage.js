const CACHE_KEY = "calculation_history"; //key utk akse local storage

//mengembalikan nilai boolean dari pengecekan fitur
function checkForStorage() {
    return typeof(Storage) !== "undefined"
   }

//menyimpan data kalkulasi di local storage
function putHistory(data) {
    if (checkForStorage()) {
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }  //json.parse utk mengubah nilai objek ke bentuk string
  
        historyData.unshift(data); //menambah nilai baru pada array
  
        if (historyData.length > 5) {
            historyData.pop(); //menghapus nilai akhir pada array
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
 }
  
 function showHistory() {
    if (checkForStorage) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
 }
  
 function renderHistory() {
    const historyData = showHistory();
    let historyList = document.querySelector("#historyList");
    historyList.innerHTML = "";
  
    for (let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firstNumber + "</td>";
        row.innerHTML += "<td>" + history.operator + "</td>";
        row.innerHTML += "<td>" + history.secondNumber + "</td>";
        row.innerHTML += "<td>" + history.result + "</td>";
  
        historyList.appendChild(row);
    }
 }
  
 renderHistory();