import json
import re

# New MOSC Courses
courses = [
    {
        "code": "GEST 60401",
        "name": "Regards croisés sur les grands enjeux de société et l'entreprise",
        "category": "tronc",
        "credits": 3.0,
        "period": "Toute l'année",
        "mode": "Présentiel",
        "desc": "Ce cours propose de développer une prise de conscience critique face aux grands enjeux sociaux et environnementaux, à travers une analyse des fondements de l'entreprise et du modèle de société au sein duquel cette institution s'est imposée.",
        "themes": [
            "L'émergence de la société moderne occidentale",
            "Le modèle de société occidentale moderne et ses implications",
            "Les fondements économiques et sociaux de l'entreprise",
            "L'entreprise en perspective face aux grands défis sociaux et environnementaux"
        ],
        "remarques": "Cours en anglais : GEST 60401A. Il est fortement recommandé de suivre ce cours en fin de programme.",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": [],
        "profile": ""
    },
    {
        "code": "METH 60302",
        "name": "Recherche et intervention en gestion",
        "category": "methodo",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Présentiel",
        "desc": "Séminaire d'analyse et d'évaluation d'une démarche de recherche ou de diagnostic en gestion. Prépare à entamer sa propre démarche scientifique sous forme de mémoire ou de projet supervisé.",
        "themes": [
            "Démarche scientifique et démarche d'intervention professionnelle",
            "Problématique, question de recherche et mandat d'intervention",
            "Devis quantitatif, qualitatif et mixte",
            "Analyse de données qualitatives et quantitatives"
        ],
        "remarques": "Cours en anglais : METH 60302A",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": [
            "INDV 66202"
        ],
        "profile": ""
    },
    {
        "code": "OPER 60515",
        "name": "Gestion de la chaîne d'approvisionnement : fondements et tendances",
        "category": "noyau",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Hybride synchrone / Présentiel",
        "desc": "Ce cours présente les principales stratégies et pratiques de gestion intégrée de la chaîne d'approvisionnement, ainsi que les défis associés à leur mise en œuvre.",
        "themes": [
            "Choix stratégiques du positionnement de la chaîne d'approvisionnement",
            "Système de planification et de gestion des activités",
            "JIT, TPS et « Lean » supply chain",
            "Digitalisation de la chaîne d'approvisionnement et « Supply chain 4.0 »"
        ],
        "remarques": "Cours en anglais : OPER 60515A",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": [],
        "profile": ""
    },
    {
        "code": "OPER 60520",
        "name": "Optimisation des réseaux logistiques",
        "category": "noyau",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Présentiel",
        "desc": "Ce cours porte sur les principales problématiques liées à l'optimisation de réseaux logistiques : prévision de la demande, gestion des stocks avec demande déterministe et stochastique, gestion du revenu, localisation d'installations et conception de réseaux logistiques.",
        "themes": [
            "Prévision de la demande",
            "Gestion des stocks",
            "Gestion du revenu",
            "Conception de réseaux logistiques"
        ],
        "remarques": "Cours en anglais : OPER 60520A",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": [],
        "profile": ""
    },
    {
        "code": "OPER 60521",
        "name": "Amélioration continue et Lean Management",
        "category": "noyau",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Présentiel",
        "desc": "Ce cours propose une immersion dans la pratique de l'amélioration continue, en mettant l'accent sur l'apprentissage par l'action. Les principes Lean et le Toyota Way servent de fil conducteur pour comprendre la logique qui sous-tend les outils, les approches et les comportements en amélioration continue.",
        "themes": [
            "Fondements du Lean et de l'amélioration continue",
            "Introduction aux démarches de résolution de problèmes : PDCA, A3 et Six Sigma",
            "Outils d'amélioration continue (cartographie des processus, 5S, pokayoke, jidoka, SMED)",
            "Système de gestion au quotidien et alignement stratégique"
        ],
        "remarques": "Cours en anglais : OPER 60521A",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": [],
        "profile": ""
    },
    {
        "code": "OPER 60501",
        "name": "Gestion des systèmes d'entreposage",
        "category": "bloc1",
        "profile": "Bloc 1",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Hybride synchrone / Présentiel",
        "desc": "Ce cours porte sur la conception, la gestion et l'optimisation des systèmes d'entreposage. Les personnes étudiantes acquerront des connaissances pour comprendre les fonctions de l'entreposage, les enjeux liés aux coûts, au service à la clientèle et à la performance.",
        "themes": [
            "Processus de conception d'un entrepôt",
            "Planification du processus de préparation des commandes",
            "Sélection des équipements et Aménagement",
            "Technologie"
        ],
        "remarques": "Cours en anglais : OPER 60501A",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "OPER 60502",
        "name": "Systèmes de transport",
        "category": "bloc1",
        "profile": "Bloc 1",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Présentiel",
        "desc": "Ce cours examine le rôle des systèmes de transport dans la chaîne logistique. Il aborde les différents modes, les stratégies opérationnelles, les outils d'aide à la décision et les enjeux technologiques et environnementaux liés à la gestion des flux de marchandises.",
        "themes": [
            "Rôle stratégique du transport dans la chaîne logistique",
            "Planification et optimisation des tournées de véhicules",
            "Transport international : acteurs et Incoterms",
            "Logistique durable et réduction de l'empreinte carbone"
        ],
        "remarques": "Cours en anglais : OPER 60502A",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "PROJ 40507",
        "name": "Gestion de projets logistiques",
        "category": "bloc1",
        "profile": "Bloc 1",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Hybride synchrone",
        "desc": "Ce cours couvre les concepts de base en gestion de projets et les méthodes les plus souvent utilisées en gestion de projets logistiques. L'emphase est mise sur la planification d'un projet de nature logistique et du contrôle de son exécution.",
        "themes": [
            "Les étapes de la gestion d'un projet",
            "Les projets de logistique industrielle et commerciale",
            "Les projets de logistique événementielle",
            "Les projets de logistique humanitaire"
        ],
        "remarques": "Un ordinateur portable configuré selon les exigences technologiques de l'École est requis pour ce cours.",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "OPER 60503",
        "name": "Chaîne d'approvisionnement durable",
        "category": "bloc1",
        "profile": "Bloc 1",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Présentiel",
        "desc": "Ce cours étudie les défis et opportunités associés à la durabilité dans les chaînes d'approvisionnement. Le cours comporte quatre volets : investissements dans les technologies environnementales, efficacité énergétique et émissions de GES, économie circulaire, et responsabilité sociale.",
        "themes": [
            "Technologies environnementales et Efficacité énergétique",
            "Principes d'écoconception et implantation",
            "Logistique inversée",
            "L'approvisionnement responsable"
        ],
        "remarques": "Cours mutuellement exclusif(s) : OPER 60506A ou OPER 60507A",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "OPER 60530",
        "name": "Gestion stratégique de l'approvisionnement",
        "category": "bloc1",
        "profile": "Bloc 1",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Hybride synchrone / Présentiel",
        "desc": "Face à un environnement d'affaires en constante évolution, le rôle des gestionnaires d'approvisionnement dépasse largement la simple exécution des commandes. Ce cours permet d'approfondir les dimensions stratégiques de l'approvisionnement.",
        "themes": [
            "Stratégie d'approvisionnement",
            "Gestion des fournisseurs",
            "Approvisionnement éthique et responsable",
            "Achats dans le secteur public"
        ],
        "remarques": "Cours en anglais : OPER 60530A",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "OPER 60500",
        "name": "Chaîne d'approvisionnement : analytique et IA appliquée",
        "category": "bloc2",
        "profile": "Bloc 2",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Présentiel",
        "desc": "Ce cours couvre les concepts, les outils analytiques et les approches d'intelligence artificielle (IA) appliqués à la chaîne d'approvisionnement. Python est le langage central pour l'implémentation.",
        "themes": [
            "Analytique descriptive (métriques, KPIs, apprentissage non supervisé)",
            "Analytique prédictive (prévision de la demande, apprentissage supervisé)",
            "Analytique prescriptive (optimisation des stocks et des prix)",
            "Programmation avec Python et l'IAG"
        ],
        "remarques": "Cours en anglais : OPER 60500A",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "OPER 60512",
        "name": "Simulation et analyse des systèmes opérationnels",
        "category": "bloc2",
        "profile": "Bloc 2",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Présentiel",
        "desc": "Ce cours explore les grands principes d'analyse des systèmes opérationnels. Il prépare à diagnostiquer la performance, analyser les flux et prendre des décisions éclairées en s'appuyant sur des outils analytiques et sur la simulation.",
        "themes": [
            "Analyse des flux et capacité",
            "Variabilité et incertitude",
            "Techniques d'analyse avancées : simulation",
            "Stratégies avancées de gestion de la capacité"
        ],
        "remarques": "Cours en anglais : OPER 60512A",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "OPER 60505",
        "name": "Gestion des opérations dans les services",
        "category": "bloc1",
        "profile": "Bloc 1",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Hybride synchrone",
        "desc": "Ce cours aborde l'analyse, l'amélioration et la transformation des processus et des systèmes de prestation de services afin d'offrir des expériences qui répondent aux besoins des clients.",
        "themes": [
            "Importance économique et managériale des services",
            "Productivité et gestion de la capacité dans les services",
            "Gestion de la qualité dans les services",
            "Transformation numérique des opérations des services"
        ],
        "remarques": "Cours mutuellement exclusif : OPER 80550",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "OPER 60550",
        "name": "Outils d'aide à la décision en gestion des opérations",
        "category": "bloc2",
        "profile": "Bloc 2",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Présentiel",
        "desc": "Ce cours se concentre sur la modélisation analytique et l'analyse des problèmes d'entreprise typiques de gestion des opérations et logistique (optimisation, simulation, arbre de décision).",
        "themes": [
            "Programmation linéaire et en nombre entier",
            "Simulation Monte Carlo",
            "Arbre de décision",
            "Planification de la production et de la distribution"
        ],
        "remarques": "Cours en anglais : OPER 60550A",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "MNGT 60415",
        "name": "La consultation en gestion",
        "category": "bloc2",
        "profile": "Bloc 2",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Présentiel",
        "desc": "Séminaire sur la consultation en gestion : le milieu, le processus d'intervention et les exigences du métier.",
        "themes": [
            "La familiarisation avec le milieu de la consultation",
            "L'exploration de la démarche générale d'intervention",
            "L'introduction aux principales habiletés",
            "La connaissance de soi"
        ],
        "remarques": "Cours mutuellement exclusif : ENTR 61000",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "MNGT 60403",
        "name": "Méthodes d'intervention en développement organisationnel",
        "category": "bloc2",
        "profile": "Bloc 2",
        "credits": 3.0,
        "period": "Automne, Hiver",
        "mode": "Présentiel",
        "desc": "Les étudiants développeront des compétences de facilitation et apprendront à maîtriser différentes méthodes d'intervention en développement organisationnel.",
        "themes": [
            "Compétences en développement organisationnel",
            "L'animation de réunion et de groupe de travail",
            "La résolution de problème en équipe",
            "La démarche d'enquête appréciative"
        ],
        "remarques": "",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "ETHI 66200",
        "name": "Atelier obligatoire en éthique",
        "category": "projet",
        "credits": 0.0,
        "period": "Automne, Hiver",
        "mode": "En ligne",
        "desc": "Atelier en ligne d'une durée de 3 à 5 heures sur l'éthique de la recherche.",
        "themes": [
            "Les comités d'éthique de la recherche",
            "Le consentement",
            "La vie privée et la confidentialité"
        ],
        "remarques": "Obligatoire avant de déposer le projet",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": [
            "INDV 66202"
        ],
        "profile": ""
    },
    {
        "code": "INDV 66202",
        "name": "Projet Supervisé",
        "category": "projet",
        "credits": 9.0,
        "period": "Toute l'année",
        "mode": "Autonome",
        "desc": "L'activité de fin d'études permet d'appliquer les connaissances acquises tout au long du programme et de prouver ses aptitudes à résoudre un problème de gestion.",
        "themes": [
            "Cadrage et Problématisation",
            "Analyse et méthodologie",
            "Recommandations",
            "Dépôt final"
        ],
        "remarques": "Nécessite de faire approuver un mandat par un directeur de projet.",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [
            "ETHI 66200",
            "METH 60302"
        ],
        "unlocks": [],
        "profile": ""
    },
    {
        "code": "ATEL 66219",
        "name": "Expertise en recherche d'information",
        "category": "recommandes",
        "profile": "",
        "credits": 0.0,
        "period": "Toute l'année",
        "mode": "En ligne",
        "desc": "Cet atelier en ligne vous guide dans les bases de la recherche documentaire et l'utilisation des bases de données de la bibliothèque HEC.",
        "themes": [
            "Recherche documentaire",
            "Bases de données HEC",
            "Évaluation des sources d'information"
        ],
        "remarques": "Fortement recommandé en début de programme",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    },
    {
        "code": "ATEL 66242",
        "name": "Comment citer ses sources",
        "category": "recommandes",
        "profile": "",
        "credits": 0.0,
        "period": "Toute l'année",
        "mode": "En ligne",
        "desc": "Cet atelier vous apprend à citer correctement vos sources bibliographiques et à éviter le plagiat dans vos travaux universitaires.",
        "themes": [
            "Citations bibliographiques",
            "Normes APA et styles HEC",
            "Prévention du plagiat"
        ],
        "remarques": "Fortement recommandé avant la première session d'examens",
        "status": "todo",
        "grade": "",
        "semester": "",
        "notes": "",
        "prerequisites": [],
        "unlocks": []
    }
]

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the `const DEFAULT_COURSES = [` array and replace it.
# It ends right before `// --- ETAT DE L'APPLICATION ---`
# Or we can just use a regex
pattern = re.compile(r'const DEFAULT_COURSES = \[.*?\];', re.DOTALL)
new_js_code = "const DEFAULT_COURSES = " + json.dumps(courses, ensure_ascii=False, indent=4) + ";"

new_content = pattern.sub(new_js_code, content)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replaced DEFAULT_COURSES in app.js")
