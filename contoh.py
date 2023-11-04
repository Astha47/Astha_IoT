A2 = 90
B2 = 90
C2 = "BAIK"

def pemeringkatan(sel1,sel2,sel3):
    if (sel3 == "BAIK"):
        if (sel1>=75 and sel2>=75):
            return "Lulus Sempurna"
        elif ((sel1>=75 and sel2<75) or (sel2>=75 and sel1<75)):
            return "Lulus"
        else:
            return "Tidak Lulus"
    else:
        if (sel1>=80 and sel2>=80):
            return "Lulus Perilaku Kurang"
        elif ((sel1>=80 and sel2<80) or (sel2>=80 and sel1<80)):
            return "Tidak Lulus Perilaku Kurang"
        else:
            return "Innalilahi"
        
print(pemeringkatan(A2,B2,C2))
