let usuarios = [
    { nome: "Ana", idade: 17 },
    { nome: "Bruno", idade: 22 },
    { nome: "Carla", idade: 19 },
    { nome: "Diego", idade: 15 },
    { nome: "Eva", idade: 30 }
  ];
  
  // Filtrar só os que têm 18 anos ou mais
  let maioresDeIdade = usuarios.filter(identidade => identidade.idade >= 18); // aqui eu basicamente disse: percorra todo o array de usuários e chame cada item de lá de identidade. Se identidade.idade for maior que 18, você mantém ele no array maioresDeIdade.

/*
  let maioresDeIdade = usuarios.filter(function(usuario) {
  return usuario.idade >= 18;
});
*/ 
  
  console.log(maioresDeIdade);


  let nomesMaiores = usuarios
  .filter(u => u.idade >= 18)
  .map(u => u.nome);

console.log(nomesMaiores);



