const obtenerFrase=async()=>{
    const API=await fetch(https://breakingbadquotes.xyz/);
    const json=await API.json();
    let frase=document.querySelector("#frase");
    frase.innerHTML=`
    <h1>${json[0].quote}</h1>
    <h1>${json[0].quote}</h1>


