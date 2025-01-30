const screen = document.querySelector(".screen");
const player_area = document.querySelector(".cards_human");
const card_select = document.querySelectorAll(".cards_human");



// human
const player = document.querySelector(".hcure");
const player_place = document.querySelector(".p_move");
let player_health = 300;
let player_cards;
let prev;
let count = 0;

// boots
const  boot_place = document.querySelector(".b_move");
const 	boot_health = document.querySelector(".health_boot");
const	card_boot = document.querySelector(".cards_boot");
let comm_p = document.querySelector(".comment");
let enemy_health = 300;
let enemy_cards;

// moves tools etim
const allow_moves =["attack", "health", "fire", "strong", "def"];
const imges = {
	attack_p : "assets/attack.png",
	health_p : "assets/health.png",
	fire_p : "assets/fire.png",
	strong_p : "assets/strong.png",
	deff: "assets/def.png",
	bone : "assets/os.png",
};

// damages and efects 
const 	fire_damge = [20, 17 , 15 , 13, 7];
const	fire_effect = [13, 10 , 14 , 7];
const	strong_dm = [30, 20, 27, 5];
const	heal_size = [30 , 25, 37, 40];

let count_dm = 7;
let count_dm_player = 7;
// bool
let is_on_damage = 0;
let is_on_damage_player = 0;

//
let arr = [];
let on= 0;
let on_b = 0;


const hated_p = document.querySelector(".hated");
const hated_b = document.querySelector(".hated_b");
