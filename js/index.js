$("#add").on("click", addItem);

function addItem(e){

    e.preventDefault();

    var nombre = document.querySelector('#item');

    let container = document.querySelector("#lista");

    container.innerHTML+=`
        <li class = "lis">
            <p class = "itemShop" id = "b">${nombre.value}</p>
            <button class = "checar" type = "text">
                Check
            </button>
            <button class = "del" type = "text">
                Delete
            </button>
        </li>
    `;
}

$("ul").on("click", ".del", removeItem);

function removeItem(e){
    e.preventDefault();

    $(this).parent().remove();
}

$("ul").on("click", ".checar", checkItem);

function checkItem(e){

    e.preventDefault();

    var text = $(this);

    if(text.parent().hasClass('chec')){
        text.parent().removeClass('chec');
    }
    else{
        text.parent().addClass('chec');
    }
}