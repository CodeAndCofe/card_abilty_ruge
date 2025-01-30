
function comment_manager(e, p)
{
	let div = document.createElement("div");
	div.classList.add("new" + p);
	div.innerHTML = e;
	comm_p.appendChild(div);
	comm_p.scrollTop = comm_p.scrollHeight;
}
function replace(c)
{
	if (on == 0)
	{
		let img = document.createElement("img");
		img.id = "x1p";
		player_place.appendChild(img);
		on = 1;
	}
	document.querySelector("#x1p").src = image_generate_card_player(c);
	setTimeout(()=>
	{
		player_place.classList.add("pplace");
	}, 100);

}

function boot_replace(c)
{
	if (on_b == 0)
	{
		let img = document.createElement("img");
		img.id = "x2p";
		img.src = "";
		boot_place.appendChild(img);
		on_b = 1;
	}
	document.querySelector("#x2p").src = image_generate_card_player(c);
	setTimeout(()=>
	{
		boot_place.classList.add("bplace");
	}, 100);
}

function attack(c)
{
	if (c == "en")
	{
		hated(10, "p");
		comment_manager("boot chosen  attack", "p");
		player_health -= 10;
		health_player(player_health);
	}
	else
	{
		hated(10, "b");
		comment_manager("player chosen  attack", "p");	
		enemy_health -= 10;
		health_drawer(enemy_health);
	}
}

function health(c)
{
	let rd = Math.floor(Math.random() * heal_size.length);
	let i = heal_size[rd];
	if (c != "en")
	{
		if (player_health != 300)
		{
			comment_manager("player heal him self", "p");
			while (player_health + i > 200)
				i--;
			player_health += i;
			health_player(player_health);
		}
	}
	else
	{
		if (enemy_health != 200)
		{
			comment_manager("boot heal him self", "b");
			while (enemy_health + i > 300)
				i--;
			enemy_health += i;
			health_drawer(enemy_health);
		}
	}
}
function strong(c)
{
	let rd = Math.floor(Math.random() * strong_dm.length);
	let dm = strong_dm[rd];
	if (c == "en")
	{
		comment_manager("player chosen strong attack", "p");
		if (dm == 5)
		{
			player_health -= dm * 10;
			hated(dm * 10, "p");
			replace("bone");
			comment_manager("the boot dodge then you hated yourself", "p");
		}
		hated(dm, "b");
		enemy_health -= dm;
		health_drawer(enemy_health);
	}
	else
	{
		comment_manager("boot chosen strong attack", "b");
		if (dm == 5)
		{
			hated(dm * 10, "b");
			enemy_health -= dm * 10;
			boot_replace("bone");
			comment_manager("the player dodge then enmy hated himself", "b");
		}
		hated(dm, "p");
		player_health -= dm;
		health_player(player_health);
	}
}

function def(who)
{
	if (who == 'p')
	{
		comment_manager("player has protected! ", "p");
		is_on_damage_player = 0;
	}
	else
	{
		is_on_damage = 0;
		comment_manager("boot has protected! ", "b");
	}
}
function fire(c)
{
	let x = Math.floor(Math.random() * fire_damge.length);
	let dm = fire_damge[x];
	if (c == "en")
	{
		hated(dm, "b");
		comment_manager("player chosen fire", "p");
		enemy_health -=  dm;
		health_drawer(enemy_health);
		is_on_damage = 1;
	}else
	{
		hated(dm, "p");
		comment_manager("boot chosen fire", "b");
		player_health -= dm;
		health_player(player_health);
		is_on_damage_player = 1;
	}
	
}

function role(choice)
{
	player_place.classList.remove("pplace");
	if (choice == "attack")
	{
		attack(choice);
		replace(choice);
	}
	else if (choice == "health")
	{
		health(choice);
		replace(choice);
	}
	else if (choice == "fire")
	{
		fire("en");
		replace("fire");
	}
	else if (choice == "strong")
	{
		strong("en");
		replace(choice);
	}
	else if (choice == "def")
	{
		def("p");
		replace(choice);
	}

	if (is_on_damage_player == 1)
	{
		let x = Math.floor(Math.random() * fire_effect.length);
		player_health -= fire_effect[x];
		hated(fire_effect[x], "p");
		health_player(player_health);
		if (count_dm_player == 0)
		{
			is_on_damage_player = 0;
			count_dm_player += 8;
		}
		count_dm_player--;
		comment_manager(("player has fire effect " + fire_effect[x]), "p");
	}
	setTimeout(boot_turn, 700);
	setTimeout(()=>
	{
		let i = 0;
		while (i < 3)
		{
			arra[i] = 0;
			i++;
		}
		new_cards("p")
		new_cards("b");
	}, 900)
}