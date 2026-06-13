// Data Model: HEC Montréal M.Sc. Opérations et Supply Chain (MOSC) Courses
const DEFAULT_COURSES = [
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
];

let courses = [];
let currentFilter = "all";
let currentSelectedCourseCode = null;
let sidebarPinned = false;
let sidebarCollapsed = false;

// On Page Load
document.addEventListener("DOMContentLoaded", () => {
    loadData();
    initSidebarNavigation();
    initSidebarControls();
    initMobileBehavior();
    renderAll();
});

// Load from LocalStorage or initialize default
function loadData() {
    const saved = localStorage.getItem("hec_msc_courses");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Seamless migration: update structural data and keep ONLY default MOSC courses (discard old MIA courses)
            const migrated = [];
            DEFAULT_COURSES.forEach(defaultCourse => {
                const existing = parsed.find(c => c.code === defaultCourse.code);
                if (!existing) {
                    migrated.push({...defaultCourse});
                } else {
                    // Update structural and display properties but preserve user progress
                    migrated.push({
                        ...defaultCourse,
                        status: existing.status || defaultCourse.status,
                        grade: existing.grade !== undefined ? existing.grade : defaultCourse.grade,
                        semester: existing.semester !== undefined ? existing.semester : defaultCourse.semester,
                        notes: existing.notes !== undefined ? existing.notes : defaultCourse.notes
                    });
                }
            });
            courses = migrated;
        } catch (e) {
            courses = [...DEFAULT_COURSES];
        }
    } else {
        courses = [...DEFAULT_COURSES];
    }

    // Load settings from LocalStorage
    const savedSettings = localStorage.getItem("hec_msc_settings");
    if (savedSettings) {
        try {
            const settings = JSON.parse(savedSettings);
            if (settings.targetGpa && document.getElementById("target-gpa")) {
                document.getElementById("target-gpa").value = settings.targetGpa;
            }
            if (settings.targetYear && document.getElementById("target-year")) {
                document.getElementById("target-year").value = settings.targetYear;
            }
            if (settings.tuitionStatus && document.getElementById("tuition-status")) {
                document.getElementById("tuition-status").value = settings.tuitionStatus;
            }
        } catch (e) {
            console.error("Error loading settings from localStorage", e);
        }
    }
}

// Save to LocalStorage
function saveData() {
    localStorage.setItem("hec_msc_courses", JSON.stringify(courses));

    // Save settings
    const targetGpa = document.getElementById("target-gpa")?.value || "4.00";
    const targetYear = document.getElementById("target-year")?.value || "2027";
    const tuitionStatus = document.getElementById("tuition-status")?.value || "international";

    localStorage.setItem("hec_msc_settings", JSON.stringify({
        targetGpa,
        targetYear,
        tuitionStatus
    }));
}

// ─── Export / Import for cross-environment portability ────────────────────────

/**
 * Exports all user progress data (statuses, grades, semesters, notes, settings,
 * project milestones) to a downloadable JSON file.
 * Works in both browser and .exe (WebView2) environments.
 */
function exportData() {
    const snapshot = {
        _version: 1,
        _exported: new Date().toISOString(),
        courses: courses.map(c => ({
            code: c.code,
            status: c.status,
            grade: c.grade,
            semester: c.semester,
            notes: c.notes
        })),
        targetGpa: document.getElementById("target-gpa")?.value || "4.00",
        targetYear: document.getElementById("target-year")?.value || "2027",
        tuitionStatus: document.getElementById("tuition-status")?.value || "international"
    };

    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    const dateStr = new Date().toISOString().slice(0, 10);
    a.download = `hec_msc_sauvegarde_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showImportFeedback("✅ Données exportées avec succès !", "success");
}

/**
 * Imports user progress from a previously exported JSON file.
 * Merges statuses/grades/semesters/notes into the current course list
 * without overwriting structural course data.
 */
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const snapshot = JSON.parse(e.target.result);

            if (!snapshot.courses || !Array.isArray(snapshot.courses)) {
                showImportFeedback("❌ Fichier invalide : format non reconnu.", "error");
                return;
            }

            // Merge user tracking data back into the live courses array
            snapshot.courses.forEach(saved => {
                const idx = courses.findIndex(c => c.code === saved.code);
                if (idx !== -1) {
                    if (saved.status   !== undefined) courses[idx].status   = saved.status;
                    if (saved.grade    !== undefined) courses[idx].grade    = saved.grade;
                    if (saved.semester !== undefined) courses[idx].semester = saved.semester;
                    if (saved.notes    !== undefined) courses[idx].notes    = saved.notes;
                }
            });

            // Restore settings
            if (snapshot.targetGpa && document.getElementById("target-gpa")) {
                document.getElementById("target-gpa").value = snapshot.targetGpa;
            }
            if (snapshot.targetYear && document.getElementById("target-year")) {
                document.getElementById("target-year").value = snapshot.targetYear;
            }
            if (snapshot.tuitionStatus && document.getElementById("tuition-status")) {
                document.getElementById("tuition-status").value = snapshot.tuitionStatus;
            }

            // Persist and re-render everything
            saveData();
            renderAll();
            if (window.lucide) lucide.createIcons();

            const exportedOn = snapshot._exported
                ? ` (exporté le ${new Date(snapshot._exported).toLocaleDateString("fr-CA")})`
                : "";
            showImportFeedback(`✅ Données importées avec succès${exportedOn} !`, "success");
        } catch (err) {
            showImportFeedback("❌ Erreur lors de la lecture du fichier : " + err.message, "error");
        }

        // Reset the file input so the same file can be imported again if needed
        event.target.value = "";
    };
    reader.readAsText(file);
}

function showImportFeedback(message, type) {
    const el = document.getElementById("import-feedback");
    if (!el) return;
    el.textContent = message;
    el.className = "import-feedback " + (type === "success" ? "import-ok" : "import-err");
    el.style.display = "block";
    setTimeout(() => { el.style.display = "none"; }, 5000);
}

// Sidebar View Navigation Swapping
function initSidebarNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            navItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const targetSectionId = item.getAttribute("data-target");

            // Sync mobile bottom nav
            document.querySelectorAll(".mobile-nav-item").forEach(mn => {
                mn.classList.toggle("active", mn.getAttribute("data-target") === targetSectionId);
            });

            const sections = document.querySelectorAll(".app-section");
            sections.forEach(sec => sec.classList.remove("active"));

            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.add("active");
                if (targetSectionId === "section-tree") {
                    setTimeout(drawTreeConnections, 100);
                }
            }

            // Close mobile sidebar after navigation
            closeMobileSidebar();
        });
    });
}

function navigateToSection(sectionId) {
    const navItem = document.querySelector(`.nav-item[data-target="${sectionId}"]`);
    if (navItem) {
        navItem.click();
    }
}

function initSidebarControls() {
    const collapseBtn = document.getElementById("sidebar-collapse-btn");
    const pinBtn = document.getElementById("sidebar-pin-btn");

    if (collapseBtn) {
        collapseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleSidebarCollapse();
        });
    }

    if (pinBtn) {
        pinBtn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleSidebarPin();
        });
    }

    loadSidebarState();
}

function loadSidebarState() {
    sidebarPinned = localStorage.getItem("hec_sidebar_pinned") === "true";
    sidebarCollapsed = localStorage.getItem("hec_sidebar_collapsed") === "true";

    if (sidebarPinned) {
        sidebarCollapsed = false;
    }

    applySidebarState();
}

function saveSidebarState() {
    localStorage.setItem("hec_sidebar_pinned", sidebarPinned ? "true" : "false");
    localStorage.setItem("hec_sidebar_collapsed", sidebarCollapsed ? "true" : "false");
}

function toggleSidebarCollapse() {
    if (sidebarPinned) {
        sidebarPinned = false;
    }

    sidebarCollapsed = !sidebarCollapsed;
    saveSidebarState();
    applySidebarState();
}

function toggleSidebarPin() {
    sidebarPinned = !sidebarPinned;

    if (sidebarPinned) {
        sidebarCollapsed = false;
    }

    saveSidebarState();
    applySidebarState();
}

function applySidebarState() {
    document.body.classList.toggle("sidebar-collapsed", sidebarCollapsed && !sidebarPinned);
    document.body.classList.toggle("sidebar-pinned", sidebarPinned);
    updateSidebarButtons();
}

function updateSidebarButtons() {
    const collapseBtn = document.getElementById("sidebar-collapse-btn");
    const pinBtn = document.getElementById("sidebar-pin-btn");

    if (collapseBtn) {
        collapseBtn.title = sidebarCollapsed ? "Agrandir la barre latérale" : "Réduire la barre latérale";
        collapseBtn.innerHTML = `<i data-lucide="${sidebarCollapsed ? "chevrons-right" : "chevrons-left"}"></i>`;
    }

    if (pinBtn) {
        pinBtn.title = sidebarPinned ? "Désépingler la barre latérale" : "Épingler la barre latérale";
        pinBtn.classList.toggle("active", sidebarPinned);
        pinBtn.innerHTML = `<i data-lucide="pin"></i>`;
    }

    if (window.lucide) {
        lucide.createIcons();
    }
}

// GPA conversion weights HEC Montréal scale
const HEC_GPA_MAP = {
    "A+": 4.3, "A": 4.0, "A-": 3.7,
    "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "F": 0.0
};

// Calculations and UI rendering
function renderAll() {
    renderDashboardStats();
    renderCourseCatalog();
    renderSessionPlanner();
    renderTreeNodesHighlight();
    drawTreeConnections();
    updateFinancialStats();
    saveData();
    lucide.createIcons();
}

function updateFinancialStats() {
    let completedCredits = 0;
    let progressCredits = 0;
    
    courses.forEach(c => {
        if (c.status === "done") {
            completedCredits += c.credits;
        } else if (c.status === "progress") {
            progressCredits += c.credits;
        }
    });

    const tuitionStatus = document.getElementById("tuition-status")?.value || "international";
    let costPerCredit = 890;
    if (tuitionStatus === "quebec") {
        costPerCredit = 115;
    } else if (tuitionStatus === "canada") {
        costPerCredit = 315;
    } else if (tuitionStatus === "international") {
        costPerCredit = 890;
    }

    const currentCost = progressCredits * costPerCredit;
    const remainingCredits = Math.max(0, 45.0 - completedCredits - progressCredits);
    const remainingCost = remainingCredits * costPerCredit;

    // Update Dashboard bar
    const dbDone = document.getElementById("db-fin-credits-done");
    if (dbDone) dbDone.innerHTML = `${completedCredits.toFixed(1)} <span style="font-size: 0.85rem; color: var(--text-secondary);">/ 45 cr</span>`;
    
    const dbProgress = document.getElementById("db-fin-credits-progress");
    if (dbProgress) dbProgress.innerHTML = `${progressCredits.toFixed(1)} <span style="font-size: 0.85rem; color: var(--text-secondary);">cr</span>`;
    
    const dbCurrentCost = document.getElementById("db-fin-cost-current");
    if (dbCurrentCost) dbCurrentCost.innerText = `${currentCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} $`;
    
    const dbCost = document.getElementById("db-fin-cost-remaining");
    if (dbCost) dbCost.innerText = `${remainingCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} $`;

    // Update Planner bar
    const plDone = document.getElementById("pl-fin-credits-done");
    if (plDone) plDone.innerHTML = `${completedCredits.toFixed(1)} <span style="font-size: 0.85rem; color: var(--text-secondary);">/ 45 cr</span>`;
    
    const plProgress = document.getElementById("pl-fin-credits-progress");
    if (plProgress) plProgress.innerHTML = `${progressCredits.toFixed(1)} <span style="font-size: 0.85rem; color: var(--text-secondary);">cr</span>`;
    
    const plCurrentCost = document.getElementById("pl-fin-cost-current");
    if (plCurrentCost) plCurrentCost.innerText = `${currentCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} $`;
    
    const plCost = document.getElementById("pl-fin-cost-remaining");
    if (plCost) plCost.innerText = `${remainingCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} $`;

    // Update settings rate explanation label
    const rateInfo = document.getElementById("tuition-rate-info");
    if (rateInfo) {
        rateInfo.innerText = `Tarif actif : ${costPerCredit} $ / crédit (Total programme de 45 cr. : ${(45 * costPerCredit).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} $)`;
    }
}

function getProfileStyles(c) {
    let catLabel = "Option de Spécialisation";
    let badgeStyle = "background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.25);";
    let borderStyle = "border-left: 4px solid #10b981;";
    
    if (c.category === "tronc") {
        catLabel = "Obligatoire Programme";
        badgeStyle = "background: rgba(168, 85, 247, 0.12); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.25);";
        borderStyle = "border-left: 4px solid #a855f7;";
    } else if (c.category === "noyau") {
        catLabel = "Obligatoire Spécialisation";
        badgeStyle = "background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.25);";
        borderStyle = "border-left: 4px solid #3b82f6;";
    } else if (c.category === "methodo") {
        catLabel = "Obligatoire Méthodologie";
        badgeStyle = "background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25);";
        borderStyle = "border-left: 4px solid #f59e0b;";
    } else if (c.category === "projet") {
        catLabel = "Activité Obligatoire";
        badgeStyle = "background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25);";
        borderStyle = "border-left: 4px solid #f59e0b;";
    } else if (c.category === "recommandes") {
        catLabel = "Activité Recommandée";
        badgeStyle = "background: rgba(244, 114, 182, 0.15); color: #f472b6; border: 1px solid rgba(244, 114, 182, 0.25);";
        borderStyle = "border-left: 4px solid #ec4899;";
    } else if (c.category === "bloc1" || c.profile === "Bloc 1" || c.profile === "Logistique et Transport" || c.profile === "Stratégie et Durabilité") {
        catLabel = "Option (Bloc 1)";
        badgeStyle = "background: rgba(6, 182, 212, 0.15); color: #22d3ee; border: 1px solid rgba(6, 182, 212, 0.3);";
        borderStyle = "border-left: 4px solid #06b6d4;";
    } else if (c.category === "bloc2" || c.profile === "Bloc 2" || c.profile === "Analytique et TI" || c.profile === "Services et Consultation") {
        catLabel = "Option (Bloc 2)";
        badgeStyle = "background: rgba(139, 92, 246, 0.15); color: #a78bfa; border: 1px solid rgba(139, 92, 246, 0.3);";
        borderStyle = "border-left: 4px solid #8b5cf6;";
    }
    
    return { catLabel, badgeStyle, borderStyle };
}

function renderDashboardStats() {
    // 1. Credits Calculation
    let totalCredits = 0;
    let completedCoursesCount = 0;
    let currentCoursesCount = 0;

    let troncCredits = 0;
    let noyauCredits = 0;
    let methodoCredits = 0;
    let optionsCredits = 0;
    let projetCredits = 0;

    let bloc1Credits = 0;
    let bloc2Credits = 0;

    // GPA calculations
    let weightedGpaSum = 0;
    let gradedCreditsCount = 0;

    courses.forEach(c => {
        if (c.status === "done") {
            totalCredits += c.credits;
            completedCoursesCount++;

            // Category counts
            if (c.category === "tronc") troncCredits += c.credits;
            else if (c.category === "noyau") noyauCredits += c.credits;
            else if (c.category === "methodo") methodoCredits += c.credits;
            else if (c.category === "bloc1" || c.category === "bloc2" || c.category === "options" || c.category === "option") optionsCredits += c.credits;
            else if (c.category === "projet") projetCredits += c.credits;

            // Block counts for options
            if (c.category === "bloc1") bloc1Credits += c.credits;
            else if (c.category === "bloc2") bloc2Credits += c.credits;

            // GPA
            if (c.grade && HEC_GPA_MAP[c.grade] !== undefined) {
                weightedGpaSum += (HEC_GPA_MAP[c.grade] * c.credits);
                gradedCreditsCount += c.credits;
            }
        } else if (c.status === "progress") {
            currentCoursesCount++;
        }
    });

    // Update Global Progress Ring
    const progressPercent = Math.min((totalCredits / 45) * 100, 100);
    const circle = document.getElementById("global-progress");
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (progressPercent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    document.getElementById("total-credits").innerText = totalCredits;
    document.getElementById("completed-courses").innerText = `${completedCoursesCount} cours`;
    document.getElementById("current-courses").innerText = `${currentCoursesCount} en cours`;

    // Category Fractions
    document.getElementById("frac-tronc").innerText = `${troncCredits}/3 cr`;
    document.getElementById("frac-noyau").innerText = `${noyauCredits}/9 cr`;
    document.getElementById("frac-methodo").innerText = `${methodoCredits}/3 cr`;
    document.getElementById("frac-options").innerText = `${optionsCredits}/18 cr`;
    document.getElementById("frac-projet").innerText = `${projetCredits}/9 cr`;

    const fracRecom = document.getElementById("frac-recommandes");
    if (fracRecom) {
        const recomDone = courses.filter(c => c.category === "recommandes" && c.status === "done").length;
        const recomTotal = courses.filter(c => c.category === "recommandes").length;
        fracRecom.innerText = `${recomDone}/${recomTotal} atel.`;
    }

    // Profiles/Blocks Progress Bars
    const maxProfileCredits = 18; // Options minimum is 18 cr
    if (document.getElementById("prof-bloc1-bar")) {
        document.getElementById("prof-bloc1-bar").style.width = `${Math.min((bloc1Credits / maxProfileCredits) * 100, 100)}%`;
        document.getElementById("prof-bloc1-text").innerText = `${bloc1Credits} cr`;
    }
    if (document.getElementById("prof-bloc2-bar")) {
        document.getElementById("prof-bloc2-bar").style.width = `${Math.min((bloc2Credits / maxProfileCredits) * 100, 100)}%`;
        document.getElementById("prof-bloc2-text").innerText = `${bloc2Credits} cr`;
    }
    if (document.getElementById("prof-total-bar")) {
        const totalOpts = bloc1Credits + bloc2Credits;
        document.getElementById("prof-total-bar").style.width = `${Math.min((totalOpts / maxProfileCredits) * 100, 100)}%`;
        document.getElementById("prof-total-text").innerText = `${totalOpts} cr`;
    }

    // Calculated GPA display
    const calculatedGpa = gradedCreditsCount > 0 ? (weightedGpaSum / gradedCreditsCount) : 0.00;
    document.getElementById("gpa-display").innerText = calculatedGpa.toFixed(2);

    // Target GPA compare and required remaining GPA
    const targetGpa = parseFloat(document.getElementById("target-gpa").value) || 4.00;
    const totalGpaCredits = 45.0;
    const remainingGradedCredits = Math.max(0, totalGpaCredits - gradedCreditsCount);
    
    let requiredGpaText = "";
    if (remainingGradedCredits > 0) {
        const neededSum = (targetGpa * totalGpaCredits) - (calculatedGpa * gradedCreditsCount);
        const neededGpa = neededSum / remainingGradedCredits;
        
        if (neededGpa <= 0) {
            requiredGpaText = `Cible: ${targetGpa.toFixed(2)} (Cible sécurisée ! 🎉)`;
        } else if (neededGpa > 4.30) {
            requiredGpaText = `Cible: ${targetGpa.toFixed(2)} (Inatteignable ⚠️)`;
        } else {
            requiredGpaText = `Cible: ${targetGpa.toFixed(2)} (Requis: ${neededGpa.toFixed(2)} restants)`;
        }
    } else {
        requiredGpaText = calculatedGpa >= targetGpa 
            ? `Cible: ${targetGpa.toFixed(2)} (Cible atteinte ! 🎉)` 
            : `Cible: ${targetGpa.toFixed(2)} (Cible non atteinte)`;
    }
    
    document.getElementById("gpa-target-text").innerText = requiredGpaText;
    const gpaPercent = Math.min((calculatedGpa / targetGpa) * 100, 100);
    document.getElementById("gpa-target-bar").style.width = `${gpaPercent}%`;

    // Render dashboard quick lists
    renderDashboardLists();
}

function renderDashboardLists() {
    // 1. Dashboard Tasks & Reminders
    const tasksContainer = document.getElementById("dashboard-tasks-container");
    tasksContainer.innerHTML = "";

    const coursesWithNotes = courses.filter(c => c.notes && c.notes.trim() !== "");
    
    if (coursesWithNotes.length === 0) {
        tasksContainer.innerHTML = `<div class="no-results" style="padding:1rem;font-size:0.85rem;">Aucun rappel actif. Saisissez des notes dans vos fiches de cours pour les voir ici !</div>`;
    } else {
        coursesWithNotes.forEach(c => {
            const taskDiv = document.createElement("div");
            taskDiv.className = "dashboard-task-item";
            taskDiv.onclick = () => openCourseDrawer(c.code);
            taskDiv.innerHTML = `
                <span class="task-code">${c.code}</span>
                <span class="task-notes-text">${c.notes}</span>
            `;
            tasksContainer.appendChild(taskDiv);
        });
    }

    // 2. Dashboard Courses list
    const recentContainer = document.getElementById("dashboard-recent-courses");
    recentContainer.innerHTML = "";
    
    const visibleRecent = courses.slice(0, 4); // Display first 4 courses as overview
    visibleRecent.forEach(c => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "course-item";
        itemDiv.onclick = () => openCourseDrawer(c.code);

        let badgeClass = "todo";
        let badgeLabel = "À FAIRE";
        if (c.status === "done") { badgeClass = "done"; badgeLabel = "TERMINÉ"; }
        if (c.status === "progress") { badgeClass = "progress"; badgeLabel = "EN COURS"; }

        itemDiv.innerHTML = `
            <span class="course-code">${c.code}</span>
            <span class="course-name">${c.name}</span>
            <span class="course-credits">${c.credits.toFixed(1)} cr</span>
            <span class="badge ${badgeClass}">${badgeLabel}</span>
        `;
        recentContainer.appendChild(itemDiv);
    });
}

// Course Catalog section rendering
function setCourseFilter(filter) {
    currentFilter = filter;
    
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(t => {
        if (t.getAttribute("data-filter") === filter) t.classList.add("active");
        else t.classList.remove("active");
    });

    renderCourseCatalog();
}

function filterCourses() {
    renderCourseCatalog();
}

function renderCourseCatalog() {
    const grid = document.getElementById("courses-grid-container");
    grid.innerHTML = "";

    const searchVal = document.getElementById("course-search").value.toLowerCase().trim();

    const filtered = courses.filter(c => {
        // Tab check
        if (currentFilter !== "all") {
            if (currentFilter === "options") {
                if (c.category !== "bloc1" && c.category !== "bloc2" && c.category !== "options" && c.category !== "option") return false;
            } else {
                if (c.category !== currentFilter) return false;
            }
        }

        // Search check
        if (searchVal !== "") {
            const codeMatch = c.code.toLowerCase().includes(searchVal);
            const nameMatch = c.name.toLowerCase().includes(searchVal);
            return codeMatch || nameMatch;
        }

        return true;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="no-results col-span-4">Aucun cours ne correspond aux critères de filtrage.</div>`;
        return;
    }

    filtered.forEach(c => {
        const card = document.createElement("div");
        card.onclick = () => openCourseDrawer(c.code);

        let statusClass = "todo";
        let statusLabel = "À FAIRE";
        if (c.status === "done") { statusClass = "done"; statusLabel = "TERMINÉ"; }
        if (c.status === "progress") { statusClass = "progress"; statusLabel = "EN COURS"; }

        const styles = getProfileStyles(c);
        let categoryLabel = styles.catLabel;
        
        let categoryClass = "";
        if (c.category === "tronc") {
            categoryLabel = "Obligatoire Programme";
            categoryClass = "cat-tronc";
        } else if (c.category === "noyau") {
            categoryLabel = "Obligatoire Spécialisation";
            categoryClass = "cat-noyau";
        } else if (c.category === "methodo") {
            categoryLabel = "Obligatoire Méthodologie";
            categoryClass = "cat-methodo";
        } else if (c.category === "projet") {
            categoryLabel = "Activité Obligatoire";
            categoryClass = "cat-projet";
        } else if (c.category === "recommandes") {
            categoryLabel = "Activité Recommandée";
            categoryClass = "cat-recommandes";
        } else if (c.profile) {
            categoryLabel = c.profile;
            if (c.profile === "Bloc 1") categoryClass = "prof-bloc1"; else if (c.profile === "Bloc 2") categoryClass = "prof-bloc2";
        }

        card.className = `course-grid-card glass-panel ${categoryClass}`;

        card.innerHTML = `
            <div class="card-course-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span class="course-code-highlighted">${c.code}</span>
                <span class="badge ${statusClass}">${statusLabel}</span>
            </div>
            <h3 class="card-course-title" style="margin-top: 4px; margin-bottom: 0.5rem; font-size: 1.02rem; font-weight: 700; line-height: 1.35; color: white; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: auto; min-height: 44px;">
                ${c.name}
            </h3>
            <div style="margin-bottom: 0.75rem;">
                <span class="card-category-sublabel">${categoryLabel}</span>
            </div>
            <div class="card-course-footer" style="padding-top: 0.75rem; margin-top: auto; border-top: 1px solid rgba(255,255,255,0.04); display: flex; justify-content: space-between; align-items: center;">
                <span class="card-course-credits" style="font-size: 0.8rem; color: var(--text-secondary); display: flex; align-items: center; gap: 4px;">
                    <i data-lucide="award" style="width:12px; height:12px;"></i> ${c.credits.toFixed(1)} cr
                </span>
                <span class="card-course-period" style="font-size: 0.8rem; display:flex; align-items:center; gap:4px;">
                    <i data-lucide="calendar" style="width:12px; height:12px;"></i> ${c.period}
                </span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Session Planner Kanban columns mapping
const SEMESTERS = {
    "A26": "Automne 2026",
    "H27": "Hiver 2027",
    "E27": "Été 2027",
    "A27": "Automne 2027",
    "H28": "Hiver 2028",
    "E28": "Été 2028"
};

let currentPoolFilter = "all";

function setPoolFilter(filter) {
    currentPoolFilter = filter;
    
    // Update filter active button class
    const btnAll = document.getElementById("pool-filter-all");
    const btnMandatory = document.getElementById("pool-filter-mandatory");
    const btnOptions = document.getElementById("pool-filter-options");
    
    if (btnAll) btnAll.classList.toggle("active", filter === "all");
    if (btnMandatory) btnMandatory.classList.toggle("active", filter === "mandatory");
    if (btnOptions) btnOptions.classList.toggle("active", filter === "options");
    
    renderSessionPlanner();
}

function checkPlannerWarnings(course) {
    if (!course.prerequisites || course.prerequisites.length === 0) return null;
    
    const semesterOrder = ["A26", "H27", "E27", "A27", "H28", "E28"];
    const currentSemIdx = semesterOrder.indexOf(course.semester);
    if (currentSemIdx === -1) return null;

    let warnings = [];
    course.prerequisites.forEach(preCode => {
        const preCourse = courses.find(c => c.code === preCode);
        if (!preCourse) return;

        // If prerequisite is done, it's valid
        if (preCourse.status === "done") return;

        // If it is scheduled, check if scheduled before
        if (preCourse.semester) {
            const preSemIdx = semesterOrder.indexOf(preCourse.semester);
            if (preSemIdx >= currentSemIdx) {
                warnings.push(`Le préalable ${preCode} doit être suivi avant (planifié en ${SEMESTERS[preCourse.semester] || preCourse.semester}).`);
            }
        } else {
            warnings.push(`Le préalable ${preCode} n'est ni planifié ni complété !`);
        }
    });

    return warnings.length > 0 ? warnings.join("<br>") : null;
}

function renderSessionPlanner() {
    // 1. Render the Unplanned Pool list
    const poolContainer = document.getElementById("unplanned-courses-pool");
    if (poolContainer) {
        poolContainer.innerHTML = "";
        
        // Filter courses where semester is not assigned (or invalid)
        let unplanned = courses.filter(c => !c.semester || !SEMESTERS[c.semester]);
        
        // Apply category filter
        if (currentPoolFilter === "mandatory") {
            unplanned = unplanned.filter(c => c.category === "tronc" || c.category === "noyau" || c.category === "methodo" || c.category === "projet");
        } else if (currentPoolFilter === "options") {
            unplanned = unplanned.filter(c => (c.category === "bloc1" || c.category === "bloc2" || c.category === "options" || c.category === "option") && c.code !== "ETHI 66200" && c.code !== "INDV 66202");
        }
        
        if (unplanned.length === 0) {
            poolContainer.innerHTML = `<div class="planner-empty-spot" style="padding:1rem; min-height:80px;">Tous les cours de cette catégorie sont planifiés ! 🎉</div>`;
        } else {
            unplanned.forEach(c => {
                const card = document.createElement("div");
                card.draggable = true;
                card.setAttribute("ondragstart", `dragStart(event, '${c.code}')`);
                card.setAttribute("ondragend", "dragEnd(event)");
                card.onclick = () => openCourseDrawer(c.code);
                
                const styles = getProfileStyles(c);
                let catLabel = styles.catLabel;
                
                let categoryClass = "";
                if (c.category === "tronc") {
                    catLabel = "Obligatoire Programme";
                    categoryClass = "cat-tronc";
                } else if (c.category === "noyau") {
                    catLabel = "Obligatoire Spécialisation";
                    categoryClass = "cat-noyau";
                } else if (c.category === "methodo") {
                    catLabel = "Obligatoire Méthodologie";
                    categoryClass = "cat-methodo";
                } else if (c.category === "projet") {
                    catLabel = "Activité Obligatoire";
                    categoryClass = "cat-projet";
                } else if (c.category === "recommandes") {
                    catLabel = "Activité Recommandée";
                    categoryClass = "cat-recommandes";
                } else if (c.profile) {
                    catLabel = c.profile;
                    if (c.profile === "Bloc 1") categoryClass = "prof-bloc1"; else if (c.profile === "Bloc 2") categoryClass = "prof-bloc2";
                }

                card.className = `pool-card ${categoryClass}`;
                
                card.innerHTML = `
                    <div class="pool-card-header" style="margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center;">
                        <span class="p-code-highlighted">${c.code}</span>
                        <div style="display: flex; align-items: center; gap: 4px; opacity: 0.35;">
                            <i data-lucide="grip-vertical" style="width: 12px; height: 12px;" title="Glisser pour planifier"></i>
                        </div>
                    </div>
                    <span class="p-title" style="margin-bottom: 4px; display: block;">${c.name}</span>
                    <div style="font-size:0.65rem; color:var(--text-secondary); margin: 3px 0; display:flex; align-items:center; gap:4px;">
                        <i data-lucide="calendar" style="width:10px; height:10px;"></i> ${c.period}
                    </div>
                    <div style="margin-top: 4px; margin-bottom: 6px;">
                        <span class="card-category-sublabel" style="display:inline-block; font-size:0.62rem; margin:0;">${catLabel}</span>
                    </div>
                    <div class="pool-card-actions" style="margin-top: auto; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.03);">
                        <span class="p-credits">${c.credits.toFixed(1)} cr</span>
                        <button class="btn-quick-assign" onclick="event.stopPropagation(); toggleQuickAssignMenu(event, '${c.code}')">
                            <i data-lucide="plus" style="width:12px;height:12px;"></i> Planifier
                        </button>
                    </div>
                `;
                poolContainer.appendChild(card);
            });
        }
    }

    // 2. Render Semester Columns
    const board = document.getElementById("planner-board-container");
    if (!board) return;
    board.innerHTML = "";

    Object.keys(SEMESTERS).forEach(semKey => {
        const col = document.createElement("div");
        col.className = "planner-column";
        col.id = `planner-col-${semKey}`;
        col.setAttribute("ondragover", "allowDrop(event)");
        col.setAttribute("ondragenter", `dragEnter(event, '${semKey}')`);
        col.setAttribute("ondragleave", `dragLeave(event, '${semKey}')`);
        col.setAttribute("ondrop", `dropToSemester(event, '${semKey}')`);

        const semCourses = courses.filter(c => c.semester === semKey);
        const activeSemCourses = semCourses.filter(c => c.status === "progress");
        const colCredits = activeSemCourses.reduce((acc, curr) => acc + curr.credits, 0);

        const sessionCost = colCredits * 840;

        col.innerHTML = `
            <div class="planner-column-header">
                <div class="column-header-top">
                    <h4>${SEMESTERS[semKey]}</h4>
                </div>
                <div class="column-header-badges">
                    <span class="col-badge badge-credits"><i data-lucide="award"></i> ${colCredits.toFixed(1)} cr</span>
                    <span class="col-badge badge-cost"><i data-lucide="dollar-sign"></i> ${sessionCost.toLocaleString()} $</span>
                </div>
            </div>
            <div class="planner-column-body" id="col-body-${semKey}">
                <!-- cards -->
            </div>
        `;
        board.appendChild(col);

        const colBody = document.getElementById(`col-body-${semKey}`);
        
        if (semCourses.length === 0) {
            colBody.innerHTML = `<div class="planner-empty-spot">Déposez un cours ici</div>`;
        } else {
            semCourses.forEach(c => {
                const card = document.createElement("div");
                card.draggable = true;
                card.setAttribute("ondragstart", `dragStart(event, '${c.code}')`);
                card.setAttribute("ondragend", "dragEnd(event)");
                card.onclick = () => openCourseDrawer(c.code);
                
                const warningMsg = checkPlannerWarnings(c);
                const warningHTML = warningMsg 
                    ? `<div class="planner-card-warning" title="${warningMsg}"><i data-lucide="alert-triangle" style="width:12px;height:12px;color:var(--danger);"></i></div>`
                    : "";

                const styles = getProfileStyles(c);
                
                let categoryClass = "";
                if (c.category === "tronc") {
                    categoryClass = "cat-tronc";
                } else if (c.category === "noyau") {
                    categoryClass = "cat-noyau";
                } else if (c.category === "methodo") {
                    categoryClass = "cat-methodo";
                } else if (c.category === "projet") {
                    categoryClass = "cat-projet";
                } else if (c.category === "recommandes") {
                    categoryClass = "cat-recommandes";
                } else if (c.profile) {
                    if (c.profile === "Bloc 1") categoryClass = "prof-bloc1"; else if (c.profile === "Bloc 2") categoryClass = "prof-bloc2";
                }

                card.className = `planner-card ${c.status} ${categoryClass}`;

                card.innerHTML = `
                    <div class="planner-card-header" style="margin-bottom: 4px; display: flex; justify-content: space-between; align-items: center;">
                        <span class="p-code-highlighted">${c.code}</span>
                        <div style="display:flex; align-items:center; gap:6px;">
                            ${warningHTML}
                            <i data-lucide="grip-vertical" style="width: 12px; height: 12px; opacity: 0.35;" title="Glissez pour déplacer"></i>
                            <button class="btn-remove-planned" onclick="event.stopPropagation(); unscheduleCourse('${c.code}')" title="Retirer du planificateur">
                                <i data-lucide="x" style="width:12px;height:12px;"></i>
                            </button>
                        </div>
                    </div>
                    <span class="p-title" style="font-size: 0.76rem; font-weight: 500; display: block; margin-bottom: 2px;">${c.name}</span>
                    <div class="planner-card-bottom" style="margin-top: auto; padding-top: 4px; border-top: 1px solid rgba(255,255,255,0.03); display: flex; justify-content: flex-end;">
                        <span class="p-credits" style="font-size: 0.65rem; opacity: 0.7;">${c.credits.toFixed(1)} cr</span>
                    </div>
                `;
                colBody.appendChild(card);
            });
        }
    });

    if (window.lucide) {
        lucide.createIcons();
    }
}

// Click and Highlight interactive Tree Map prerequisites
function clickTreeNode(courseCode) {
    const selectedCourse = courses.find(c => c.code === courseCode);
    if (!selectedCourse) return;

    currentSelectedCourseCode = courseCode;

    // 1. Reset all visual statuses
    const nodes = document.querySelectorAll(".tree-node");
    nodes.forEach(n => {
        n.classList.remove("selected-node", "prereq-node", "unlocks-node");
    });

    // 2. Highlight selected node
    const selfNode = document.getElementById(`node-${courseCode.replace(" ", "-")}`);
    if (selfNode) {
        selfNode.classList.add("selected-node");
    }

    // 3. Highlight prerequisites
    selectedCourse.prerequisites.forEach(preCode => {
        const preNode = document.getElementById(`node-${preCode.replace(" ", "-")}`);
        if (preNode) {
            preNode.classList.add("prereq-node");
        }
    });

    // 4. Highlight unlocks (dependent courses)
    selectedCourse.unlocks.forEach(unlCode => {
        const unlNode = document.getElementById(`node-${unlCode.replace(" ", "-")}`);
        if (unlNode) {
            unlNode.classList.add("unlocks-node");
        }
    });

    // Render tree sidebar
    renderTreeSidebar(selectedCourse);
    
    // Draw SVG prerequisite paths
    drawTreeConnections();
}

function renderTreeNodesHighlight() {
    // Dynamically highlights completed/planned nodes and adds specializations visual classes
    courses.forEach(c => {
        const nodeId = `node-${c.code.replace(" ", "-")}`;
        const nodeEl = document.getElementById(nodeId);
        if (nodeEl) {
            // Remove previous dynamic classes
            nodeEl.classList.remove("status-done", "status-progress", "status-todo");
            nodeEl.classList.remove("profile-marketing", "profile-decision", "profile-ti", "profile-log", "profile-strat", "profile-serv", "profile-bloc1", "profile-bloc2");
            nodeEl.classList.remove("category-tronc", "category-noyau", "category-methodo", "category-options", "category-projet", "category-recommandes");
            
            // Remove old inline style border overrides
            nodeEl.style.borderRight = "";
            
            // Add specialization/category class for static coloration
            if (c.profile === "Bloc 1") {
                nodeEl.classList.add("profile-bloc1");
            } else if (c.profile === "Bloc 2") {
                nodeEl.classList.add("profile-bloc2");
            }
            nodeEl.classList.add(`category-${c.category}`);

            // Apply status class
            if (c.status === "done") {
                nodeEl.classList.add("status-done");
            } else if (c.status === "progress") {
                nodeEl.classList.add("status-progress");
            } else {
                nodeEl.classList.add("status-todo");
            }

            // Update badge inside the node card dynamically
            const badgeEl = nodeEl.querySelector(".node-badge");
            if (badgeEl) {
                if (c.status === "done") {
                    badgeEl.innerHTML = `<i data-lucide="check-circle" style="width:10px; height:10px; margin-right:3px; display:inline-block; vertical-align:middle;"></i> Terminé`;
                    badgeEl.className = "node-badge badge-done";
                    badgeEl.removeAttribute("style");
                } else if (c.status === "progress") {
                    badgeEl.innerHTML = `<i data-lucide="clock" style="width:10px; height:10px; margin-right:3px; display:inline-block; vertical-align:middle;"></i> En cours`;
                    badgeEl.className = "node-badge badge-progress";
                    badgeEl.removeAttribute("style");
                } else {
                    const styles = getProfileStyles(c);
                    badgeEl.innerHTML = styles.catLabel;
                    badgeEl.className = "node-badge badge-todo";
                    badgeEl.style = styles.badgeStyle + " padding: 2px 6px; border-radius: 4px; font-size: 0.65rem;";
                }
            }
        }
    });
    // Create new Lucide icons inside tree badges
    if (window.lucide) {
        lucide.createIcons();
    }
}

function renderTreeSidebar(course) {
    const pane = document.getElementById("tree-sidebar-container");
    pane.innerHTML = "";

    // Parse status labels
    let statusLabel = "À faire";
    if (course.status === "done") statusLabel = "Terminé ✅";
    if (course.status === "progress") statusLabel = "En cours ⏳";

    let prereqsText = course.prerequisites.length > 0 ? course.prerequisites.join(", ") : "Aucun";
    let unlocksText = course.unlocks.length > 0 ? course.unlocks.join(", ") : "Aucun";

    pane.innerHTML = `
        <span class="drawer-course-code" style="align-self:flex-start;">${course.code}</span>
        <h3>${course.name}</h3>
        <div class="tree-sidebar-meta">
            <span style="font-size:0.85rem;"><strong style="color:white;">Crédits:</strong> ${course.credits.toFixed(1)} cr</span>
            <span style="font-size:0.85rem;"><strong style="color:white;">Offre:</strong> ${course.period}</span>
            <span style="font-size:0.85rem;"><strong style="color:white;">Statut:</strong> ${statusLabel}</span>
        </div>

        <div class="tree-sidebar-meta" style="border-color: rgba(239, 68, 68, 0.15);">
            <span style="font-size:0.85rem;color:var(--text-secondary);"><strong style="color:var(--danger);">Préalables:</strong> ${prereqsText}</span>
            <span style="font-size:0.85rem;color:var(--text-secondary);"><strong style="color:var(--success);">Débloque:</strong> ${unlocksText}</span>
        </div>

        <p class="text-secondary" style="font-size:0.85rem;line-height:1.5;">${course.desc}</p>

        <button class="btn btn-primary" onclick="openCourseDrawer('${course.code}')" style="width:100%;margin-top:auto;"><i data-lucide="sliders"></i> Fiche de cours & Notes</button>
    `;
    lucide.createIcons();
}

// Sliding details drawer handlers
function openCourseDrawer(courseCode) {
    const course = courses.find(c => c.code === courseCode);
    if (!course) return;

    currentSelectedCourseCode = courseCode;

    // Fill elements
    document.getElementById("drawer-code").innerText = course.code;
    document.getElementById("drawer-title").innerText = course.name;
    document.getElementById("drawer-credits").innerText = course.credits.toFixed(1);
    document.getElementById("drawer-period").innerText = course.period;
    
    // Dynamically populate semester selector with offered semesters only
    const semSelector = document.getElementById("drawer-semester-selector");
    semSelector.innerHTML = ""; // Clear existing
    
    const defaultOpt = document.createElement("option");
    defaultOpt.value = "";
    defaultOpt.innerText = "Non planifié";
    semSelector.appendChild(defaultOpt);
    
    Object.keys(SEMESTERS).forEach(semKey => {
        if (isPeriodValidForSemester(course, semKey)) {
            const opt = document.createElement("option");
            opt.value = semKey;
            opt.innerText = SEMESTERS[semKey];
            semSelector.appendChild(opt);
        }
    });
    
    semSelector.value = course.semester || "";
    document.getElementById("drawer-notes").value = course.notes || "";
    document.getElementById("drawer-desc").innerText = course.desc;

    // Themes
    const themesUl = document.getElementById("drawer-themes");
    themesUl.innerHTML = "";
    if (course.themes && course.themes.length > 0) {
        document.getElementById("drawer-themes-section").style.display = "block";
        course.themes.forEach(t => {
            const li = document.createElement("li");
            li.innerText = t;
            themesUl.appendChild(li);
        });
    } else {
        document.getElementById("drawer-themes-section").style.display = "none";
    }

    // Remarques
    if (course.remarques && course.remarques.trim() !== "") {
        document.getElementById("drawer-remarques-section").style.display = "block";
        document.getElementById("drawer-remarques").innerText = course.remarques;
    } else {
        document.getElementById("drawer-remarques-section").style.display = "none";
    }

    // Set Status active button
    updateStatusButtonsUI(course.status);

    // Toggle custom course deletion section
    const isCustom = !DEFAULT_COURSES.some(c => c.code === courseCode);
    const deleteSec = document.getElementById("drawer-delete-section");
    if (deleteSec) {
        deleteSec.style.display = isCustom ? "block" : "none";
    }

    // Show drawer overlay
    document.getElementById("course-details-drawer").classList.add("active");
    lucide.createIcons();
}

function updateStatusButtonsUI(status) {
    const todoBtn = document.querySelector(".btn-todo");
    const progressBtn = document.querySelector(".btn-progress");
    const doneBtn = document.querySelector(".btn-done");
    const gradeContainer = document.getElementById("grade-editor-container");

    todoBtn.classList.remove("active");
    progressBtn.classList.remove("active");
    doneBtn.classList.remove("active");

    if (status === "todo") todoBtn.classList.add("active");
    if (status === "progress") progressBtn.classList.add("active");
    if (status === "done") doneBtn.classList.add("active");

    // Show/hide grade dropdown on 'done' status
    if (status === "done") {
        gradeContainer.style.display = "flex";
        const course = courses.find(c => c.code === currentSelectedCourseCode);
        if (course) {
            document.getElementById("drawer-grade-selector").value = course.grade || "";
        }
    } else {
        gradeContainer.style.display = "none";
    }
}

function updateCurrentCourseStatus(status) {
    const course = courses.find(c => c.code === currentSelectedCourseCode);
    if (!course) return;

    course.status = status;
    if (status !== "done") course.grade = ""; // Clear grade if changed status

    updateStatusButtonsUI(status);
    renderAll();
}

function updateCurrentCourseGrade(grade) {
    const course = courses.find(c => c.code === currentSelectedCourseCode);
    if (course) {
        course.grade = grade;
        renderAll();
    }
}

function updateCurrentCourseSemester(sem) {
    const course = courses.find(c => c.code === currentSelectedCourseCode);
    if (course) {
        const success = handleMoveAndSolve(course.code, sem);
        if (!success) {
            document.getElementById("drawer-semester-selector").value = course.semester || "";
        }
    }
}

function updateCurrentCourseNotes(notes) {
    const course = courses.find(c => c.code === currentSelectedCourseCode);
    if (course) {
        course.notes = notes;
        saveData(); // Save persists notes on keystroke
        
        // Trigger visual autosave feedback
        const indicator = document.getElementById("notes-save-indicator");
        if (indicator) {
            indicator.classList.remove("save-glowing");
            // Trigger layout reflow to restart CSS animation
            void indicator.offsetWidth;
            indicator.classList.add("save-glowing");
        }
    }
}

function closeDrawer(e) {
    if (!e || e.target === document.getElementById("course-details-drawer")) {
        document.getElementById("course-details-drawer").classList.remove("active");
        currentSelectedCourseCode = null;
    }
}

function deleteCustomCourse() {
    if (!currentSelectedCourseCode) return;
    const course = courses.find(c => c.code === currentSelectedCourseCode);
    if (!course) return;

    if (confirm(`Voulez-vous vraiment supprimer le cours personnalisé ${course.code} (${course.name}) de votre tableau de bord ?`)) {
        // Remove from list
        courses = courses.filter(c => c.code !== currentSelectedCourseCode);
        
        // Reset selection
        currentSelectedCourseCode = null;

        // Close drawer
        document.getElementById("course-details-drawer").classList.remove("active");

        // Save and re-render
        saveData();
        renderAll();

        showNotification(`Cours <strong>${course.code}</strong> supprimé avec succès.`, "success");
    }
}

// Custom course insertion Modal
function showAddCourseModal() {
    document.getElementById("add-course-modal").classList.add("active");
}

function closeAddCourseModal(e) {
    if (!e || e.target === document.getElementById("add-course-modal")) {
        document.getElementById("add-course-modal").classList.remove("active");
        document.getElementById("add-course-form").reset();
    }
}

function handleCustomCourseSubmit(e) {
    e.preventDefault();

    const code = document.getElementById("add-code").value.toUpperCase().trim();
    const name = document.getElementById("add-name").value.trim();
    const category = document.getElementById("add-category").value;
    const credits = parseFloat(document.getElementById("add-credits").value) || 3.0;
    const period = document.getElementById("add-period").value.trim() || "Toute l'année";
    const desc = document.getElementById("add-desc").value.trim() || "Cours inséré manuellement.";

    // Check duplicate
    if (courses.some(c => c.code === code)) {
        alert("Un cours avec ce code existe déjà !");
        return;
    }

    const newCourse = {
        code,
        name,
        category,
        credits,
        period,
        mode: "Présentiel",
        desc,
        themes: [],
        remarques: "",
        status: "todo",
        grade: "",
        semester: "",
        notes: "",
        prerequisites: [],
        unlocks: []
    };

    courses.push(newCourse);
    closeAddCourseModal();
    renderAll();
}

// Reset data in settings
function resetToDefault() {
    if (confirm("Voulez-vous vraiment réinitialiser toutes vos modifications académiques (notes, semestres, tâches) ?")) {
        localStorage.clear();
        loadData();
        renderAll();
        alert("Données réinitialisées avec succès !");
    }
}

// Draw dynamic prerequisite connection lines
function drawTreeConnections() {
    const svg = document.getElementById("tree-connections-svg");
    if (!svg) return;
    svg.innerHTML = ""; // Clear existing lines

    const container = document.querySelector(".tech-tree-container");
    if (!container) return;

    // Set SVG height and width to scrollable dimensions to prevent line clipping on scroll
    svg.style.width = `${container.scrollWidth}px`;
    svg.style.height = `${container.scrollHeight}px`;

    const containerRect = container.getBoundingClientRect();
    if (containerRect.width === 0 || containerRect.height === 0) return; // Safeguard if section is hidden

    const scrollLeft = container.scrollLeft || 0;
    const scrollTop = container.scrollTop || 0;

    // Loop through all courses that have prerequisites
    courses.forEach(course => {
        if (!course.prerequisites || course.prerequisites.length === 0) return;

        const targetNodeEl = document.getElementById(`node-${course.code.replace(" ", "-")}`);
        if (!targetNodeEl) return;
        const targetRect = targetNodeEl.getBoundingClientRect();

        // Calculate connection coordinates relative to the container
        const endX = targetRect.left - containerRect.left + scrollLeft + targetRect.width / 2;
        const endY = targetRect.top - containerRect.top + scrollTop;

        course.prerequisites.forEach(preCode => {
            const sourceNodeEl = document.getElementById(`node-${preCode.replace(" ", "-")}`);
            if (!sourceNodeEl) return;
            const sourceRect = sourceNodeEl.getBoundingClientRect();

            const startX = sourceRect.left - containerRect.left + scrollLeft + sourceRect.width / 2;
            const startY = sourceRect.top - containerRect.top + scrollTop + sourceRect.height;

            // Generate beautifully balanced Cubic Bezier curves
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const pathFlow = document.createElementNS("http://www.w3.org/2000/svg", "path");
            
            const dy = endY - startY;
            const controlY1 = startY + dy * 0.45;
            const controlY2 = endY - dy * 0.45;
            const dVal = `M ${startX} ${startY} C ${startX} ${controlY1}, ${endX} ${controlY2}, ${endX} ${endY}`;
            path.setAttribute("d", dVal);
            pathFlow.setAttribute("d", dVal);

            // Style defaults
            let strokeColor = "rgba(255, 255, 255, 0.08)";
            let strokeWidth = "2";
            let filter = "none";
            
            let flowColor = "rgba(255, 255, 255, 0.12)";
            let flowWidth = "1.5";
            let flowFilter = "none";

            // If a course is selected, highlight corresponding paths
            if (currentSelectedCourseCode) {
                if (currentSelectedCourseCode === course.code) {
                    // Clicking this course highlights its prerequisites in red/orange
                    strokeColor = "rgba(239, 68, 68, 0.25)";
                    strokeWidth = "2.5";
                    filter = "drop-shadow(0px 0px 3px rgba(239, 68, 68, 0.2))";
                    
                    flowColor = "var(--danger)";
                    flowWidth = "2.5";
                    flowFilter = "drop-shadow(0px 0px 5px rgba(239, 68, 68, 0.6))";
                } else if (currentSelectedCourseCode === preCode) {
                    // Clicking a prerequisite highlights unlocked courses in green
                    strokeColor = "rgba(16, 185, 129, 0.25)";
                    strokeWidth = "2.5";
                    filter = "drop-shadow(0px 0px 3px rgba(16, 185, 129, 0.2))";
                    
                    flowColor = "var(--success)";
                    flowWidth = "2.5";
                    flowFilter = "drop-shadow(0px 0px 5px rgba(16, 185, 129, 0.6))";
                }
            }

            path.setAttribute("stroke", strokeColor);
            path.setAttribute("stroke-width", strokeWidth);
            path.setAttribute("stroke-dasharray", "none");
            path.setAttribute("fill", "transparent");
            
            if (filter !== "none") {
                path.setAttribute("style", `filter: ${filter}; transition: stroke 0.3s, stroke-width 0.3s, filter 0.3s;`);
            } else {
                path.setAttribute("style", "transition: stroke 0.3s, stroke-width 0.3s, filter 0.3s;");
            }
            
            // Flow overlay path properties
            pathFlow.setAttribute("stroke", flowColor);
            pathFlow.setAttribute("stroke-width", flowWidth);
            pathFlow.setAttribute("fill", "transparent");
            pathFlow.setAttribute("class", "tree-connection-flow");
            
            if (flowFilter !== "none") {
                pathFlow.setAttribute("style", `filter: ${flowFilter}; transition: stroke 0.3s, stroke-width 0.3s, filter 0.3s;`);
            } else {
                pathFlow.setAttribute("style", "transition: stroke 0.3s, stroke-width 0.3s, filter 0.3s;");
            }

            svg.appendChild(path);
            svg.appendChild(pathFlow);
        });
    });
}

// Handle resize to keep lines aligned
window.addEventListener("resize", () => {
    const treeSec = document.getElementById("section-tree");
    if (treeSec && treeSec.classList.contains("active")) {
        drawTreeConnections();
    }
});

// Beautiful Premium Toast/Notification Utility
function showNotification(message, type = "success") {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.style.position = "fixed";
        container.style.bottom = "20px";
        container.style.right = "20px";
        container.style.zIndex = "99999";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.gap = "10px";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `glass-panel toast-card toast-${type}`;
    
    // Custom HSL HEC styles
    toast.style.background = type === "error" ? "rgba(239, 68, 68, 0.18)" : "rgba(16, 185, 129, 0.18)";
    toast.style.border = type === "error" ? "1px solid rgba(239, 68, 68, 0.35)" : "1px solid rgba(16, 185, 129, 0.35)";
    toast.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
    toast.style.backdropFilter = "blur(12px)";
    toast.style.borderRadius = "12px";
    toast.style.padding = "14px 20px";
    toast.style.color = "#fff";
    toast.style.fontSize = "0.82rem";
    toast.style.fontWeight = "500";
    toast.style.display = "flex";
    toast.style.alignItems = "center";
    toast.style.gap = "12px";
    toast.style.minWidth = "320px";
    toast.style.maxWidth = "480px";
    toast.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    toast.style.transform = "translateY(50px)";
    toast.style.opacity = "0";

    const iconLucide = type === "error" ? "alert-octagon" : "check-circle";
    const iconColor = type === "error" ? "var(--danger)" : "var(--success)";
    
    toast.innerHTML = `
        <i data-lucide="${iconLucide}" style="color:${iconColor}; flex-shrink:0; width:20px; height:20px;"></i>
        <div style="flex:1; line-height:1.4;">${message}</div>
    `;

    container.appendChild(toast);
    
    if (window.lucide) {
        lucide.createIcons();
    }

    setTimeout(() => {
        toast.style.transform = "translateY(0)";
        toast.style.opacity = "1";
    }, 10);

    const duration = type === "error" ? 7500 : 4000;
    setTimeout(() => {
        toast.style.transform = "translateY(-20px)";
        toast.style.opacity = "0";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
}

// Beautiful Premium Custom Choice Dialog for "OR" Prerequisites
function showPrerequisiteChoiceModal(course, targetSemesterKey, choices, onSelect, onCancel) {
    const existing = document.getElementById("prereq-choice-modal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "prereq-choice-modal";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(10, 14, 22, 0.75)";
    modal.style.backdropFilter = "blur(12px)";
    modal.style.zIndex = "999999";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.opacity = "0";
    modal.style.transition = "opacity 0.25s ease";

    const content = document.createElement("div");
    content.className = "glass-panel";
    content.style.maxWidth = "480px";
    content.style.width = "90%";
    content.style.padding = "25px 30px";
    content.style.borderRadius = "20px";
    content.style.boxShadow = "0 25px 60px rgba(0, 0, 0, 0.7)";
    content.style.border = "1px solid rgba(255, 255, 255, 0.12)";
    content.style.background = "rgba(18, 22, 33, 0.96)";
    content.style.color = "#fff";
    content.style.transform = "scale(0.92)";
    content.style.transition = "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.gap = "15px";

    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.gap = "12px";
    header.innerHTML = `
        <div style="background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 10px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <i data-lucide="help-circle" style="color: var(--primary); width: 22px; height: 22px;"></i>
        </div>
        <div>
            <h3 style="margin: 0; font-size: 1.15rem; font-weight: 600; color: #fff;">Choix du préalable requis</h3>
            <p style="margin: 2px 0 0 0; font-size: 0.75rem; color: var(--primary); font-weight: 500;">Option de préalable ("OU") détectée</p>
        </div>
    `;
    content.appendChild(header);

    const text = document.createElement("div");
    text.style.fontSize = "0.85rem";
    text.style.lineHeight = "1.5";
    text.style.color = "rgba(255, 255, 255, 0.9)";
    text.innerHTML = `Le cours <strong>${course.code}</strong> (${course.name}) requiert au moins l'un des préalables suivants. Choisissez celui que vous souhaitez planifier automatiquement :`;
    content.appendChild(text);

    const optionsContainer = document.createElement("div");
    optionsContainer.style.display = "flex";
    optionsContainer.style.flexDirection = "column";
    optionsContainer.style.gap = "10px";
    optionsContainer.style.margin = "8px 0";

    choices.forEach(choiceCode => {
        const choiceCourse = courses.find(c => c.code === choiceCode);
        const nameText = choiceCourse ? choiceCourse.name : "";

        const optBtn = document.createElement("button");
        optBtn.style.padding = "14px 18px";
        optBtn.style.borderRadius = "12px";
        optBtn.style.border = "1px solid rgba(255, 255, 255, 0.08)";
        optBtn.style.background = "rgba(255, 255, 255, 0.03)";
        optBtn.style.display = "flex";
        optBtn.style.flexDirection = "column";
        optBtn.style.alignItems = "flex-start";
        optBtn.style.textAlign = "left";
        optBtn.style.gap = "5px";
        optBtn.style.transition = "all 0.2s ease";
        optBtn.style.cursor = "pointer";
        optBtn.style.width = "100%";
        optBtn.style.color = "#fff";

        optBtn.innerHTML = `
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--primary); display: flex; align-items: center; gap: 8px;">
                <span style="background: rgba(59, 130, 246, 0.15); padding: 3px 8px; border-radius: 6px; font-size: 0.72rem; border: 1px solid rgba(59, 130, 246, 0.25);">${choiceCode}</span>
            </div>
            <div style="font-size: 0.78rem; color: rgba(255, 255, 255, 0.7); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; font-weight: 400;">${nameText}</div>
        `;

        optBtn.onmouseenter = () => {
            optBtn.style.background = "rgba(59, 130, 246, 0.12)";
            optBtn.style.borderColor = "rgba(59, 130, 246, 0.4)";
            optBtn.style.transform = "translateY(-1px)";
        };
        optBtn.onmouseleave = () => {
            optBtn.style.background = "rgba(255, 255, 255, 0.03)";
            optBtn.style.borderColor = "rgba(255, 255, 255, 0.08)";
            optBtn.style.transform = "none";
        };

        optBtn.onclick = () => {
            modal.style.opacity = "0";
            content.style.transform = "scale(0.92)";
            setTimeout(() => {
                modal.remove();
                onSelect(choiceCode);
            }, 250);
        };

        optionsContainer.appendChild(optBtn);
    });

    content.appendChild(optionsContainer);

    const cancelBtn = document.createElement("button");
    cancelBtn.innerHTML = "Annuler la planification";
    cancelBtn.style.width = "100%";
    cancelBtn.style.padding = "12px";
    cancelBtn.style.borderRadius = "12px";
    cancelBtn.style.border = "1px solid rgba(239, 68, 68, 0.35)";
    cancelBtn.style.background = "rgba(239, 68, 68, 0.08)";
    cancelBtn.style.color = "var(--danger)";
    cancelBtn.style.fontSize = "0.82rem";
    cancelBtn.style.fontWeight = "600";
    cancelBtn.style.cursor = "pointer";
    cancelBtn.style.transition = "all 0.2s ease";

    cancelBtn.onmouseenter = () => {
        cancelBtn.style.background = "rgba(239, 68, 68, 0.18)";
    };
    cancelBtn.onmouseleave = () => {
        cancelBtn.style.background = "rgba(239, 68, 68, 0.08)";
    };
        cancelBtn.onclick = () => {
        modal.style.opacity = "0";
        content.style.transform = "scale(0.92)";
        setTimeout(() => {
            modal.remove();
            onCancel();
        }, 250);
    };

    content.appendChild(cancelBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);

    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
        modal.style.opacity = "1";
        content.style.transform = "scale(1)";
    }, 10);
}

// Helper to check if a course is offered in a specific semester type
function isPeriodValidForSemester(course, semesterKey) {
    if (!semesterKey) return true;
    if (!course.period) return true;

    const semType = semesterKey.charAt(0); // 'A', 'H', or 'E'
    const periodStr = course.period.toLowerCase();

    if (semType === 'A') {
        return periodStr.includes("automne") || periodStr.includes("toute l'année") || periodStr.includes("annuel") || periodStr.includes("biennal");
    }
    
    if (semType === 'H') {
        return periodStr.includes("hiver") || periodStr.includes("toute l'année") || periodStr.includes("annuel") || periodStr.includes("biennal");
    }

    if (semType === 'E') {
        return periodStr.includes("été") || periodStr.includes("toute l'année") || periodStr.includes("annuel") || periodStr.includes("biennal");
    }

    return true;
}

// INTELLIGENT SOLVER FOR AUTO-SCHEDULING PREREQUISITES & DEPENDENT PROPAGATION
function autoSchedulePrerequisites(courseCode, targetSemesterKey, scheduledThisSession = new Set(), selectedPrereqCode = null) {
    const course = courses.find(c => c.code === courseCode);
    if (!course || !course.prerequisites || course.prerequisites.length === 0) return [];

    const semesterOrder = ["A26", "H27", "E27", "A27", "H28", "E28"];
    const targetIdx = semesterOrder.indexOf(targetSemesterKey);
    if (targetIdx <= 0) return []; // No preceding semesters available

    const precedingSemesters = semesterOrder.slice(0, targetIdx);
    let scheduledActions = [];

    const isOrRelation = course.prerequisiteRelation === "OR" || course.code === "MARK 60105";

    // Determine which prerequisites we need to schedule
    let prereqsToSchedule = course.prerequisites;
    if (isOrRelation) {
        if (selectedPrereqCode) {
            prereqsToSchedule = [selectedPrereqCode];
        } else {
            prereqsToSchedule = [course.prerequisites[0]];
        }
    }

    prereqsToSchedule.forEach(preCode => {
        const preCourse = courses.find(c => c.code === preCode);
        if (!preCourse) return;

        // If completed or already planned before the target, skip
        if (preCourse.status === "done") return;
        if (preCourse.semester) {
            const preIdx = semesterOrder.indexOf(preCourse.semester);
            if (preIdx < targetIdx) return;
        }

        // Only choose preceding semesters where the prerequisite is actually offered!
        const validPrecedingSemesters = precedingSemesters.filter(sem => isPeriodValidForSemester(preCourse, sem));
        if (validPrecedingSemesters.length === 0) {
            throw new Error(`<strong>Erreur de cheminement !</strong><br>Le préalable <strong>${preCode}</strong> ne peut pas être planifié car il n'est pas offert durant les trimestres disponibles avant ${SEMESTERS[targetSemesterKey]}.`);
        }

        // Auto-schedule in the best preceding semester (lowest workload) among valid ones
        let bestSem = validPrecedingSemesters[validPrecedingSemesters.length - 1];
        let minCredits = Infinity;
        
        validPrecedingSemesters.forEach(sem => {
            const semCredits = courses.filter(c => c.semester === sem).reduce((sum, c) => sum + c.credits, 0);
            if (semCredits < minCredits) {
                minCredits = semCredits;
                bestSem = sem;
            }
        });

        preCourse.semester = bestSem;
        if (preCourse.status === "todo") {
            preCourse.status = "progress";
        }
        scheduledActions.push({ code: preCode, semester: bestSem });
        scheduledThisSession.add(preCode);

        // Recursively plan sub-prerequisites
        const subActions = autoSchedulePrerequisites(preCode, bestSem, scheduledThisSession);
        scheduledActions = scheduledActions.concat(subActions);
    });

    return scheduledActions;
}

function autoPushDependents(courseCode, prerequisiteSemesterKey) {
    const course = courses.find(c => c.code === courseCode);
    if (!course || !course.unlocks || course.unlocks.length === 0) return [];

    const semesterOrder = ["A26", "H27", "E27", "A27", "H28", "E28"];
    const prereqIdx = semesterOrder.indexOf(prerequisiteSemesterKey);
    if (prereqIdx === -1) return [];

    let pushedActions = [];
    course.unlocks.forEach(unlCode => {
        const unlCourse = courses.find(c => c.code === unlCode);
        if (!unlCourse || unlCourse.status === "done") return;

        if (unlCourse.semester) {
            const unlIdx = semesterOrder.indexOf(unlCourse.semester);
            // If the dependent course is scheduled before or in the same semester as the prerequisite, it must be pushed!
            if (unlIdx <= prereqIdx) {
                const subsequentSemesters = semesterOrder.slice(prereqIdx + 1);
                
                // Only choose semesters where the dependent course is actually offered!
                const validSubsequentSemesters = subsequentSemesters.filter(sem => isPeriodValidForSemester(unlCourse, sem));
                if (validSubsequentSemesters.length === 0) {
                    throw new Error(`<strong>Déplacement impossible !</strong><br>Le cours de spécialisation <strong>${unlCode}</strong> dépend de <strong>${courseCode}</strong>, mais il n'est pas offert dans les trimestres restants après ${SEMESTERS[prerequisiteSemesterKey]}.`);
                }

                // Choose the subsequent semester with the lowest workload among valid ones
                let bestSem = validSubsequentSemesters[0];
                let minCredits = Infinity;
                validSubsequentSemesters.forEach(sem => {
                    const semCredits = courses.filter(c => c.semester === sem).reduce((sum, c) => sum + c.credits, 0);
                    if (semCredits < minCredits) {
                        minCredits = semCredits;
                        bestSem = sem;
                    }
                });

                unlCourse.semester = bestSem;
                pushedActions.push({ code: unlCode, semester: bestSem });

                // Recursively push sub-dependents
                const subPushed = autoPushDependents(unlCode, bestSem);
                pushedActions = pushedActions.concat(subPushed);
            }
        }
    });

    return pushedActions;
}

function handleMoveAndSolve(courseCode, semesterKey, selectedPrereqCode = null) {
    const semesterOrder = ["A26", "H27", "E27", "A27", "H28", "E28"];
    const targetIdx = semesterOrder.indexOf(semesterKey);
    
    // Backup state for atomic rollback in case of error
    const backup = courses.map(c => ({ code: c.code, semester: c.semester, status: c.status }));

    try {
        const course = courses.find(c => c.code === courseCode);
        if (!course) return false;

        // Verify period validity for the course itself first
        if (semesterKey) {
            if (!isPeriodValidForSemester(course, semesterKey)) {
                showNotification(`<strong>Trimestre non offert !</strong><br>Le cours <strong>${courseCode}</strong> est offert uniquement à la période : <strong>${course.period}</strong>.<br>Vous ne pouvez pas le planifier en ${SEMESTERS[semesterKey]}.`, "error");
                return false;
            }
        }

        const isOrRelation = course.prerequisiteRelation === "OR" || course.code === "MARK 60105";

        // Verify if moving to the absolute first semester but prerequisites are missing
        if (semesterKey) {
            const missingPrereqs = [];
            course.prerequisites.forEach(preCode => {
                const preCourse = courses.find(c => c.code === preCode);
                if (preCourse && preCourse.status !== "done") {
                    if (!preCourse.semester || semesterOrder.indexOf(preCourse.semester) >= targetIdx) {
                        missingPrereqs.push(preCode);
                    }
                }
            });

            // For OR relations, only require at least ONE prerequisite to be valid.
            const hasOneValid = missingPrereqs.length < course.prerequisites.length;

            if (isOrRelation && hasOneValid) {
                // We already have a valid prerequisite planned or completed, no prompt needed!
            } else if (missingPrereqs.length > 0) {
                if (targetIdx === 0) {
                    showNotification(`<strong>Planification impossible !</strong><br>Le cours <strong>${courseCode}</strong> requiert des préalables (${missingPrereqs.join(", ")}) mais vous l'avez placé au tout premier trimestre (Automne 2026) où aucun cours ne peut être planifié avant.`, "error");
                    return false;
                }

                // Prompt user for OR prerequisite selection if not selected yet
                if (isOrRelation && !selectedPrereqCode) {
                    showPrerequisiteChoiceModal(
                        course,
                        semesterKey,
                        missingPrereqs,
                        (chosen) => {
                            handleMoveAndSolve(courseCode, semesterKey, chosen);
                        },
                        () => {
                            renderAll(); // Rollback visually
                        }
                    );
                    return false;
                }
            }
        }

        // Apply the change
        course.semester = semesterKey;
        if (semesterKey) {
            if (course.status !== "done") {
                course.status = "progress";
            }
        } else {
            if (course.status !== "done") {
                course.status = "todo";
            }
        }

        let autoScheduled = [];
        let autoPushed = [];

        if (semesterKey) {
            // Solve prerequisites: pull them behind
            autoScheduled = autoSchedulePrerequisites(courseCode, semesterKey, new Set(), selectedPrereqCode);

            // Solve dependents: push them forward
            autoPushed = autoPushDependents(courseCode, semesterKey);
        }

        saveData();
        renderAll();

        let notificationMsg = `Cours <strong>${courseCode}</strong> planifié en <strong>${SEMESTERS[semesterKey] || "sans trimestre"}</strong>.`;
        
        if (autoScheduled.length > 0 || autoPushed.length > 0) {
            notificationMsg += `<br><span style="font-size:0.75rem; color:rgba(255,255,255,0.85); font-weight:600; margin-top:5px; display:inline-block;">Ajustements intelligents appliqués :</span><ul style="margin-top:4px; padding-left:15px; font-size:0.72rem; text-align:left; gap:3px; display:flex; flex-direction:column;">`;
            if (autoScheduled.length > 0) {
                notificationMsg += autoScheduled.map(a => `<li>✨ Préalable <strong>${a.code}</strong> planifié en ${SEMESTERS[a.semester]}</li>`).join("");
            }
            if (autoPushed.length > 0) {
                notificationMsg += autoPushed.map(a => `<li>➡️ Cours dépendant <strong>${a.code}</strong> repoussé en ${SEMESTERS[a.semester]}</li>`).join("");
            }
            notificationMsg += `</ul>`;
        }
        
        showNotification(notificationMsg, "success");
        return true;
    } catch (error) {
        // Rollback state atomically
        courses.forEach((c, idx) => {
            c.semester = backup[idx].semester;
            c.status = backup[idx].status;
        });
        showNotification(error.message, "error");
        renderAll();
        return false;
    }
}

// Drag & Drop event handlers
let draggedCourseCode = null;

function dragStart(event, courseCode) {
    draggedCourseCode = courseCode;
    event.dataTransfer.setData("text/plain", courseCode);
    event.dataTransfer.effectAllowed = "move";
    
    // Highlight valid semester columns and dim invalid ones
    const course = courses.find(c => c.code === courseCode);
    if (course) {
        Object.keys(SEMESTERS).forEach(semKey => {
            const col = document.getElementById(`planner-col-${semKey}`);
            if (col) {
                if (isPeriodValidForSemester(course, semKey)) {
                    col.classList.add("sem-drag-valid");
                } else {
                    col.classList.add("sem-drag-invalid");
                }
            }
        });
    }
}

function dragEnd(event) {
    // Clean up drag classes from all semester columns
    Object.keys(SEMESTERS).forEach(semKey => {
        const col = document.getElementById(`planner-col-${semKey}`);
        if (col) {
            col.classList.remove("sem-drag-valid", "sem-drag-invalid");
        }
    });
    draggedCourseCode = null;
}

function allowDrop(event) {
    event.preventDefault();
}

function dragEnter(event, semKey) {
    event.preventDefault();
    const col = event.currentTarget;
    if (col) col.classList.add("drag-over");
}

function dragLeave(event, semKey) {
    const col = event.currentTarget;
    if (col) col.classList.remove("drag-over");
}

function dropToSemester(event, semesterKey) {
    event.preventDefault();
    const col = event.currentTarget;
    if (col) col.classList.remove("drag-over");

    const code = event.dataTransfer.getData("text/plain") || draggedCourseCode;
    if (!code) return;

    handleMoveAndSolve(code, semesterKey);
    draggedCourseCode = null;
}

function dropToPool(event) {
    event.preventDefault();
    const code = event.dataTransfer.getData("text/plain") || draggedCourseCode;
    if (!code) return;

    unscheduleCourse(code);
    draggedCourseCode = null;
}

function unscheduleCourse(courseCode) {
    const course = courses.find(c => c.code === courseCode);
    if (course) {
        course.semester = "";
        if (course.status === "progress") {
            course.status = "todo";
        }
        saveData();
        renderAll();
        showNotification(`Cours <strong>${courseCode}</strong> retiré du planificateur.`);
    }
}

// Quick Assign floating absolute popup menu
let currentOpenMenu = null;

function toggleQuickAssignMenu(event, courseCode) {
    event.stopPropagation();
    
    // Close existing menu
    if (currentOpenMenu) {
        currentOpenMenu.remove();
        currentOpenMenu = null;
    }

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    const menu = document.createElement("div");
    menu.className = "quick-assign-menu";
    menu.style.top = `${window.scrollY + rect.bottom + 5}px`;
    menu.style.left = `${window.scrollX + rect.left - 50}px`;

    Object.keys(SEMESTERS).forEach(semKey => {
        const item = document.createElement("button");
        item.className = "quick-assign-item";
        item.innerHTML = `<span>${SEMESTERS[semKey]}</span> <i data-lucide="chevron-right" style="width:10px;height:10px;"></i>`;
        item.onclick = (e) => {
            e.stopPropagation();
            
            handleMoveAndSolve(courseCode, semKey);
            
            menu.remove();
            currentOpenMenu = null;
        };
        menu.appendChild(item);
    });

    document.body.appendChild(menu);
    currentOpenMenu = menu;

    // Click outside to close
    setTimeout(() => {
        window.addEventListener("click", closeQuickMenu);
    }, 50);

    if (window.lucide) lucide.createIcons();
}

function closeQuickMenu() {
    if (currentOpenMenu) {
        currentOpenMenu.remove();
        currentOpenMenu = null;
    }
    window.removeEventListener("click", closeQuickMenu);
}

/* ══════════════════════════════════════════════════════
   MOBILE NAVIGATION — Hamburger + Bottom Nav + Overlay
   ══════════════════════════════════════════════════════ */

function openMobileSidebar() {
    const sidebar  = document.querySelector(".sidebar");
    const overlay  = document.getElementById("sidebar-overlay");
    if (sidebar)  sidebar.classList.add("mobile-open");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMobileSidebar() {
    const sidebar  = document.querySelector(".sidebar");
    const overlay  = document.getElementById("sidebar-overlay");
    if (sidebar)  sidebar.classList.remove("mobile-open");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
}

// Wire hamburger button
function initMobileBehavior() {
    const hamburger = document.getElementById("mobile-menu-btn");
    const overlay   = document.getElementById("sidebar-overlay");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            const sidebar = document.querySelector(".sidebar");
            const isOpen  = sidebar && sidebar.classList.contains("mobile-open");
            isOpen ? closeMobileSidebar() : openMobileSidebar();
        });
    }

    // Tap on overlay closes sidebar
    if (overlay) {
        overlay.addEventListener("click", closeMobileSidebar);
    }

    // Wire mobile bottom nav items
    document.querySelectorAll(".mobile-nav-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSectionId = item.getAttribute("data-target");

            // Sync desktop nav
            document.querySelectorAll(".nav-item").forEach(ni => {
                ni.classList.toggle("active", ni.getAttribute("data-target") === targetSectionId);
            });

            // Sync mobile nav
            document.querySelectorAll(".mobile-nav-item").forEach(mn => {
                mn.classList.toggle("active", mn === item);
            });

            // Switch section
            document.querySelectorAll(".app-section").forEach(s => s.classList.remove("active"));
            const target = document.getElementById(targetSectionId);
            if (target) {
                target.classList.add("active");
                if (targetSectionId === "section-tree") {
                    setTimeout(drawTreeConnections, 100);
                }
                // Scroll to top of content on mobile
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
}
