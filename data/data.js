const data = {
	nodes: [
		{
			id: 0,
			label: 'Community Resilience and Regeneration',
			title: 'node 1 tootip text',
			color: '#64b37c',
			size: 42,
			font: {
				size: 26,
			},
			// mass: 30,
		},
		{
			id: 1,
			label: 'Transition Cambridge',
		},
		{
			id: 2,
			label: 'Cambridge Carbon Footprint',
		},
		{
			id: 3,
			label: 'Smarter Cambridge Transport',
		},
		{
			id: 4,
			label: 'Repair Cafes (Jointly with CCF)',
		},
		{
			id: 5,
			label: 'Cafe nights with talks & activities',
			title: '',
		},
		{ id: 6, label: 'Energy Group', title: '' },
		{ id: 7, label: 'Empty Common Community Garden', title: '' },
		{ id: 8, label: 'Growing Spaces', title: '' },
		{ id: 9, label: 'Romsey Town Community Garden', title: '' },
		{ id: 10, label: 'Crop Share', title: '' },
		{ id: 11, label: 'Carbon Neutral Cambridge', title: '' },
		{ id: 12, label: 'Cambridge Commons', title: '' },
		{ id: 13, label: 'Cambridge City Council', title: '' },
		{ id: 14, label: 'Cambridge Doughnut', title: '' },
		{ id: 16, label: 'Cambridge 2030', title: '' },
		// { id: 17, label: 'Cambridge Independent', title: '' },
		{ id: 18, label: 'Allotment Societies', title: '' },
		{ id: 19, label: 'Camlets Local Trading', title: '' },
		{ id: 20, label: 'Adult Education', title: '', color: '#9d9d9e' },
		{ id: 21, label: 'Faith Groups', title: '', color: '#9d9d9e' },
		{
			id: 22,
			label: 'Other voluntary groups and charities',
			title: '',
			color: '#9d9d9e',
		},
		{ id: 24, label: 'School strikes', title: '' },
		{ id: 26, label: 'Movement Against Racism', title: '' },
		{ id: 27, label: 'Cambridge For Black Lives', title: '' },
		{ id: 28, label: "Women's Resources Centre", title: '' },
		{ id: 29, label: "Women's Institute Groups", title: '' },
		{ id: 31, label: 'CoFarm Cambridge', title: '' },
		{ id: 32, label: 'Cycle food deliveries', title: '' },
		{ id: 33, label: 'Cambridge Sustainable Food', title: '' },
		{ id: 34, label: 'Waterland Organics', title: '' },
		{
			id: 35,
			label: 'Nature + Environment (Learning + Advocacy)',
			title: '',
			color: '#9d9d9e',
		},
		{ id: 36, label: 'DIY Thermal Imaging', title: '' },
		{ id: 37, label: 'Net Zero Now', title: '' },
		{ id: 38, label: 'Open Eco Homes', title: '' },
		{ id: 39, label: 'Circular Economy Talks', title: '' },
		{ id: 40, label: 'The Work That Reconnects', title: '' },
		{ id: 41, label: 'Clean Wheels', title: '' },
		{ id: 42, label: 'Grow Your Own', title: '' },
		{ id: 43, label: 'Reach Solar Farm CBS', title: '' },
		{ id: 44, label: 'Info on Home Energy', title: '' },
		{ id: 45, label: 'Free Fruit Map', title: '' },
		{ id: 46, label: 'Permaculture Guild', title: '' },
		{ id: 47, label: 'Wildlife Wanders', title: '' },
		{
			id: 48,
			label: 'Camcycle - Cambridge Cycling Campaign',
			title: '',
		},
		{ id: 49, label: 'Wildlife Trust', title: '' },
		{ id: 50, label: 'Trumpington Meadows', title: '' },
		{ id: 51, label: "Friends of Logan's Meadow", title: '' },
		{ id: 52, label: 'Friends of Mill Road Cemetery', title: '' },
		{ id: 53, label: 'Friends of Stourbridge Common', title: '' },
		{ id: 54, label: 'Friends of Midsummer Common', title: '' },
		{ id: 55, label: 'Friends of Cherry Hinton Brook', title: '' },
		{ id: 56, label: 'Friends of Cherry Hinton Hall', title: '' },
		{ id: 57, label: 'Cam Conservators', title: '' },
		{ id: 58, label: 'Cambridge Green Party', title: '' },
		{ id: 59, label: 'Cambridge Labour Party', title: '' },
		{ id: 60, label: 'Cambridge Lib/Dems', title: '' },
		{ id: 61, label: 'Cambridge Housing Associations', title: '' },
		{
			id: 62,
			label: 'Federation of Cambridge Residents Associations',
			title: '',
		},
		{ id: 63, label: 'Community Scrapstore', title: '' },
		{ id: 64, label: 'Community Wardrobe', title: '' },
		{ id: 65, label: 'Community Apple Pressing', title: '' },
		{ id: 66, label: 'Zero Carbon Future Initiative', title: '' },
		{ id: 67, label: 'Makespace', title: '' },
		{ id: 68, label: 'David Attenborough Building', title: '' },
		{ id: 69, label: 'Cambridge Conservation Forum', title: '' },
		{ id: 70, label: 'Natural Cambridgeshire', title: '' },
		{ id: 71, label: 'Cam Valley Forum', title: '' },
		{ id: 72, label: 'Cambridge PPF', title: '' },
		{ id: 73, label: 'Cambridge Natural History Society', title: '' },
		{ id: 74, label: 'Wandlebury Country Park', title: '' },
		// Adult education
		{ id: 75, label: 'Hills Rd Adult Education', title: '' },
		{ id: 76, label: 'Cambridgeshire Skills', title: '' },
		{ id: 77, label: 'Cambridge Regional College', title: '' },
		{ id: 78, label: 'Adult Learn + Train', title: '' },
		{ id: 79, label: 'U3AC', title: '' },
		{ id: 80, label: 'Anglia Ruskin University', title: '' },
		// Faith groups
		{ id: 81, label: 'Buddhist groups', title: '' },
		{ id: 82, label: 'Friends meeting', title: '' },
		{ id: 83, label: 'Mosques', title: '' },
		{ id: 84, label: 'Other faiths', title: '' },
		{ id: 85, label: 'Churches', title: '' },
		// Other voluntary groups
		{ id: 86, label: 'Greenpeace', title: '' },
		{ id: 87, label: 'Friends of the Earth', title: '' },
		{ id: 88, label: 'CamCRAG', title: '' },
		// XR
		{ id: 23, label: 'Extinction Rebellion', title: '' },
		{ id: 89, label: 'XR Youth', title: '' },
		{ id: 90, label: 'XR Cambridge Unis', title: '' },
		{ id: 91, label: 'Animal Rebellion Cambridge', title: '' },
		{ id: 92, label: 'Silent Rebellion', title: '' },
		// Local social firms
		{ id: 25, label: 'Local social firms', title: '' },
		{ id: 94, label: 'Prospects Trust (Snakehall Farm)', title: '' },
		{ id: 95, label: 'Darwin Nurseries', title: '' },
		// Local food businesses
		{
			id: 30,
			label:
				"Local Food businesses with 'buy or grow local where possible' policy",
			title: '',
			color: '#9d9d9e',
		},
		{ id: 96, label: "Foster's Mill", title: '' },
		{ id: 97, label: 'Hawthorn Farm Market Stall', title: '' },
		{ id: 98, label: 'Girton Bakery', title: '' },
		{ id: 99, label: 'Bread on a Bike', title: '' },
		{ id: 100, label: "Simon's Vegetable Stall", title: '' },
		{ id: 101, label: 'Radmore Farm Shop', title: '' },
		{ id: 102, label: 'Arjuna Wholefoods', title: '' },
		{ id: 103, label: 'Daily Bread Wholefood Warehouse', title: '' },
		// Others
		{ id: 104, label: 'Healthy Start Veg Box Scheme', title: '' },
		{ id: 105, label: 'Daily Bread Veg Bed', title: '' },
		{ id: 106, label: 'Community Fridges', title: '' },
		{ id: 107, label: 'Cambridge Organic Food Company', title: '' },
		{ id: 109, label: 'Food Cycle', title: '' },
		{ id: 110, label: 'Cambridge Food Hub', title: '' },
	],
	edges: [
		{ from: 0, to: 1 },
		{ from: 0, to: 2 },
		{ from: 0, to: 11 },
		{ from: 0, to: 12 },
		{ from: 0, to: 13 },
		{ from: 0, to: 14 },
		{ from: 0, to: 15 },
		{ from: 0, to: 16 },
		{ from: 0, to: 18 },
		{ from: 0, to: 19 },
		{ from: 0, to: 20 },
		{ from: 0, to: 21 },
		{ from: 0, to: 22 },
		{ from: 0, to: 23 },
		{ from: 0, to: 24 },
		{ from: 0, to: 25 },
		{ from: 0, to: 26 },
		{ from: 0, to: 27 },
		{ from: 0, to: 28 },
		{ from: 0, to: 29 },
		{ from: 0, to: 30 },
		{ from: 0, to: 31 },
		{ from: 0, to: 32 },
		{ from: 0, to: 33 },
		{ from: 0, to: 34 },
		{ from: 1, to: 3 },
		{ from: 1, to: 4 },
		{ from: 1, to: 5 },
		{ from: 1, to: 6 },
		{ from: 1, to: 7 },
		{ from: 1, to: 8 },
		{ from: 1, to: 9 },
		{ from: 1, to: 10 },
		{ from: 1, to: 40 },
		{ from: 1, to: 45 },
		{ from: 1, to: 46 },
		{ from: 1, to: 47 },
		{ from: 2, to: 4 },
		{ from: 2, to: 36 },
		{ from: 2, to: 37 },
		{ from: 2, to: 38 },
		{ from: 2, to: 39 },
		{ from: 2, to: 42 },
		{ from: 6, to: 41 },
		{ from: 6, to: 43 },
		{ from: 6, to: 44 },
		{ from: 13, to: 35 },
		{ from: 3, to: 48 },
		{ from: 11, to: 3 },
		{ from: 13, to: 49 },
		{ from: 13, to: 51 },
		{ from: 13, to: 52 },
		{ from: 13, to: 53 },
		{ from: 13, to: 54 },
		{ from: 13, to: 55 },
		{ from: 13, to: 56 },
		{ from: 13, to: 57 },
		{ from: 13, to: 58 },
		{ from: 13, to: 59 },
		{ from: 13, to: 60 },
		{ from: 13, to: 61 },
		{ from: 13, to: 62 },
		{ from: 13, to: 63 },
		{ from: 49, to: 50 },
		{ from: 59, to: 64 },
		{ from: 4, to: 64 },
		{ from: 58, to: 65 },
		{ from: 58, to: 66 },
		{ from: 63, to: 67 },
		{ from: 35, to: 68 },
		{ from: 68, to: 69 },
		{ from: 35, to: 70 },
		{ from: 35, to: 71 },
		{ from: 35, to: 72 },
		{ from: 35, to: 73 },
		{ from: 72, to: 74 },
		{ from: 20, to: 75 },
		{ from: 20, to: 76 },
		{ from: 20, to: 77 },
		{ from: 20, to: 78 },
		{ from: 20, to: 79 },
		{ from: 20, to: 80 },
		{ from: 21, to: 81 },
		{ from: 21, to: 82 },
		{ from: 21, to: 83 },
		{ from: 21, to: 84 },
		{ from: 21, to: 85 },
		{ from: 22, to: 86 },
		{ from: 22, to: 87 },
		{ from: 22, to: 88 },
		{ from: 23, to: 89 },
		{ from: 23, to: 90 },
		{ from: 23, to: 91 },
		{ from: 23, to: 92 },
		{ from: 25, to: 94 },
		{ from: 25, to: 95 },
		{ from: 30, to: 94 },
		{ from: 30, to: 95 },
		{ from: 30, to: 96 },
		{ from: 30, to: 97 },
		{ from: 30, to: 98 },
		{ from: 30, to: 99 },
		{ from: 30, to: 100 },
		{ from: 30, to: 101 },
		{ from: 30, to: 102 },
		{ from: 30, to: 103 },
		{ from: 34, to: 103 },
		{ from: 33, to: 104 },
		{ from: 33, to: 106 },
		{ from: 9, to: 105 },
		{ from: 32, to: 109 },
		{ from: 107, to: 104 },
		{ from: 107, to: 110 },
	],
};

export default data;