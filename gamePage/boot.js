function boot() {
	let x = Math.floor(Math.random() * 2);
    let counts = { attack: 0, strong: 0, fire: 0, health: 0 };

    for (let card of enemy_cards) {
        counts[card]++;
    }

    const { attack: att, strong: str, fire: fr, health: hl } = counts;

    if (enemy_health >= 170) {
        return fr ? "fire" : str ? "strong" : "health";
    }

    if (enemy_health > 100) {
        if (att && str && fr) return "strong";
        if (att && hl) return "health";
        if (str) return "strong";
        if (fr) return "health";
    } else if (enemy_health <= 30) {
        return hl ? "health" : "def";
    }
	if (x == 1)
    	return "def";
	return "health";
}
