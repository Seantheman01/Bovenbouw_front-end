while (true) {
    let namenLijst = [];
    let namenAantal = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)");

    if (namenAantal >= 3) {
        for (let i = 0; i < namenAantal; i++) {
            while (true) {
                let namen = prompt("Voer een naam in: ");
                if (namen != "") {
                    namenLijst.push(namen);
                    break;
                } else {
                    window.alert("U moet een naam invoeren.");
                }
            }
        }
        window.alert("De ingevoerde namen zijn: " + namenLijst);
        break;

    } else {
        window.alert("Het moeten minimaal 3 namen zijn.");
    }
}