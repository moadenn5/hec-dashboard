import pandas as pd
import json

xl = pd.ExcelFile('cours hec montreal;.xlsx')
courses = []

for sheet in xl.sheet_names:
    if sheet == 'Feuil1': continue
    df = xl.parse(sheet)
    
    col1 = df.columns[0]
    
    course = {"code": sheet.strip(), "title": col1.strip(), "desc": "", "credits": "3"}
    
    # The format seems to be a single column containing alternating keys and values or a block of text
    vals = [v for v in df[col1].tolist() if pd.notna(v)]
    
    # Let's just dump all text to see what we have
    course["raw_text"] = "\n".join(str(v) for v in vals)
    
    courses.append(course)

with open('courses_summary.json', 'w', encoding='utf-8') as f:
    json.dump(courses, f, ensure_ascii=False, indent=2)
