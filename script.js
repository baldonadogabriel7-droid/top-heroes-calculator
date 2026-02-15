const currentSelect = document.getElementById("currentLevel");
const targetSelect = document.getElementById("targetLevel");

for (let i = 1; i <= maxLevel; i++) {
    currentSelect.innerHTML += `<option value="${i}">${i}</option>`;
    targetSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

function calculate() {
    let current = parseInt(currentSelect.value);
    let target = parseInt(targetSelect.value);

    if (target <= current) {
        document.getElementById("result").innerText =
            "Target level must be higher than current level.";
        return;
    }

    let total = { wood: 0, stone: 0, gold: 0 };

    for (let level = current; level < target; level++) {
        total.wood += buildingData[level].wood;
        total.stone += buildingData[level].stone;
        total.gold += buildingData[level].gold;
    }

    document.getElementById("result").innerHTML = `
        <h3>Total Resources Needed</h3>
        Wood: ${total.wood}
        <br>Stone: ${total.stone}
        <br>Gold: ${total.gold}
    `;
}
