let spellBook = {
    //Tome of Smoke Style Magic
    smokeStyleTome: [
        {
            spellName: 'Choking smokebomb',
            description: `A throwable orb of 
            swirling smoke that obscures vision and 
            chokes enemies.`,
            toCast: `Tense the muscles in your 
            hands and channel energy into an orb of 
            spiraling smoke. Then throw.`,
            castTime: 1
        },
        {            
            spellName: 'Smouldering Leap',
            description: `A spiraling leap of 
            smoke and embers that launches the 
            caster into the air.`,
            toCast: `Tense the muscles in your legs 
            and channel energy into a leap of 
            spiraling smoke and embers.`,
            castTime: 0.5
        },
        {            
            spellName: 'Lung Char Enhancement',
            description: `Fills the caster\'s lungs 
            with smoke, enhancing their breathing 
            and movement as well as acting like 
            a gasmask.`,
            toCast: `Relax your chest and exhale 
            slowly, filling your lungs back up with 
            smoke. Then remain relaxed.Relax your 
            chest and exhale slowly, filling your 
            lungs back up with smoke. Then remain 
            relaxed.`,
            castTime: 2.5
        },
        {           
            spellName: 'Stifling Inhale',
            description: `The caster inhales deeply 
            to absorb smoke, poison, or energy from 
            a spell, absorbing its energy and 
            negating the hostile spells effects.`,
            toCast: `Open your eyes wide and inhale 
            deeply and sharply, channel your energy 
            in your lungs to to filter the incoming 
            gas or energy.`,
            castTime: 1.5
        },
        {
            spellName: 'Soot Dragon Conjuring',
            description: `Conjures a swirling dragon 
            of soot and smoke that can aid in battle 
            or serve as a vehicle for high speeds 
            and altitudes.`,
            toCast: `Tense your neck and shoulders, 
            look to the sky, and then in an open 
            claw hand spew the smoke out below you. 
            User must hold breath while dragon is 
            forming.`,
            castTime: 6.5
        }
    ],
    //Tome of Lightning Style Magic
    lightningStyleTome: [
        {
            spellName: 'Static Sprint',
            description: `Charges the casters feet
            with arcing bolts of electricity, 
            allowing them to sprint at high speeds 
            for a short duration.`,
            toCast: `Tense and flick the toes 
            channeling a flash of energy out of your 
            feet. Then sprint.`,
            castTime: 0.25
        },
        {
            spellName: 'Amped Slash',
            description: `Channels lightning through 
            the casters hand or weapon.that can be 
            used to cut through objects or enemies.`,
            toCast: `Tense the muscles in your arms 
            and flick your fingers to channel energy 
            into a quick slash.`,
            castTime: 0.45
        },
        {
            spellName: 'Arcing Mail',
            description: `Blankets the caster in a 
            spikey lightning cloak that shocks nearby 
            enemies and nullifies incoming projectiles.`,
            toCast: `Relax your shoulders and channel a 
            rush of energy from your head down over 
            your body.`,
            castTime: 2.5
        }
    ],
    //Tome of Earth Style Magic
    earthStyleTome: [
        {
            spellName: 'Earthen Dive',
            description: `The caster dive and swim 
            beneath the the ground to emerge from a 
            different location.`,
            toCast: `Tense your legs and back, then dive 
            into the ground with energy channeled at your 
            forehead.`,
            castTime: 0.5
        },
        {
            spellName: 'Stone Coating',
            description: `Coats what ever the caster is 
            touching in a thin layer of stone making it 
            harder, sharper, and heavier. Can be used on 
            armor or weapons.`,
            toCast: `Strain your wrists and elbows and 
            lightly palm strike the object you want to 
            coat.`,
            castTime: 3
        },
        {
            spellName:'Petrified Forest Expansion',
            description: `Splits the ground and creates a 
            forest of petrified trees that can be used for 
            cover, concealment, or to restrain or confine 
            enemies.`,
            toCast: `Strain your legs and back and slam your 
            hands into the ground, channeling energy into 
            the earth.`,
            castTime: 5.75
        }
    ],
    //Air Tome
    airStyleTome: [
        {
            spellName: 'Spiral Flight',
            description: `A form of gliding that allows the 
            caster to spiral like a missile through the air 
            in a quick dash.`,
            toCast: `Relax your body and lean your shoulders 
            diagonally, then channel energy around your body 
            like a spiraling wind.`,
            castTime: .75
        },
        {
            spellName: 'Gust Shot',
            description: `A blast of wind that can be used 
            to push away enemies or objects.`,
            toCast: `Relax your shoulders and hips, channel 
            energy out of your hands or feet like a gust 
            of wind.`,
            castTime: 0.15
        },
        {
            spellName: 'Gentle Winds',
            description: `A gentle breeze that can be used to 
            carry the caster or others through the air. 
            Can be used to passively restrain enemies.`,
            toCast: `Relax your hands and neck, then 
            channel energy out of your hands like a nice 
            cool breeze.`,
            castTime: 1
        }
    ],
    //Dark Tome 
    //Caution: Dark Style spells are dangerous and can cause harm to the caster.'
    darkStyleTome: [
        {
            spellName: 'Dark Sight',
            description: `Allows the caster to see through 
            walls, see energy like a heat signature, and 
            snap out of illusions.`,
            toCast: `Take a deep breath and widen your eyes. 
            Channel dark energy into your eyes and mind.`,
            castTime: 2.25,
            castCost: `Fatigues the casters mind. Can lead 
            to headaches and temporary ear ringing if used 
            for too long.`
        },
        {
            spellName: 'Spirit Fist',
            description: `A martial arts form that channels 
            dark energy into the casters arms and legs, 
            allowing them to strike at the targets very 
            soul. Tearing it with each strike.`,
            toCast: `Tense and widen your eyes and channel 
            dark energy into your arms, hands, legs, and feet.`,
            castTime: 2.65,
            castCost: `Fatigues the casters body and soul the 
            longer the form is held. Can cause loss of 
            consciousness or muscle atrophy if used for too 
            long.`
        },
        {
            spellName: 'Hunting Grounds Illusion',
            description: `Entrances those that stare into 
            the casters eyes, causing them to be transported 
            to a dark colorless forest where they are hunted by a 
            manifestation of their greatest fears.`,
            toCast: `Tense and widen your eyes and channel dark 
            energy in and around your eye sockets. Then stare into 
            the target\'s eyes.`,
            castTime: 5.5,
            castCost: `Fatigues the casters mind and soul the 
            longer the illusion is held. Can cause loss of 
            consciousness or temporary blindness if used for 
            too long.`
        },
        {
            spellName: 'Dog Burn',
            description: `Channels the very source of dark 
            energy within the caster and transforms them into 
            their darkest form. A hulking beast of bone, 
            smoke, and embers.`,
            toCast: `Strain your body and mind and fall to 
            your knees. Channel dark energy into a feral 
            scream and then transform.`,
            castTime: 10,
            castCost: `Extremely fatigues the casters mind, 
            body, and soul. Can cause loss of consciousness 
            or death if used for too long. Comas are typical 
            after use.`
        }
    ]
};

// Factory Function to create a new spell tome
//const createSpellTome = () => {}

// Function to display all spell tomes
const displayTomes = () => {
    console.log('Available Spell Tomes:');
    Object.keys(spellBook).forEach(tome => {
        console.log(`- ${tome}`);
    });
}

// Function to display all spells in a selected tome
const inspectTome = tomeName => {
    if (spellBook[tomeName]) {
        console.log(`Spells in ${tomeName}:`);
        spellBook[tomeName].forEach(spell => {
            console.log(`- ${spell.spellName}`);
        });
    } else {
        console.log(`Tome "${tomeName}" does not exist.`);
    }
}

const spellInfo = spellName => {
        let foundSpell = null;
        
        for(let tome in spellBook) {
        foundSpell = spellBook[tome].find(spell => spell.spellName === spellName);
        if (foundSpell) break;
    }

        if (foundSpell) {
        console.log(`Spell: ${foundSpell.spellName}`);
        console.log(`Description: ${foundSpell.description}`);
        console.log(`To Cast: ${foundSpell.toCast}`);
        console.log(`Cast Time: ${foundSpell.castTime}sec`);

        } else {
        console.log(`${spellName} is not a spell. please 
            select a different spell from a tome in the spellbook`);
        }
}

const castSpell = spellName => {
    let foundSpell = null;
        
        for(let tome in spellBook) {
        foundSpell = spellBook[tome].find(spell => spell.spellName === spellName);
        if (foundSpell) break;
    }

        if (foundSpell) {
        console.log(`You cast ${foundSpell.spellName}!`.toUpperCase());
        } else {
        console.log(`${spellName} is not a castable spell. 
            Please try casting something from the actual spellbook.`);
        }
}

let armory = {
    //Armor, Clothing, and Trinkets Category
    armorAndTrinkets: [
        {
            itemName: 'Grounding Band',
            description: `Tarnished iron band worn around 
            the forearm that absorbs dark energy from 
            users spells, acts like a geiger counter 
            for dark magic`
        }
    ],
    //Weapon Category
    armoryWeapons: [
        {
            weaponName: 'Elksedge',
            description: 'to be added'
        }
    ],
    //Tools and Misc Category 
    armoryTools: [
        {
            toolName: `Witch\'s Prothsetic`,
            description: `to be added`,
        }
    ]
}