export class Goal {
	show: boolean;
	constructor(public id: number, public name: string,public description: string,public cdate: Date){
		this.show = false;
	}
	
}
