let chapterObj = {
    contexte:{
        subtitle: "Contexte",
        texte: "Vous incarnez le personnage de Moss se preparant pour une soiree qui se promet d'etre la meilleur soiree de toutes sa vie puisque sa meilleur amie depuis toujours, Magenta, y ait inviter egalement. Apres un peu plus de 19 ans de begin mutuelle non avoue il etais bien temps que l'un d'eu se decide a faire le premier pas.",
        img: "assets/image/chic.png",
        options:[{text: "Suivant", action: 'goToChapter("preparation")'}]
    },
    preparation:{
        subtitle: "Preparation",
        texte: "Moss a encore quelque truc a faire avant de se mettre en route",
        img: "assets/image/chic.png",
        options:[{text: "S'habiller chic", action: 'goToChapter("chic")'}, {text: "naturel", action: 'goToChapter("naturel")'}, {text: "Naturaliste", action: 'goToChapter("naturaliste")'}]
    },
    chic:{
        subtitle: "Preparation",
        texte: "Vous mettez les vetements les plus chic que vous posseder",
        img: "assets/image/chic.png",
        options:[{text: "Suivant", action: 'goToChapter("coupDeFil")'}]
    },
    naturel:{
        subtitle: "Preparation",
        texte: "Vous vous habiller avec les meme vetement que d'habitude",
        img: "assets/image/normal.png",
        options:[{text: "Suivant", action: 'goToChapter("coupDeFil")'}]
    },
    naturaliste:{
        subtitle: "Naturaliste",
        texte: "Loin de moi l'idee de juger vos choix mais avez vous bien compris l'objectif de Moss?",
        img: "assets/image/killer.png",
        options:[{text: "Maintenir son choix", action: 'goToChapter("naturaliste2")'}, {text: "Revenir sur sa decision", action: 'goToChapter("preparation")'}]
    },
    naturaliste2:{
        subtitle: "Naturaliste",
        texte: "Vous avez un sacre sens de l'humour bien que votre coeur soit certainement de pierre.",
        img: "assets/image/killer.png",
        // key picked up here
        options:[{text: "Suivant", action: 'toggleNaturaliste()'}]
    },
    coupDeFil:{
        subtitle: "Coup de fil",
        texte: "Bien que vous aviez prevue d'aller a cette soirree avec Magenta vous n'aviez pas discutez d'un point de rendez vous pour vous retrouver au milieu de cette enorme soiree.",
        img: "assets/image/killer.png",
        options:[{text: "Appeler", action: 'goToChapter("noReponse")'}, {text: "Envoyer un texto", action: 'goToChapter("noReponse")'}]
    },
    noReponse:{
        subtitle: "Coup de fil",
        texte: "Vous ne recevez malheureusement aucune reponse",
        img: "assets/image/killer.png",
        options:[{text: "Suivant", action: 'goToChapter("objetDecisif")'}]
    },
    objetDecisif:{
        subtitle: "Objet decisif",
        texte: "Juste avant de partir vous paser devant votre bureau pour y prendre un objet. Le quel prandrez vous?",
        img: "assets/image/killer.png",
        options:[{text: "Une feuille et un crayon", action: 'goToChapter("feuilleCrayon")'}, {text: "Pied de biche", action: 'goToChapter("piedDeBiche")'}, {text: "Bague de mariage", action: 'goToChapter("bagueMariage")'}]
    },
    feuilleCrayon:{
        subtitle: "Objet decisif",
        texte: "Vous ecrivez un magnifique discour tres emouvant sur la maniere dont vous ete tomber amoureux de Magenta et le mettez dans vos poche.",
        img: "assets/image/killer.png",
        // key picked up here
        options:[{text: "Suivant", action: 'toggleFeuilleCrayon()'}]
    },
    piedDeBiche:{
        subtitle: "Objet decisif",
        texte: "Je ne vois vraiment pas quelle sont vos intention mais c'est vous qui decidez...",
        img: "assets/image/killer.png",
        // key picked up here
        options:[{text: "Suivant", action: 'togglePiedDeBiche()'}]
    },
    bagueMariage:{
        subtitle: "Objet decisif",
        texte: "Vous prenez la vieille bague de mariage qui vous a ete leguer par votre grand pere avant de mourir.",
        img: "assets/image/killer.png",
        // key picked up here
        options:[{text: "Suivant", action: 'toggleBagueMariage()'}]
    },
    depart:{
        subtitle: "Depart",
        texte: "Vous ete fin pres a partir a cette soirre, vous vous mettez en route avec confiance.",
        img: "assets/image/killer.png",
        // use keys here
        options:[{text: "Suivant", action: 'actNaturaliste()'}]
    },
    arriverFete:{
        subtitle: "Une Fete sans Magenta",
        texte: "Vous arrivez finalement a cette fameuse soirree mais vous ne trouvez pas magenta. Vous tombez sur Dorian, l'un de vos amis, vous lui demander si il n'aurait pas apercu Magenta.",
        img: "assets/image/killer.png",
        options:[{text: "Suivant", action: 'goToChapter("feteSansMagenta")'}]
    },
    arriverFetePiedDeBiche:{
        subtitle: "Une Fete sans Magenta",
        texte: "Vous arrivez finalement a cette fameuse soirree mais vous ne trouvez pas magenta. Dorian, l'un de vos amis vient a votre rencontre et vous demande se que vous faite avec un pied de biche a la main. Vous aussez les epaule et lui demander si il n'aurait pas apercu Magenta.",
        img: "assets/image/killer.png",
        options:[{text: "Suivant", action: 'goToChapter("feteSansMagenta")'}]
    },
    // You are Dead
    mortNaturaliste:{
        subtitle: "Il fais froid",
        texte: "Tout compte fais mettre des vetement aurais ete une sage decison, il fais froid et de plus une patrouille de police passe a coter de vous et vous arrete pour nudite sur la vois publique.<br><br>Game Over - Quelle idee aussi de partir a poil pour avouer son amour a Magenta.",
        img: "assets/image/killer.png",
        options:[{text: "Recommencer", action: 'goToChapter("contexte")'}]
    },
    feteSansMagenta:{
        subtitle: "Une Fete sans Magenta",
        texte: "Decidemment personne n'a apercu magenta a cette soirree vous regarder votre telephone et remarquer qu'elle vous a envoyer un message dans le quelle demande de l'aide. Que faite vous?",
        img: "assets/image/killer.png",
        options:[{text: "Demander plus de details", action: 'goToChapter("demanderDetail")'}, {text: "Partir sans Reflechir", action: 'goToChapter("foncerSansReflechir")'}]
    },
    foncerSansReflechir:{
        subtitle: "Le Marathon",
        texte: "Sans meme reflechir vous entammez le plus gros sprint de votre vie jusqu'a chez elle. Une fois arrivez vous constatez que sa porte est grande ouverte et que qqn semble provoquer un grand desorde a l'interieur. il vaudrait mieu reflechir un peu avant d'entrer.",
        img: "assets/image/killer.png",
        options:[{text: "Suivant", action: 'goToChapter("laFinApproche")'}]
    },
    demanderDetail:{
        subtitle: "Magenta a des ennuis",
        texte: "Magenta vous demande d'apeller la police mais ne donne pas plus de details suite a cette demande.",
        img: "assets/image/killer.png",
        options:[{text: "Suivant", action: 'goToChapter("aiderMagenta")'}]
    },
    aiderMagenta:{
        subtitle: "Jouer les Hero?",
        texte: "Vous pouriez effectivement appeler la police mais l'idee de jouer les hero pour sauver un demoiselle en detresse n'est-il pas tantent sachant qu'il n'y a rien d'autre que sa vie qui est en jeu.",
        img: "assets/image/killer.png",
        options:[{text: "Appeler la police", action: 'goToChapter("policeIsComing")'},{text: "Jouer au Hero", action: 'goToChapter("jouerHero")'}]
    },
    policeIsComing:{
        subtitle: "La police",
        texte: "Vous appelez la Police mais ceux-si vous previenne que la patrouille la plus proche se trouve a une vingtaine de minute de Magenta. Vous decidez donc d'aller sans atendre chez Magenta pour lui venir en aide. Une fois sur place vous remarquer la porte est grande ouverte. il vaudrait mieu reflechir un peu avant d'entrer.",
        img: "assets/image/killer.png",
        options:[{text: "Suivant", action: 'goToChapter("laFinApproche")'}]
    },
    jouerHero:{
        subtitle: "Vous etes un Hero",
        texte: "Vous pouriez effectivement appeler la police mais l'idee de jouer les hero pour sauver un demoiselle en detresse n'est-il pas tantent sachant qu'il n'y a rien d'autre que sa vie qui est en jeu.",
        img: "assets/image/killer.png",
        options:[{text: "Suivant", action: 'goToChapter("mortEnHero")'}]
    },
    // You are Dead
    mortEnHero:{
        subtitle: "Un Hero est mort",
        texte: "Vous executer votre plan douteux et vous dirigez directement chez magenta, vous entrez par la porte qui est rester grande ouverte. Vous entamez le plus gros cris de guerre que l'humanite a connue pour finalement vous faire poignarder 3 fois dans le dos.<br><br>Game Over - Entree pas du tout discrete",
        img: "assets/image/killer.png",
        options:[{text: "Recommencer", action: 'goToChapter("contexte")'}]
    },
     // Une fin epoustouflante ! Mais est-ce la veritable fin ???
    laFinApproche:{
        subtitle: "Le Sprint",
        texte: "Vous voyez soudainement Magenta courire hors de la maison a toute vitesse poursuivie par un homme avec un couteau. Que faite vous?",
        img: "assets/image/chic.png",
        options:[{text: "Defendre Magenta", action: 'goToChapter("unAvion")'},{text: "Courire pour votre vie", action: 'goToChapter("unAvion")'}]
    },
    unAvion:{
        subtitle: "Hein?! QUOI?!",
        texte: "Avant meme que vous n'ayez le temps de bouger vous voyer rentrer un avion en flamme (surement ateint d'un probleme moteur) rentrer dans votre champ de vision et s'ecraser directement sur le Psycopathe qui coursait Magenta detruisant sa maison par la meme occasion. Magenta est heureusement epargne par cet accident.",
        img: "assets/image/chic.png",
        options:[{text: "Suivant", action: 'goToChapter("youDidIt")'}]
    },
    youDidIt:{
        subtitle: "C'est vraiment ca la fin?!",
        texte: "Objectif accomplie, Magenta suite a toutes ces emotions se colle contre vous en attendant les secours. De plus, sa maison etant detruite elle aura surement besoin de quelqu'un pour l'heberger dans les prochains mois.<br><br>FIN - Ce n'est surement pas la fin au quel vous vous attendiez et a vrais dire je ne m'y attendais pas non plus.",
        img: "assets/image/couple.png",
        options:[{text: "Recommencer", action: 'goToChapter("contexte")'}]
    }
};

// ------------------------------------------------------------------------------------------------------

let optNaturaliste = false;
let toggleNaturaliste = function() {
    optNaturaliste = true;
    goToChapter("coupDeFil")
}

let optFeuilleCrayon = false;
let toggleFeuilleCrayon = function() {
    optFeuilleCrayon = true;
    goToChapter("depart")
}

let optPiedDeBiche = false;
let togglePiedDeBiche = function() {
    optPiedDeBiche = true;
    goToChapter("depart")
}

let optBagueMariage = false;
let toggleBagueMariage = function() {
    optBagueMariage = true;
    goToChapter("depart")
}

let actNaturaliste = function() {
    if (optNaturaliste == true) {
        goToChapter("mortNaturaliste")
        optNaturaliste = false;
        optPiedDeBiche = false;
    } else if (optNaturaliste == false && optPiedDeBiche == true) {
        goToChapter("arriverFetePiedDeBiche")
        optPiedDeBiche = false;
    } else {
        goToChapter("arriverFete")
    }
}

// ------------------------------------------------------------------------------------------------------

let goToChapter = function(chapterName) {
    console.log(chapterObj[chapterName].subtitle);
    console.log(chapterObj[chapterName].texte);
    console.log(chapterObj[chapterName].img);
    console.log(chapterObj[chapterName].options);
    document.querySelector(".titre").innerHTML = chapterObj[chapterName].subtitle;
    document.querySelector(".texte").innerHTML = chapterObj[chapterName].texte;
    document.querySelector(".image").src = chapterObj[chapterName].img;

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
};
goToChapter("contexte")
