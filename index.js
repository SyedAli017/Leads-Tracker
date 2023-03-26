const inputText = document.getElementById("input-text");
const inputBtn = document.getElementById("input-btn");
const ulSection = document.getElementById("ul-section");

let myLeads = [];

const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const localStorageLeads = JSON.parse(localStorage.getItem("myLeads"));

if (localStorageLeads) {
  myLeads = localStorageLeads;
  show(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    show(myLeads);
  });
});

function show(leads) {
  let leadsList = "";
  for (i in myLeads) {
    leadsList += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulSection.innerHTML = leadsList;
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputText.value);
  inputText.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  show(myLeads);
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  show(myLeads);
});
