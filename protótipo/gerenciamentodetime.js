// Lista de times e membros
const teams = {
    "Time Gen AI": [
        { name: "Ana", role: "PO Interno"},
        { name: "Carlos", role: "Desenvolvedor" },
        { name: "Maria", role: "Scrum Master" },
        { name: "Lucas", role: "QA Tester" },
        { name: "João", role: "Desenvolvedor" },
        { name: "Tiago", role: "Desenvolvedor" },
        { name: "Vinicius", role: "PO Externo" },
    ],
    "Team FinTech": [
        { name: "Fábio", role: "PO Interno"},
        { name: "Jéssica", role: "Desenvolvedora    " },
        { name: "Marcos", role: "Scrum Master" },
        { name: "Bernardo", role: "QA Tester" },
        { name: "Arthur", role: "Desenvolvedor" },
        { name: "Gabriel", role: "Desenvolvedor" },
        { name: "Felipe", role: "PO Externo" },
    ],
    "Time SaaS":   [
        { name: "Filipe", role: "PO Interno"},
        { name: "Thiago", role: "Desenvolvedor" },
        { name: "Atena", role: "Scrum Master" },
        { name: "Apolo", role: "QA Tester" },
        { name: "Alice", role: "Desenvolvedora" },
        { name: "André", role: "Desenvolvedor" },
        { name: "Albano", role: "PO Externo" },
    ]
};

const teamSelect = document.getElementById('team-select');
const memberList = document.getElementById('member-list');
const newMemberName = document.getElementById('new-member-name');
const newMemberRole = document.getElementById('new-member-role');
const addMemberBtn = document.getElementById('add-member-btn');
const removeMemberName = document.getElementById('remove-member-name');
const removeMemberBtn = document.getElementById('remove-member-btn');

function loadTeams() {
    teamSelect.innerHTML = '';
    for (let team in teams) {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamSelect.appendChild(option);
    }
    loadMembers();
}

function loadMembers() {
    const selectedTeam = teamSelect.value;
    memberList.innerHTML = '';
    teams[selectedTeam].forEach(member => {
        const li = document.createElement('li');
        li.textContent = `${member.name} - ${member.role}`;
        memberList.appendChild(li);
    });
}

addMemberBtn.addEventListener('click', () => {
    const selectedTeam = teamSelect.value;
    const name = newMemberName.value;
    const role = newMemberRole.value;

    if (name && role) {
        teams[selectedTeam].push({ name, role });
        loadMembers();
        newMemberName.value = '';
        newMemberRole.value = '';
    }
});

removeMemberBtn.addEventListener('click', () => {
    const selectedTeam = teamSelect.value;
    const name = removeMemberName.value;

    teams[selectedTeam] = teams[selectedTeam].filter(member => member.name !== name);
    loadMembers();
    removeMemberName.value = '';
});

teamSelect.addEventListener('change', loadMembers);
window.onload = loadTeams;
