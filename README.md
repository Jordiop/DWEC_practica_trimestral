# DWEC: Pràctica trimestral


## Mètodes emprats

-  **GET** : Per obtenir les dades de l'API.
-  **POST** : Per enviar dades a l'API.
-  **PUT** : Per actualitzar dades a l'API.
-  **DELETE** : Per eliminar dades a l'API.

## Explicació de la pràctica

Per fer la pràctica s'ha emprat JSON Server, que és una eina que permet crear una API REST amb un fitxer JSON. Per això, s'ha creat un fitxer JSON amb les dades que es volen emmagatzemar a la API. Aquest fitxer es troba a la carpeta  **server**  i s'anomena  **db.json**.

A partir d'allà, seguint els apunts que teniem a mà, s'ha desenvolupat el Javascript adient per a cada apartat de la pràctica. Aquest Javascript es troba a la carpeta  **client**  i s'anomena  **script.js**.

---

## Funcionament de la pràctica

El mètode **GET** és el que s'encarrega de mostrar les dades de la API. Per això, s'ha fet un  **fetch**  a la URL de la API, que és  **http://localhost:3000/heroe**. Aquesta URL és la que retorna tots els clients de la API. Aquesta URL es troba a la variable  **url**  del fitxer  **script.js**.

El mètode **GET ONE** és el que s'encarrega de mostrar les dades d'un client concret de la API. Per això, s'ha fet un  **fetch**  a la URL de la API, que és  **http://localhost:3000/heroe/1**. Aquesta URL és la que retorna el client amb id 1 de la API. Aquesta URL es troba a la variable  **url**  del fitxer  **script.js**.

El mètode **POST** és el que s'encarrega d'afegir un nou client a la API. Per això, s'ha fet un  **fetch**  a la URL de la API, que és  **http://localhost:3000/heroe**. Aquesta URL és la que retorna tots els clients de la API. Aquesta URL es troba a la variable  **url**  del fitxer  **script.js**. A més, s'ha fet un  **POST**  amb les dades del nou client.

El mètode **PUT** és el que s'encarrega d'actualitzar les dades d'un client concret de la API. Per això, s'ha fet un  **fetch**  a la URL de la API, que és  **http://localhost:3000/heroe/1**. Aquesta URL és la que retorna el client amb id 1 de la API. Per evitar problemes amb els camps "undefined", primer s'ha realitzat un **GET** i posteriorment un  **PUT**  amb les dades actualitzades del client.

El mètode **DELETE** és el que s'encarrega d'eliminar un client concret de la API. Per això, s'ha fet un  **fetch**  a la URL de la API, que és  **http://localhost:3000/heroe/1**. Aquesta URL és la que retorna el client amb id 1 de la API i s'ha fet el **DELETE** amb les dades del client.

---

## Requisits extra

Totes les funcions de la pràctica s'han fet amb async/await.

Hi ha un encadanamet d'operacions asincrones.

