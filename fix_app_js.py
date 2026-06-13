import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace variables declaration
content = re.sub(r'let mktCredits = 0;\s*let scdCredits = 0;\s*let tiCredits = 0;',
                 r'let logCredits = 0;\n    let stratCredits = 0;\n    let tiCredits = 0;\n    let servCredits = 0;',
                 content)

# Replace the additions
content = re.sub(r'if \(c\.profile === "Marketing"\) mktCredits \+= c\.credits;\s*else if \(c\.profile === "Sciences de la décision"\) scdCredits \+= c\.credits;\s*else if \(c\.profile === "Technologies de l\'information"\) tiCredits \+= c\.credits;',
                 r'if (c.profile === "Logistique et Transport") logCredits += c.credits;\n                else if (c.profile === "Stratégie et Durabilité") stratCredits += c.credits;\n                else if (c.profile === "Analytique et TI") tiCredits += c.credits;\n                else if (c.profile === "Services et Consultation") servCredits += c.credits;',
                 content)

# We also had an encoding issue where Sciences de la d.cision didn't match
content = re.sub(r'if \(c\.profile === "Marketing"\) mktCredits \+= c\.credits;\s*else if \(c\.profile === "Sciences de la d.cision"\) scdCredits \+= c\.credits;\s*else if \(c\.profile === "Technologies de l\'information"\) tiCredits \+= c\.credits;',
                 r'if (c.profile === "Logistique et Transport") logCredits += c.credits;\n                else if (c.profile === "Stratégie et Durabilité") stratCredits += c.credits;\n                else if (c.profile === "Analytique et TI") tiCredits += c.credits;\n                else if (c.profile === "Services et Consultation") servCredits += c.credits;',
                 content)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed app.js logic")
