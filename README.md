# Drinkoscope

Är det en tråkig, ensam, långsam, tröttsam fredag? Är du trött på samma gamla vanliga drink som du alltid köper? Är du nyfiken på vilken energi du utstrålar idag? Då ska du kika hit!

Drinkoscope är ett projekt där man får ut en drink baserat på dagens horoskop genom att skriva in sitt födelsedatum. Man har möjlighet att se drinken för igår, idag och imorgon samt spara ner drinkar som man tycker om. Drinkarna delas ut enligt snålighetslistan (vetenskapligt verifierad med ChatGPT) och är därmed korrekt enligt fakta. Slå dig ner, kör igång servern, kör npm run dev och få din drink på bara några sekunder!

Projektet är uppbyggt mha React och Node.js (servern), vilket vi valde istället för Vue och Angular pga flera olika anledningar, bl.a:

Vi älskar återanvändning! Genom att använda React kan vi återanvända komponenter vid behov istället för att repetera kod på flera olika ställen.
JSX gör det väldigt smidigt att binda dynamiska variabler till html-element. Eftersom React är baserat på Javascript så är det väldigt fort att lära sig.
Anledningen till varför vi valde React framför andra ramverk såsom VueJS eller Angular beror på flera anledningar. Anledningen till varför inte valde Angular är för att det är ett Typescript-baserat ramverk vilket hade gjort inlärningskurvan lite brantare för oss då vi
inte har någon erfarenhet av Typescript. Dessutom så är Angular mer anpassat för större applikationer. React är dessutom, med sin React-dom-router, väldigt smidigt för Single Page Applications (SPA) vilket passade vårt projekt bra.
VueJS och React påminner mycket om varandra när det kommer till återanvändbara och att båda är Javascript-baserade ramverk. Inlärningskurvan är lättare för VueJS då det inte är så mycket ny syntax att lära. VueJS funkar också bra om man ska utveckla SPA. Anledningen till
varför inte valde det i slutändan är för att vi React var ett ramverk vi kunde och som låg nära till hands för oss. Men VueJS hade också funkat bra för just denna applikation. En nackdel med VueJS inte funkar i äldre webbläsar-versioner vilket gör React mer optimalt för
olika plattformar.

Källor:
https://alokai.com/blog/vue-vs-react
https://www.browserstack.com/guide/angular-vs-react-vs-vue

# För att köra applikationen

1. Öppna två terminaler.
2. I ena terminalen kör du npm install.
3. I samma terminal kör du sedan kommandet cd server
4. När du är inne i mappen kör node server.js
4. I andra terminalen kör du igång webbapplikationen med kommandot npm run dev
5. För att besöka sidan söker du sedan på http://localhost:3000 i valfri webbläsare
