import Hero from "../simple-class"
export default class MiniHero extends Hero {
	getRank(){
		return 3
	}
	getRankHero(){
		return super.getRank()
	}
}