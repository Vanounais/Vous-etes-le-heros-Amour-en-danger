// ----------------------------------------------- ChapterObj -------------------------------------------------------
let chapterObj = {
    contexte:{
        subtitle: "Contexte",
        texte: "Vous incarnez le personnage de Moss se préparant pour une soirée qui se promet d'être la meilleure soirée de toute sa vie puisque sa meilleure amie depuis toujours, Magenta, y ait invité également. Après un peu plus de 19 ans de begin mutuelle non avoué il etais bien temps que l'un d'eux se decide à faire le premier pas.",
        img: "assets/image/chic.png",
        options:[{text: "Suivant", action: 'goToChapter("preparation")'}]
    },
    preparation:{
        subtitle: "Préparation",
        texte: "Moss a encore quelques trucs à faire avant de se mettre en route.",
        img: "assets/image/chic.png",
        options:[{text: "S'habiller chic", action: 'goToChapter("jeSuisChic")'}, {text: "Rester naturel", action: 'goToChapter("naturel")'}, {text: "Nudisme?!", action: 'goToChapter("naturaliste")'}]
    },
    jeSuisChic:{
        subtitle: "Préparation",
        texte: "Vous mettez les vêtements les plus chics que vous posséder.",
        img: "assets/image/chic.png",
        options:[{text: "Suivant", action: 'goToChapter("coupDeFil")'}]
    },
    naturel:{
        subtitle: "Préparation",
        texte: "Vous vous habillez avec les mêmes vêtements que d'habitude.",
        img: "assets/image/normal.png",
        options:[{text: "Suivant", action: 'goToChapter("coupDeFil")'}]
    },
    naturaliste:{
        subtitle: "Préparation",
        texte: "Loin de moi l'idée de juger vos choix mais avez-vous bien compris l'objectif de Moss?",
        img: "assets/image/pegi18.png",
        options:[{text: "Maintenir mon choix", action: 'goToChapter("naturaliste2")'}, {text: "Revenir sur ma décision", action: 'goToChapter("preparation")'}]
    },
    naturaliste2:{
        subtitle: "Préparation",
        texte: "Vous avez un sacré sens de l'humour... Envoyez ce pauvre Moss conquérir sa dulcinée avec nul autre que son charme naturel est une tentative risquée mais c'est vous qui décidez après tout.",
        img: "assets/image/pegi18.png",
        // key picked up here
        options:[{text: "Suivant", action: 'toggleNaturaliste()'}]
    },
    coupDeFil:{
        subtitle: "Coup de fil",
        texte: "Avant d'y aller vous vous souvenez que magenta vous avait demandé plus tôt de la prévenir dès que vous seriez pres à partir pour arriver à cette soirée en même temps.",
        img: "assets/image/phone.gif",
        options:[{text: "Vous l'appeler", action: 'goToChapter("noReponse")'}, {text: "Envoyer un texto", action: 'goToChapter("noReponse")'}]
    },
    noReponse:{
        subtitle: "Coup de fil",
        texte: "Vous ne recevez malheureusement aucune réponse de la part de Magenta elle est peut-être déjà partie donc ne perdons pas de temps.",
        img: "assets/image/phone.gif",
        options:[{text: "Suivant", action: 'goToChapter("objetDecisif")'}]
    },
    objetDecisif:{
        subtitle: "Objet décisif",
        texte: "Juste avant de partir vous passer devant votre bureau pour y prendre un objet. Lequel prenez-vous?",
        img: "assets/image/chic.png",
        options:[{text: "Une feuille et un crayon", action: 'goToChapter("feuilleCrayon")'}, {text: "Un pied-de-biche", action: 'goToChapter("piedDeBiche")'}, {text: "Une bague de mariage", action: 'goToChapter("bagueMariage")'}]
    },
    feuilleCrayon:{
        subtitle: "Objet decisif",
        texte: "Vous écrivez un magnifique discours très émouvant sur la manière dont vous ête tomber amoureux de Magenta et le mettez dans votre poches.",
        img: "assets/image/feuille.jpg",
        options:[{text: "Suivant", action: 'goToChapter("depart")'}]
    },
    piedDeBiche:{
        subtitle: "Objet décisif",
        texte: "Hmmr, hmmr... puis-je vous demandez quelles sont vos intentions avec ce pied-de-biche? Quoi qu'il en soit vous prenez ce pied-de-biche au cas où les choses tourneraient mal. Esperons simplement que vous n'y trouverez aucune utilitée.",
        img: "assets/image/crowbar.jpg",
        // key picked up here
        options:[{text: "Suivant", action: 'togglePiedDeBiche()'}]
    },
    bagueMariage:{
        subtitle: "Un dernier truc pour la route",
        texte: "Vous prenez la vieille bague de mariage qui vous a été léguer par votre grand-père avant de mourir.",
        img: "assets/image/papa.jpg",
        options:[{text: "Suivant", action: 'goToChapter("depart")'}]
    },
    depart:{
        subtitle: "Départ",
        texte: "Vous ête fin pres à partir à cette soirrée, vous vous mettez en route avec confiance.",
        img: "assets/image/chic.png",
        // use keys here
        options:[{text: "Suivant", action: 'actNaturaliste()'}]
    },
    arriverFete:{
        subtitle: "Une Fête sans Magenta",
        texte: "Vous arrivez finalement à cette fameuse soirée mais vous n'y trouvez pas magenta. Vous tombez cela dit sur Dorian, l'un de vos amis, vous lui demander s'il n'aurait pas aperçu Magenta.",
        img: "assets/image/party.jpg",
        options:[{text: "Suivant", action: 'goToChapter("feteSansMagenta")'}]
    },
    arriverFetePiedDeBiche:{
        subtitle: "Une Fête sans Magenta",
        texte: "Vous arrivez finalement à cette fameuse soirée mais vous n'y trouvez pas magenta. Dorian, l'un de vos amis vient à votre rencontre et vous demande ce que vous faites avec un pied-de-biche a la main. Vous haussez les épaules et lui demander s'il n'aurait pas aperçu Magenta.",
        img: "assets/image/party.jpg",
        options:[{text: "Suivant", action: 'goToChapter("feteSansMagenta")'}]
    },
    // You are Dead
    mortNaturaliste:{
        subtitle: "Il fait froid, très froid...",
        texte: "Tout compte fait mettre des vêtements auraient été une sage décision, il fait froid et de plus une patrouille de police passe à côté de vous et vous arrête pour nudité sur la voie publique.<br><br>Game Over - Quelle idée aussi de partir à poil pour avouer son amour à Magenta.",
        img: "assets/image/arrest.png",
        video: "assets/video/naked.mp4",
        options:[{text: "Recommencer", action: 'goToChapter("contexte")'}]
    },
    feteSansMagenta:{
        subtitle: "Une Fête sans Magenta",
        texte: "Décidément personne ne semble avoir aperçu magenta à cette soirée, vous regardez votre téléphone et remarqué qu'elle vous a envoyé un message : << A l'aide!>> Magenta aurait-elle des ennuis? Que faites-vous?",
        img: "assets/image/party.jpg",
        options:[{text: "Demander plus de details", action: 'goToChapter("demanderDetail")'}, {text: "Partir sans Réfléchir", action: 'goToChapter("foncerSansReflechir")'}]
    },
    foncerSansReflechir:{
        subtitle: "Le Marathon",
        texte: "Sans même réfléchir vous entamez le plus gros sprint de votre vie jusque chez elle. Une fois arrivez, vous constater que la porte est grande ouverte et que quelqu'un semble provoquer un grand désordre à l'intérieur. Il vaudrait peut-être mieux réfléchir un peu avant d'entrer.",
        img: "assets/image/sprint.gif",
        options:[{text: "Suivant", action: 'goToChapter("laFinApproche")'}]
    },
    demanderDetail:{
        subtitle: "Magenta a des ennuis",
        texte: "Magenta vous demande d'appeler la police mais ne donne pas plus de détails, que faites-vous?",
        img: "assets/image/phonecall.jpg",
        options:[{text: "Suivant", action: 'goToChapter("aiderMagenta")'}]
    },
    aiderMagenta:{
        subtitle: "Jouer les Hero?",
        texte: "Vous pourriez effectivement appeler la police puisqu'elle vous l'a demandé mais l'idée de jouer les héros pour sauver une demoiselle en détresse n'est-il pas tentent sachant qu'il n'y a rien d'autre que possiblement sa vie qui est en jeu.",
        img: "assets/image/phonecall.jpg",
        options:[{text: "Appeler la police", action: 'goToChapter("policeIsComing")'},{text: "Jouer au Hero", action: 'goToChapter("mortEnHero")'}]
    },
    policeIsComing:{
        subtitle: "La police",
        texte: "Vous appelez la Police mais ceux-ci vous préviennent que la patrouille la plus proche se trouve à une vingtaine de minutes de Magenta. Vous décidez donc d'aller sans attendre chez Magenta pour lui venir en aide malgré une forte désapprobation de l'opératrice au téléphone. Une fois sur place vous remarquer que la porte est grande ouverte. il vaudrait mieu réfléchir un peu avant d'entrer.",
        img: "assets/image/phonecall.jpg",
        options:[{text: "Suivant", action: 'goToChapter("laFinApproche")'}]
    },
    // You are Dead
    mortEnHero:{
        subtitle: "Un Hero est mort",
        texte: "Vous exécuter votre plan douteux et vous dirigez directement chez magenta, vous entrez par la porte qui était étrangement déjà grande ouverte. Vous prenez une grande respiration et soufflez ensuite le plus gros cri de guerre que l'humanité n'est jamais connue pour finalement vous faire poignarder 3 fois dans le dos.<br><br>Game Over - La discrétion pour surprendre son ennemi est capitale le saviez-vous?",
        img: "assets/image/killer.png",
        video: "assets/video/fbiOpen.mp4",
        options:[{text: "Recommencer", action: 'goToChapter("contexte")'}]
    },
    // Une fin epoustouflante ! Mais est-ce la veritable fin ???
    laFinApproche:{
        subtitle: "À la rescousse",
        texte: "Vous voyez soudainement Magenta courir hors de la maison à toute vitesse poursuivie par un homme avec un couteau. Que faites-vous?",
        img: "assets/image/killer.png",
        options:[{text: "Défendre Magenta", action: 'goToChapter("unAvion")'},{text: "Courir pour votre vie", action: 'goToChapter("unAvion")'}]
    },
    unAvion:{
        subtitle: "Hein?! QUOI?!",
        texte: "Avant même que vous n'ayez le temps de bouger vous voyez un avion en flamme (surement atteint d'un problème moteur) rentrer dans votre champ de vision et s'écraser directement sur le psychopathe qui coursait Magenta détruisant sa maison par la même occasion. Magenta est heureusement épargné par cet accident.",
        img: "assets/image/chic.png",
        video: "assets/video/plane.mp4",
        options:[{text: "Suivant", action: 'goToChapter("youDidIt")'}]
    },
    youDidIt:{
        subtitle: "C'est vraiment ça la fin?!",
        texte: "Objectif accompli - Magenta suite à toutes ces émotions se colle naturellement contre vous en attendant les secours. De plus, sa maison étant détruite elle aura surement besoin de quelqu'un pour l'héberger dans les prochains mois. Vous aurez donc tout le temps nécessaire pour trouver le courage de lui dire à quel point vous l'aimez.<br><br>FIN - Ce n'est surement pas la fin auquel vous vous attendiez et à vrai dire je ne m'y attendais pas vraiment non plus.",
        img: "assets/image/couple.png",
        options:[{text: "Recommencer", action: 'goToChapter("contexte")'}]
    }
};

// ----------------------------------------------- Cles d'Evenements -------------------------------------------------------
// ---------- Naturaliste ----------
let optNaturaliste = false
if (localStorage.getItem("optNaturaliste") !== null) {
    optNaturaliste = Boolean(localStorage.getItem("optNaturaliste"))
}
let toggleNaturaliste = function() {
    optNaturaliste = true;
    localStorage.setItem("optNaturaliste", optNaturaliste);
    goToChapter("coupDeFil")
}

// ---------- Pied de Biche ----------
let optPiedDeBiche = false
if (localStorage.getItem("optPiedDeBiche") !== null) {
    optPiedDeBiche = Boolean(localStorage.getItem("optPiedDeBiche"))
}
let togglePiedDeBiche = function() {
    optPiedDeBiche = true;
    localStorage.setItem("optPiedDeBiche", optPiedDeBiche);
    goToChapter("depart")
}

// ---------- Naturalise / PiedDeBiche / normal ----------
let actNaturaliste = function() {
    if (optNaturaliste == true) {
        goToChapter("mortNaturaliste")
        optNaturaliste = false;
        optPiedDeBiche = false;
        localStorage.removeItem("optNaturaliste");
        localStorage.removeItem("optPiedDeBiche");
    } else if (optNaturaliste == false && optPiedDeBiche == true) {
        goToChapter("arriverFetePiedDeBiche")
    } else {
        goToChapter("arriverFete")
    }
}

// ------------------------------------------------- Function menu -----------------------------------------------------
// ---------- reset ----------
let reset = function() {
// ---------- event keys ----------
        optPiedDeBiche = false
        optNaturaliste = false
// ---------- localstorage keys ----------
        localStorage.removeItem("optNaturaliste");
        localStorage.removeItem("optPiedDeBiche");
// ---------- localstorage chapter ----------
        localStorage.removeItem("saveChapt")
// ---------- gotochapter ----------
        goToChapter("contexte")
    }
    document.querySelector(".reset-bouton").addEventListener("click",reset);

// ---------- mute ----------
let mutedSound = true
let muteBtn = document.querySelector('input[name="mute"]')

muteBtn.addEventListener('change', function() {
    if (muteBtn.checked == true) {
      mutedSound = false
    } else {
        mutedSound = true
    }
   });

// ------------------------------------------------- Function goToChapter -----------------------------------------------------
let goToChapter = function(chapterName) {

// ---------- sound effect bouton ----------
if (mutedSound == true) {
    let btnSound = document.querySelector(".btnSound")
    btnSound.pause()
    btnSound.currentTime = 0
    btnSound.play()
}
    
// ---------- titre et texte ----------
    console.log(chapterObj[chapterName].subtitle);
    console.log(chapterObj[chapterName].texte);
    console.log(chapterObj[chapterName].img);
    console.log(chapterObj[chapterName].options);
    document.querySelector(".titre").innerHTML = chapterObj[chapterName].subtitle;
    document.querySelector(".texte").innerHTML = chapterObj[chapterName].texte;
    let mesVideos =  document.querySelector(".videoZone")
    let mesImages = document.querySelector(".image")

// ---------- mes videos et images ----------
    if (chapterObj[chapterName].video !== undefined) {
        mesImages.classList.add("imageFalse")
        mesVideos.classList.remove("imageFalse")
        mesVideos.src = chapterObj[chapterName].video
        mesVideos.play()
    } else {
        mesVideos.classList.add("imageFalse")
        mesImages.classList.remove("imageFalse")
        mesImages.src = chapterObj[chapterName].img;
    }

// ---------- creation des boutons ----------
   document.querySelector(".options").innerHTML=""
    for (i in chapterObj[chapterName].options) {
        const btn = document.createElement("button")
        btn.setAttribute("class", "bouton")
        btn.setAttribute("onclick", chapterObj[chapterName].options[i].action)
        const node = document.createTextNode(chapterObj[chapterName].options[i].text)
        btn.appendChild(node)
        const parent = document.querySelector(".options")
        parent.appendChild(btn)
    }

// ---------- body class ----------
let bodyStyle = document.querySelector("body");
if (bodyStyle.className != "") {
    bodyStyle.classList.remove(bodyStyle.className)
}
bodyStyle.classList.add(chapterName)

// ---------- localstorage ----------
    localStorage.setItem("saveChapt", chapterName);
};

if (localStorage.getItem("saveChapt") !== null) {
goToChapter(localStorage.getItem("saveChapt"))
} else {
goToChapter("contexte")
}

//document.querryslector(limage).classListadd(isvisible)
