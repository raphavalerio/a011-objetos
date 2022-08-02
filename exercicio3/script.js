const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// a
pokemon2 = {...pokemon1};
pokemon2.nome = "Squirtle";
pokemon2.tipo = "Água";

// b
pokemon1.ataques = [];
ataques = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
pokemon1.ataques.push(ataques);

//c
pokemon2.ataques = [{...ataques}];

//d
ataques = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
};
pokemon1.ataques.push(ataques);

// e
ataques = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
};
pokemon2.ataques.push(ataques);

//f

console.log(pokemon1,pokemon2)
