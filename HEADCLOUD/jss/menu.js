document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdownMenuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    const sidebarButton = document.getElementById("sidebarDropdownButton");
    const sidebarMenu = document.getElementById("sidebarDropdownMenu");

    function toggleDropdown(menu) {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    dropdownButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleDropdown(dropdownMenu);
    });

    sidebarButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleDropdown(sidebarMenu);
    });

    document.addEventListener("click", function () {
        dropdownMenu.style.display = "none";
        sidebarMenu.style.display = "none";
    });
});
