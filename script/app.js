const getCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();
  displayCategory(categories);
};

const displayCategory = (categories) => {
  //   console.log(categories);
  const categoriItems = document.getElementById("categoryList");
  categoriItems.innerHTML = "";
  categories.forEach((categori) => {
    const items = document.createElement("div");
    items.innerHTML = `
    <div>
        <ul class="text-gray-500">
        <li class="border rounded-full px-6 hover:bg-blue-700 py-1 transition duration-300 focus:bottom-0 hover:text-white">${categori}</li>
        </ul>
    </div>
    `;
    categoriItems.append(items);
  });
};

const loadData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  displayData(products);
};

const displayData = (products) => {
  console.log(products);
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card bg-base-100 mt-10  shadow-sm">
            <figure>
              <img class="h-52" src=${product.image} alt="" />
            </figure>
            <div class="flex justify-between mt-2 px-6">
              <h2 class="bg-violet-500/60 px-2 text-sm rounded-xl">
                ${product.category}
              </h2>
              <p class="text-sm">
                <i class="fa fa-star" aria-hidden="true"></i>${product.rating.rate} (${product.rating.count}) 
              </p>
            </div>
            <div class="card-body">
              <h2 class="card-title font-bold">
                ${product.title.slice(0, 22)}
              </h2>
              <p class="text-2xl font-bold"> $ ${product.price}</p>
              <div class="flex justify-between text-gray-300">
                <button
                  class="btn hover:bg-blue-700 transition duration-500"
                >
                  <i class="fa fa-eye" aria-hidden="true"></i>Details
                </button>
                <button
                  class="btn bg-blue-700 hover:bg-gray-200 transition duration-500"
                >
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add
                </button>
              </div>
            </div>
          </div>
        `;
    productContainer.append(div);
  });
};

getCategories();
loadData();
