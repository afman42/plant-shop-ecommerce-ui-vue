import { 
 	Klipartz26,
 	Klipartz27,
 	Klipartz30,
 	Klipartz31,
} from './images'

export interface dataPlant {
	id: number,
	namePlant: string
	price: string
	addButton: boolean
	loveButton: boolean
	image: string
}

const plants: dataPlant[] = [
	{
		id: 1,
		namePlant: 'Succulent Plant',
		price: '39.99',
		addButton: true,
		loveButton: true,
		image: Klipartz26
	},
	{
		id: 2,
		namePlant: 'Dragon Plant',
		price: '29.99',
		addButton: false,
		loveButton: false,
		image: Klipartz27
	},
	{
		id: 3,
		namePlant: 'Ravenea Plant',
		price: '25.99',
		addButton: false,
		loveButton: false,
		image: Klipartz30
	},
	{
		id: 4,
		namePlant: 'Potted Plant',
		price: '19.99',
		addButton: false,
		loveButton: true,
		image: Klipartz31
	},
];


export default plants;