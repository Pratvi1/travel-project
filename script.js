
let destinations = JSON.parse(localStorage.getItem("destinations")) || [
    {
        name: "Taj Mahal, Agra",
        description: "The Taj Mahal is a symbol of love and a UNESCO World Heritage site located in Agra, India.",
        packages: [
            { name: "Taj Mahal Sunrise Tour", price: 50 },
            { name: "Taj Mahal and Fatehpur Sikri Tour", price: 80 }
        ]
    },
    {
        name: "Goa Beaches",
        description: "Goa is famous for its pristine beaches, vibrant nightlife, and rich Portuguese culture.",
        packages: [
            { name: "Goa Beach Holiday", price: 120 },
            { name: "Goa Adventure Water Sports", price: 100 }
        ]
    },
    {
        name: "Jaipur, Rajasthan",
        description: "Jaipur, the Pink City, is known for its palaces, forts, and vibrant culture.",
        packages: [
            { name: "Jaipur Palace and Fort Tour", price: 60 },
            { name: "Jaipur City Sightseeing", price: 75 }
        ]
    },
    {
        name: "Kerala Backwaters",
        description: "The backwaters of Kerala offer serene and scenic boat rides through lush green landscapes.",
        packages: [
            { name: "Backwater Houseboat Cruise", price: 150 },
            { name: "Kerala Backwater and Beach Tour", price: 180 }
        ]
    },
    {
        name: "Leh-Ladakh",
        description: "Leh-Ladakh is known for its rugged terrain, scenic monasteries, and adventurous trekking routes.",
        packages: [
            { name: "Leh-Ladakh Adventure Tour", price: 200 },
            { name: "Leh and Pangong Lake Tour", price: 220 }
        ]
    }
];

// Add new destination and package
function addDestination() {
    const destinationName = document.getElementById("destination-name").value;
    const destinationDesc = document.getElementById("destination-desc").value;
    const packageName = document.getElementById("travel-package-name").value;
    const packagePrice = document.getElementById("travel-package-price").value;

    if (destinationName && destinationDesc && packageName && packagePrice) {
        const newDestination = {
            name: destinationName,
            description: destinationDesc,
            packages: [
                { name: packageName, price: packagePrice }
            ]
        };

        // Add to destinations array
        destinations.push(newDestination);
        localStorage.setItem("destinations", JSON.stringify(destinations));

        // Clear input fields
        document.getElementById("destination-name").value = '';
        document.getElementById("destination-desc").value = '';
        document.getElementById("travel-package-name").value = '';
        document.getElementById("travel-package-price").value = '';

        loadDestinations();
    } else {
        alert("Please fill in all fields.");
    }
}

// Load destinations from localStorage
function loadDestinations() {
    const destinationList = document.getElementById("destination-list");
    destinationList.innerHTML = "";

    destinations.forEach((destination, index) => {
        const li = document.createElement("li");
        li.textContent = destination.name;
        li.onclick = () => viewDestinationDetails(index);

        destinationList.appendChild(li);
    });
}


function viewDestinationDetails(index) {
    const destination = destinations[index];

    
    document.getElementById("destination-name-detail").textContent = destination.name;
    document.getElementById("destination-desc-detail").textContent = destination.description;

    const packageList = document.getElementById("destination-packages");
    packageList.innerHTML = ""; 

    if (destination.packages && destination.packages.length > 0) {
        destination.packages.forEach(pkg => {
            const li = document.createElement("li");
            li.textContent = `${pkg.name} - ₹${pkg.price}`;
            packageList.appendChild(li);
        });
    } else {
        const noPackageMessage = document.createElement("li");
        noPackageMessage.textContent = "No packages available for this destination.";
        packageList.appendChild(noPackageMessage);
    }

    
    document.getElementById("destination-list-section").style.display = "none";
    document.getElementById("destination-details-section").style.display = "block";
}


function goBackToList() {
    document.getElementById("destination-list-section").style.display = "block";
    document.getElementById("destination-details-section").style.display = "none";
}

window.onload = loadDestinations;
