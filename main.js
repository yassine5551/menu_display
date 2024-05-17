let menu = [
  {
    id: 1,
    category: "breakfast",
    price: 7.88,
    description: "the only breakfast you need",
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    category: "dinner",
    price: 20,
    description: "happy dinner with your familly or friends",
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    category: "lunch",
    price: 33.66,
    description: "Great lunch and happy meals",
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    category: "lunch",
    price: 12.55,
    description: "Great lunch and happy meals",
    image:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    category: "breakfast",
    price: 88,
    description: "the only breakfast you need",
    image:
      "https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    category: "dinner",
    price: 9.99,
    description: "happy dinner with your familly or friends",
    image:
      "https://images.pexels.com/photos/196648/pexels-photo-196648.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    category: "lunch",
    price: 6.65,
    description: "Great lunch and happy meals",
    image:
      "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    category: "dinner",
    price: 11,
    description: "happy dinner with your familly or friends",
    image:
      "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    category: "dissert",
    price: 11,
    description: "best dessert for you",
    image:
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    category: "drinks",
    price: 11,
    description: "refreshing drinks",
    image:
      "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    category: "dissert",
    price: 11,
    description: "best dessert for you",
    image:
      "https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    category: "dissert",
    price: 11,
    description: "best dessert for you",
    image:
      "https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 13,
    category: "drinks",
    price: 11,
    description: "refreshing drinks",
    image:
      "https://images.pexels.com/photos/110472/pexels-photo-110472.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 14,
    category: "drinks",
    price: 11,
    description: "refreshing drinks",
    image:
      "https://images.pexels.com/photos/1200348/pexels-photo-1200348.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 15,
    category: "drinks",
    price: 11,
    description: "refreshing drinks",
    image:
      "https://images.pexels.com/photos/342971/pexels-photo-342971.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 16,
    category: "dissert",
    price: 11,
    description: "best dessert for you",
    image:
      "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const section = document.querySelector(".section-menu");
const title = document.querySelector(".categories");
const containerBtn = document.querySelector(".container-btn");

window.addEventListener("DOMContentLoaded", () => {
  displayItems(menu);
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const btnCategories = categories
    .map((btn) => {
      return `<button data-id =${btn}>${btn}</button>`;
    })
    .join("");
  containerBtn.innerHTML = btnCategories;
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((item) => {
        if (item.category === category) {
          return item;
        }
      });
      if (category === "all") {
        displayItems(menu);
        title.innerHTML = category;
      } else {
        displayItems(menuCategory);
        title.innerHTML = category;
      }
    });
  });
});

function displayItems(menuItem) {
  let menuDisplay = menuItem.map((item) => {
    return `
            <article>
            
                <img src="${item.image}" alt="">
                <div class="content">
                    <h1>${item.category}</h1>
                    <p>${item.description}</p>
                    <h3> Price :${item.price} DH</h3>
                </div>
            </article>
            `;
  });
  section.innerHTML = menuDisplay.join("");
}
