// Réglages photo — Canon EOS 80D (APS-C 1,6x). 100 % local.
const LENS=[["18-55","f/3.5–5.6"],["70-300","f/4–5.6"]];
const BASE={mes:"Évaluative",wb:"Auto (AWB)",fmt:"RAW (ou RAW+JPEG)",ec:"0",dr:"Vue par vue",af:"One-Shot, point central"};
const SIM=["mode","av","tv","iso","af"],DET=["mes","wb","fmt","ec","dr"];
const LAB={mode:"Mode",av:"Ouverture",tv:"Vitesse",iso:"ISO",af:"Mise au point",mes:"Mesure",wb:"Balance des blancs",fmt:"Format",ec:"Correction d'expo",dr:"Déclenchement"};
const INFO={
mode:"M donne un contrôle total ; Av fixe l'ouverture et l'appareil choisit la vitesse ; Tv fixe la vitesse. Molette des modes, dessus du boîtier.",
av:"Petite valeur = grand diaphragme : plus de lumière, arrière-plan flou. Grande valeur = plus de profondeur de champ et de piqué. En M : molette arrière = ouverture ; en Av : molette principale.",
tv:"Règle de base à main levée : 1/focale (×1,6 sur APS-C), soit 1/90 s à 55 mm et 1/480 s à 300 mm. Molette principale.",
iso:"Plus l'ISO monte, plus l'image est lumineuse et bruitée. Touche ISO (dessus). ISO auto : menu Prise de vue 2 > Réglages sensibilité ISO > ISO max auto, et vitesse mini.",
af:"One-Shot : sujet immobile. AI Servo : suit un sujet en mouvement. Touche AF (dessus) ; zone : touche de sélection de zone AF. En Live View : Q > Méthode AF.",
mes:"Évaluative : scène entière. Spot : un petit point (ciel, visage). Pondérée centrale : milieu du cadre. Touche de mesure (dessus) ou Q.",
wb:"Corrige la dominante de couleur. En RAW, modifiable après coup. Q > Balance des blancs, ou menu Prise de vue 4 pour régler en Kelvin.",
fmt:"Le RAW garde toute l'information pour retoucher. Menu Prise de vue 1 > Qualité d'image.",
ec:"Éclaircit (+) ou assombrit (−) l'image. Visible sur l'échelle d'exposition du viseur.",
dr:"Touche Drive (dessus) : vue par vue, rafale rapide (7 i/s), retardateur 2 s (évite le flou au déclenchement) ou 10 s."};
const S=[
{id:"pay",i:"🏞️",n:"Paysage",l:0,q:"Sur trépied ?",o:[
["Oui",{mode:"M",av:"f/8 – f/11",tv:"Selon la lumière (1/60 s à quelques s)",iso:"100",af:"Live View, zoom ×10, point au premier tiers",dr:"Retardateur 2 s"},"Trépied : ISO mini et f/8–11 pour le piqué maximum.","Coupez la stabilisation (IS) sur trépied."],
["Non",{mode:"Av",av:"f/8",tv:"Auto (visez ≥ 1/100 s)",iso:"Auto, max 1600"},"À main levée : f/8 donne du piqué, l'ISO auto garde une vitesse sûre.","Stabilisation (IS) activée."]]},
{id:"por",i:"🧑",n:"Portrait",l:1,q:"Lumière ?",o:[
["Extérieur",{mode:"Av",av:"{max}",tv:"Auto (≥ 1/250 s)",iso:"Auto, max 800",af:"One-Shot, point sur l'œil le plus proche",mes:"Pondérée centrale"},"Ouverture maxi pour détacher le sujet du fond.","70-300 vers 100–135 mm : meilleur rendu et fond plus flou."],
["Intérieur",{mode:"Av",av:"{max}",tv:"Auto (≥ 1/125 s)",iso:"Auto, max 3200",af:"One-Shot, point sur l'œil",wb:"Auto ou Kelvin selon l'ampoule"},"Peu de lumière : ouverture maxi et ISO auto bornée.","Placez le sujet près d'une fenêtre."]]},
{id:"str",i:"🚶",n:"Street",l:0,q:"Style ?",o:[
["Réactif",{mode:"Av",av:"f/5.6 – f/8",tv:"Auto (≥ 1/250 s)",iso:"Auto, max 3200",af:"AI Servo, zone large",dr:"Rafale rapide"},"Vitesse haute pour figer les passants.","Photographiez à hauteur de hanche, au 18 mm."],
["Zone pré-réglée",{mode:"M",av:"f/8",tv:"1/250 s",iso:"Auto",af:"Manuel : mise au point calée à 3 m",dr:"Rafale rapide"},"Tout est net de 1,5 m à l'infini : zéro délai d'AF.","Vérifiez avec l'échelle de distance de l'objectif."]]},
{id:"spo",i:"🏎️",n:"Sport / action",l:1,q:"Effet recherché ?",o:[
["Figé",{mode:"Tv",av:"Auto ({max})",tv:"1/1000 – 1/2000 s",iso:"Auto, max 6400",af:"AI Servo, zone AF élargie",dr:"Rafale rapide (7 i/s)"},"Vitesse très haute pour geler le mouvement.","Anticipez : appuyez en continu."],
["Filé",{mode:"Tv",av:"Auto (f/11 – f/16 en plein jour)",tv:"1/40 – 1/125 s",iso:"100 – 400",af:"AI Servo, point central",dr:"Rafale rapide"},"Vitesse lente + panoramique suivant le sujet : fond filé, sujet net.","Stabilisation en mode 2 (panoramique), pivotez depuis les hanches."]]},
{id:"ani",i:"🦅",n:"Animalier / oiseaux",l:1,q:"Sujet ?",o:[
["En vol",{mode:"M",av:"{max}",tv:"1/2000 s ou plus",iso:"Auto, max 6400",af:"AI Servo, zone AF élargie",dr:"Rafale rapide (7 i/s)"},"Les ailes bougent très vite : vitesse maximale.","Suivez avant d'appuyer, restez sur le sujet."],
["Posé",{mode:"Av",av:"f/5.6 – f/7.1",tv:"Auto (≥ 1/500 s)",iso:"Auto, max 3200",af:"AI Servo, un seul point",dr:"Rafale rapide"},"Net sur l'œil, fond flou, vitesse de sécurité.","Mise au point sur l'œil, approchez-vous lentement."]]},
{id:"ast",i:"🌌",n:"Astrophotographie",l:0,q:"Cible ?",o:[
["Voie lactée",{mode:"M",av:"{max}",tv:"≈ 13 s à 18 mm (règle NPF)",iso:"3200 (1600 – 6400)",af:"Manuel, Live View ×10 sur une étoile brillante",wb:"Kelvin 3800 – 4200",dr:"Retardateur 2 s"},"Ouvert au max, vitesse limitée pour que les étoiles restent des points.","Trépied obligatoire, IS coupée, réduction du bruit pose longue désactivée."],
["Lune",{mode:"M",av:"f/8",tv:"1/200 – 1/250 s",iso:"100",af:"Manuel, Live View ×10 sur le bord",wb:"Lumière du jour",dr:"Retardateur 2 s"},"La Lune est un sujet de plein jour.","Utilisez le 70-300 à 300 mm, trépied."]]},
{id:"noc",i:"🌃",n:"Nocturne urbain",l:0,q:"Sur trépied ?",o:[
["Oui",{mode:"M",av:"f/8",tv:"2 – 8 s",iso:"100 – 200",af:"Live View, zoom ×10",wb:"Auto ou Tungstène",dr:"Retardateur 2 s"},"Pose longue : étoiles autour des lumières, traînées de phares.","Coupez l'IS."],
["Non",{mode:"Av",av:"{max}",tv:"Auto (≥ 1/60 s)",iso:"Auto, max 6400",af:"One-Shot, point sur une zone lumineuse",ec:"−1/3"},"Ouvert au max, stabilisation et ISO auto.","Appuyez-vous contre un mur."]]},
{id:"mac",i:"🔍",n:"Macro",l:0,q:"Installation ?",o:[
["À main levée",{mode:"Av",av:"f/8",tv:"Auto (≥ 1/250 s)",iso:"Auto, max 1600",af:"Manuel, Live View ×10",dr:"Rafale rapide"},"Profondeur de champ minuscule : f/8 et vitesse haute.","Prenez plusieurs images en avançant légèrement."],
["Trépied",{mode:"M",av:"f/11",tv:"Selon la lumière",iso:"100",af:"Manuel, Live View ×10",dr:"Retardateur 2 s"},"Fermez davantage pour gagner en profondeur.","Sans macro dédié : bague-allonge ou lentille d'approche sur le 18-55."]]},
{id:"cou",i:"🌅",n:"Coucher de soleil",l:0,q:"Intention ?",o:[
["Silhouette",{mode:"Av",av:"f/8 – f/11",tv:"Auto",iso:"100",mes:"Spot sur le ciel",wb:"Nuageux",ec:"−1"},"Mesure sur le ciel et sous-exposition : sujet noir, ciel riche.","Évitez de viser le soleil à travers le viseur."],
["Détails",{mode:"Av",av:"f/8",tv:"Auto",iso:"100",wb:"Nuageux",ec:"AEB ±2 IL (3 vues)"},"Trois expositions pour récupérer ciel et ombres.","Trépied recommandé, fusion HDR possible."]]},
{id:"pos",i:"💧",n:"Pose longue",l:0,q:"Effet ?",o:[
["Eau soyeuse",{mode:"M",av:"f/11",tv:"1 – 4 s (filtre ND de jour)",iso:"100",af:"Live View, zoom ×10",dr:"Retardateur 2 s"},"Une à quelques secondes lissent l'eau.","Sans ND : à l'aube ou au crépuscule."],
["Nuages",{mode:"M",av:"f/8 – f/11",tv:"30 – 120 s (Bulb avec ND 10 stops)",iso:"100",af:"Manuel (avant de poser le filtre)",dr:"Télécommande ou retardateur"},"Pose très longue : nuages étirés.","Bulb : molette sur B ; retirer l'œilleton."]]},
{id:"con",i:"🎤",n:"Concert / intérieur",l:1,q:"Distance ?",o:[
["Proche",{mode:"M",av:"{max}",tv:"1/160 – 1/250 s",iso:"3200 – 6400",af:"AI Servo, zone",mes:"Spot ou pondérée centrale",ec:"−1/3",wb:"Kelvin 3200 – 4000"},"Les projecteurs trompent la mesure : exposition manuelle.","Flash coupé, mode Live View silencieux."],
["Loin",{mode:"M",av:"{max}",tv:"1/200 s",iso:"3200 – 6400",af:"AI Servo, un point",mes:"Spot",ec:"−1/3"},"Pointez le visage éclairé.","Utilisez le 70-300."]]},
{id:"enf",i:"🧒",n:"Enfants / animaux",l:1,q:"Activité ?",o:[
["Qui bouge",{mode:"Tv",av:"Auto ({max})",tv:"1/500 s",iso:"Auto, max 6400",af:"AI Servo, zone large",dr:"Rafale rapide"},"Vitesse haute et suivi continu.","Mettez-vous à leur hauteur."],
["Calme",{mode:"Av",av:"{max}",tv:"Auto (≥ 1/125 s)",iso:"Auto, max 3200",af:"One-Shot, point sur l'œil",dr:"Vue par vue"},"Ouvert, fond flou, attention aux yeux.","Lumière douce, près d'une fenêtre."]]}
];
const $=document.getElementById("a");
let lens=+(localStorage.getItem("lens")||0),favs=JSON.parse(localStorage.getItem("favs")||"[]"),red=localStorage.getItem("red")=="1",det=false,cur=null;
const sv=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const mx=s=>s.replace("{max}",LENS[lens][1]);
function top(t,back){return `<div class="bar">${back?'<button onclick="home()">‹</button>':""}<h1>${t}</h1><button class="${red?"on":""}" onclick="rd()">🔴</button></div>`}
function rd(){red=!red;sv("red",red?1:0);document.body.classList.toggle("red",red);cur?go(cur[0],cur[1]):home()}
function lensBtns(f){return `<div class="sp">${LENS.map((x,i)=>`<button class="${i==lens?"on":""}" onclick="${f}(${i})">${x[0]} mm</button>`).join("")}</div>`}
function sl(i){lens=i;sv("lens",i);cur?go(cur[0],cur[1]):home()}
function card(s){return `<button class="sc" onclick="ask('${s.id}')"><b>${s.i}</b>${s.n}</button>`}
function home(){cur=null;det=false;const F=S.filter(s=>favs.includes(s.id));
$.innerHTML=top("Réglages photo")+`<h2>Objectif monté</h2>${lensBtns("sl")}`+(F.length?`<h2>Favoris</h2><div class="grid">${F.map(card).join("")}</div>`:"")+`<h2>Scénarios</h2><div class="grid">${S.map(card).join("")}</div><p class="tip">Canon EOS 80D · points de départ à affiner selon la lumière réelle.</p>`;scrollTo(0,0)}
function ask(id){const s=S.find(x=>x.id==id);$.innerHTML=top(s.i+" "+s.n,1)+`<h2>${s.q}</h2>`+s.o.map((o,j)=>`<button class="q" onclick="go('${id}',${j})">${o[0]}</button>`).join("");scrollTo(0,0)}
function row(k,v){return `<button class="row" onclick="this.classList.toggle('open')"><small>${LAB[k]}</small><strong>${mx(v)}</strong><div class="bub">${INFO[k]}</div></button>`}
function go(id,j){cur=[id,j];const s=S.find(x=>x.id==id),o=s.o[j],r=Object.assign({},BASE,o[1]),f=favs.includes(id);
$.innerHTML=top(s.i+" "+s.n+" · "+o[0],1)+lensBtns("sl")+(s.l!=lens?`<p class="tip">Objectif conseillé : ${LENS[s.l][0]} mm.</p>`:"")+`<div class="why">${o[2]}</div>`+SIM.map(k=>row(k,r[k])).join("")+
(det?DET.map(k=>row(k,r[k])).join(""):"")+`<div class="sp"><button onclick="det=!det;go('${id}',${j})">${det?"Vue simple":"Vue détaillée"}</button><button class="${f?"on":""}" onclick="fv('${id}')">${f?"★ Favori":"☆ Favori"}</button></div><p class="tip">💡 ${o[3]}</p><p class="tip">Touchez un réglage pour l'explication et le chemin dans les menus.</p>`;scrollTo(0,0)}
function fv(id){favs=favs.includes(id)?favs.filter(x=>x!=id):favs.concat(id);sv("favs",JSON.stringify(favs));go(cur[0],cur[1])}
document.body.classList.toggle("red",red);home();
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js");
