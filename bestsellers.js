const books = [
    {  
        title:"M3 E30 (SG001)",
        manufacturer:"BMW",
        class:"Sedan",
        year:1991,
        price:"Starting from ₹ 90,90,000"
        
        
    },
    {
      title: "Mustang (SG002)",
      manufacturer: "Ford",
      class:"Muscle",
      year:2016,
      price:"Starting from ₹75,00,000"
    },
    {
        title:"R8 plus (SG003)",
        manufacturer:"Audi",
        class:"Coupe",
        year:2015,
        price:"Starting from ₹2,46,00,000"
    },
    {
        title:"M4 GTS (SG004)",
        manufacturer:"BMW",
        class:"Coupe",
        year:2016,
        price:"Starting from ₹98,00,000"

    },
    {
        title:"Range Rover (SG005)",
        manufacturer:"Land Rover",
        class:"SUV",
        year:"2015",
        price:"Starting from ₹67,00,000"
    },
    {
        title:"GTR R35 (SG006)",
        manufacturer:"Nissan",
        class:"Coupe",
        year:"2015",
        price:"Starting from ₹2,45,00,000"
    },
    {
        title:"SLS AMG (SG007)",
        manufacturer:"Mercedes-Benz",
        class:"Coupe",
        year:"2011",
        price:"Starting from ₹1,69,00,000",
    },
    {
        title:"G Class G65 (SG008)",
        manufacturer:"Mercedes-Benz",
        class:"SUV",
        year:"2020",
        price:"Starting from ₹4,00,00,000"
    },
    {
        title:"RX7 FD (SG009)",
        manufacturer:"Mazda",
        class:"Coupe",
        year:"2000",
        price:"Starting from ₹45,00,000"
    },
    {
        title:"488 GTB (SG010)",
        manufacturer:"Ferrari",
        class:"Coupe",
        year:"2015",
        price:"Starting from ₹2,50,00,000"
    },
    {
        title:"Aventador (SG011)",
        manufacturer:"Lamborghini",
        class:"Coupe",
        year:"2011",
        price:"Starting from ₹4,65,00,000"
    },
    {
        title:"911 GT3RS (SG012)",
        manufacturer:"Porsche",
        class:"Coupe",
        year:"2016",
        price:"Starting from ₹2,43,00,000"
    },
    {
        title:"Chiron Sport (SG013)",
        manufacturer:"Buggati",
        class:"Coupe",
        year:"2018",
        price:"Starting from ₹5,00,00,000"

    },
    {
        title:"Agera R (SG014)",
        manufacturer:"Konigsegg",
        class:"Coupe",
        year:"2016",
        price:"Starting from ₹8,00,00,000"
    },
    {
        title:"Vantage (SG015)",
        manufacturer:"Aston Martin",
        class:"Coupe",
        year:"2018",
        price:"Starting from ₹1,09,00,000"
    },
    {
        title:"Supra Mk IV (SG016)",
        manufacturer:"Toyota",
        class:"Coupe",
        year:"1994",
        price:"Starting from ₹59,00,000"
    },
    {
        title:"Corvette Z06 (SG017)",
        manufacturer:"Cheverolet",
        class:"Coupe",
        year:"2016",
        price:"Starting from ₹1,59,00,000"
    },
    {
        title:"Challenger Hellcat (SG018)",
        manufacturer:"Dodge",
        class:"Muscle",
        year:"2015",
        price:"Starting from ₹86,00,000"
    },
    {
        title:"i8 (SG019)",
        manufacturer:"BMW",
        class:"Coupe",
        year:"2015",
        price:"Starting from ₹94,00,000"
    },
    {
        title:"F40 (SG020)",
        manufacturer:"Ferrari",
        class:"Coupe",
        year:"1987",
        price:"Starting from ₹2,55,00,000"
    },
    {
        title:"Countach (SG021)",
        manufacturer:"Lamborghini",
        class:"Coupe",
        year:"1983",
        price:"Starting from ₹3,09,00,000"
    },
    {
        title:"Viper (SG022)",
        manufacturer:"Dodge",
        class:"Coupe",
        year:"2016",
        price:"Starting from ₹2,12,00,000"
    },
    {
        title:"Continental SuperSport (SG023)",
        manufacturer:"Bentley",
        class:"Coupe",
        year:"2017",
        price:"Starting from ₹1,86,00,000"
    },
    {
        title:"Rubicon Wrangler (SG024)",
        manufacturer:"Jeep",
        class:"SUV",
        year:"2012",
        price:"Starting from ₹1,29,00,000"
    },
    {
        title:"MX5 Miata (SG025)",
        manufacturer:"Mazda",
        class:"Roadster",
        year:"1998",
        price:"Starting from ₹55,00,000"
    },
    {
        title:"R34 GTR (SG026)",
        manufacturer:"Nissan",
        class:"Coupe",
        year:"1997",
        price:"Starting from ₹76,00,000"
    },
    {
        title:"AMG GTR (SG027)",
        manufacturer:"Mercedes AMG",
        class:"Coupe",
        year:"2015",
        price:"Starting from ₹2,65,00,000"
    },
    {
        title:"Senna (SG028)",
        manufacturer:"Mclaren",
        class:"Coupe",
        year:"2018",
        price:"Starting from ₹3,88,00,000"
    },
    {
        title:"Huayra (SG029)",
        manufacturer:"Pagani",
        class:"Coupe",
        year:"2014",
        price:"Starting from ₹5,88,00,000"
    },
    {
        title:"Cayenne Turbo (SG030)",
        manufacturer:"Porsche",
        class:"SUV",
        year:"2012",
        price:"Starting from ₹79,00,000"
    },
    
  ]
  document.addEventListener('DOMContentLoaded', function() {
      const bookList = document.getElementById('book-list');
    
      books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
          <h3>${book.title}</h3>
          <p><span>Manufacturer:</span> ${book.manufacturer}</p>
          <p><span>Class:</span> ${book.class}</p>
          <p><span>Year:</span> ${book.year}</p>
          <p><span>Price:</span> ${book.price}</p>
          
        `;
        bookList.appendChild(bookItem);
      });
    });

    // document.addEventListener('DOMContentLoaded', function () {
    //     const books = [{  
    //         title:"M3",
    //         manufacturer:"BMW",
    //         class:"Sedan",
    //         year:1991,
    //         price:"Starting from ₹ 90,90,000"
    
    //     },
    //     {
    //       title: "Mustang",
    //       manufacturer: "Ford",
    //       class:"Muscle",
    //       year:2016,
    //       price:"Starting from ₹75,00,000"
    //     },
    //     {
    //         title:"R8 plus",
    //         manufacturer:"Audi",
    //         class:"Coupe",
    //         year:2015,
    //         price:"Starting from ₹2,46,00,000"
    //     },
    //     {
    //         title:"M4 GTS",
    //         manufacturer:"BMW",
    //         class:"Coupe",
    //         year:2016,
    //         price:"Starting from ₹98,00,000"
    
    //     },
    //     {
    //         title:"Range Rover",
    //         manufacturer:"Land Rover",
    //         class:"SUV",
    //         year:"2015",
    //         price:"Starting from ₹67,00,000"
    //     },
    //     {
    //         title:"GTR R35",
    //         manufacturer:"Nissan",
    //         class:"Sedan",
    //         year:"2015",
    //         price:"Starting from ₹2,45,00,000"
    //     },
    //     {
    //         title:"Series 2000 (Special Series)",
    //         manufacturer:"DavidPutra",
    //         class:"Pickup",
    //         year:"2010",
    //         price:"Starting from ₹69,00,420",
    //     },
    //     {
    //         title:"G Class G63",
    //         manufacturer:"Mercedes-Benz",
    //         class:"SUV",
    //         year:"2020",
    //         price:"Starting from ₹4,00,00,000"
    //     },
    //     {
    //         title:"RX7 FD",
    //         manufacturer:"Mazda",
    //         class:"Sedan",
    //         year:"2000",
    //         price:"Starting from ₹45,00,000"
    //     },
    //     {
    //         title:"La Ferrari",
    //         manufacturer:"Ferrari",
    //         class:"Coupe",
    //         year:"2007",
    //         price:"Starting from ₹6,50,00,000"
    //     },
    //     {
    //         title:"Aventador",
    //         manufacturer:"Lamborghini",
    //         class:"Coupe",
    //         year:"2011",
    //         price:"Starting from ₹4,65,00,000"
    //     },
    //     {
    //         title:"911 Carrera",
    //         manufacturer:"Porsche",
    //         class:"Coupe",
    //         year:"2019",
    //         price:"Starting from ₹2,43,00,000"
    //     },
    //     {
    //         title:"Chiron Sport",
    //         manufacturer:"Buggati",
    //         class:"Coupe",
    //         year:"2018",
    //         price:"Starting from ₹5,00,00,000"
    
    //     },
    //     {
    //         title:"Agera R",
    //         manufacturer:"Konigsegg",
    //         class:"Coupe",
    //         year:"2016",
    //         price:"Starting from ₹8,00,00,000"
    //     },
    //     {
    //         title:"Vantage",
    //         manufacturer:"Aston Martin",
    //         class:"Coupe",
    //         year:"2018",
    //         price:"Starting from ₹1,09,00,000"
    //     }

    //     ];
    
    //     const filterBySelect = document.getElementById('filterBy');
    //     const searchBox = document.getElementById('searchBox');
    //     const resultsDiv = document.getElementById('results');
    
    //     function filterBooks() {
    //         const filterBy = filterBySelect.value;
    //         const searchText = searchBox.value.toLowerCase();
    //         const filteredBooks = books.filter(book => book[filterBy].toLowerCase().includes(searchText));
            
    //         displayResults(filteredBooks);
    //     }
    
    //     function displayResults(books) {
    //         if (books.length === 0) {
    //             resultsDiv.innerHTML = 'No matching books found';
    //             return;
    //         }
    
    //         const html = books.map(book => `<div>${book.title} by ${book.manufacturer} (Class: ${book.class}, year: ${book.year})</div>`).join('');
    //         resultsDiv.innerHTML = html;
    //     }
    
    //     filterBySelect.addEventListener('change', filterBooks);
    //     searchBox.addEventListener('input', filterBooks);
    // });


    const searchBox = document.getElementById('search-box');
    const priceRangeFilter = document.getElementById('price-range');
    const companyFilter = document.getElementById('company');
    const classFilter = document.getElementById('class');
    const yearFilter = document.getElementById('year');
    const itemList = document.getElementById('item-list').getElementsByTagName('li');
  
    // Add event listeners for filter change and search input
    searchBox.addEventListener('input', filterItems);
    priceRangeFilter.addEventListener('change', filterItems);
    companyFilter.addEventListener('change', filterItems);
    classFilter.addEventListener('change', filterItems);
    yearFilter.addEventListener('change', filterItems);
  
    // Function to filter items based on search input and filter options
    function filterItems() {
      const searchTerm = searchBox.value.toLowerCase();
      const priceRange = priceRangeFilter.value;
      const company = companyFilter.value;
      const classType = classFilter.value;
      const year = yearFilter.value;
  
      // Loop through all list items
      for (let item of itemList) {
        const itemText = item.textContent.toLowerCase();
        const itemPriceRange = item.getAttribute('data-price');
        const itemCompany = item.getAttribute('data-company');
        const itemClass = item.getAttribute('data-class');
        const itemYear = item.getAttribute('data-year');
  
        // Check if the item matches the search term and filter options
        if (
          itemText.includes(searchTerm) &&
          (priceRange === '' || itemPriceRange === priceRange) &&
          (company === '' || itemCompany === company) &&
          (classType === '' || itemClass === classType) &&
          (year === '' || itemYear === year)
        ) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    }