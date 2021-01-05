import random
from threading import Timer
print("=====================\n\n")
print("오버로드 광질 게임 beta v 0.7.1\n")
print("x를 눌러 광질을 시작하세요. \n\nc를 눌러 현재 광물의 개수를 보세요. \n\ns를 눌러 업그레이드 상점으로 이동하세요.\n\nv를 눌러 조합소로 이동하세요.\n\nb를 눌러 조합템의 개수를 보세요.\n\n?을 눌러 도움말을 보세요.\n\n")
iron=0
gold=0
diamond=0
emerald=0
ruby=0
overlord=0
upgrade1=50
purchased1=0
upgrade2=2000
purchased2=0
upgrade3=5
purchased3=0
a=1
b=1
irongold=0
extractpipe=0
engine=0
emitpipe=0
extractor=0
overlordscrap=0
overlordpart=0
overlordingot=0
overlordessence=0
overlordsoul=0
overlordposs=1
extractorlevel=1
exupgrade1=20
exupgrade2=5
expurchased=0
upgrade4=50
purchased4=0
doubleminingposs=0
enchantedoverlordingot=0
autominetime=10
robotmaker=0
minepower=0
circuit=0
upgrade5=400
purchased5=0
upgrade6=200
purchased6=0
c=0
d=0
maxrobot=5
robotbody=0
CPU=0
miningdrill=0
robotcount=0
commonminingrobot=0
commonexcavatorrobot=0
robotupgrade1=50
robotpurchased1=0
mythmineticket=0
mythrill=0
orichalcum=0
adamantite=0
udc=1
mythupgrade1=10
mythpurchased1=0
mythupgrade2=10
mythpurchased2=0
mythupgrade3=10
mythpurchased3=0
e=1
f=1
def automine():
    global iron,gold,diamond,emerald,ruby,overlord,doubleminingposs,a,overlordposs,autominetime,minepower,commonminingrobot,commonexcavatorrobot
    time=autominetime
    minepower=commonminingrobot+5*commonexcavatorrobot
    number0=random.randrange(1,101)
    if number0<=doubleminingposs:
        repeatmining=2
    else:
        repeatmining=1
    for i in range(repeatmining):
        number=random.randrange(1,101)
        numberover=random.randrange(1,101)
        if number>50:
            iron+=(a+c)*minepower
        elif number>20:
            gold+=(a+c)*minepower
        elif number>10:
            diamond+=(a+d)*minepower
        elif number>5:
            emerald+=(a+d)*minepower
        elif number>0:
            ruby+=(a+d)*minepower
        if numberover<=overlordposs:
            overlord+=(a)*f*minepower
    Timer(time,automine).start()
automine()
while True:
    string1=input()
    if string1=="x":
        number0=random.randrange(1,101)
        if number0<=doubleminingposs:
            repeatmining=2
        else:
            repeatmining=1
        for i in range(repeatmining):
            number=random.randrange(1,101)
            numberover=random.randrange(1,101)
            if number>50:
                iron+=a+c
                print("철 %d개 획득! 현재 %d개" %(a+c,iron))
            elif number>20:
                gold+=a+c
                print("금 %d개 획득! 현재 %d개" %(a+c,gold))
            elif number>10:
                diamond+=a+d
                print("다이아몬드 %d개 획득! 현재 %d개" %(a+d,diamond))
            elif number>5:
                emerald+=a+d
                print("에메랄드 %d개 획득! 현재 %d개" %(a+d,emerald))
            elif number>0:
                ruby+=a+d
                print("루비 %d개 획득! 현재 %d개" %(a+d,ruby))
            if numberover<=overlordposs:
                overlord+=a*f
                print("오버로드 %d개 획득! 현재 %d개" %(a*f,overlord))
    elif string1=="c":
        print("철 %d개 금 %d개 다이아몬드 %d개 에메랄드 %d개 루비 %d개 오버로드 %d개" %(iron,gold,diamond,emerald,ruby,overlord))
    elif string1=="s": 
        print("=====================\n\n")
        print("업그레이드 상점에 오신것을 환영합니다.\n")
        print("목록에서 원하는 업그레이드의 번호를 입력하시면 업그레이드를 구매하실 수 있습니다.\n")
        print("상점을 나갈때는 구입키를 뺀 아무 키나 눌러주세요.\n")
        print("====== 일반 업그레이드 ======\n\n")
        print("1. 한번에 얻는 광물 개수 증가\n")
        print("요구 광물 : 철", upgrade1,"개  구입 횟수", purchased1,"회\n")
        print("2. 한번에 조합하는 일반 아이템 개수 증가\n")
        print("요구 광물 : 다이아몬드", upgrade2,"개  구입 횟수", purchased2,"회 ", end="")
        if purchased2==4:
            print("MAX\n")
        else:
            print("\n")
        print("3. 오버로드 출현 확률 증가\n")
        print("요구 광물 : 오버로드괴", upgrade3,"개  구입 횟수", purchased3,"회 ", end="")
        if purchased3==99:
            print("MAX\n")
        else:
            print("\n")
        print("4. 이중 채광 확률 증가\n")
        print("요구 광물 : 금", upgrade4,"개  구입 횟수", purchased4,"회 ", end="")
        if purchased4==100:
            print("MAX\n")
        else:
            print("\n")
        print("5. 한번에 얻는 금속 개수 증가\n")
        print("요구 광물 : 에메랄드", upgrade5,"개  구입 횟수", purchased5,"회\n")
        print("6. 한번에 얻는 보석 개수 증가\n")
        print("요구 광물 : 루비", upgrade6,"개  구입 횟수", purchased6,"회\n")
        if extractor==1 and extractorlevel<=19:
            print("\n\n====== 추출소 업그레이드 ======\n")
            print("A. 추출소 레벨 증가\n")
            print("추출소 업글 재료 : 추출 파이프 %d개, 추출 엔진 %d개, 배출 파이프 %d개, 오버로드괴 %d개\n" %(exupgrade1,exupgrade2,exupgrade1,exupgrade2))
        if robotmaker==1:
            print("\n\n====== 로봇 제작소 업그레이드 ======\n")
            print("B1. 로봇 제작소 공간 증설\n")
            print("업글 재료 : 강화 오버로드괴 %d개\n"%(robotupgrade1))
            print("B2. 자동 채광 시간 주기 감소\n")
            print("coming soon\n")
        if mythmineticket==1:
            print("\n\n====== 전설의 광물 업그레이드 =====\n")
            print("y1. 한번에 얻는 전설의 광물 개수 증가\n")
            print("업글 재료 : 미스릴 %d개\n"%(mythupgrade1))
            print("y2. 한번에 얻는 오버로드의 개수 2배\n")
            print("업글 재료 : 오리할콘 %d개\n"%(mythupgrade2))
            print("y3. 일반 업그레이드 가격 감소\n")
            print("업글 재료 : 아다만타이트 %d개\n"%(mythupgrade3))
        while True:
            string2=input()
            if string2=="1":
                if iron>=upgrade1:
                    iron-=upgrade1
                    purchased1+=1
                    upgrade1=int((50+purchased1*(purchased1+1)*25)*udc)
                    a+=1
                    print("구매 완료!")
                else:
                    print("광물 부족!")
            elif string2=="2":
                if purchased2<=3:
                    if diamond>=upgrade2:
                        diamond-=upgrade2
                        purchased2+=1
                        upgrade2=int((2000 + purchased2*(purchased2+1)*1000)*udc)
                        b+=1
                        print("구매 완료!")
                    else:
                        print("광물 부족!")
                else:
                    print("더 이상 구매하실 수 없습니다.")
            elif string2=="3":
                if purchased3<=98:
                    if overlordingot>=upgrade3:
                        overlordingot-=upgrade3
                        purchased3+=1
                        upgrade3=int((int(5+purchased3*(purchased3+1)*2.5))*udc)
                        overlordposs+=1
                        print("구매 완료!")
                    else:
                        print("광물 부족!")
                else:
                    print("더 이상 구매하실 수 없습니다.")
            elif string2=="4":
                if purchased4<=99:
                    if gold>=upgrade4:
                        gold-=upgrade4
                        purchased4+=1
                        upgrade4=int((50+purchased4*(purchased4+1)*25)*udc)
                        doubleminingposs+=1
                        print("구매 완료!")
                    else:
                        print("광물 부족!")
                else:
                    print("더 이상 구매하실 수 없습니다.")
            elif string2=="5":
                if emerald>=upgrade5:
                    emerald-=upgrade5
                    purchased5+=1
                    upgrade5=int((400+purchased5*(purchased5+1)*200)*udc)
                    c+=1
                    print("구매 완료!")
                else:
                    print("광물 부족!")
            elif string2=="6":
                if ruby>=upgrade6:
                    ruby-=upgrade6
                    purchased6+=1
                    upgrade6=int((200+purchased6*(purchased6+1)*100)*udc)
                    d+=1
                    print("구매 완료!")
                else:
                    print("광물 부족!")
            elif string2=="A":
                if extractor==1:
                    if extractorlevel<=19:
                        if extractpipe>=exupgrade1 and engine>=exupgrade2 and emitpipe>=exupgrade1 and overlordingot>=exupgrade2:
                            extractpipe-=exupgrade1
                            engine-=exupgrade2
                            emitpipe-=exupgrade1
                            overlordingot-=exupgrade2
                            extractorlevel+=1
                            expurchased+=1
                            exupgrade1=20+expurchased*20
                            exupgrade2=5+expurchased*5
                            print("업그레이드 완료!")
                        else:
                            print("재료 부족!")
                    else:
                        print("추출기가 최대 레벨입니다.")
                else:
                    print("추출소가 해금되지 않았습니다!")
            elif string2=="B1":
                if robotmaker==1:
                    if enchantedoverlordingot>=robotupgrade1:
                        enchantedoverlordingot-=robotupgrade1
                        maxrobot+=5
                        robotpurchased1+=1
                        robotupgrade1=50+robotpurchased1*50
                        print("업그레이드 완료!")
                    else:
                        print("재료 부족!")
                else:
                    print("로봇 제작소가 해금되지 않았습니다!")
            elif string2=="y1":
                if mythmineticket==1:
                    if mythrill>=mythupgrade1:
                        mythrill-=mythupgrade1
                        e+=1
                        mythpurchased1+=1
                        mythupgrade1=mythupgrade1 + mythpurchased1*5
                        print("업그레이드 완료!")
                    else:
                        print("재료 부족!")
                else:
                    print("전설의 광산이 해금되지 않았습니다!")
            elif string2=="y2":
                if mythmineticket==1:
                    if orichalcum>=mythupgrade2:
                        orichalcum-=mythupgrade2
                        f*=2
                        mythpurchased2+=1
                        mythupgrade2*=4
                        print("업그레이드 완료!")
                    else:
                        print("재료 부족!")
                else:
                    print("전설의 광산이 해금되지 않았습니다!")
            elif string2=="y3":
                if mythmineticket==1:
                    if adamantite>=mythupgrade3:
                        adamantite-=mythupgrade3
                        udc-=0.01
                        mythpurchased3+=1
                        mythupgrade3*=10
                        print("업그레이드 완료!")
                    else:
                        print("재료 부족!")
                else:
                    print("전설의 광산이 해금되지 않았습니다!")
            else:
                print("업그레이드 상점을 나갔습니다.")
                break
    elif string1=="v": 
        print("=====================\n\n")
        print("조합소에 오신것을 환영합니다.\n")
        print("목록에서 원하는 것의 번호를 입력하시면 그것을 조합하실수 있습니다.\n")
        print("조합소를 나가시려면 조합키를 뺀 아무 키나 눌러주세요.\n\n")
        print("====== 일반 아이템 ======\n")
        print("1. 철-금 합금\n")
        print("재료: 철 10개, 금 10개\n")
        print("2. 추출 파이프\n")
        print("재료: 철-금 합금 10개, 다이아몬드 50개\n")
        print("3. 추출 엔진\n")
        print("재료: 철-금 합금 30개, 에메랄드 100개\n")
        print("4. 배출 파이프\n")
        print("재료: 철-금 합금 10개, 루비 50개\n")
        print("====== 기계 ======\n")
        if extractor!=1:
            print("A. 추출기\n")
            print("재료: 철-금 합금 50개, 추출 파이프 2개, 추출 엔진 1개, 배출 파이프 2개\n")
        if robotmaker!=1:
            print("B. 로봇 제작기\n")
            print("재료: 철-금 합금 1000개, 강화 오버로드괴 10개\n")
        if mythmineticket!=1:
            print("C. 전설의 광산 열쇠\n")
            print("재료: 강화 오버로드괴 1000개\n")
        if extractor==1:
            print("====== 오버로드 아이템 ======\n")
            print("o1. 오버로드의 조각\n")
            print("재료: 오버로드의 파편 5개\n")
            print("o2. 오버로드괴\n")
            print("재료: 오버로드의 조각 10개, 오버로드의 정수 10개\n")
            print("o3. 강화 오버로드괴\n")
            print("재료: 오버로드의 영혼 1개, 오버로드의 정수 1000개, 오버로드괴 5개")
        while True:
            string3=input()
            if string3=="1":
                if iron>=10 and gold>=10:
                    maximummake=min(iron//10,gold//10)
                    print("제작할 개수를 입력해주세요. 실제 제작 개수는 입력한 숫자에 한번에 조합하는 개수를 곱한 값입니다.\n")
                    print("현재 제작 가능 최대 개수 : %d개" %(maximummake))
                    try:
                        realmake=input()
                        if realmake=="m":
                            iron-=10*maximummake
                            gold-=10*maximummake
                            irongold+=maximummake*b
                            print("철-금 합금 %d개 제작 완료! 현재 %d개" %(maximummake*b,irongold))
                        else:
                            realmake=int(realmake)
                            if 1<=realmake and realmake<=maximummake:
                                iron-=10*realmake
                                gold-=10*realmake
                                irongold+=realmake*b
                                print("철-금 합금 %d개 제작 완료! 현재 %d개" %(realmake*b,irongold))
                            else:
                                print("잘못된 숫자 입력입니다.")
                    except:
                        print("숫자를 입력해 주세요.")
                else:
                    print("재료 부족!")
            elif string3=="2":
                if irongold>=10 and diamond>=50:
                    maximummake=min(irongold//10,diamond//50)
                    print("제작할 개수를 입력해주세요. 실제 제작 개수는 입력한 숫자에 한번에 조합하는 개수를 곱한 값입니다.\n")
                    print("현재 제작 가능 최대 개수 : %d개" %(maximummake))
                    try:
                        realmake=input()
                        if realmake=="m":
                            irongold-=10*maximummake
                            diamond-=50*maximummake
                            extractpipe+=maximummake*b
                            print("추출 파이프 %d개 제작 완료! 현재 %d개" %(maximummake*b,extractpipe))
                        else:
                            realmake=int(realmake)
                            if 1<=realmake and realmake<=maximummake:
                                irongold-=10*realmake
                                diamond-=50*realmake
                                extractpipe+=realmake*b
                                print("추출 파이프 %d개 제작 완료! 현재 %d개" %(realmake*b,extractpipe))
                            else:
                                print("잘못된 숫자 입력입니다.")
                    except:
                        print("잘못된 숫자 입력입니다.")
                else:
                    print("재료 부족!")
            elif string3=="3":
                if irongold>=30 and emerald>=100:
                    maximummake=min(irongold//30,emerald//100)
                    print("제작할 개수를 입력해주세요. 실제 제작 개수는 입력한 숫자에 한번에 조합하는 개수를 곱한 값입니다.\n")
                    print("현재 제작 가능 최대 개수 : %d개" %(maximummake))
                    try:
                        realmake=input()
                        if realmake=="m":
                            irongold-=30*maximummake
                            emerald-=100*maximummake
                            engine+=maximummake*b
                            print("추출 엔진 %d개 제작 완료! 현재 %d개" %(maximummake*b,engine))
                        else:
                            realmake=int(realmake)
                            if 1<=realmake and realmake<=maximummake:
                                irongold-=30*realmake
                                emerald-=100*realmake
                                engine+=realmake*b
                                print("추출 엔진 %d개 제작 완료! 현재 %d개" %(realmake*b,engine))
                            else:
                                print("잘못된 숫자 입력입니다.")
                    except:
                        print("잘못된 숫자 입력입니다.")
                else:
                    print("재료 부족!")
            elif string3=="4":
                if irongold>=10 and ruby>=50:
                    maximummake=min(irongold//10,ruby//50)
                    print("제작할 개수를 입력해주세요. 실제 제작 개수는 입력한 숫자에 한번에 조합하는 개수를 곱한 값입니다.\n")
                    print("현재 제작 가능 최대 개수 : %d개" %(maximummake))
                    try:
                        realmake=input()
                        if realmake=="m":
                            irongold-=10*maximummake
                            ruby-=50*maximummake
                            emitpipe+=maximummake*b
                            print("배출 파이프 %d개 제작 완료! 현재 %d개" %(maximummake*b,emitpipe))
                        else:
                            realmake=int(realmake)
                            if 1<=realmake and realmake<=maximummake:
                                irongold-=10*realmake
                                ruby-=50*realmake
                                emitpipe+=realmake*b
                                print("배출 파이프 %d개 제작 완료! 현재 %d개" %(realmake*b,emitpipe))
                            else:
                                print("잘못된 숫자 입력입니다.")
                    except:
                        print("잘못된 숫자 입력입니다.")
                else:
                    print("재료 부족!")
            elif string3=="A":
                if extractor==0:
                    if irongold>=50 and extractpipe>=2 and engine>=1 and emitpipe>=2:
                        irongold-=50
                        extractpipe-=2
                        engine-=1
                        emitpipe-=2
                        extractor=1
                        print("추출기 조합 완료! 이제 A키를 입력해서 추출기를 사용하실 수 있습니다.")
                        print("새로운 아이템을 조합할 수 있습니다!")
                        print("새로운 업그레이드가 해금되었습니다!")
                    else:
                        print("재료 부족!")
                else:
                    print("기계는 1개만 제작 가능합니다.")
            elif string3=="B":
                if robotmaker==0:
                    if irongold>=1000 and enchantedoverlordingot>=10:
                        irongold-=1000
                        enchantedoverlordingot-=10
                        robotmaker=1
                        print("로봇 제작기 조합 완료! 이제 B키를 입력해서 로봇 제작기를 사용하실 수 있습니다.")
                    else:
                        print("재료 부족!")
                else:
                    print("기계는 1개만 제작 가능합니다.")
            elif string3=="C":
                if mythmineticket==0:
                    if enchantedoverlordingot>=1000:
                        enchantedoverlordingot-=1000
                        mythmineticket=1
                        print("전설의 광산 열쇠 조합 완료! 이제 y키로 전설의 광산에서 광질을 하실 수 있습니다.")
                    else:
                        print("재료 부족!")
            elif string3=="o1":
                if extractor==1:
                    if overlordscrap>=5:
                        print("제작할 개수를 입력해주세요.\n")
                        print("현재 제작 가능 최대 개수 : %d개" %(overlordscrap//5))
                        maximummake=overlordscrap//5
                        try:
                            realmake=input()
                            if realmake=="m":
                                overlordscrap-=maximummake*5
                                overlordpart+=maximummake
                                print("오버로드의 조각 %d개 제작 완료! 현재 %d개"%(maximummake,overlordpart))
                            else:
                                realmake=int(realmake)
                                if 1<=realmake and realmake<=maximummake:
                                    overlordscrap-=realmake*5
                                    overlordpart+=realmake
                                    print("오버로드의 조각 %d개 제작 완료! 현재 %d개" %(realmake,overlordpart))
                                else:
                                    print("잘못된 숫자 입력입니다.")
                        except:
                            print("잘못된 숫자 입력입니다.")
                    else:
                        print("재료 부족!")
                else:
                    print("존재하지 않는 아이템입니다.")
            elif string3=="o2":
                if extractor==1:
                    if overlordpart>=10 and overlordessence>=10:
                        maximummake=min(overlordpart//10,overlordessence//10)
                        print("제작할 개수를 입력해주세요.\n")
                        print("현재 제작 가능 최대 개수 : %d개" %(maximummake))
                        try:
                            realmake=input()
                            if realmake=="m":
                                overlordpart-=maximummake*10
                                overlordessence-=maximummake*10
                                overlordingot+=maximummake
                                print("오버로드괴 %d개 제작 완료! 현재 %d개"%(maximummake,overlordingot))
                            else:
                                realmake=int(realmake)
                                if 1<=realmake and realmake<=maximummake:
                                    overlordpart-=realmake*10
                                    overlordessence-=realmake*10
                                    overlordingot+=realmake
                                    print("오버로드괴 %d개 제작 완료! 현재 %d개" %(realmake,overlordingot))
                                else:
                                   print("잘못된 숫자 입력입니다.")
                        except:
                            print("잘못된 숫자 입력입니다.")
                    else:
                        print("재료 부족!")
                else:
                    print("존재하지 않는 아이템입니다.")
            elif string3=="o3":
                if extractor==1:
                    if overlordsoul>=1 and overlordessence>=1000 and overlordingot>=5:
                        maximummake=min(overlordsoul,overlordessence//1000,overlordingot//5)
                        print("제작할 개수를 입력해주세요.\n")
                        print("현재 제작 가능 최대 개수 : %d개" %(maximummake))
                        try:
                            realmake=input()
                            if realmake=="m":
                                overlordsoul-=maximummake
                                overlordessence-=maximummake*1000
                                overlordingot-=maximummake*5
                                enchantedoverlordingot+=maximummake
                                print("강화 오버로드괴 %d개 제작 완료! 현재 %d개"%(maximummake,enchantedoverlordingot))
                            else:
                                realmake=int(realmake)
                                if 1<=realmake and realmake<=maximummake:
                                    overlordsoul-=realmake
                                    overlordessence-=realmake*1000
                                    overlordingot-=realmake*5
                                    enchantedoverlordingot+=realmake
                                    print("강화 오버로드괴 %d개 제작 완료! 현재 %d개" %(realmake,enchantedoverlordingot))
                                else:
                                    print("잘못된 숫자 입력입니다.")
                        except:
                            print("잘못된 숫자 입력입니다.")
                    else:
                        print("재료 부족!")
                else:
                    print("존재하지 않는 아이템입니다.")
            else:
                print("조합소를 나갔습니다.")
                break
    elif string1=="b":
        print("철-금 합금 %d개 추출 파이프 %d개 추출 엔진 %d개 배출 파이프 %d개" %(irongold,extractpipe,engine,emitpipe))
    elif string1=="A": 
        if extractor==1:
            print("=====================\n\n")
            print("추출소에 오신것을 환영합니다.\n")
            print("추출소에서는 오버로드에게서 고급 아이템들을 추출할 수 있습니다.\n")
            print("x키를 눌러 추출하세요.\n")
            print("추출소를 나가시려면 추출키를 제외한 아무 키나 눌러주세요.\n\n")
            print("=====================\n")
            print("현재 추출소 레벨 : %d\n" %(extractorlevel))
            print("현재 오버로드 개수 : %d개" %(overlord))
            while True:
                string4=input()
                if string4=="x":
                    if overlord>=1:
                        essence,scrap,part,ingot,soul=0,0,0,0,0
                        overlord*=extractorlevel
                        for i in range(overlord):
                            overlord-=1
                            number2=random.randrange(1,101)
                            if number2>=51:
                                overlordessence+=1
                                essence+=1
                            if number2>=31:
                                overlordscrap+=1
                                scrap+=1
                            elif number2>=2:
                                overlordpart+=1
                                part+=1
                            elif number2==1:
                                number2=random.randrange(1,101)
                                if number2>=2:
                                    overlordingot+=1
                                    ingot+=1
                                else:
                                    overlordsoul+=1
                                    soul+=1
                            if overlord==0:
                                print("추출 끝")
                                print("결과 : 오버로드의 정수 %d개" %(essence))
                                print("       오버로드의 파편 %d개" %(scrap))
                                print("       오버로드의 조각 %d개" %(part))
                                print("       오버로드괴      %d개" %(ingot))
                                print("       오버로드의 영혼 %d개" %(soul))
                    else:
                        print("추출할 오버로드가 없습니다.")
                else:
                    print("추출소를 나갔습니다.")
                    break
        else:
            print("현재 추출기가 없습니다.")
    elif string1=="B":
        print("오버로드의 정수 %d개 오버로드의 파편 %d개 오버로드의 조각 %d개 오버로드괴 %d개 오버로드의 영혼 %d개 강화 오버로드괴 %d개" %(overlordessence,overlordscrap,overlordpart,overlordingot,overlordsoul,enchantedoverlordingot))
    elif string1=="C":
        if robotmaker==1:
            print("=====================\n\n")
            print("로봇 제작소에 오신것을 환영합니다.\n")
            print("로봇 제작소에서는 여러 작업들을 자동으로 해주는 로봇과 그 재료를 제작할 수 있습니다.\n")
            print("목록에서 원하는 로봇의 번호를 입력하시면 그 로봇을 제작하실 수 있습니다.\n")
            print("====== 로봇 재료 ======\n")
            print("1. 로봇 몸체\n")
            print("재료: 철-금 합금 1000개, 오버로드괴 50개\n")
            print("2. 회로\n")
            print("재료: 철 30개, 금 30개\n")
            print("3. CPU\n")
            print("재료: 강화 오버로드괴 1개, 회로 300개\n")
            print("4. 드릴\n")
            print("재료: 다이아몬드 1000개, 오버로드괴 50개\n")
            print("====== 로봇 ======\n")
            print("A. 일반 채광 로봇\n")
            print("%d초마다 자동으로 채광합니다. 광질 파워 : 1 필요 공간 : 1\n" %(autominetime))
            print("재료: 로봇 몸체 1개, 회로 500개, CPU 1개, 드릴 2개\n")
            print("B. 일반 굴착기 로봇\n")
            print("%d초마다 자동으로 채광합니다. 광질 파워 : 5 필요 공간 : 3\n"% (autominetime))
            print("재료: 로봇 몸체 3개, 회로 2000개, CPU 3개, 드릴 20개\n")
            while True:
                string5=input()
                if string5=="1":
                    if irongold >= 1000 and overlordingot >= 50:
                        maximummake = min(irongold//1000,overlordingot//50)
                        print("제작할 개수를 입력해주세요.\n")
                        print("현재 제작 가능 최대 개수 : %d개" % (maximummake))
                        try:
                            realmake = input()
                            if realmake == "m":
                                irongold -= 1000 * maximummake
                                overlordingot -= 50 * maximummake
                                robotbody+=maximummake
                                print("로봇 몸체 %d개 제작 완료! 현재 %d개" % (maximummake, robotbody))
                            else:
                                realmake = int(realmake)
                                if 1 <= realmake and realmake <= maximummake:
                                    irongold -= 1000 * realmake
                                    overlordingot -= 50 * realmake
                                    robotbody += realmake
                                    print("로봇 몸체 %d개 제작 완료! 현재 %d개" % (realmake, robotbody))
                                else:
                                    print("잘못된 숫자 입력입니다.")
                        except:
                            print("숫자를 입력해 주세요.")
                    else:
                        print("재료 부족!")
                elif string5=="2":
                    if iron>=30 and gold>=30:
                        maximummake=min(iron//30 , gold//30)
                        print("제작할 개수를 입력해주세요.\n")
                        print("현재 제작 가능 최대 개수 : %d개"%(maximummake))
                        try:
                            realmake=input()
                            if realmake=="m":
                                iron-=30*maximummake
                                gold-=30*maximummake
                                circuit+=maximummake
                                print("회로 %d개 제작 완료! 현재 %d개"%(maximummake,circuit))
                            else:
                                realmake=int(realmake)
                                if 1<=realmake and realmake<=maximummake:
                                    iron-=30*realmake
                                    gold-=30*realmake
                                    circuit+=realmake
                                    print("회로 %d개 제작 완료! 현재 %d개"%(realmake,circuit))
                                else:
                                    print("잘못된 숫자 입력입니다.")
                        except:
                            print("숫자를 입력해 주세요.")
                    else:
                        print("재료 부족!")
                elif string5=="3":
                    if enchantedoverlordingot>=1 and circuit>=300:
                        maximummake=min(enchantedoverlordingot , circuit//300)
                        print("제작할 개수를 입력해주세요.\n")
                        print("현재 제작 가능 최대 개수 : %d개"%(maximummake))
                        try:
                            realmake=input()
                            if realmake=="m":
                                enchantedoverlordingot-=maximummake
                                circuit-=300*maximummake
                                CPU+=maximummake
                                print("CPU %d개 제작 완료! 현재 %d개"%(maximummake,CPU))
                            else:
                                realmake=int(realmake)
                                if 1<=realmake and realmake<=maximummake:
                                    enchantedoverlordingot-=realmake
                                    circuit-=300*realmake
                                    CPU+=realmake
                                    print("CPU %d개 제작 완료! 현재 %d개"%(realmake,CPU))
                                else:
                                    print("잘못된 숫자 입력입니다.")
                        except:
                            print("숫자를 입력해 주세요.")
                    else:
                        print("재료 부족!")
                elif string5=="4":
                    if diamond>=1000 and overlordingot>=50:
                        maximummake=min(diamond//1000, overlordingot//50)
                        print("제작할 개수를 입력해주세요.\n")
                        print("현재 제작 가능 최대 개수 : %d개"%(maximummake))
                        try:
                            realmake=input()
                            if realmake=="m":
                                diamond-=1000*maximummake
                                overlordingot-=50*maximummake
                                miningdrill+=maximummake
                                print("드릴 %d개 제작 완료! 현재 %d개"%(maximummake,miningdrill))
                            else:
                                realmake=int(realmake)
                                if 1<=realmake and realmake<=maximummake:
                                    diamond-=1000*realmake
                                    overlordingot-=50*realmake
                                    miningdrill+=realmake
                                    print("드릴 %d개 제작 완료! 현재 %d개"%(realmake,miningdrill))
                                else:
                                    print("잘못된 숫자 입력입니다.")
                        except:
                            print("숫자를 입력해 주세요.")
                    else:
                        print("재료 부족!")
                elif string5=="A":
                    if robotcount<maxrobot:
                        if robotbody>=1 and circuit>=500 and CPU>=1 and miningdrill>=2:
                            robotbody-=1
                            circuit-=500
                            CPU-=1
                            miningdrill-=2
                            commonminingrobot+=1
                            robotcount+=1
                            print("일반 채광 로봇 제작 완료!")
                        else:
                            print("재료 부족!")
                    else:
                        print("로봇 수용소 공간이 없습니다.")
                elif string5=="B":
                    if maxrobot-robotcount>=3:
                        if robotbody>=3 and circuit>=2000 and CPU>=3 and miningdrill>=20:
                            robotbody-=3
                            circuit-=2000
                            CPU-=3
                            miningdrill-=20
                            commonexcavatorrobot+=1
                            robotcount+=3
                            print("일반 굴착기 로봇 제작 완료!")
                        else:
                            print("재료 부족!")
                    else:
                        print("로봇 수용소 공간이 없습니다.")

                else:
                    print("로봇 제작소를 나갔습니다.")
                    break
        else:
            print("현재 로봇 제작기가 없습니다.")
    elif string1=="D":
        print("로봇 몸체 %d개 회로 %d개 CPU %d개 드릴 %d개"%(robotbody,circuit,CPU,miningdrill))
    elif string1=="R":
        if robotmaker==1:
            print("로봇 관리소에 오신 것을 환영합니다.\n")
            print("현재 남은 로봇 수용소 공간 : %d\n" %(maxrobot-robotcount))
            print("현재 광질 파워 : %d\n"%(commonminingrobot+5*commonexcavatorrobot))
            print("로봇을 분해하시려면 decompose [로봇 번호]를 입력해주세요.\n")
            print("1. 일반 채광 로봇 %d기" %(commonminingrobot))
            print("2. 일반 굴착기 로봇 %d기" %(commonexcavatorrobot))
            while True:
                stringrobot=input()
                if stringrobot=="decompose 1":
                    if commonminingrobot>=1:
                        commonminingrobot-=1
                        robotbody+=1
                        circuit+=500
                        CPU+=1
                        miningdrill+=2
                        robotcount-=1
                        print("분해 완료.")
                    else:
                        print("분해할 로봇이 없습니다.")
                elif stringrobot=="decompose 2":
                    if commonexcavatorrobot>=1:
                        commonexcavatorrobot-=1
                        robotbody+=3
                        circuit+=2000
                        CPU+=3
                        miningdrill+=20
                        robotcount-=3
                        print("분해 완료.")
                    else:
                        print("분해할 로봇이 없습니다.")
                else:
                    print("로봇 관리소를 나갔습니다.")
                    break
        else:
            print("현재 로봇 제작기가 없습니다.")
    elif string1=="y":
        if mythmineticket==0:
            print("광산 미해금")
        else:
            number0 = random.randrange(1, 101)
            if number0>=11:
                print("아무것도 나오지 않았다..")
            elif number0>=5:
                print("미스릴 %d개 획득!" %(e))
                mythrill+=e
            elif number0>=2:
                print("오리할콘 %d개 획득!" %(e))
                orichalcum+=e
            elif number0==1:
                print("아다만타이트 %d개 획득!" %(e))
                adamantite+=e
    elif string1=="yc":
        print("미스릴 %d개 오리할콘 %d개 아다만타이트 %d개 " %(mythrill,orichalcum,adamantite))
    elif string1=="save":
        file = open("save.txt", "w")
        data = ("%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n%d\n" %(iron,gold,diamond,emerald,ruby,overlord,upgrade1,purchased1,upgrade2,purchased2,upgrade3,purchased3,a,b,irongold,extractpipe,engine,emitpipe,extractor,overlordscrap,overlordpart,overlordingot,overlordessence,overlordsoul,overlordposs,extractorlevel,exupgrade1,exupgrade2,expurchased,upgrade4,purchased4,doubleminingposs,enchantedoverlordingot,autominetime,robotmaker,minepower,circuit,upgrade5,purchased5,upgrade6,purchased6,c,d,maxrobot,robotcount,commonminingrobot,commonexcavatorrobot,robotupgrade1,robotpurchased1,mythmineticket,mythrill,orichalcum,adamantite,udc,mythupgrade1,mythpurchased1,mythupgrade2,mythpurchased2,mythupgrade3,mythpurchased3,e,f))
        file.write(data)
        print("저장 완료, save.txt의 이름을 바꾸지 마십시오")
        file.close()
    elif string1=="load":
        file = open("save.txt", "r")
        saveNames = ['iron', 'gold', 'diamond', 'emerald', 'ruby', 'overlord', 'upgrade1', 'purchased1', 'upgrade2', 'purchased2', 'upgrade3', 'purchased3', 'a', 'b', 'irongold', 'extractpipe', 'engine', 'emitpipe', 'extractor', 'overlordscrap', 'overlordpart', 'overlordingot', 'overlordessence', 'overlordsoul', 'overlordposs', 'extractorlevel', 'exupgrade1', 'exupgrade2', 'expurchased', 'upgrade4', 'purchased4', 'doubleminingposs', 'enchantedoverlordingot', 'autominetime', 'robotmaker', 'minepower', 'circuit', 'upgrade5','purchased5','upgrade6','purchased6','c','d','maxrobot','robotcount','commonminingrobot','commonexcavatorrobot','robotupgrade1','robotpurchased1','mythmineticket','mythrill','orichalcum','adamantite','udc','mythupgrade1','mythpurchased1','mythupgrade2','mythpurchased2','mythupgrade3','mythpurchased3','e','f'];
        saveResets = [0, 0, 0, 0, 0, 0, 50, 0, 2000, 0, 5, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 20, 5, 0, 50, 0, 0, 0, 10, 0, 0, 0, 500, 0, 500, 0, 0, 0, 5, 0, 0, 0, 50, 0, 0, 0, 0, 0, 1, 10, 0, 10, 0, 10, 0, 1, 1];
        for i in range(-1, (len(saveNames)-1)):
            i += 1
            try:
                exec(saveNames[i] + " = int(file.readline())")
            except:
                exec(saveNames[i] + " = saveResets[i]")
        file.close()
        print("로드 완료.")
    elif string1=="?":
        print("=====================\n\n") 
        print("[ 1 ] 게임 설명 \n\n")
        print("[ 2 ] 키 목록\n\n")
        print("\n\n\n\n\n[ x ] 도움말 나가기\n")
        while True:
            stringhelp=input()
            if stringhelp=="1":
                print("오버로드 광질 게임은 광질을 하고 아이템을 조합하는 노가다 게임입니다")
                print("만든놈 : 1106 강민성  \n디스코드 : [K] overlord#2814")
                print("Special Thanks:\nspotky1004")
                break
            elif stringhelp=="2":
                print("키 목록:\n\n=====================\n\nx : 광질\n\nc : 광물 개수 보기\n\ns : 업그레이드 상점\n\nv : 조합소\n\nb : 조합 아이템 개수 보기\n\nA : 추출소\n\nB : 오버로드 아이템 개수 보기\n\nC : 로봇 제작소\n\nD : 로봇 재료 개수 보기\n\nR : 로봇 관리소\n\ny : 전설의 광산 광질\n\nyc : 전설의 광물 개수 보기\n\nsave : 저장\n\nload : 로드\n\n")
                break
            elif stringhelp=="x":
                print("도움말을 나갔습니다.")
                break
            else:
                print("잘못 입력하셨습니다.")
                break
    else:
        print("잘못 입력하셨습니다.")
