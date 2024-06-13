while (true) {
    let namenLijst = [];
    let namenAantal = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)");

    if (namenAantal >= 3) {
        for (let i = 0; i < namenAantal; i++) {
            let namen = prompt("Voer een naam in: ");
            namenLijst.push(namen);
        }
        window.alert("De ingevoerde namen zijn: " + namenLijst);
        break;

    } else {
        window.alert("U moet minimaal 3 namen invoeren.");
    }
}