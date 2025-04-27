// Links to be added dynamically
const links = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Portfolio", url: "https://yourportfolio.com" }
];

// Insert links into the container
const container = document.getElementById('links-container');
links.forEach(link => {
    const a = document.createElement('a');
    a.className = 'link-btn';
    a.href = link.url;
    a.target = '_blank';
    a.innerText = link.name;
    container.appendChild(a);
});