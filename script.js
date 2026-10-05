// ==========================================================
// PROJECTEN
// ==========================================================

// Dit is een array met alle projecten die op de
// projectenpagina kunnen worden weergegeven.
//
// Een array is een lijst waarin meerdere gegevens
// kunnen worden opgeslagen.
//
// Elk project is een object met verschillende eigenschappen,
// zoals:
// - naam
// - link
// - afbeelding
// - programmeertaal
// - beschrijving
// - tags

const projecten = [

    // ======================================================
    // PROJECT 1
    // ======================================================

    {
        href: "https://github.com/delisha11/c-/tree/main/opg1PM",
        categoryClass: "cpp",
        aria: "Bekijk C++ Basisprogrammeren",

        // Afbeelding die op de projectkaart wordt gebruikt.
        img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=700&fit=crop&auto=format",

        // Alternatieve tekst voor toegankelijkheid.
        imgalt: "C++ Basisprogrammeren",

        // Status van het project.
        status: "schoolopdracht",

        // Naam van het project.
        name: "C++ Basisprogrammeren",

        // Korte tekst onder de titel.
        tagline: "Mijn eerste programmeeropdracht in C++",

        // Uitgebreidere beschrijving.
        desc: "Een programmeeropdracht waarin ik de basis van C++ heb geleerd en toegepast. Hierbij heb ik geoefend met het opbouwen van een programma en het schrijven van logica.",

        // Tags die bij het project horen.
        tags: [
            "C++",
            "Programmeren"
        ],

        // Tekst van de link onderaan de kaart.
        linktext: "Bekijk project →"
    },


    // ======================================================
    // PROJECT 2
    // ======================================================

    {
        href: "https://github.com/delisha11/c-/tree/main/opg2",
        categoryClass: "cpp",
        aria: "Bekijk C++ Functies en Logica",

        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=700&fit=crop&auto=format",
        imgalt: "C++ Functies en Logica",

        status: "schoolopdracht",
        name: "C++ Functies & Logica",
        tagline: "Verder bouwen op de basis van C++",

        desc: "In deze opdracht heb ik verder geoefend met programmeren in C++. De focus lag op het toepassen van functies en programmeerlogica om een programma overzichtelijk op te bouwen.",

        tags: [
            "C++",
            "Functies",
            "Logica"
        ],

        linktext: "Bekijk project →"
    },


    // ======================================================
    // PROJECT 3
    // ======================================================

    {
        href: "https://github.com/delisha11/c-/tree/main/opg3",
        categoryClass: "cpp",
        aria: "Bekijk Nonogram",

        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=700&fit=crop&auto=format",
        imgalt: "Nonogram",

        status: "schoolopdracht",
        name: "Nonogram",
        tagline: "Een logisch puzzelspel gemaakt in C++",

        desc: "Voor Programmeermethoden heb ik samen met Joelle Tiao een Nonogram-puzzel gemaakt in C++. De speler kan door de puzzel bewegen, vakken aanpassen en verschillende instellingen gebruiken.",

        tags: [
            "C++",
            "Classes",
            "Arrays"
        ],

        linktext: "Bekijk project →"
    },


    // ======================================================
    // PROJECT 4
    // ======================================================

    {
        href: "https://github.com/delisha11/c-/tree/main/opg4",
        categoryClass: "cpp",
        aria: "Bekijk Gomoku",

        img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=700&fit=crop&auto=format",
        imgalt: "Gomoku",

        status: "schoolopdracht",
        name: "Gomoku",
        tagline: "Een bordspel waarbij je als eerste vijf stenen op een rij krijgt",

        desc: "Voor Programmeermethoden heb ik samen met Joelle Tiao een Gomoku-spel gemaakt in C++. Het programma ondersteunt speler tegen speler, speler tegen computer en computer tegen computer.",

        tags: [
            "C++",
            "Classes",
            "Pointers",
            "Arrays"
        ],

        linktext: "Bekijk project →"
    },


    // ======================================================
    // PROJECT 5
    // ======================================================

    {
        href: "https://github.com/LeakyIO/EcoNectDesktopGUI",
        categoryClass: "java",
        aria: "Bekijk EcoNect Desktop GUI",

        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=700&fit=crop&auto=format",
        imgalt: "EcoNect Desktop GUI",

        status: "challenge",
        name: "EcoNect Desktop GUI",
        tagline: "Een Java challenge met een grafische interface",

        desc: "Voor deze challenge heb ik gewerkt aan een desktopapplicatie in Java. Hierbij heb ik gewerkt met objectgeoriënteerd programmeren en een grafische gebruikersinterface.",

        tags: [
            "Java",
            "OOP",
            "GUI"
        ],

        linktext: "Bekijk project →"
    },


    // ======================================================
    // PROJECT 6
    // ======================================================

    {
        href: "https://github.com/danjazhang/SE2",
        categoryClass: "java",
        aria: "Bekijk Hotel Simulator",

        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=700&fit=crop&auto=format",
        imgalt: "Hotel Simulator",

        status: "schoolproject",
        name: "Hotel Simulator",
        tagline: "Een hotelsimulatie gemaakt met Java",

        desc: "Een Java-project waarin een hotelsimulatie is ontwikkeld. Hierbij is gewerkt met Swing, MVC en verschillende onderdelen voor het simuleren van gebeurtenissen in een hotel.",

        tags: [
            "Java",
            "Swing",
            "MVC",
            "JUnit"
        ],

        linktext: "Bekijk project →"
    }

];


// ==========================================================
// PROJECTKAART MAKEN
// ==========================================================

// Deze functie maakt één projectkaart.
//
// De functie krijgt één project-object mee.
//
// Bijvoorbeeld het object van "Gomoku".
//
// Vervolgens maakt JavaScript automatisch alle HTML-elementen
// voor deze projectkaart.
//
// Hierdoor hoef ik niet voor ieder project dezelfde HTML
// handmatig opnieuw te schrijven.

function createProjectCard(project) {

    // ------------------------------------------------------
    // KLIKBARE PROJECTKAART
    // ------------------------------------------------------

    // Maak een <a>-element.
    //
    // De volledige projectkaart wordt hierdoor klikbaar.
    const link = document.createElement("a");

    // Gebruik de GitHub-link uit het project-object.
    link.href = project.href;

    // Voeg CSS-klassen toe.
    //
    // Bijvoorbeeld:
    // "project project-cpp"
    //
    // Hierdoor kan CSS onderscheid maken tussen
    // verschillende soorten projecten.
    link.className = `project project-${project.categoryClass}`;

    // aria-label geeft een duidelijke beschrijving
    // voor gebruikers van een screenreader.
    link.setAttribute("aria-label", project.aria);

    // Open het project in een nieuw tabblad.
    link.target = "_blank";

    // Beveiligingsmaatregel die wordt gebruikt bij
    // links die met target="_blank" worden geopend.
    link.rel = "noopener noreferrer";


    // ------------------------------------------------------
    // AFBEELDING
    // ------------------------------------------------------

    // Maak een container voor de afbeelding.
    const imageContainer = document.createElement("div");

    // Geef de container de CSS-klasse.
    imageContainer.className = "project-image";

    // Maak een img-element.
    const image = document.createElement("img");

    // Gebruik de afbeelding uit het project-object.
    image.src = project.img;

    // Gebruik de alternatieve tekst uit het project-object.
    image.alt = project.imgalt;


    // Maak een span voor het pijltje.
    const arrow = document.createElement("span");

    // CSS-klasse voor het pijltje.
    arrow.className = "project-arrow";

    // Tekst van het pijltje.
    arrow.textContent = "→";

    // Voeg de afbeelding en het pijltje toe
    // aan de afbeelding-container.
    imageContainer.append(image, arrow);


    // ------------------------------------------------------
    // TEKST VAN HET PROJECT
    // ------------------------------------------------------

    // Container voor alle tekstuele projectinformatie.
    const content = document.createElement("div");

    // CSS-klasse voor de tekstcontainer.
    content.className = "project-content";


    // Status, bijvoorbeeld "schoolopdracht".
    const status = document.createElement("span");

    status.className = "status";
    status.textContent = project.status;


    // Titel van het project.
    const title = document.createElement("h2");

    title.textContent = project.name;


    // Korte omschrijving onder de titel.
    const tagline = document.createElement("p");

    tagline.className = "tagline";
    tagline.textContent = project.tagline;


    // Uitgebreidere beschrijving van het project.
    const desc = document.createElement("p");

    desc.textContent = project.desc;


    // ------------------------------------------------------
    // TAGS
    // ------------------------------------------------------

    // Container waarin de tags komen.
    const tags = document.createElement("div");

    tags.className = "tags";


    // Loop door alle tags van het project.
    //
    // Bijvoorbeeld bij Gomoku:
    // - C++
    // - Classes
    // - Pointers
    // - Arrays
    project.tags.forEach(tagText => {

        // Maak voor iedere tag een <span>.
        const tag = document.createElement("span");

        // CSS-klasse voor de tag.
        tag.className = "tag";

        // Zet de tekst van de tag erin.
        tag.textContent = tagText;

        // Voeg de tag toe aan de tags-container.
        tags.appendChild(tag);
    });


    // ------------------------------------------------------
    // LINKTEKST
    // ------------------------------------------------------

    // Maak een span voor de tekst onderaan de kaart.
    const linkText = document.createElement("span");

    linkText.className = "project-link-text";

    // Gebruik de tekst uit het project-object.
    linkText.textContent = project.linktext;


    // ------------------------------------------------------
    // CONTENT SAMENVOEGEN
    // ------------------------------------------------------

    // Voeg alle tekstonderdelen toe aan de content-container.
    content.append(
        status,
        title,
        tagline,
        desc,
        tags,
        linkText
    );


    // Voeg de afbeelding en tekst toe aan de klikbare link.
    link.append(imageContainer, content);


    // Geef de complete projectkaart terug.
    return link;
}


// ==========================================================
// PROJECTEN WEERGEVEN
// ==========================================================

// Deze functie bepaalt welke projecten zichtbaar zijn.
//
// filter:
// - "all" = alle projecten
// - "cpp" = alleen C++-projecten
// - "java" = alleen Java-projecten
//
// sort:
// - "default" = oorspronkelijke volgorde
// - "az" = alfabetisch A-Z
// - "za" = alfabetisch Z-A

function renderProjects(filter = "all", sort = "default") {

    // Zoek het element waarin de projectkaarten
    // geplaatst moeten worden.
    const grid = document.getElementById("project-grid");


    // Zoek het element waarin het aantal zichtbare
    // projecten wordt weergegeven.
    const count = document.getElementById("project-count");


    // Als project-grid niet bestaat, stoppen we.
    //
    // Dit is belangrijk omdat script.js ook op andere
    // pagina's wordt geladen.
    if (!grid) {
        return;
    }


    // ------------------------------------------------------
    // FILTEREN
    // ------------------------------------------------------

    // Filter de projectenlijst.
    //
    // Als filter "all" is, worden alle projecten meegenomen.
    //
    // Anders wordt alleen gekeken naar projecten waarvan
    // categoryClass overeenkomt met de gekozen filter.
    let list = projecten.filter(
        project =>
            filter === "all" ||
            project.categoryClass === filter
    );


    // ------------------------------------------------------
    // SORTEREN A-Z
    // ------------------------------------------------------

    if (sort === "az") {

        // sort() verandert de volgorde van de array.
        //
        // localeCompare() wordt gebruikt om de namen
        // alfabetisch met elkaar te vergelijken.
        list.sort(
            (a, b) => a.name.localeCompare(b.name)
        );
    }


    // ------------------------------------------------------
    // SORTEREN Z-A
    // ------------------------------------------------------

    if (sort === "za") {

        // Door b en a om te draaien wordt de volgorde
        // omgekeerd.
        list.sort(
            (a, b) => b.name.localeCompare(a.name)
        );
    }


    // ------------------------------------------------------
    // OUDE PROJECTEN VERWIJDEREN
    // ------------------------------------------------------

    // Verwijder alle bestaande projectkaarten uit de grid.
    grid.replaceChildren();


    // ------------------------------------------------------
    // NIEUWE PROJECTEN TOEVOEGEN
    // ------------------------------------------------------

    // Loop door de gefilterde en/of gesorteerde lijst.
    list.forEach(project => {

        // Maak voor ieder project een kaart.
        const card = createProjectCard(project);

        // Voeg de kaart toe aan de project-grid.
        grid.appendChild(card);
    });


    // ------------------------------------------------------
    // AANTAL PROJECTEN WEERGEVEN
    // ------------------------------------------------------

    // Controleer of het count-element bestaat.
    if (count) {

        // Laat zien hoeveel projecten momenteel zichtbaar zijn.
        count.textContent =
            `${list.length} project(en) weergegeven`;
    }
}


// ==========================================================
// FILTERS EN SORTERING
// ==========================================================

// Deze functie zorgt ervoor dat de filterknoppen
// en de sorteerkeuze werken.

function setupProjectFilters() {

    // Zoek de project-grid.
    const grid = document.getElementById("project-grid");


    // Als de project-grid niet bestaat, zitten we
    // bijvoorbeeld op de whoami-pagina.
    //
    // Dan hoeven de projectfilters niets te doen.
    if (!grid) {
        return;
    }


    // Zoek alle filterknoppen binnen project-controls.
    const buttons = document.querySelectorAll(
        "#project-controls .filter"
    );


    // Zoek de dropdown waarmee de projecten
    // gesorteerd kunnen worden.
    const sort = document.getElementById("project-sort");


    // Bij het openen van de pagina is "all" actief.
    let active = "all";


    // ------------------------------------------------------
    // FILTERKNOPPEN
    // ------------------------------------------------------

    // Voeg aan iedere filterknop een click-event toe.
    buttons.forEach(button => {

        button.addEventListener("click", () => {

            // Lees uit het data-filter-attribuut welke
            // filter de gebruiker heeft gekozen.
            //
            // Bijvoorbeeld:
            // data-filter="cpp"
            active = button.dataset.filter;


            // Verwijder de class "active" van alle knoppen.
            buttons.forEach(otherButton => {
                otherButton.classList.remove("active");
            });


            // Voeg "active" toe aan de aangeklikte knop.
            button.classList.add("active");


            // Toon de projecten met de gekozen filter.
            //
            // De huidige sorteerkeuze wordt behouden.
            renderProjects(
                active,
                sort ? sort.value : "default"
            );
        });
    });


    // ------------------------------------------------------
    // SORTEERDROPDOWN
    // ------------------------------------------------------

    // Controleer of de sorteer-dropdown bestaat.
    if (sort) {

        // change wordt uitgevoerd wanneer de gebruiker
        // een andere optie kiest.
        sort.addEventListener("change", () => {

            // Render de projecten opnieuw met de huidige
            // filter en de nieuwe sorteerkeuze.
            renderProjects(
                active,
                sort.value
            );
        });
    }


    // Toon bij het laden van de pagina alle projecten.
    renderProjects();
}


// ==========================================================
// CONTACTFORMULIER - FOUTMELDING
// ==========================================================

// Deze functie laat een foutmelding zien bij een invoerveld.
//
// De functie krijgt drie dingen mee:
// - het inputveld
// - het foutmeldingselement
// - de foutmelding zelf

function showFieldError(input, error, message) {

    // Zet de fouttekst in het foutmeldingselement.
    error.textContent = message;


    // aria-invalid="true" geeft aan dat de invoer
    // niet geldig is.
    //
    // Dit helpt ook bij toegankelijkheid.
    input.setAttribute(
        "aria-invalid",
        "true"
    );
}


// Deze functie verwijdert een bestaande foutmelding.

function clearFieldError(input, error) {

    // Maak de fouttekst leeg.
    error.textContent = "";


    // Geef aan dat het veld niet meer als ongeldig
    // wordt gemarkeerd.
    input.setAttribute(
        "aria-invalid",
        "false"
    );
}


// ==========================================================
// NAAM CONTROLEREN
// ==========================================================

// Deze functie controleert of de naam geldig is.

function validateName() {

    // Zoek het naamveld op basis van het id.
    const input = document.getElementById("naam");


    // Zoek het element waarin de foutmelding moet komen.
    const error = document.getElementById("naam-error");


    // Als het formulier niet op deze pagina staat,
    // is er niets om te controleren.
    if (!input) {
        return true;
    }


    // trim() verwijdert spaties aan het begin en einde
    // van de ingevoerde tekst.
    const value = input.value.trim();


    // Controleer of het veld leeg is.
    if (!value) {

        showFieldError(
            input,
            error,
            "Vul je naam in."
        );

        return false;
    }


    // Controleer of de naam minimaal 2 tekens bevat.
    if (value.length < 2) {

        showFieldError(
            input,
            error,
            "Je naam moet minimaal 2 tekens bevatten."
        );

        return false;
    }


    // Als alle controles goed zijn,
    // wordt de eventuele foutmelding verwijderd.
    clearFieldError(input, error);

    return true;
}


// ==========================================================
// E-MAIL CONTROLEREN
// ==========================================================

// Deze functie controleert of het e-mailadres
// een geldig formaat heeft.

function validateEmail() {

    // Zoek het e-mailveld.
    const input = document.getElementById("email");


    // Zoek de foutmelding.
    const error = document.getElementById("email-error");


    // Als het formulier niet aanwezig is,
    // hoeft er niets gecontroleerd te worden.
    if (!input) {
        return true;
    }


    // Verwijder onnodige spaties aan het begin en einde.
    const value = input.value.trim();


    // Controleer of het veld leeg is.
    if (!value) {

        showFieldError(
            input,
            error,
            "Vul je e-mailadres in."
        );

        return false;
    }


    // Controleer met een reguliere expressie
    // of het e-mailadres ongeveer het juiste formaat heeft.
    //
    // Bijvoorbeeld:
    // delisha@gmail.com -> geldig formaat
    //
    // De expressie controleert onder andere op:
    // - tekst vóór @
    // - een @
    // - tekst na @
    // - een punt in het domein
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {

        showFieldError(
            input,
            error,
            "Vul een geldig e-mailadres in."
        );

        return false;
    }


    // Alles is geldig.
    clearFieldError(input, error);

    return true;
}


// ==========================================================
// BERICHT CONTROLEREN
// ==========================================================

// Deze functie controleert het berichtveld.

function validateMessage() {

    // Zoek het berichtveld.
    const input = document.getElementById("bericht");


    // Zoek het foutmeldingselement.
    const error = document.getElementById("bericht-error");


    // Als het formulier niet aanwezig is,
    // hoeft er niets gecontroleerd te worden.
    if (!input) {
        return true;
    }


    // Verwijder spaties aan het begin en einde.
    const value = input.value.trim();


    // Controleer of het bericht leeg is.
    if (!value) {

        showFieldError(
            input,
            error,
            "Vul een bericht in."
        );

        return false;
    }


    // Controleer of het bericht minimaal 10 tekens heeft.
    if (value.length < 10) {

        showFieldError(
            input,
            error,
            "Je bericht moet minimaal 10 tekens bevatten."
        );

        return false;
    }


    // Als alles geldig is, verwijder de foutmelding.
    clearFieldError(input, error);

    return true;
}


// ==========================================================
// CONTACTFORMULIER INSTELLEN
// ==========================================================

// Deze functie zorgt ervoor dat het contactformulier
// interactief werkt.

function setupContactForm() {

    // Zoek het formulier.
    const form = document.getElementById("contact-form");


    // Als het formulier niet op deze pagina staat,
    // hoeft JavaScript niets te doen.
    if (!form) {
        return;
    }


    // Zoek de drie invoervelden.
    const name = document.getElementById("naam");
    const email = document.getElementById("email");
    const message = document.getElementById("bericht");


    // Zoek het element voor de succesmelding.
    const success = document.getElementById("form-success");


    // ------------------------------------------------------
    // VALIDATIE BIJ HET VERLATEN VAN EEN VELD
    // ------------------------------------------------------

    // blur betekent dat de gebruiker het invoerveld
    // heeft verlaten.
    //
    // Op dat moment wordt het veld gecontroleerd.
    name.addEventListener("blur", validateName);

    email.addEventListener("blur", validateEmail);

    message.addEventListener("blur", validateMessage);


    // ------------------------------------------------------
    // FORMULIER VERSTUREN
    // ------------------------------------------------------

    // Luister naar het submit-event van het formulier.
    form.addEventListener("submit", event => {

        // Voorkom dat de browser de pagina opnieuw laadt.
        event.preventDefault();


        // Controleer alle drie de velden.
        //
        // Iedere validatiefunctie geeft true of false terug.
        //
        // .every(Boolean) controleert of alle waarden true zijn.
        const valid = [
            validateName(),
            validateEmail(),
            validateMessage()
        ].every(Boolean);


        // Als één veld ongeldig is, stoppen we hier.
        if (!valid) {

            // Verwijder eventueel een oude succesmelding.
            success.textContent = "";


            // Zoek het eerste veld dat ongeldig is
            // en geef dit de focus.
            form.querySelector(
                '[aria-invalid="true"]'
            )?.focus();

            return;
        }


        // --------------------------------------------------
        // GELDIG FORMULIER
        // --------------------------------------------------

        // Toon een succesmelding.
        success.textContent =
            "Bedankt! Het formulier is succesvol gecontroleerd.";


        // Maak alle invoervelden weer leeg.
        form.reset();


        // Zet aria-invalid bij alle velden terug naar false.
        [name, email, message].forEach(input => {

            input.setAttribute(
                "aria-invalid",
                "false"
            );
        });
    });
}


// ==========================================================
// PROGRAMMEERQUOTE API
// ==========================================================

// Dit is het adres van de API.
//
// Een API is een manier waarop een programma gegevens
// kan opvragen of uitwisselen met een andere applicatie
// of server.
//
// In dit geval wordt een willekeurige programmeerquote
// opgevraagd.

const quoteApiUrl =
    "https://www.drivebird.com/api/quotes/random";


// ==========================================================
// QUOTE OPHALEN
// ==========================================================

// Deze functie haalt een nieuwe quote op uit de API.
//
// async betekent dat deze functie asynchroon werkt.
// Hierdoor kan JavaScript wachten op de reactie van
// de externe server zonder de rest van de pagina
// volledig te blokkeren.

async function loadProgrammingQuote() {

    // Zoek de HTML-elementen waarin de API-resultaten
    // moeten worden weergegeven.
    const status = document.getElementById("quote-status");
    const content = document.getElementById("quote-content");
    const author = document.getElementById("quote-author");


    // Als deze elementen niet bestaan,
    // hoeft de functie niets te doen.
    if (!status || !content || !author) {
        return;
    }


    // Laat tijdens het laden zien dat de quote
    // wordt opgehaald.
    status.textContent = "Quote wordt geladen...";


    // Maak oude quote-informatie leeg.
    content.textContent = "";
    author.textContent = "";


    // try/catch gebruiken we om fouten netjes op te vangen.
    //
    // Bijvoorbeeld wanneer:
    // - de API niet bereikbaar is
    // - de server een fout geeft
    // - de response niet de verwachte gegevens bevat
    try {

        // fetch() stuurt een HTTP-verzoek naar de API.
        //
        // await zorgt ervoor dat de functie wacht
        // totdat de server antwoord geeft.
        const response = await fetch(quoteApiUrl);


        // response.ok is true wanneer de HTTP-response
        // succesvol is.
        //
        // Bij bijvoorbeeld een 404 of 500 is dit false.
        if (!response.ok) {

            throw new Error(
                `HTTP-fout: ${response.status}`
            );
        }


        // De API stuurt JSON terug.
        //
        // response.json() zet de JSON om naar
        // een JavaScript-object.
        const data = await response.json();


        // Controleer of de API daadwerkelijk een quote
        // heeft teruggestuurd.
        if (!data.data || !data.data[0]) {

            throw new Error(
                "Onvolledige API-response."
            );
        }


        // Pak de eerste quote uit de lijst.
        const quote = data.data[0];


        // Controleer of zowel de quote als de auteur
        // aanwezig zijn.
        if (!quote.quote || !quote.author) {

            throw new Error(
                "Quote of auteur ontbreekt."
            );
        }


        // Zet de quote in het blockquote-element.
        content.textContent =
            `“${quote.quote}”`;


        // Zet de naam van de auteur onder de quote.
        author.textContent =
            `— ${quote.author}`;


        // Laat zien dat de quote succesvol is geladen.
        status.textContent =
            "Nieuwe quote geladen.";

    } catch (error) {

        // Als er ergens in de try-block een fout ontstaat,
        // komt de code hier terecht.
        //
        // console.error() laat de technische fout
        // zien in de browserconsole.
        console.error(
            "API-fout:",
            error
        );


        // De gebruiker krijgt een begrijpelijke melding
        // in plaats van de technische fout.
        status.textContent =
            "De quote kon niet worden geladen. Probeer het opnieuw.";
    }
}


// ==========================================================
// QUOTE API INSTELLEN
// ==========================================================

// Deze functie koppelt de knop "Nieuwe quote"
// aan de functie die de API aanroept.

function setupQuoteApi() {

    // Zoek de knop in de HTML.
    const button = document.getElementById("new-quote");


    // Als de knop niet bestaat, stoppen we.
    //
    // Dit voorkomt fouten op pagina's waarop
    // de quote-sectie niet aanwezig is.
    if (!button) {
        return;
    }


    // Wanneer de gebruiker op de knop klikt,
    // wordt een nieuwe quote opgehaald.
    button.addEventListener(
        "click",
        loadProgrammingQuote
    );


    // Haal ook direct een quote op wanneer
    // de pagina wordt geopend.
    loadProgrammingQuote();
}


// ==========================================================
// START VAN HET SCRIPT
// ==========================================================

// DOMContentLoaded betekent dat we wachten totdat
// de HTML volledig is ingelezen.
//
// Daarna worden de verschillende onderdelen
// van het JavaScript gestart.

document.addEventListener(
    "DOMContentLoaded",
    () => {

        // Projectfilters instellen.
        setupProjectFilters();


        // Contactformulier instellen.
        setupContactForm();


        // Quote API instellen.
        setupQuoteApi();
    }
);