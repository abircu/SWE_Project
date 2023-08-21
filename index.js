// // add item in cart section

let initialPrice = 0;
let discountParcentage = 0.2;
let totalDiscount = 0;
let restOfAmount = 0;

function addElement(element) {
  const addNameArea = document.getElementById("name-entry");
  const paragraph = document.createElement("newparagraph");
  const count = addNameArea.childElementCount;
  paragraph.classList.add("my-2");
  paragraph.innerHTML = `${count + 0}.${element}`;
  console.log("paragraph ", paragraph.innerHTML);
  addNameArea.appendChild(paragraph);
}
// get the price section
function getPrice(price) {
  const priceHtml = document.getElementById(price);
  const priceHtmlString = priceHtml.innerText;
  const priceHtmlFloat = parseFloat(priceHtmlString);
  return priceHtmlFloat;
}

// set the total price section
function totalPriceSection(textElement) {
  const totalPriceHtml = document.getElementById(textElement);
  const totalPriceHtmlString = totalPriceHtml.innerText;
  const totalPriceHtmlFloat = parseFloat(totalPriceHtmlString);
  return totalPriceHtmlFloat;
}
document.getElementById("Apply").addEventListener("click", () => {
  const inputvalue = document.getElementById("promo-code");
  const inputtext = inputvalue.value;
  inputvalue.value = "";
  if (inputtext === "SELL200" && initialPrice >= 200) {
    totalDiscount = initialPrice * discountParcentage;
    restOfAmount = initialPrice - totalDiscount;
    setTextElementByValue("total-cost", restOfAmount.toFixed(2));
    setTextElementByValue("Discount-price", totalDiscount.toFixed(2));
  }
});
// set the total price as number
function setTextElementByValue(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

// for relad page
document.getElementById("relad").addEventListener("click", () => {
  location.reload(true);
});

//Main function
function getIdFunction(idName, priceCount, nameCont) {
  const initalId = document
    .getElementById(idName)
    .addEventListener("click", function () {
      const itemName = document.getElementById(nameCont);
      const itemNameHtml = itemName.innerText;
      addElement(itemNameHtml);
      const currentProductPrice = getPrice(priceCount);
      initialPrice += currentProductPrice;
      restOfAmount = initialPrice - totalDiscount;
      setTextElementByValue("total-cost", restOfAmount.toFixed(2));
      setTextElementByValue("total-price", initialPrice);
    });
  return initalId;
}
getIdFunction("Kitchenware-01", "price-01", "itmes-name");
getIdFunction("Kitchenware-02", "price-02", "itmes-name01");
getIdFunction("Kitchenware-03", "price-03", "itmes-name03");
getIdFunction("Sportswear-01", "cap-price", "cap");
getIdFunction("Sportswear-02", "Jersey-price", "Jersey");
getIdFunction("Sportswear-03", "cates-price", "cates");
getIdFunction("Furniture-01", "chair-price", "chair");
getIdFunction("Furniture-02", "play-price", "play");
getIdFunction("Furniture-03", "sofa-price", "sofa");
