import os

default = ""
with open("./default.txt", "r") as txt:
    default = txt.read()

for i in range(2015, 2022):
    os.system(f"mkdir {i}")
    for j in range(1, 26):
        os.system(f"mkdir {i}/{j}")
        os.system(f"echo \"{default}\" > {i}/{j}/1.js")
        os.system(f"echo \"{default}\" > {i}/{j}/2.js")