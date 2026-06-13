import pandas as pd
import json

file_path = 'cours hec montreal;.xlsx'
xl = pd.ExcelFile(file_path)

data = {}
for sheet in xl.sheet_names:
    df = xl.parse(sheet).fillna("")
    data[sheet] = df.to_dict(orient='records')

with open('excel_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Parsed sheets:", xl.sheet_names)
print("Saved to excel_data.json")
