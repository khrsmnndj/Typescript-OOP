export default class Hero {
	private name: string = "Zman"
	public popularity: number = 2
	protected rank: number = 10
	getName(): string {
		return this.name
	}
	getRank(): number {
		return this.rank
	}
}