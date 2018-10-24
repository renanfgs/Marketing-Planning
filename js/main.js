    
//snippet Firebase Realtime Database
var config = {
    apiKey: "AIzaSyDXEKD6kYZi3rCVnOevylXnHDbM8gDqemw",
    authDomain: "claquete-3176f.firebaseapp.com",
    databaseURL: "https://claquete-3176f.firebaseio.com",
    projectId: "claquete-3176f",
    storageBucket: "claquete-3176f.appspot.com",
    messagingSenderId: "138161165527"
        };
    firebase.initializeApp(config);

    //reference messages collection
    var mktData = firebase.database().ref("mktData");

//listen
document.getElementById("planning").addEventListener("submit",calcForm);

 
function calcForm(e){
    e.preventDefault();

    //seleciona o mes
    var month = document.getElementById("month");    
        
    //Recebe valores de evento do HTML

    var invest=getIputVal("invest");
    if (invest =="") invest = 0;
    var food=getIputVal("food");
    if (food =="") food = 0;
    var infra=getIputVal("infra");
    if (infra =="") infra = 0;
    var place=getIputVal("place");
    if (place =="") place = 0;
    var speaker=getIputVal("speaker");
    if (speaker =="") speaker = 0;
    var security=getIputVal("security");
    if (security =="") security = 0;
    var transportation=getIputVal("transportation");
    if (transportation =="") transportation = 0;
    var headcount=getIputVal("headcount");
    if (headcount =="") headcount = 0;
    var salesteam=getIputVal("salesteam");
    if (salesteam =="") salesteam = 0;
    var gifts=getIputVal("gifts");
    if (gifts =="") gifts = 0;
    var extras=getIputVal("extras");
    if (extras =="") extras = 0;
    
    //Recebe os valores do Marketing
    var facebook=getIputVal("facebook");
    if (facebook =="") facebook = 0;
    var google=getIputVal("google");
    if (google =="") google = 0;
    var instagram=getIputVal("instagram");
    if (instagram =="") instagram = 0;
    var linkedin=getIputVal("linkedin");
    if (linkedin =="") linkedin = 0;
    var sem=getIputVal("sem");
    if (sem =="") sem = 0;
    var youtube=getIputVal("youtube");
    if (youtube =="") youtube = 0;
    var mkteam=getIputVal("mkteam");
    if (mkteam =="") mkteam = 0;
    var another=getIputVal("another");
    if (another =="") another = 0;

    //Recebe os valores de metas Ledas do HTML
    var mfacebook=getIputVal("mfacebook");
    if (mfacebook =="") mfacebook = 0;
    var mgoogle=getIputVal("mgoogle");
    if (mgoogle =="") mgoogle = 0;
    var minstagram=getIputVal("minstagram");
    if (minstagram =="") minstagram = 0;
    var mlinkedin=getIputVal("mlinkedin");
    if (mlinkedin =="") mlinkedin = 0;
    var msem=getIputVal("msem");
    if (msem =="") msem = 0;
    var myoutube=getIputVal("myoutube");
    if (myoutube =="") myoutube = 0;

    //pega o valor de conversão em vendas
    var conv=getIputVal("salescon");
    if (conv =="") conv = 0;

    //pega o valor de ticket mediod de vendas
    var tkt=getIputVal("ticketm");
    if (tkt =="") tkt = 0;

    //total para evento
    var event = parseFloat(food) + parseFloat(infra) + parseFloat(place) + parseFloat(speaker)
    + parseFloat(security) + parseFloat(transportation) + parseFloat(headcount) + parseFloat(salesteam)
    + parseFloat(gifts) + parseFloat(extras); 
  
    //total para marketing
    var marketing = parseFloat(facebook) + parseFloat(google)
    + parseFloat(instagram) + parseFloat(linkedin) + parseFloat(sem) + parseFloat(youtube)
    + parseFloat(mkteam) + parseFloat(another);
    
    //total para leads
    var leads = parseFloat(mfacebook) + parseFloat(mgoogle)
    + parseFloat(minstagram) + parseFloat(mlinkedin) + parseFloat(msem) + parseFloat(myoutube);
    
    //CUSTO MÉDIO POR LEAD
    var leadcoast = ((event + marketing + another) / leads);
    if (isNaN(leadcoast)) leadcoast=0;
    var app = document.querySelector('#app');
    var template = `CUSTO MÉDIO POR LEAD: `+leadcoast.toFixed(2);
    saferInnerHTML(app, template);
    
    //VENDAS (QUANTIDADE)
    var salesq = ((leads*conv)/100);
    var app1= document.querySelector('#salesq');  
    var template1 = `VENDAS (QUANTIDADE): `+salesq;
    saferInnerHTML(app1, template1);

    //VENDAS
    var sales = (salesq * tkt);
    var app2= document.querySelector('#sales');  
    var template2 = `VENDAS R$: `+sales;
    saferInnerHTML(app2, template2);

    //RETORNO FINANCEIRO
    var returnf = (sales- invest);
    var app3 = document.querySelector('#returnf');  
    var template3 = `RETORNO FINANCEIRO R$: `+returnf;
    saferInnerHTML(app3, template3);
    
    //ROI
    var roi = ((sales - (event+marketing+another)) / (event+marketing+another));
    if (isNaN(roi)) roi=0;
    var app4 = document.querySelector('#roi');  
    var template4 = `ROI: `+roi.toFixed(2);
    saferInnerHTML(app4, template4);

    //ROAS facebook
    var rofa = (((mfacebook*conv)*tkt) / facebook);
    if (isNaN(rofa)) rofa=0;
    var app5 = document.querySelector('#rofa');  
    var template5 = `ROAS Facebook: `+rofa + `%`;
    saferInnerHTML(app5, template5);

    //ROAS Google
    var rogo = (((mgoogle*conv)*tkt) / google);
    if (isNaN(rogo)) rogo=0;
    var app6 = document.querySelector('#rogo');  
    var template6 = `ROAS Google: `+rogo + `%`;
    saferInnerHTML(app6, template6);

    //ROAS INSTAGRAM
    var roin = (((minstagram*conv)*tkt) / instagram);
    if (isNaN(roin)) roin=0;
    var app7 = document.querySelector('#roin');  
    var template7 = `ROAS Instagram: `+roin + `%`;
    saferInnerHTML(app7, template7);

    //ROAS LINKEDIN
    var roli = (((mlinkedin*conv)*tkt) / linkedin);
    if (isNaN(roli)) roli=0;
    var app8 = document.querySelector('#roli');  
    var template8 = `ROAS LinkedIn: `+roli + `%`;
    saferInnerHTML(app8, template8);

    //ROAS SEM
    var rose = (((msem*conv)*tkt) / sem);
    if (isNaN(rose)) rose=0;
    var app9 = document.querySelector('#rose');  
    var template9 = `ROAS SEM: `+rose + `%`;
    saferInnerHTML(app9, template9);

    //ROAS YOUTUBE
    var royo = (((myoutube*conv)*tkt) / youtube);
    if (isNaN(royo)) royo=0;
    var app10 = document.querySelector('#royo');  
    var template10 = `ROAS Youtube: `+royo + `%`;
    saferInnerHTML(app10, template10);

    //CAC
    var cac = ((event + marketing + another) / salesq)
    if (isNaN(cac)) cac=0;
    var app11 = document.querySelector('#cac');  
    var template11 = `CAC: `+cac.toFixed(2) + `%`;
    saferInnerHTML(app11, template11);

    //Cria array de dados com todos os dados da planilha
    var data = [month.selectedIndex,invest, leadcoast,conv,tkt,salesq,sales,returnf,roi,rofa,
        rogo,roin, roli,rose,royo,cac];
        console.log(data);
        gravaDados(data);
}

function gravaDados(data){
    var newLeadRef = mktData.push();
    newLeadRef.set({
        data:data,
    }
    )
}

//Função para pegar os valores
function getIputVal(id){
    return document.getElementById(id).value;
}