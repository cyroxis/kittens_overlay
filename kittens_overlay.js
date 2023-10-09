function ko_init() {
    $("#kittens_overlay").remove();
    $("#leftColumnViewport").append(`<div id="kittens_overlay">Kittens Overlay</div>`)
}

function ko_buttion(name, action) {
    var id = "btn_" + name.replace(/\W+/g, "-");
    $("#kittens_overlay").append(`<div id="${id}" class="btnContent pin-link">${name}</div>`)
    
    $(`#${id}`).on("click", function () {
       action();
    });
}

function ko_craft_partial(resource, multipliyer) {
    var num_crafts = game.workshop.getCraftAllCount(resource) * multipliyer;
    if (num_crafts) {
        game.craft(resource, num_crafts);
    } else {
        console.log("Unkown resource: " + resource);
    }
}

function ko_trade(race_name, ammount) {
    var race = game.diplomacy.races.find(r => r.name === race_name)
    if (race) { 
        game.diplomacy.tradeMultiple(race, ammount);
    } else {
        console.log("Unkown race: " + race);
    }
}

ko_init();
ko_buttion("Crafty Crafty Craft", function () {
    game.religion.praise();
    
    game.craftAll("steel");
    ko_trade("zebras", 100);
    ko_trade("spiders", 200);
    game.craftAll("steel");
    
    game.craftAll("plate");
    game.craftAll("slab");
    
    game.village.huntAll(); 
    
    ko_craft_partial("blueprint", 0.5);
    game.craftAll("compedium"); // Typeo is correct :(
    game.craftAll("parchment")
    game.craftAll("manuscript")
    
    game.craftAll("thorium")
    game.craftAll("kerosene")
    game.craftAll("eludium")
});

ko_buttion("Steel!", function () {
    game.religion.praise();
    
    game.craftAll("steel");
    ko_trade("zebras", 100);
    ko_trade("spiders", 200);
    game.craftAll("steel");
});