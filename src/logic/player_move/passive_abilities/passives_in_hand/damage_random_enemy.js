import { get_random_enemy } from "@/logic/player_move/service/service_for_player_move"
import { hit_one_enemy } from "@/logic/player_move/abilities/hit_one_enemy"
import { sound_damage_one } from "@/logic/play_sounds"

function damage_random_enemy(card, gameObj) {
  const { field, enemy_leader } = gameObj
  let target = get_random_enemy(field, enemy_leader) // взяли всех врагов, из них взяли одного

  if (!target) return // если щас нет врагов на поле и нет живого лидера врагов, выходим

  card.damages_enemy = true
  sound_damage_one()
  hit_one_enemy(target, { damage: card.value }, gameObj, 500)
  setTimeout(() => {
    card.damages_enemy = false
  }, 500)
}

export { damage_random_enemy }