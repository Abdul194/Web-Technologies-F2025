// JS SELECTORS DEMONSTRATION

// 1. getElementById
const title = document.getElementById("mainTitle");
console.log("ID Selector:", title.innerText);

// 2. getElementsByClassName
const items = document.getElementsByClassName("item");
console.log("Class Selector:", items[0].innerText);

// 3. getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log("Tag Selector:", paragraphs[0].textContent);

// 4. getElementsByName
const desc = document.getElementsByName("desc");
console.log("Name Selector:", desc[0].innerText);

// 5. querySelector
const specialItem = document.querySelector(".special");
console.log("Query Selector:", specialItem.innerText);

// 6. querySelectorAll
const allItems = document.querySelectorAll("li");
allItems.forEach((li, idx) => console.log(`Item ${idx}:`, li.innerText));

// SETTING VALUES
document.getElementById("updateBtn").addEventListener("click", () => {
    title.innerText = "Updated Using Button";
    items[0].innerText = "Updated Apple";
    paragraphs[0].textContent = "Updated Paragraph Text";
    document.getElementById("userInput").value = "Updated Input Value";
});
