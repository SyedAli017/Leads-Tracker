const inputText = document.getElementById("input-text");
const inputBtn = document.getElementById("input-btn");
const ulSection = document.getElementById("ul-section");

let leads = [];

inputBtn.addEventListener("click", function () {
  leads.push(inputText.value);
  inputText.value = "";
  showLeads();
});

function showLeads() {
  let leadsList = "";
  for (i in leads) {
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
