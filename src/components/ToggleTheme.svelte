<script lang="ts">
import { Icon } from "@smui/icon-button";
import IconButton from "@smui/icon-button/IconButton.svelte";

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const currentTheme = localStorage.getItem("theme");
let darkMode = prefersDarkScheme;
$: if (darkMode) {
    document.getElementById("light-theme-css").setAttribute("disabled", "true");
    document.getElementById("dark-theme-css").setAttribute("disabled", "false");
} else {
    document.getElementById("light-theme-css").setAttribute("disabled", "false");
    document.getElementById("dark-theme-css").setAttribute("disabled", "true");
}

if (currentTheme == "dark") {
    document.body.classList.toggle("dark-mode");
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-mode");
    darkMode = false;
}

function toggleTheme() {
    if (prefersDarkScheme) {
        document.body.classList.toggle("light-mode");
        var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
    } else {
        document.body.classList.toggle("dark-mode");
        var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    }
    darkMode = currentTheme == "dark";
    localStorage.setItem("theme", theme);
};
</script>

<IconButton on:click={() => toggleTheme()} toggle bind:pressed={darkMode}>
    <Icon class="material-icons" on>dark_mode</Icon>
    <Icon class="material-icons">light_mode</Icon>
</IconButton>