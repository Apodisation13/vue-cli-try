import { if_in_grave_increase_self_damage } from "@/logic/player_move/passive_abilities/if_in_grave_increase_self_damage"

export function grave_passives(card) {
  // ДИСПЕТЧЕР ПАССИВНЫХ АБИЛОК В КЛАДБИЩЕ
  const cpa = card.passive_ability.name
  if (cpa === "if-in-grave-increase-self-damage") {
    if_in_grave_increase_self_damage(card)
  }
}
