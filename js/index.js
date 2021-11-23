let inputpage = 1;
fetch()
function fetch(){
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${inputpage}`)
    .then(response => response.json())
    .then(data => monsterList(data))
}
function monsterList(monsters){
    for(let i=0;i<monsters.length;i++){
        monsterCard(monsters[i]);
    }
}
function monsterCard(monster){
    let monstercards = document.getElementById('monster-container');
    let creature = document.createElement('div');
    creature.setAttribute('class','monster');
    monstercards.appendChild(creature)

    let name = document.createElement('h1')
    name.innerHTML = monster.name
    
    let age = document.createElement('p')
    age.innerHTML = monster.age

    let description = document.createElement('p')
    description.innerHTML = monster.description
    
    creature.appendChild(name);
    creature.appendChild(age);
    creature.appendChild(description);
}


const monsterContainer = document.querySelector('.container')
monsterContainer.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputname = e.target.children[1].value;
    const inputage = e.target.children[3].value;
    const inputdes = e.target.children[5].value;
    const obj = {
      name: `${inputname}`,
      age: `${inputage}`,
      description: `${inputdes}`
    }

    fetch("http://localhost:3000/monsters",{
        method: "POST",
        headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body:JSON.stringify({ name: obj.name, age: obj.age, description: obj.description }
        )}
    )
    .then(response => response.json())
    .then(data => monsterCard(data))
}
)

