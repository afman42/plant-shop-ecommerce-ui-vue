export interface dataCategories {
	id: number
	nameCategory: string
}

const Categories: dataCategories[] = [
	{
		id: 1,
		nameCategory: 'POPULAR',
	},
	{
		id: 2,
		nameCategory: 'ORGANIC',
	},
	{
		id: 3,
		nameCategory: 'INDOORS',
	},
	{
		id: 4,
		nameCategory: 'SYNTHETIC',
	},
];

export default Categories;