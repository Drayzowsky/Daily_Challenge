// Exercise XPGold


	// Exercise 1:

	let family= {
		family_name: "Smith",
		number_children: 3,
		country: "Israel",
	};
	for (let i in family)
	 	console.log(i);

	for (let i in family)
		console.log(family[i]);


	// Exercise 2:

	let building= {
		number_levels: 4,
		number_of_apt_by_level: {
			"1": 3,
			"2": 4,
			"3": 9,
			"4": 2,
		},
		name_of_tenants: ["Sarah", "Dan", "David"],
		number_of_rooms_and_rent: {
			"Sarah": [3, 2000],
			"Dan": [4, 1000],
			"David": [1, 10],
		},
	};

	console.log(building.number_levels); // 1)

	console.log(building.number_of_apt_by_level[1]); // 2) 

	console.log(building.number_of_apt_by_level[3]); 

	console.log(building.number_of_apt_by_level[1] + building.number_of_apt_by_level[3]);

	console.log(building.name_of_tenants[1]); // 3)

	console.log(building.number_of_rooms_and_rent["Dan"][0]);

	let sarah_rent= building.number_of_rooms_and_rent["Sarah"][1]; // 4)
	let david_rent= building.number_of_rooms_and_rent["David"][1];
	let dan_rent= building.number_of_rooms_and_rent["Dan"][1];

	if (sarah_rent + david_rent > dan_rent) {
		console.log("increase the rent of Dan");
		dan_rent= sarah_rent + david_rent;
	}


	// Exercise 3: 

	let user1= {
		fullName: "Alex Smith",
		mass: 78,
		height: 1.85,
		BMI: [user1.mass/Math.pow(user1.height,2)],
	};
	let user2= {
		fullName: "Leah Doe",
		mass: 58,
		height: 1.68,
		BMI: [user2.mass/Math.pow(user2.height,2)],
	};

	if (user1.BMI > user2.BMI) {
		console.log(user1.fullName);
	} else {
		console.log(user2.fullName);
	}












