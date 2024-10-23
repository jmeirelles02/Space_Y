
const colaboradores = [
    { nome: "Bernardo Casanovas", softSkills: "Gestão de Equipe", hardSkills: "Excel Avançado", cargo: "Cientista de Dados" },
    { nome: "Diego Bonani", softSkills: "Trabalho em equipe", hardSkills: "Análise de Dados", cargo: "Analista de Dados" },
    { nome: "Franc Wang", softSkills: "Gestão de Tempo", hardSkills: "Matemática Avançada", cargo: "Engenheiro de Software" },
    { nome: "Arthur Agostinho", softSkills: "Comunicação", hardSkills: "Matemática Avançada", cargo: "Gestor de Projetos" },
    { nome: "João Meirelles", softSkills: "Resolução de Problemas", hardSkills: "Programação", cargo: "Desenvolvedor" },
];

function filtrarColaboradores() {
    const searchBarValue = document.getElementById('searchBar').value.toLowerCase();
    const filterSoftValue = document.getElementById('filterSoft').value;
    const filterHardValue = document.getElementById('filterHard').value;

    const listaColaboradores = document.getElementById('colaborador-list');
    listaColaboradores.innerHTML = '';

    const colaboradoresFiltrados = colaboradores.filter(colaborador => {
        const matchNome = colaborador.nome.toLowerCase().includes(searchBarValue);
        const matchSoft = filterSoftValue === "" || colaborador.softSkills === filterSoftValue;
        const matchHard = filterHardValue === "" || colaborador.hardSkills === filterHardValue;
        return matchNome && matchSoft && matchHard;
    });

    if (colaboradoresFiltrados.length > 0) {
        colaboradoresFiltrados.forEach(colaborador => {
            const colaboradorDiv = document.createElement('div');
            colaboradorDiv.classList.add('colaborador');
            colaboradorDiv.innerHTML = `<strong>${colaborador.nome}</strong> - ${colaborador.cargo} <br> Soft Skills: ${colaborador.softSkills} | Hard Skills: ${colaborador.hardSkills}`;
            listaColaboradores.appendChild(colaboradorDiv);
        });
    } else {
        listaColaboradores.innerHTML = '<p>Nenhum colaborador encontrado.</p>';
    }
}
