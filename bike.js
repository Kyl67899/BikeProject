let books;

async function renderBooks(filter) {
  const booksWrapper = document.querySelector(".books");

  booksWrapper.classList += ' books__loading'

  if (!books) {
    books = await getBooks();
  }
  
  booksWrapper.classList.remove('books__loading')

  if (filter === "LOW_TO_HIGH") {
    books.sort(
      (a, b) =>
        (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
    );
  } else if (filter === "HIGH_TO_LOW") {
    books.sort(
      (a, b) =>
        (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
    );
  } else if (filter === "RATING") {
    books.sort((a, b) => b.rating - a.rating);

  } else if (filter === "MOUNTAIN") {
        books.sort((a, b) => );

  } else if (filter === "ROAD") {
    books.sort((a, b) => );
  }

  const booksHtml = books
    .map((book) => {
      return `<div class="book">
    <figure class="book__img--wrapper">
      <img class="book__img" src="${book.url}" alt="">
    </figure>
    <div class="book__title">
      ${book.title}
    </div>
    <div class="book__ratings">
      ${ratingsHTML(book.rating)}
    </div>
    <div class="book__price">
      ${priceHTML(book.originalPrice, book.salePrice)}
    </div>
  </div>`;
    })
    .join("");

  booksWrapper.innerHTML = booksHtml;
}

function priceHTML(originalPrice, salePrice) {
  if (!salePrice) {
    return `$${originalPrice.toFixed(2)}`;
  }
  return `<span class="book__price--normal">$${originalPrice.toFixed(
    2
  )}</span>$${salePrice.toFixed(2)}`;
}

function ratingsHTML(rating) {
  let ratingHTML = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratingHTML += '<i class="fas fa-star"></i>\n';
  }
  if (!Number.isInteger(rating)) {
    ratingHTML += '<i class="fas fa-star-half-alt"></i>\n';
  }
  return ratingHTML;
}

function filterBooks(event) {
  renderBooks(event.target.value);
}

setTimeout(() => {
  renderBooks();
});


// fake data
function getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Fuel EXe 9.9 XX AXS T-Type",
            url: "",
            type: "mountain",
            originalPrice: 13999.99,
            salePrice: null,
            rating: 5,
          },
          {
            id: 2,
            title: "Rail 9.9 CXR Gen 4",
            url: "a",
            type: "mountain",
            originalPrice: 13499.99,
            salePrice: null,
            rating: 5,
          },
          {
            id: 3,
            title: "Madone SLR 9 AXS Gen 7",
            url: "",
            type: "Road",
            originalPrice: 13199.99,
            salePrice: 12999,
            rating: 5,
          },
          {
            id: 4,
            title: "Domane SLR 9 AXS Gen 4",
            url: "",
            type: "Road",
            originalPrice: 13199.99,
            salePrice: null,
            rating: 5,
          },
          {
            id: 5,
            title: "Supercaliber SLR 9.9 XX AXS Gen 2",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR99XXAXS-24-41725-C-Portrait",
            type: "Mountain",
            originalPrice: 11699.99,
            salePrice: null,
            rating: null,
          },
          {
            id: 6,
            title: "Rail 9.9 X0 AXS T-Type Gen 4",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Rail99XOAXSUS-24-41986-B-Portrait",
            type: "Mountain",
            originalPrice: 11299.99,
            salePrice: null,
            rating: 4,
          },
          {
            id: 7,
            title: "Fuel EXe 9.8 GX AXS T-Type",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEXe98GXAXSUS-24-41656-B-Portrait",
            type: "Mountain",
            originalPrice: 9999.99,
            salePrice: null,
            rating: null,
          },
          {
            id: 8,
            title: "Madone SLR 7 AXS Gen 7",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSLR7AXS-24-41759-B-Portrait",
            type: "Road",
            originalPrice: 9699.99,
            salePrice: null,
            rating: null,
          },
          {
            id: 9,
            title: "Fuel EXe 9.8 XT",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEXe98XTUS-24-41571-C-Portrait",
            type: "Mountain",
            originalPrice: 9299.99,
            salePrice: null,
            rating: 5,
          },
          {
            id: 10,
            title: "Rail 9.8 XT Gen 4",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Rail98XTUS-24-37028-B-Portrait",
            type: "Mountain",
            originalPrice: 8999.99,
            salePrice: null,
            rating: 4.5,
          },
          {
            id: 11,
            title: "Fuel EX 9.9 XTR Gen 6",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEX99XTR_23_36954_B_Portrait",
            type: "Mountain",
            originalPrice: 8749.99,
            salePrice: null,
            rating: 4,
          },
          {
            id: 12,
            title: "Fuel EX 9.9 X0 AXS T-Type Gen 6",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEX99XOAXS-24-41576-A-Portrait",
            type: "Mountain",
            originalPrice: 7999.99,
            salePrice: 5999.99,
            rating: null,
          },
          {
            id: 13,
            title: "Top Fuel 9.9 X0 AXS T-Type",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/TopFuel99XOAXS-24-41650-E-Portrait",
            type: "Mountain",
            originalPrice: 7999.99,
            salePrice: null,
            rating: 5,
          },
          {
            id: 14,
            title: "Cruiser 3i Step-Over",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Cruiser3iStepOver_23_35600_B_Portrait",
            type: "Cruiser",
            originalPrice: 649.99,
            salePrice: 459,
            rating: 4.5,
          },
          {
            id: 15,
            title: "Precaliber 24 8-speed Suspension",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Precaliber248speedSuspension_23_36846_A_Portrait",
            type: "Mountain",
            originalPrice: 469.99,
            salePrice: null,
            rating: 4.5,
          },
          {
            id: 16,
            title: "FX 1",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FX1_21_32769_A_Portrait",
            type: "Mountain",
            originalPrice: 499.99,
            salePrice: null,
            rating: 4.5,
          },
          {
            id: 17,
            title: "Fuel EXe 9.8 XT",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEXe98XT_23_36375_A_Portrait",
            type: "Mountain",
            originalPrice: 8699.99,
            salePrice: null,
            rating: 4.5,
          },
          {
            id: 18,
            title: "E-Caliber 9.9 XTR Gen 1",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/ECaliber99XTRUS_21_34708_B_Portrait",
            type: "Mountain",
            originalPrice: 11999.99,
            salePrice: 8999.99,
            rating: null,
          },
          {
            id: 19,
            title: "Slash 9.9 XTR Gen 5",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Slash99XTR_21_34747_A_Portrait",
            type: "Mountain",
            originalPrice: 9549.99,
            salePrice: 7599.99,
            rating: 5,
          },
          {
            id: 21,
            title: "Fuel EXe 9.7",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEXe97SLXXT_23_36365_B_Portrait",
            type: "Mountain",
            originalPrice: 7599.99,
            salePrice: null,
            rating: 4.5,
          },
          {
            id: 22,
            title: "Remedy 8",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Remedy8275XT_22_35063_A_Portrait",
            type: "Mountain",
            originalPrice: 4129.99,
            salePrice: 3299.99,
            rating: 4.5,
          },
          {
            id: 23,
            title: "Marlin 6 Gen 2",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Marlin6_22_35066_D_Portrait",
            type: "Mountain",
            originalPrice: 749.99,
            salePrice: null,
            rating: 4.5,
          },
          {
            id: 24,
            title: "Fuel EX 8 GX AXS T-Type Gen 6",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEX8GXAXS-24-41328-A-Portrait",
            type: "Mountain",
            originalPrice: 4999.99,
            salePrice: null,
            rating: null,
          },
          {
            id: 25,
            title: "Supercaliber 9.6 Gen 1",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Supercaliber96_22_35151_B_Portrait",
            type: "Mountain",
            originalPrice: 3299.99,
            salePrice: null,
            rating: 5,
          },
          {
            id: 26,
            title: "Roscoe 20",
            url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Roscoe20_21_33490_A_Portrait",
            type: "Mountain",
            originalPrice: 429.99,
            salePrice: null,
            rating: 4.5,
          },
        //   {
        //     id: 27,
        //     title: "Supercaliber 9.6 Gen 1",
        //     url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Supercaliber96_22_35151_B_Portrait",
        //     type: "Mountain",
        //     originalPrice: 3299.99,
        //     salePrice: null,
        //     rating: 5,
        //   },
        //   {
        //     id: 28,
        //     title: "Supercaliber 9.6 Gen 1",
        //     url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Supercaliber96_22_35151_B_Portrait",
        //     type: "Mountain",
        //     originalPrice: 3299.99,
        //     salePrice: null,
        //     rating: 5,
        //   },
        //   {
        //     id: 29,
        //     title: "Supercaliber 9.6 Gen 1",
        //     url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Supercaliber96_22_35151_B_Portrait",
        //     type: "Mountain",
        //     originalPrice: 3299.99,
        //     salePrice: null,
        //     rating: 5,
        //   },
        //   {
        //     id: 30,
        //     title: "Supercaliber 9.6 Gen 1",
        //     url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Supercaliber96_22_35151_B_Portrait",
        //     type: "Mountain",
        //     originalPrice: 3299.99,
        //     salePrice: null,
        //     rating: 5,
        //   }
        ]);
      }, 1000);
    });
  }