let bike;

async function renderBike(filter) {
  const bikeWrapper = document.querySelector(".books");

  bikeWrapper.classList += ' books__loading'

  if (!bike) {
    bike = await getBikes();
  }
  
  bikeWrapper.classList.remove('books__loading')

  if (filter === "LOW_TO_HIGH") {
    bike.sort(
      (a, b) =>
        (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
    );
  } else if (filter === "HIGH_TO_LOW") {
    bike.sort(
      (a, b) =>
        (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
    );
  // } else if (filter === "RATING") {
  //   bike.sort((a, b) => b.rating - a.rating);

  // } else if (filter === "ONSALE") {
  //   bike.sort((a, b) => b.salePrice - a.salePrice);

  // } else if (filter === "MOUNTAIN") {
  //       books.sort((a, b) => );

  // } else if (filter === "ROAD") {
  //   books.sort((a, b) => );
  }

  // Check to see if bike is road or mountain
  // function checkMountainType(){
  //   if(books.type === "mountain"){
  //     console.log("mountain")
  //   }
  //   else if(books.type === "Road"){
  //     console.log("Road")
  //   }
  // }

  const bikesHtml = bike
    .map((bike) => {
      return `<div class="book">
    <figure class="book__img--wrapper">
      <img class="book__img" src="${bike.url}" alt="">
    </figure>
    <div class="book__title">
      ${bike.title}
    </div>
    <div class="book__ratings">
      ${ratingsHTML(bike.rating)}
    </div>
    <div class="book__price">
      ${priceHTML(bike.originalPrice, bike.salePrice)}
    </div>
  </div>`;
    })
    .join("");

  bikeWrapper.innerHTML = bikesHtml;
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

function filterBike(event) {
  renderBike(event.target.value);
}

setTimeout(() => {
  renderBike();
});


// fake data
function getBikes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
    id: 1,
    title: "Fuel EXe 9.9 XX AXS T-Type",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR99XXAXS-24-41725-C-Portrait",
    details: "Rail 9.9 is our best long-travel electric mountain bike. You get an extra-beefy carbon frame, unbelievably smooth RockShox suspension, SRAM's best wireless electronic drivetrain, and a powerful Bosch smart system Performance Line CX motor with an extra-long range battery and the new Mini Remote. The new System Controller display sits almost flush with the top tube for a sleek look wherever you roll that stays out of the way when you're riding hard.",
    type: "mountain",
    originalPrice: 13999.99,
    salePrice: null,
    rating: 5,
  },
  {
    id: 2,
    title: "Rail 9.9 CXR Gen 4",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR99XXAXS-24-41725-C-Portrait",
    details: "Rail 9.9 is our best long-travel electric mountain bike. You get an extra-beefy carbon frame, unbelievably smooth RockShox suspension, super-precise Shimano XTR drivetrain, and a powerful Bosch Performance Line CX motor with an extra-long range battery and smart system, plus the new Mini Remote and System Controller display that sits flush with the top tube and pairs with the eBike Flow app to give you activity tracking, navigation, and Bluetooth connectivity.",
    type: "mountain",
    originalPrice: 13499.99,
    salePrice: 10000,
    rating: 4.5,
  },
  {
    id: 3,
    title: "Madone SLR 9 AXS Gen 7",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR99XXAXS-24-41725-C-Portrait",
    details: "Madone SLR 7 AXS is the ultimate race machine. An 800 Series OCLV Carbon frame with exclusive IsoFlow technology adds an aerodynamic advantage, cuts weight, and smooths the road ahead. It's built from the ground up with cherry-picked components for a smooth and light ride, like SRAM's Force AXS D2 wireless electronic 12-speed drivetrain and carbon wheels with a deep rim for aerodynamic gains.",
    type: "Road",
    originalPrice: 13199.99,
    salePrice: 10999,
    rating: 5,
  },
  {
    id: 4,
    title: "Domane SLR 9 AXS Gen 4",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR99XXAXS-24-41725-C-Portrait",
    details: "Domane+ SLR 9 is a category-redefining, high-speed assist carbon e-road bike that doesn't look, fit, or feel like a standard e-bike. It's built on an 800 Series OCLV Carbon frame that hides a compact and refined motor to elevate your ride with natural-feeling assist. The motor quietly blends in with the elements, all but disappearing under you on peaceful solo outings and club rides, so you stay more connected to the experience while enjoying extra power for crushing climbs and long, epic adventures. Adding the cherry on top, it's equipped with the industry's most premium parts, like SRAM's best wireless electronic drivetrain for road and gravel alike — RED XPLR eTap AXS.",
    type: "Road",
    originalPrice: 13199.99,
    salePrice: null,
    rating: 5,
  },
  {
    id: 5,
    title: "Supercaliber SLR 9.9 XX AXS Gen 2",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/SupercaliberSLR99XXAXS-24-41725-C-Portrait",
    details: "Supercaliber SLR 9.9 X0 AXS is an ultralight XC mountain bike that's built with the top components for race day. Its SLR Mountain Carbon frame is as light as it is meticulous, with a high modulus layup that gives you all the stiffness you crave and none of the weight. XC courses get rowdier every year, so it's equipped with a 110mm fork and 80mm of IsoStrut rear suspension to smooth your roll without dropping pedaling efficiency. It's all topped off with carbon wheels, a carbon cockpit, and SRAM's wireless direct-mount X0 transmission.",
    type: "Mountain",
    originalPrice: 11699.99,
    salePrice: 8999,
    rating: 5,
  },
  {
    id: 6,
    title: "Rail 9.9 X0 AXS T-Type Gen 4",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Rail99XOAXSUS-24-41986-B-Portrait",
    details: "Rail 9.9 is our best long-travel electric mountain bike. You get an extra-beefy carbon frame, unbelievably smooth RockShox suspension, SRAM's best wireless electronic drivetrain, and a powerful Bosch smart system Performance Line CX motor with an extra-long range battery and the new Mini Remote. The new System Controller display sits almost flush with the top tube for a sleek look wherever you roll that stays out of the way when you're riding hard.",
    type: "Mountain",
    originalPrice: 11299.99,
    salePrice: null,
    rating: 4,
  },
  {
    id: 7,
    title: "Fuel EXe 9.8 GX AXS T-Type",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEXe98GXAXSUS-24-41656-B-Portrait",
    details: "Fuel EXe 9.8 GX AXS takes an evolved approach to e-mountain biking with a revolutionary motor that packs space-age technology in a tiny but mighty package. It's built on a carbon fiber chassis that's light, stiff, and nimble for a lively and playful trail feel. And to keep a good thing going, it's topped off with carbon wheels, the wireless shifting technology of a SRAM GX AXS transmission, and the silky-smooth suspension of a RockShox Lyrik Select+ fork and SuperDeluxe Select+ rear suspension.",
    type: "Mountain",
    originalPrice: 9999.99,
    salePrice: 5999.99,
    rating: 4.5,
  },
  {
    id: 8,
    title: "Madone SLR 7 AXS Gen 7",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSLR7AXS-24-41759-B-Portrait",
    details: "Madone SLR 7 AXS is the ultimate race machine. An 800 Series OCLV Carbon frame with exclusive IsoFlow technology adds an aerodynamic advantage, cuts weight, and smooths the road ahead. It's built from the ground up with cherry-picked components for a smooth and light ride, like SRAM's Force AXS D2 wireless electronic 12-speed drivetrain and carbon wheels with a deep rim for aerodynamic gains.",
    type: "Road",
    originalPrice: 9699.99,
    salePrice: null,
    rating: 4.5,
  },
  {
    id: 9,
    title: "Fuel EXe 9.8 XT",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEXe98XTUS-24-41571-C-Portrait",
    details: "Fuel EXe 9.8 XT takes an evolved approach to e-mountain bikes with a revolutionary motor that packs space-age technology into a tiny but mighty package. It's built on an OCLV Mountain Carbon chassis that's light, stiff, and nimble for a lively and playful trail feel. And to keep a good thing going, it's topped off with carbon wheels, Shimano's clean-shifting and ultra reliable XT drivetrain, and the silky-smooth performance of a RockShox Lyrik Select+ fork and SuperDeluxe Select+ rear suspension.",
    type: "Mountain",
    originalPrice: 9299.99,
    salePrice: null,
    rating: 5,
  },
  {
    id: 10,
    title: "Rail 9.8 XT Gen 4",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Rail98XTUS-24-37028-B-Portrait",
    details: "Rail 9.8 is a long-travel carbon e-MTB that rips like our beefiest trail rigs and powers you right back up the mountain. You get upgraded everything, including the frame for maximum fun on the gnarliest runs. You also get Bosch's latest tech with the smart system Performance Line CX that has a longer-range 750Wh battery and cool features that take your ride to the next level like activity tracking, navigation, and Bluetooth connectivity. The new System Controller sits almost flush for a sleek look, and Mini Remote is discreet and intuitive.",
    type: "Mountain",
    originalPrice: 8999.99,
    salePrice: 6500,
    rating: 4.5,
  },
  {
    id: 11,
    title: "Fuel EX 9.9 XTR Gen 6",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEX99XTR_23_36954_B_Portrait",
    details: "Fuel EX 9.9 combines a light and nimble carbon frame with Shimano's best drivetrain and top-shelf suspension for a ride that's ready to rally wherever you point it. It's dripping with high-end upgrades like buttery-smooth Kashima coat, quick-engaging carbon wheels, a super-slick one-piece bar and stem, and handy multi tool hidden in the steerer tube.",
    type: "Mountain",
    originalPrice: 8749.99,
    salePrice: 6500,
    rating: 4,
  },
  {
    id: 12,
    title: "Fuel EX 9.9 X0 AXS T-Type Gen 6",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEX99XOAXS-24-41576-A-Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 7999.99,
    salePrice: 5999.99,
    rating: 5,
  },
  {
    id: 13,
    title: "Top Fuel 9.9 X0 AXS T-Type",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/TopFuel99XOAXS-24-41650-E-Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 7999.99,
    salePrice: null,
    rating: 5,
  },
  {
    id: 14,
    title: "Cruiser 3i Step-Over",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Cruiser3iStepOver_23_35600_B_Portrait",
    details: "",
    type: "Cruiser",
    originalPrice: 649.99,
    salePrice: 559,
    rating: 4.5,
  },
  {
    id: 15,
    title: "Precaliber 24 8-speed Suspension",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Precaliber248speedSuspension_23_36846_A_Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 469.99,
    salePrice: null,
    rating: 4.5,
  },
  {
    id: 16,
    title: "FX 1",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FX1_21_32769_A_Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 499.99,
    salePrice: 350,
    rating: 4.5,
  },
  {
    id: 17,
    title: "Fuel EXe 9.8 XT",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEXe98XT_23_36375_A_Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 8699.99,
    salePrice: null,
    rating: 4.5,
  },
  {
    id: 18,
    title: "E-Caliber 9.9 XTR Gen 1",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/ECaliber99XTRUS_21_34708_B_Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 11999.99,
    salePrice: 7999.99,
    rating: 4.5,
  },
  {
    id: 19,
    title: "Slash 9.9 XTR Gen 5",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Slash99XTR_21_34747_A_Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 9549.99,
    salePrice: 6599.99,
    rating: 5,
  },
  {
    id: 21,
    title: "Fuel EXe 9.7",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEXe97SLXXT_23_36365_B_Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 7599.99,
    salePrice: null,
    rating: 4.5,
  },
  {
    id: 22,
    title: "Remedy 8",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Remedy8275XT_22_35063_A_Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 4129.99,
    salePrice: null,
    rating: 4.5,
  },
  {
    id: 23,
    title: "Marlin 6 Gen 2",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Marlin6_22_35066_D_Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 749.99,
    salePrice: 550,
    rating: 4.5,
  },
  {
    id: 24,
    title: "Fuel EX 8 GX AXS T-Type Gen 6",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FuelEX8GXAXS-24-41328-A-Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 4999.99,
    salePrice: 2750,
    rating: 4.2,
  },
  {
    id: 25,
    title: "Supercaliber 9.6 Gen 1",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Supercaliber96_22_35151_B_Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 3299.99,
    salePrice: null,
    rating: 5,
  },
  {
    id: 26,
    title: "Roscoe 20",
    url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Roscoe20_21_33490_A_Portrait",
    details: "",
    type: "Mountain",
    originalPrice: 429.99,
    salePrice: 359,
    rating: 4.5,
  },
//   {
//     id: 27,
//     title: "Supercaliber 9.6 Gen 1",
//     url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Supercaliber96_22_35151_B_Portrait",
//     
//     type: "Mountain",
//     originalPrice: 3299.99,
//     salePrice: null,
//     rating: 5,
//   },
//   {
//     id: 28,
//     title: "Supercaliber 9.6 Gen 1",
//     url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Supercaliber96_22_35151_B_Portrait",
//     
//     type: "Mountain",
//     originalPrice: 3299.99,
//     salePrice: null,
//     rating: 5,
//   },
//   {
//     id: 29,
//     title: "Supercaliber 9.6 Gen 1",
//     url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Supercaliber96_22_35151_B_Portrait",
//     
//     type: "Mountain",
//     originalPrice: 3299.99,
//     salePrice: null,
//     rating: 5,
//   },
//   {
//     id: 30,
//     title: "Supercaliber 9.6 Gen 1",
//     url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/Supercaliber96_22_35151_B_Portrait",
//     
//     type: "Mountain",
//     originalPrice: 3299.99,
//     salePrice: null,
//     rating: 5,
//   }
        ]);
      }, 1000);
    });
  }
