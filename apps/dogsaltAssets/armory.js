// Parent Item Object Class
class Item {
    constructor(itemType, itemName) {
        this.itemType = itemType;
        this.itemName = itemName;
        this.itemDesc = itemDesc;
    }

    readItemDesc() {
        console.log(`${this.itemDesc}`)
    }
};

// Weapons and Tools Classes
class Weapon extends Item {
    constructor(itemType, itemName, itemDesc, weaponAbility, damageType) {
        super(itemType, itemName, itemDesc);
        this.weaponAbility = weaponAbility;
        this.damageType = damageType;
    }

    readItemDesc() {
        console.log(`${this.weaponAbility}\n${this.weaponAbility}\n`)
        super.readItemDesc();
    }
};

class Tool extends Item {
    constructor(itemType, itemName, itemDesc, toolAbility) {
        super(itemType, itemName, itemDesc);
        this.toolAbility = toolAbility;
    }

    readItemDesc() {
        console.log(`${this.toolAbility}\n`)
        super.readItemDesc();
    }
}

// Clothing, Armor, and Jewelry Classes
class Clothing extends Item {
    constructor(itemType, itemName, itemDesc, clothingAbility) {
        super(itemType, itemName, itemDesc);
        this.clothingAbility = clothingAbility;
    }

    readItemDesc() {
        console.log(`${this.clothingAbility}\n`)
        super.readItemDesc();
    }
}

class Armor extends Item {
    constructor(itemType, itemName, itemDesc, armorAbility, resistanceType) {
        super(itemType, itemName, itemDesc);
        this.armorAbility = armorAbility;
        this.resistanceType = resistanceType;
    }

    readItemDesc() {
        console.log(`${this.armorAbility}\n${this.resistanceType}\n`)
        super.readItemDesc();
    }
}

class Jewelry extends item {
    
}