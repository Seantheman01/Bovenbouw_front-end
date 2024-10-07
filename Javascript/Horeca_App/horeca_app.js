alert("Welkom bij Papi Gelato. Je mag alle smaken kiezen zolang het maar vanille ijs is.");

function aantal_bolletjes() {
    while (true) {
        let aantal = parseInt(prompt("Hoeveel bolletjes wilt u?"));
        if (aantal >= 1 && aantal <= 3) {
            return aantal;
        }
        else if (aantal >= 4 && aantal <= 8) {
            alert("Dan krijgt u van mij een bakje met " + aantal + " bolletjes.");
            return aantal;
        }
        else if (aantal > 8) {
            alert("Sorry, zulke grote bakken hebben we niet.");
        }else {
            alert("Sorry, dat snap ik niet...");
        }
    }
}

aantal_bolletjes();