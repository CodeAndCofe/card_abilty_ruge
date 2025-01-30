function hated(i ,who)
{
	if (who == 'p')
	{
		hated_p.innerHTML = i;
	}
	else
	{
		hated_b.innerHTML = i;
	}
}


function new_cards(who)
{
	let i = 0;
	if (who == "p")
	{
		
		player_cards = player_card_handler(allow_moves);
		while (i < player_cards.length)
		{
			document.querySelector("#i" + i).src = image_generate_card_player(player_cards[i]);
			i++;
		}
		//return (player_cards);
	}
	else
		enemy_cards = player_card_handler(allow_moves);
}


function boot_turn()
{
	boot_place.classList.remove("bplace");
	let choice = boot();
	if (choice == "attack")
	{
		attack("en");
		boot_replace("attack");
	}
	else if (choice == "health")
	{
		health("en");
		boot_replace("health");
	}
	else if (choice == "fire")
	{
		fire("");
		boot_replace("fire");
	}
	else if (choice == "strong")
	{
		strong("");
		boot_replace("strong");
	}
	else if (choice  == "def")
	{
		def("b");
		boot_replace();
	}
	if (is_on_damage == 1)
	{
		let x = Math.floor(Math.random() * fire_effect.length);
		enemy_health -= fire_effect[x];
		hated(fire_effect[x], "b");
		health_drawer(enemy_health);
		if (count_dm == 0)
		{
			is_on_damage = 0;
			count_dm += 8;
		}
		count_dm--;
		comment_manager(("boot has fire effect " + fire_effect[x]), "b");
	}
}

function player_card_handler(cards)
{
	let arr = [];
	let random;
	let i = 0;

	while (i < 3)
	{
		random = Math.floor(Math.random() * cards.length);
		arr.push(cards[random]);
		i++;
	}
	return (arr);
}

