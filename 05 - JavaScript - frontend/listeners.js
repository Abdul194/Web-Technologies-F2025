// JS EVENT LISTENERS DEMONSTRATION

// 1. Click Event
document.getElementById("clickBtn").addEventListener("click", () => {
    console.log("Button Clicked!");
});

// 2. Input Event
document.getElementById("textInput").addEventListener("input", (event) => {
    console.log("User Typed:", event.target.value);
});

// 3. Mouseover Event
document.getElementById("hoverBox").addEventListener("mouseover", () => {
    console.log("Mouse is over the box");
});
