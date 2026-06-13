import pandas as pd
import json

xl = pd.ExcelFile('cours hec montreal;.xlsx')
df1 = xl.parse('Feuil1')
print("Feuil1 columns:", df1.columns.tolist())
for i, row in df1.iterrows():
    row_data = {k: v for k, v in row.items() if pd.notna(v) and str(v).strip() != '' and not str(v).startswith('Unnamed: 0')}
    if row_data:
        print(f"Row {i}: {row_data}")
