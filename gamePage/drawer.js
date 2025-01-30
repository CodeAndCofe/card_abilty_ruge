function image_generate_card_player(e)
{
	if (e === "attack")
		return (imges.attack_p);
	else if (e === "health")
		return (imges.health_p);
	else if (e === "strong")
		return (imges.strong_p);
	else if (e === "fire")
		return (imges.fire_p);
	else if(e == "bone")
		return (imges.bone);
	else
		return (imges.deff);
}
function winer(enemy_health)
{
	let table = document.querySelector("body");
	if (enemy_health <= 0)
	{
		let back = document.createElement("div");
		back.classList.add("backd");
		let div = document.createElement("div");
		let p = document.createElement("p");
		let retry  = document.createElement("button");
		retry.innerHTML = "Go To Home";
		retry.id = "bt";
		retry.classList.add("a2");
		div.classList.add("Win");
		p.innerHTML = "YOUUUU WIN IN THIS ULTIMATE GAME!!"
		div.appendChild(p);
		div.append(retry);
		
		back.appendChild(div)
		table.appendChild(back);
		document.querySelector(".a2").addEventListener("click", ()=>
		{
			location.replace("../index.html")
		});
	}
}
function lose(player_health)
{
	let table = document.querySelector("body");
	if (player_health <= 0)
	{
		let back = document.createElement("div");
		back.classList.add("backd");
		let div = document.createElement("div");
		let p = document.createElement("p");
		let retry  = document.createElement("button");
		retry.innerHTML = "Go To Home";
		retry.id = "bt";
		retry.classList.add("a2");
		div.classList.add("Lose");
		p.innerHTML = "You loose!!"
		div.appendChild(p);
		div.append(retry);
		back.appendChild(div)
		table.appendChild(back);
		document.querySelector(".a2").addEventListener("click", ()=>
		{
				location.replace("../index.html")
		});
	}
}
function draw_card_player()
{
	let i = 0;
	while (i < 3)
	{
		let img = document.createElement("img");
		let div = document.createElement("div");
		div.classList.add("card_visible");
		img.src = " ";
		img.id = "i" + i;
		div.appendChild(img);
		div.id = "p" + i;
		player_area.appendChild(div);
		i++;
	}
}

function draw_boot_card()
{
	let	i = 0;
	enemy_cards = player_card_handler(allow_moves);
	while (i < 3)
	{
		let div = document.createElement("div");
		div.classList.add("card_unvisble");
		div.style.width = 150 + 'px';
		div.style.height = 200 + 'px';
		card_boot.appendChild(div);
		i++;
	}
	console.log(...enemy_cards);
}
function health_drawer(enemy_health)
{
	if (document.querySelector(".sp"))
	{
		document.querySelector(".sp").style.width = enemy_health  + "px";
		winer(enemy_health);
	}
	else
	{
		let div = document.createElement("div");
		div.style.backgroundColor = "green";
		div.style.width = enemy_health + 'px';
		div.style.height = 30 +'px';
		div.classList.add("sp");
		boot_health.appendChild(div);
	}
}

function health_player(player_health)
{
	if (document.querySelector(".player_health"))
	{
		document.querySelector(".player_health").style.width = player_health  + "px";
		lose(player_health);
	}
	else
	{
		let div = document.createElement("div");
		div.style.backgroundColor = "green";
		div.style.width = player_health + 'px';
		div.style.height = 30 +'px';
		div.classList.add("player_health");
		player.appendChild(div);
	}
}