export interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  img: string;
  icon: string;
  base_health: number;
  base_mana: number;
  base_attack_min: number;
  base_attack_max: number;
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  attack_range: number;
  projectile_speed: number;
  attack_rate: number;
  move_speed: number;
  turn_rate: number;
  cm_enabled: boolean;
  legs: number;
}

export interface InfoHero {
  account_id: number;
  assists: number;
  deaths: number;
  duration: number;
  kills: number;
  league_name: string;
  leagueid: number;
  match_id: number;
  player_slot: number;
  radiant: boolean;
  radiant_win: boolean;
  start_time: number;
}
