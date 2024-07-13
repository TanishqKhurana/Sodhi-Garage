const books = [
    {  
        title:"M4 GTS",
        manufacturer:"BMW",
        class:"Coupe",
        year:2016,
        price:"Starting from ₹ 98,00,000"
        
        
    },
    {
      title: "i8",
      manufacturer: "BMW",
      class:"Coupe",
      year:2015,
      price:"Starting from ₹94,00,000"
    },
    {
        title:"GTR R34",
        manufacturer:"Nissan",
        class:"Sedan",
        year:1997,
        price:"Starting from ₹76,00,000"
    },
    {
        title:"Mk IV Supra",
        manufacturer:"Toyota",
        class:"Coupe",
        year:1994,
        price:"Starting from 59,00,000"

    },
    {
        title:"Range Rover",
        manufacturer:"Land Rover",
        class:"SUV",
        year:2015,
        price:"Starting from ₹67,00,000"
    }]
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
  
      // Add this script to trigger the animation when scrolled into view
const reviewBlocks = document.querySelectorAll('.review-block');

window.addEventListener('scroll', () => {
  reviewBlocks.forEach((block) => {
    const blockTop = block.offsetTop;
    const blockHeight = block.offsetHeight;
    const windowHeight = window.innerHeight;
    const windowScrollTop = window.scrollY;

    if (windowScrollTop > blockTop - windowHeight && windowScrollTop < blockTop + blockHeight) {
      block.classList.add('in-view');
    } else {
      block.classList.remove('in-view');
    }
  });
});