// Option 1 – Complex DOM navigation (works, but long)
document.firstElementChild
        .lastElementChild
        .querySelector("ul")
        .lastElementChild
        .innerHTML = "Derson";

// Option 2 – Cleaner version (recommended)
document.querySelectorAll('.list')[2].textContent = "Derson";
