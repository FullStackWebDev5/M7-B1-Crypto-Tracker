export const SAVE_COINS = 'SAVE_COINS'

export const saveCoins = (coins) => ({
	type: SAVE_COINS,
	payload: coins
})