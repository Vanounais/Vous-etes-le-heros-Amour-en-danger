let chapterObj = {
    preparation:{
        subtitle: "Preparation",
        texte: "Moss a encore quelque truc a faire avant de se mettre en route",
        img: "img.jpg",
        options:[{text: "Chic", action: 'goToChapter("coupDeFil")'}, {text: "Naturel", action: 'goToChapter("coupDeFil")'}, {text: "Naturaliste", action: 'goToChapter("naturaliste")'}]
    },
    naturaliste:{
        subtitle: "Naturaliste",
        texte: "Loin de moi l'idee de juger vos choix mais avez vous bien compris l'objectif de Moss?",
        img: "img.jpg",
        options:[{text: "Maintenir son choix", action: 'goToChapter("coupDeFil")'}, {text: "text option2", action: 'goToChapter("contexte")'}]
    },
    coupDeFil:{
        subtitle: "Coup de fil",
        texte: "Bien que vous aviez prevue d'aller a cette soirree avec Magenta vous n'aviez pas discutez d'un point de rendez vous pour vous retrouver au milieu de cette enorme soiree.",
        img: "img.jpg",
        options:[{text: "Appeler", action: 'goToChapter("objetDecisif")'}, {text: "Envoyer un texto", action: 'goToChapter("objetDecisif")'}]
    },
    objetDecisif:{
        subtitle: "Objet decisif",
        texte: "Juste avant de partir vous paser devant votre bureau pour y prendre un objet",
        img: "img.jpg",
        options:[{text: "Une feuille et un crayon", action: 'goToChapter("absence")'}, {text: "Pied de biche", action: 'goToChapter("absence")'}, {text: "Bague de mariage", action: 'goToChapter("absence")'}]
    },
    absence:{
        subtitle: "Absence",
        texte: "Decidemment personne n'a apercu magenta a cette soirree vous regarder votre telephone et remarquer qu'elle vous a envoyer un message dans le quelle demande de l'aide",
        img: "img.jpg",
        options:[{text: "Accepter", action: 'goToChapter("unknown")'}, {text: "Demander des details", action: 'goToChapter("etreUnHero")'}]
    },
    etreUnHero:{
        subtitle: "Etre un Hero",
        texte: "Vous pouriez effectivement appeler la police mais l'idee de jouer les hero pour sauver un demoiselle en detresse n'est-il pas tantent sachant qu'il n'y a rien d'autre que sa vie qui est en jeu.",
        img: "img.jpg",
        options:[{text: "Appeler la police", action: 'goToChapter("unknown")'}, {text: "Jouer les Hero", action: 'goToChapter("absence")'}]
    }
};
let goToChapter = function(chapterName) {
    console.log(chapterObj[chapterName].subtitle);
    console.log(chapterObj[chapterName].texte);
};
