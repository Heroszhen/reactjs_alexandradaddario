const photos = [
    "https://i.pinimg.com/236x/2c/f8/f4/2cf8f4558f12cdb3f5739cccf56d51f4--alexandra-daddario.jpg",
    "https://i.pinimg.com/236x/fd/42/c2/fd42c2a277406917059d25eaec1d96ab.jpg",
    "https://i.pinimg.com/236x/37/05/e3/3705e3c5530fbda23f62e9d7846066d1.jpg",
    "https://i.pinimg.com/236x/25/94/2c/25942c464ab3fff2d09d61907a8bb02f--beautiful-eyes-gorgeous-women.jpg",
    "https://i.pinimg.com/236x/65/39/95/653995b5e846a3747f2694552fb652f5.jpg",
    "https://i.pinimg.com/236x/a9/09/1c/a9091c3ef812fd61d6414e998f8c9536.jpg",
    "https://i.pinimg.com/564x/b0/5e/1a/b05e1a1cf65b1c6dea4935b6e3837bc5.jpg",
    "https://66.media.tumblr.com/d64947dacc73220375e446b3e3f5a1aa/tumblr_oow00gAKNH1sfxv84o1_500.png",
    "https://i.pinimg.com/564x/35/d1/a2/35d1a290b7ce40287c43255cb0eccd61.jpg",
    "https://i.pinimg.com/564x/c8/d0/7b/c8d07ba779722e3ec7e40a06610ad385.jpg",
    "https://i.pinimg.com/564x/27/e7/17/27e71750d5ac8296496aa96af29e7b1b.jpg",
    "https://i.pinimg.com/564x/2a/be/9d/2abe9d8040ab5e894081b4cc856946e6.jpg",
    "https://i.pinimg.com/564x/ee/14/5b/ee145b8fd3c9040d4c98c1f6e1ba0429.jpg",
    "https://i.pinimg.com/564x/c7/c1/c8/c7c1c8d4e539538a6ae30c1f005168c0.jpg",
    "https://i.pinimg.com/564x/ff/e6/28/ffe6289100aa3dcdeac6ce13ab5e2f1a.jpg",
    "https://i.pinimg.com/564x/ce/70/6c/ce706c056c20c57fd14e1edc7978d562.jpg",
    "https://i.pinimg.com/564x/70/9d/e0/709de0f0aed54d3f4e6c00db5993b07c.jpg",
    "https://i.pinimg.com/564x/00/98/18/0098185e762d7de6b5b2b3b8090e60bd.jpg"
];

const films = [
    {
        "title":"Percy Jackson : Le Voleur de foudre",
        "actors":"Logan Lerman , Alexandra Daddario , Brandon T. Jackson , Jake Abel",
        "last" : "119 minutes",
        "plot" : "Un jeune garçon, Percy Jackson, découvre qu'il est le fils d'un dieu grec, Poséidon, Dieu de la mer. Il s'embarque, avec l'aide d'un satyre, Grover Underwood et de la fille d’Athéna, Annabeth Chase, dans une dangereuse quête pour empêcher une guerre entre les dieux de l'Olympe, car Zeus, son oncle, l'accuse d'avoir volé son précieux éclair pour le donner à Poséidon. De plus, Hadès s'est emparé de la mère de Percy en l'amenant en enfer avec lui, où notre demi-dieu devra aller la chercher. Sur sa route, il devra affronter une horde d'ennemis mythologiques bien décidés à l'arrêter (comme l'hydre de lerne).",
        "photo" : "https://i.pinimg.com/736x/e5/c1/53/e5c153827c305bf3f2d2c3f758bdf1ae.jpg"
    },
    {
        "title":"Texas Chainsaw 3D",
        "actors":"Alexandra Daddario , Scott Eastwood , Tania Raymonde",
        "last" : "92 minutes",
        "plot" : "Une jeune femme découvre qu'elle vient de recevoir un héritage d'une grand-mère inconnue. Sa famille d'adoption lui révèle alors qu'elle est issue d'une famille de dangereux psychopathes qui sévissait dans le Texas dans les années 70. Elle décide de s'y rendre avec ses amis pour découvrir la maison dont elle a hérité. Mais ils vont devoir faire face à un dangereux maniaque équipé d'une tronçonneuse bien décidé à continuer ses terribles méfaits.",
        "photo" : "https://i.pinimg.com/originals/e0/f8/84/e0f884146a4f46d6d3de277af103ca34.jpg"
    },
    {
        "title":"San Andreas",
        "actors":"Dwayne Johnson , Alexandra Daddario , Carla Gugino , Ioan Gruffudd",
        "last" : "114 minutes",
        "plot" : "En Californie, la faille de San Andreas finit par s'ouvrir et provoque un séisme de magnitude 9,6, le plus grand séisme de toute l'histoire. Ray Gaines (Dwayne Johnson), pilote d'hélicoptère de secours en montagne, et son ex-femme Emma (Carla Gugino) quittent Los Angeles pour San Francisco dans l'espoir de retrouver et sauver leur fille désormais unique, Blake (sa sœur Mallory est morte noyée quelques années auparavant). Alors qu'ils s'engagent dans ce dangereux périple chaotique vers le nord de l'État, pensant que le pire est à présent derrière eux, ils ne tardent pas à comprendre que la réalité est bien plus effroyable encore.",
        "photo" : "https://pbs.twimg.com/media/ClmovkFWYAA2QhZ.jpg:large"
    },
    {
        "title":"Baywatch : Alerte à Malibu",
        "actors":"Dwayne Johnson , Alexandra Daddario , Zac Efron , Kelly Rohrbach",
        "last" : "114 minutes",
        "plot" : "Dans la baie d’Émeraude (Emerald Bay) en Floride, Mitch Buchannon et son équipe de sauveteurs, dont son adjointe Stephanie Holden et l'expérimentée C. J. Parker, apportent aide et assistance aux baigneurs en tant que membres d'une unité d'élite appelée Baywatch. Ayant accompli plus de 500 sauvetages dans sa carrière, Mitch est adulé de la communauté, popularité que jalouse le capitaine Thorpe, supérieur de Mitch, et le policier Garner Ellerbee. Pendant l'une de ses patrouilles matinales, Mitch découvre un sachet de drogue qui porte le nom du Huntley Club, un bar huppé dont la propriétaire est la femme d'affaires Victoria Leeds.",
        "photo" : "https://i.pinimg.com/originals/51/bc/85/51bc85c1c121c4b7c5f470907def00fb.jpg"
    },
    {
        "title":"Nomis",
        "actors":"Henry Cavill , Alexandra Daddario , Ben Kingsley",
        "last" : "98 minutes",
        "plot" : "Un lieutenant de police, Walter Marshall, et une profileuse, Rachel Chase, enquêtent sur les crimes d'un prédateur sexuel qui s'en prend à des jeunes filles. Pourtant, lorsqu'ils réussissent à l'emprisonner, les enlèvements et les meurtres continuent.",
        "photo" : "https://s1.dmcdn.net/v/QHMGc1S-HYFlR_oRg/x1080"
    },
    {
        "title":"Can You Keep a Secret?",
        "actors":"Alexandra Daddario , Tyler Hoechlin , Kimiko Glenn",
        "last" : "95 minutes",
        "plot" : "Emma Corrigan, responsable marketing, a des petits secrets. Elle effectue son premier voyage d'affaires à Chicago. Sur le chemin du retour, son avion traverse une zone de turbulences. Paniquée, elle fait alors quelques confidences à son voisin. Elle apprendra le lendemain que c'est homme est en fait le PDG de la société pour laquelle elle travaille.",
        "photo" : "https://fr.web.img6.acsta.net/pictures/19/08/19/08/27/0450201.jpg"
    }
];


module.exports = {photos : photos , films : films};