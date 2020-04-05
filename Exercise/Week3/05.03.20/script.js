// Daily Challenge

	let allBooks= [
			{
				title: "Les Misérables",
				author: "Victor Hugo",
				image: "les miserables.jpg",
				alreadyRead: true
			},
			{	title: "Harry Potter and the Philosopher's Stone",
				author: "J.K Rowling",
				image:"Harry Potter.png",
				alreadyRead: false
			}

		];

	function render (book) {
		for(let i in allBooks) {		
			let body= document.getElementsByTagName("body");
			let table= document.createElement("table");
			document.body.appendChild(table);

			let title= document.createElement("h1");
			document.body.lastElementChild.appendChild(title);
			title.innerHTML= allBooks[i].title;

			let author= document.createElement("h2");
			document.body.lastElementChild.appendChild(author);
			author.innerHTML= "Written by" + allBooks[i].author;

			let image= document.createElement("img");
			document.body.lastElementChild.appendChild(image);
			image.style.width= "100px";
			image.src= allBooks[i].image;
			if(allBooks[i].alreadyRead= true) {
				table.style.color= "red";
			};

		};
	};
   	render(allBooks);

