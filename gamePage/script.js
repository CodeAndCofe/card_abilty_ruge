
draw_card_player();

health_drawer(enemy_health);
health_player(player_health);
draw_boot_card();
new_cards("p");

const p0 = document.getElementById("p0");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
let arra = [0, 0, 0];
let i = 0;


p0.addEventListener("click", ()=>
{
	if (arra[0] == 0)
	{
		arra[0] = 1;
		role(player_cards[0], 0);
	}

});
p1.addEventListener("click", ()=>
{
	if (arra[1] == 0)
	{
		arra[1] = 1;
		role(player_cards[1], 1);
	}
});
p2.addEventListener("click", ()=>
{
	if (arra[2] == 0)
	{
		arra[2] = 1;
		role(player_cards[2]);
	}
});
