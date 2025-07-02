class Spell {
    constructor(spellType, spellName, spellDesc) {
        this.spellType = spellType;
        this.spellName = spellName;
        this.spellDesc = spellDesc;
    }

    readSpellDesc() {
        console.log(`${this.spellDesc}`)
    }
};