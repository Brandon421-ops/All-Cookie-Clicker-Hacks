/* Buys upgrades when you have enough cookies. */

//inspect element
var upgradeNum = 0; function buyUpgrades() { var upgradeLength = Game.UpgradesById.length; while (upgradeNum < upgradeLength) { Game.UpgradesById[upgradeNum].click(event); upgradeNum ++; Game.ClosePrompt(); } } setInterval(buyUpgrades, 100);

//bookmarklet
javascript:var upgradeNum = 0; function buyUpgrades() { var upgradeLength = Game.UpgradesById.length; while (upgradeNum < upgradeLength) { Game.UpgradesById[upgradeNum].click(event); upgradeNum ++; Game.ClosePrompt(); } } setInterval(buyUpgrades, 100);
