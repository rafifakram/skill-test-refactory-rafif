[
    {
        "inventory_id": 9382,
        "name": "Brown Chair",
        "type": "furniture",
        "tags": [
            "chair",
            "furniture",
            "brown"
        ],
        "purchased_at": 1579190471,
        "placement": {
            "room_id": 3,
            "name": "Meeting Room"
        }
    },
    {
        "inventory_id": 9380,
        "name": "Big Desk",
        "type": "furniture",
        "tags": [
            "desk",
            "furniture",
            "brown"
        ],
        "purchased_at": 1579190642,
        "placement": {
            "room_id": 3,
            "name": "Meeting Room"
        }
    },
    {
        "inventory_id": 2932,
        "name": "LG Monitor 50 inch",
        "type": "electronic",
        "tags": [
            "monitor"
        ],
        "purchased_at": 1579017842,
        "placement": {
            "room_id": 3,
            "name": "Lavender"
        }
    },
    {
        "inventory_id": 232,
        "name": "Sharp Pendingin Ruangan 2PK",
        "type": "electronic",
        "tags": [
            "ac"
        ],
        "purchased_at": 1578931442,
        "placement": {
            "room_id": 5,
            "name": "Dhanapala"
        }
    },
    {
        "inventory_id": 9382,
        "name": "Alat Makan",
        "type": "tableware",
        "tags": [
            "spoon",
            "fork",
            "tableware"
        ],
        "purchased_at": 1578672242,
        "placement": {
            "room_id": 10,
            "name": "Rajawali"
        }
    }
]


// Find items in the Meeting Room
for (let i = 0; i < json.length; i++) {
    if (json[i].placement.name === "Meeting Room") [
        console.log(json[i.name])
    ]
}

// // Find all electronic devices
for (let i = 0; i < json.length; i++) {
    if (json[i].type === "electronic") [
        console.log(json[i.name])
    ]
}

// // Find all the furniture
for (let i = 0; i < json.length; i++) {
    if (json[i].type === "furniture") [
        console.log(json[i.name])
    ]
}

// // Find all items with brown color
for (let i = 0; i < json.length; i++) {
    if (json[i].tags === "brown") [
        console.log(json[i.name])
    ]
}

// Find all items were purchased on 16 Januari 2020
function filterPurchasedAt(data, dateString) {
    let arr = [];
    data.forEach((element) => {
        var date = new Date(element.purchased_at * 1000)
        if (date.toDateString() === dateString) {
            console.log(element)
        }
    })
    console.log(arr)
}

let date = "Thu Jan 16 2020"

filterPurchasedAt(data, date)