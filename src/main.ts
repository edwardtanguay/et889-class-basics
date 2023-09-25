import { IHouse } from './interfaces';
import './style.css';

const houseObjs: IHouse[] = [
	{
		id: 67,
		address: 'Elm St. 2343',
		owner: 'Angie Thompson',
		color: 'blue',
		furnace: true
	},
	{
		id: 57,
		address: 'Oak St. 2343',
		owner: 'Jim Thompson',
		color: 'green',
		furnace: false
	},
	{
		id: 58,
		address: 'Nnnn St. 2343',
		owner: 'Edgar Griffton',
		color: 'purplse',
		furnace: true
	}
];

class House {

	private id: number = 0;
	private address: string = '';
	private owner: string = '';
	private color: string = '';
	private furnace: boolean = true;

	constructor(houseObj: IHouse) {
		this.id = houseObj.id;
		this.address = houseObj.address;
		this.owner = houseObj.owner;
		this.color = houseObj.color;
		this.furnace = houseObj.furnace;
	}

	public describe() {
		return `${this.getHouseNumber()} is located at ${this.address}, is owned by ${this.owner}, has the color ${this.color}, and it ${this.furnace ? 'has a furnace' : 'does not have a furnace'}`;
	}

	private getHouseNumber() {
		if (this.id > 10) {
			return `House number VIP${this.id}`;
		} else {
			return `House number ${this.id}`;
		}
	}

	public setColor(color: string) {
		if (color === 'red' || color === 'brown') {
			this.color = color;
		}
	}
}

// const house1 = new House(4, "Main Str. 34", "Robert Melling", "red", true);
// const house1 = new House(houses[0]);

const houses = houseObjs.map(m => new House(m)); 

// house1.setColor('brown');



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<div>
	<div>
		${houses.map(house => {
			return `<div>${house.describe()}</div>`;
		}).join('')}
	</div>
	</div>
`
