

$("#add").on("click", addItem);

function addItem(e){

    e.preventDefault();

    var nombre = document.querySelector('#item');

    let container = document.querySelector("#lista");

    container.innerHTML+=`
        <div class = "shopItem">
            <p class = "itemShop" id = "b">${nombre.value}</p>
            <button class = "checar" type = "text" id = "check">
                Check
            </button>
            <button class = "del" type = "text" id = "borra">
                Delete
            </button>
        </div>
    `;
}

$(".del").on("click", removeItem);

function removeItem(e){

    e.preventDefault();

}

$(".checar").on("click", checkItem);

function checkItem(e){

    
}