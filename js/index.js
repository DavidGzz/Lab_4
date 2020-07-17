var counter;

function init(){
    counter = 0;
}

init();

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
    counter++;
}

$("ul").on("click", ".del", removeItem);

function removeItem(e){
    e.preventDefault();
    console.log($(this).parent());
    $(this).parent().remove();
}

$("ul").on("click", ".checar", checkItem);

function checkItem(e){

    e.preventDefault();

    if(text.classList.contains('chec')){
        text.classList.remove('chec');
    }
    else{
        text.classList.add('chec');
    }
}