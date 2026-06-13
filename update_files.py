import re

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace titles
html = html.replace('Intelligence d\'Affaires', 'Opérations et Supply Chain (MOSC)')
html = html.replace('M.Sc. IA', 'M.Sc. MOSC')
html = html.replace('M.Sc. Intelligence d\'affaires', 'M.Sc. Opérations et Supply Chain')

# Replace Profiles in Dashboard
dashboard_profiles_old = """<div class="profiles-status-content">
                            <div class="profile-bar-item">
                                <span class="profile-label">📊 Marketing</span>
                                <div class="progress-bar-bg"><div class="progress-bar-fill bg-cyan" style="width:0%" id="prof-mkt-bar"></div></div>
                                <span class="profile-val" id="prof-mkt-text">0 cr</span>
                            </div>
                            <div class="profile-bar-item mt-2">
                                <span class="profile-label">🧠 Sciences de la décision</span>
                                <div class="progress-bar-bg"><div class="progress-bar-fill bg-indigo" style="width:0%" id="prof-scd-bar"></div></div>
                                <span class="profile-val" id="prof-scd-text">0 cr</span>
                            </div>
                            <div class="profile-bar-item mt-2">
                                <span class="profile-label">💻 Technologies de l'information</span>
                                <div class="progress-bar-bg"><div class="progress-bar-fill bg-violet" style="width:0%" id="prof-ti-bar"></div></div>
                                <span class="profile-val" id="prof-ti-text">0 cr</span>
                            </div>
                        </div>"""

dashboard_profiles_new = """<div class="profiles-status-content">
                            <div class="profile-bar-item">
                                <span class="profile-label">🚚 Logistique et Transport</span>
                                <div class="progress-bar-bg"><div class="progress-bar-fill bg-cyan" style="width:0%" id="prof-log-bar"></div></div>
                                <span class="profile-val" id="prof-log-text">0 cr</span>
                            </div>
                            <div class="profile-bar-item mt-2">
                                <span class="profile-label">🌱 Stratégie et Durabilité</span>
                                <div class="progress-bar-bg"><div class="progress-bar-fill bg-indigo" style="width:0%" id="prof-strat-bar"></div></div>
                                <span class="profile-val" id="prof-strat-text">0 cr</span>
                            </div>
                            <div class="profile-bar-item mt-2">
                                <span class="profile-label">💻 Analytique et TI</span>
                                <div class="progress-bar-bg"><div class="progress-bar-fill bg-violet" style="width:0%" id="prof-ti-bar"></div></div>
                                <span class="profile-val" id="prof-ti-text">0 cr</span>
                            </div>
                            <div class="profile-bar-item mt-2">
                                <span class="profile-label">🤝 Services et Consultation</span>
                                <div class="progress-bar-bg"><div class="progress-bar-fill bg-pink" style="width:0%" id="prof-serv-bar"></div></div>
                                <span class="profile-val" id="prof-serv-text">0 cr</span>
                            </div>
                        </div>"""

# Ensure exact whitespace matching or use regex
html = re.sub(r'<div class="profiles-status-content">.*?</div>\s*</div>', dashboard_profiles_new + '\n                    </div>', html, flags=re.DOTALL)

# Replace Tree Map
tree_map_old_regex = r'<!-- SECTION 1: MANDATORY PROGRAM COURSE.*?<!-- Selected details pane in tree map -->'
tree_map_new = """<!-- SECTION 1: MANDATORY PROGRAM COURSE (3 CREDITS) -->
                        <div class="tree-section">
                            <h3 class="level-title"><i data-lucide="shield-alert"></i> 1. Tronc Commun (3 credits)</h3>
                            <div class="level-nodes flex-wrap-center">
                                <div class="tree-node" id="node-GEST-60401" onclick="clickTreeNode('GEST 60401')">
                                    <span class="node-code">GEST 60401</span>
                                    <span class="node-name">Grands enjeux de société</span>
                                    <span class="node-badge">Mandatory</span>
                                </div>
                            </div>
                        </div>

                        <!-- SECTION 2: MANDATORY SPECIALIZATION COURSES (12 CREDITS) -->
                        <div class="tree-section" style="margin-top: 1.5rem;">
                            <h3 class="level-title"><i data-lucide="shield"></i> 2. Noyau Dur MOSC (12 credits)</h3>
                            <div class="level-nodes flex-wrap-center">
                                <div class="tree-node" id="node-METH-60302" onclick="clickTreeNode('METH 60302')">
                                    <span class="node-code">METH 60302</span>
                                    <span class="node-name">Recherche et intervention</span>
                                    <span class="node-badge">Mandatory</span>
                                </div>
                                <div class="tree-node" id="node-OPER-60515" onclick="clickTreeNode('OPER 60515')">
                                    <span class="node-code">OPER 60515</span>
                                    <span class="node-name">Gestion de la chaîne</span>
                                    <span class="node-badge">Mandatory</span>
                                </div>
                                <div class="tree-node" id="node-OPER-60520" onclick="clickTreeNode('OPER 60520')">
                                    <span class="node-code">OPER 60520</span>
                                    <span class="node-name">Optimisation des réseaux</span>
                                    <span class="node-badge">Mandatory</span>
                                </div>
                                <div class="tree-node" id="node-OPER-60521" onclick="clickTreeNode('OPER 60521')">
                                    <span class="node-code">OPER 60521</span>
                                    <span class="node-name">Amélioration continue</span>
                                    <span class="node-badge">Mandatory</span>
                                </div>
                            </div>
                        </div>

                        <!-- SECTION 3: SPECIALIZATION ELECTIVE COURSES (MIN 15 CREDITS) -->
                        <div class="tree-section" style="margin-top: 1.5rem;">
                            <h3 class="level-title"><i data-lucide="sliders"></i> 3. Options de Spécialisation (Minimum 15 credits)</h3>
                            <div class="profiles-tree-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
                                <!-- Logistique et Transport -->
                                <div class="profile-tree-column">
                                    <h4 class="profile-tree-header"><i data-lucide="truck"></i> Logistique & Transport</h4>
                                    <div class="profile-tree-nodes">
                                        <div class="tree-node" id="node-OPER-60501" onclick="clickTreeNode('OPER 60501')">
                                            <span class="node-code">OPER 60501</span>
                                            <span class="node-name">Systèmes d'entreposage</span>
                                            <span class="node-badge font-cyan">Option</span>
                                        </div>
                                        <div class="tree-node" id="node-OPER-60502" onclick="clickTreeNode('OPER 60502')">
                                            <span class="node-code">OPER 60502</span>
                                            <span class="node-name">Systèmes de transport</span>
                                            <span class="node-badge font-cyan">Option</span>
                                        </div>
                                        <div class="tree-node" id="node-PROJ-40507" onclick="clickTreeNode('PROJ 40507')">
                                            <span class="node-code">PROJ 40507</span>
                                            <span class="node-name">Projets logistiques</span>
                                            <span class="node-badge font-cyan">Option</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Stratégie et Durabilité -->
                                <div class="profile-tree-column">
                                    <h4 class="profile-tree-header"><i data-lucide="leaf"></i> Stratégie & Durabilité</h4>
                                    <div class="profile-tree-nodes">
                                        <div class="tree-node" id="node-OPER-60503" onclick="clickTreeNode('OPER 60503')">
                                            <span class="node-code">OPER 60503</span>
                                            <span class="node-name">Chaîne durable</span>
                                            <span class="node-badge font-indigo">Option</span>
                                        </div>
                                        <div class="tree-node" id="node-OPER-60530" onclick="clickTreeNode('OPER 60530')">
                                            <span class="node-code">OPER 60530</span>
                                            <span class="node-name">Gestion stratégique</span>
                                            <span class="node-badge font-indigo">Option</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Analytique et TI -->
                                <div class="profile-tree-column">
                                    <h4 class="profile-tree-header"><i data-lucide="cpu"></i> Analytique & TI</h4>
                                    <div class="profile-tree-nodes">
                                        <div class="tree-node" id="node-OPER-60500" onclick="clickTreeNode('OPER 60500')">
                                            <span class="node-code">OPER 60500</span>
                                            <span class="node-name">Analytique et IA</span>
                                            <span class="node-badge font-violet">Option</span>
                                        </div>
                                        <div class="tree-node" id="node-OPER-60512" onclick="clickTreeNode('OPER 60512')">
                                            <span class="node-code">OPER 60512</span>
                                            <span class="node-name">Simulation de systèmes</span>
                                            <span class="node-badge font-violet">Option</span>
                                        </div>
                                        <div class="tree-node dependent-node" id="node-OPER-40513" onclick="clickTreeNode('OPER 40513')">
                                            <span class="node-code">OPER 40513</span>
                                            <span class="node-name">Progiciel de gestion</span>
                                            <span class="node-badge font-violet">Option</span>
                                            <span class="prereq-label"><i data-lucide="lock"></i> Req: OPER 40530</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Services et Consultation -->
                                <div class="profile-tree-column">
                                    <h4 class="profile-tree-header"><i data-lucide="users"></i> Services & Consultation</h4>
                                    <div class="profile-tree-nodes">
                                        <div class="tree-node" id="node-OPER-60505" onclick="clickTreeNode('OPER 60505')">
                                            <span class="node-code">OPER 60505</span>
                                            <span class="node-name">Opérations dans les services</span>
                                            <span class="node-badge font-pink">Option</span>
                                        </div>
                                        <div class="tree-node" id="node-OPER-60550" onclick="clickTreeNode('OPER 60550')">
                                            <span class="node-code">OPER 60550</span>
                                            <span class="node-name">Outils d'aide à la décision</span>
                                            <span class="node-badge font-pink">Option</span>
                                        </div>
                                        <div class="tree-node" id="node-MNGT-60415" onclick="clickTreeNode('MNGT 60415')">
                                            <span class="node-code">MNGT 60415</span>
                                            <span class="node-name">La consultation en gestion</span>
                                            <span class="node-badge font-pink">Option</span>
                                        </div>
                                        <div class="tree-node" id="node-MNGT-60403" onclick="clickTreeNode('MNGT 60403')">
                                            <span class="node-code">MNGT 60403</span>
                                            <span class="node-name">Développement orga.</span>
                                            <span class="node-badge font-pink">Option</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- SECTION 4: MANDATORY ACTIVITIES (9 CREDITS) -->
                        <div class="tree-section" style="margin-top: 1.5rem;">
                            <h3 class="level-title"><i data-lucide="award"></i> 4. Projet (9 credits)</h3>
                            <div class="level-nodes flex-wrap-center">
                                <div class="tree-node" id="node-ETHI-66200" onclick="clickTreeNode('ETHI 66200')">
                                    <span class="node-code">ETHI 66200</span>
                                    <span class="node-name">Atelier en éthique</span>
                                    <span class="node-badge font-orange">Mandatory (0 cr)</span>
                                </div>
                                <div class="tree-node dependent-node" id="node-INDV-66202" onclick="clickTreeNode('INDV 66202')">
                                    <span class="node-code">INDV 66202</span>
                                    <span class="node-name">Projet Supervisé</span>
                                    <span class="node-badge font-orange">Deliverable (9 cr)</span>
                                    <span class="prereq-label"><i data-lucide="lock"></i> Req: ETHI 66200, METH 60302</span>
                                </div>
                            </div>
                        </div>

                        <!-- SECTION 5: COURS PRÉPARATOIRE (0 CREDITS) -->
                        <div class="tree-section" style="margin-top: 1.5rem;">
                            <h3 class="level-title"><i data-lucide="check-square"></i> 5. Cours Préparatoire (0 credit)</h3>
                            <div class="level-nodes flex-wrap-center">
                                <div class="tree-node" id="node-OPER-40530" onclick="clickTreeNode('OPER 40530')">
                                    <span class="node-code">OPER 40530</span>
                                    <span class="node-name">Gestion des opérations</span>
                                    <span class="node-badge font-pink">Recommended</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Selected details pane in tree map -->"""

html = re.sub(tree_map_old_regex, tree_map_new, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# Update app.js profile parsing logic
with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# Replace profile calculation variables
app_js = app_js.replace('let mktCredits = 0, scdCredits = 0, tiCredits = 0;', 'let logCredits = 0, stratCredits = 0, tiCredits = 0, servCredits = 0;')
app_js = app_js.replace('if (c.profile === "Marketing") mktCredits += c.credits;', 'if (c.profile === "Logistique et Transport") logCredits += c.credits;')
app_js = app_js.replace('else if (c.profile === "Sciences de la décision") scdCredits += c.credits;', 'else if (c.profile === "Stratégie et Durabilité") stratCredits += c.credits;')
app_js = app_js.replace('else if (c.profile === "Technologies de l\'information") tiCredits += c.credits;', 'else if (c.profile === "Analytique et TI") tiCredits += c.credits;\n                else if (c.profile === "Services et Consultation") servCredits += c.credits;')

# Update DOM element updates for profiles
old_dom_update = """    document.getElementById("prof-mkt-bar").style.width = `${Math.min((mktCredits / maxProfileCredits) * 100, 100)}%`;
    document.getElementById("prof-mkt-text").innerText = `${mktCredits} cr`;
    document.getElementById("prof-scd-bar").style.width = `${Math.min((scdCredits / maxProfileCredits) * 100, 100)}%`;
    document.getElementById("prof-scd-text").innerText = `${scdCredits} cr`;
    document.getElementById("prof-ti-bar").style.width = `${Math.min((tiCredits / maxProfileCredits) * 100, 100)}%`;
    document.getElementById("prof-ti-text").innerText = `${tiCredits} cr`;"""

new_dom_update = """    if (document.getElementById("prof-log-bar")) {
        document.getElementById("prof-log-bar").style.width = `${Math.min((logCredits / maxProfileCredits) * 100, 100)}%`;
        document.getElementById("prof-log-text").innerText = `${logCredits} cr`;
        document.getElementById("prof-strat-bar").style.width = `${Math.min((stratCredits / maxProfileCredits) * 100, 100)}%`;
        document.getElementById("prof-strat-text").innerText = `${stratCredits} cr`;
        document.getElementById("prof-ti-bar").style.width = `${Math.min((tiCredits / maxProfileCredits) * 100, 100)}%`;
        document.getElementById("prof-ti-text").innerText = `${tiCredits} cr`;
        document.getElementById("prof-serv-bar").style.width = `${Math.min((servCredits / maxProfileCredits) * 100, 100)}%`;
        document.getElementById("prof-serv-text").innerText = `${servCredits} cr`;
    }"""
app_js = app_js.replace(old_dom_update, new_dom_update)


# Replace Category Classes for Profiles
app_js = re.sub(r'if \(c\.profile === "Marketing"\) categoryClass = "prof-marketing";\s*else if \(c\.profile === "Sciences de la décision"\) categoryClass = "prof-decision";\s*else if \(c\.profile === "Technologies de l\'information"\) categoryClass = "prof-ti";', 
                r'if (c.profile === "Logistique et Transport") categoryClass = "prof-marketing"; else if (c.profile === "Stratégie et Durabilité") categoryClass = "prof-decision"; else if (c.profile === "Analytique et TI") categoryClass = "prof-ti"; else if (c.profile === "Services et Consultation") categoryClass = "prof-pink";', 
                app_js)

# Also fix the fallback where "Sciences de la dcision" might be there because of encoding
app_js = re.sub(r'if \(c\.profile === "Marketing"\) categoryClass = "prof-marketing";\s*else if \(c\.profile === "Sciences de la d.cision"\) categoryClass = "prof-decision";\s*else if \(c\.profile === "Technologies de l\'information"\) categoryClass = "prof-ti";', 
                r'if (c.profile === "Logistique et Transport") categoryClass = "prof-marketing"; else if (c.profile === "Stratégie et Durabilité") categoryClass = "prof-decision"; else if (c.profile === "Analytique et TI") categoryClass = "prof-ti"; else if (c.profile === "Services et Consultation") categoryClass = "prof-pink";', 
                app_js)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)

print("Updated index.html and app.js profile logic")
