const addValuesToTable = (object) => {
  //adiciona o objeto na tabela
  
  const initialTable = document.querySelector(".initial-table");
  object.forEach((i) => {
    let tr = document.createElement("tr"); //crio o elemento TR

    const cell1 = tr.insertCell(0); //adiciono 4 células dentro do elemento tr
    const cell2 = tr.insertCell(1);
    const cell3 = tr.insertCell(2);
    const cell4 = tr.insertCell(3);

    cell1.innerHTML = i.taste; // adiciono nas células os valores de dentro do objeto
    cell2.innerHTML = `${i.sixParts}`;
    cell3.innerHTML = `${i.eightParts}`;
    cell4.innerHTML = `${i.validDays}`;

    initialTable.appendChild(tr);
  });
};

// adiciono os objetos
(function () {
  const fixedValues = [
    //são os valores fixos
    {
      taste: "Jogos",
      sixParts: "Categoria",
      eightParts: "Plataforma",
      validDays: "Tempo de jogo",
    },
  ];

  let initialValues = [
    //valores que já estarão como exemplo
    {
      taste: "Call of Duty",
      sixParts: "Guerra",
      eightParts: "Todas as plataformas",
      validDays: "50 horas",
    },
    {
      taste: "God of War",
      sixParts: "Guerra antiga",
      eightParts: "PlayStation",
      validDays: "60 horas",
    },
    {
      taste: "Halo",
      sixParts: "Guerra futurística",
      eightParts: "Xbox",
      validDays: "45 horas",
    },
  ];

  addValuesToTable(fixedValues);
  addValuesToTable(initialValues);
})();

//Função do botão Enviar
(function enviar() {
  const submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const taste = document.querySelector("#taste").value;
    const sixParts = document.querySelector("#six-parts").value;
    const eightParts = document.querySelector("#eight-parts").value;
    const validDays = document.querySelector("#valid-days").value;

    if (!taste || !sixParts || !eightParts || !validDays) {
      alert("Jogo não informado");
    }

    if (taste && sixParts && eightParts && validDays) {
      addValuesToTable([{ taste, sixParts, eightParts, validDays}]);
    }
  });
})();