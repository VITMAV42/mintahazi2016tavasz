# Mintafeladat

**A következõ feladatok gyakorlaton oldjuk meg**

Egy cégnél szükség lenne egy eszköz nyilvántartóra, azaz
hogy melyik munkatársnál melyik céges eszköz van. Ehhez
a munkatársakat is kezelni kell tudni, meg az eszközöket is,
meg az összerendezést is.

**Fenntartásokkal kezeljük az ide bekerülõ kódot, elgépelések, hibák és bármi egyéb huncutság is lehet benne.**

# A félév feladatai

## 1. Feladat

Egy elképzelt megrendelõ feladatát specifikáljuk:

- Legalább 2 entitás típus (legalább egyiknél az összes CRUD funkció megvalósítása)
- Legalább 3 nézet (mindegyikhez mockup)
- Részletes specifikáció kell

**Amit le kell adni:**

- specifikáció pdfben (Mi az oldal célja, az egyes oldalon milyen adatok jelennek meg, milyen kapcsolat van az oldalak között) 
- mockup vagy a specifikációban, vagy képként (pl. http://www.balsamiq.com/builds/mockups-web-demo/)

## 2. Feladat

Hozzon létre egy express alkalmazást a feladat megoldásához, készítse el a mockup alapján a statikus oldalakat, ezeket tegye bejárhatóvá linkeken keresztül.

## 3. Feladat

Hozza létre a szükséges middleware strukturát és routingot, commentek formájában dokumentálja az egyes middlewarek mûködését. Hozza létre a szükséges model és segédosztályokat. A model osztályok esetében az egyes függvények mockolt objektumokat adjanak vissza.

*A middlewarek implementálását ezen a ponton célszerû elkezdeni, az összes middlewert a 6. Feladat leadásának idejére kell elkészíteni!*

## 4. Feladat

Módosítsa a meglévõ nézeteket úgy, hogy ne egyszerû HTML-t, hanem EJS-t használjanak. A nézetek a middlewaretõl kapott adatokat jelenítsék meg.

## 5. Feladat

Hozza létre MongoDB segítségével a megfelelõ adatstrukturákat, használja ezeket a model osztályaiban.

## 6. Feladat

Implementálja az összes middlewaret, **ezen a ponton a teljes alkalmazásnak mûködõképesnek kell lennie!**

## 7. Feladat

Készítsen 2 szabadon választott, legalább egy elágazást tartalmazó middlewarehez teszteket. Ennek a 2 middlewarenek teljesen teszteltnek kell lennie.