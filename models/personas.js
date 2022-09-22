const persona = require("./personas-list");

class personaList{
    constructor() {
        this.personas = [
            new persona('Freezer'),
            
            new persona('Goku'),
            
            new persona('Vegeta'),
            
            new persona('Trunks'),
        ];
    }
    addPersona(name){
        const newPersona = new persona(name);
        this.personas.push(newPersona);
        return this.personas;
    }
    removePersona(id){
        this.personas = this.personas.filter(persona => persona.id !== id);
    }
    getPersonas(){
        return this.personas;
    }
    increaseVotes(id){
        this.personas = this.personas.map(persona => {
            if(persona.id === id){
                persona.votes += 1;
            }
            return persona;
        });
    }
    changeName(id, newName){
        this.personas = this.personas.map(p => {
            if(p.id === id){
                p.name = newName;
            }
            return p;
        })
    }
}
module.exports = personaList;