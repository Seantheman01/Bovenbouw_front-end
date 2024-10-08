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

function hoorn_of_bak(aantal) {
    while (true) {
        let soort = prompt("Wilt u deze " + aantal + " bolletje(s) in een hoorntje of een bakje?");
        if (soort == "hoorntje" || soort == "bakje") {
            return soort;
        }else {
            print("Sorry, dat snap ik niet...");
        }
    }
}

function meer_bestellen(soort, aantal) {
    while (true) {
        alert("Hier is uw " + soort + " met " + aantal + " bolletje(s).");
        let opnieuw = prompt("Wilt u nog meer bestellen?");
        if (opnieuw == "ja") {
            return opnieuw;
        }
        else if (opnieuw == "nee") {
            alert("Bedankt en tot ziens!");
            break;
        }else {
            print("Sorry, dat snap ik niet...");
        }
    }
}

while (true) {
    aantal = aantal_bolletjes();
    if (aantal >= 4) {
        soort = "bakje"
    }else {
        soort = hoorn_of_bak(aantal)
    }
    opnieuw = meer_bestellen(soort, aantal);
    if (!opnieuw) {
        break;
    }
}