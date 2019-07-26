// JavaScript Document

//Aviso Revisar contenido inferior &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Diseno y programacion por Ricardo Mora y Carlos Vega


//1.Restablece el tamaño del iframe
setTimeout(iframeAmpliar, 4000);
function iframeAmpliar (){parent.document.getElementById("com").style.height="100%";}
//Fin Restablece el tamaño del iframe

//2. Aviso Revisar contenido inferior

var tamanoNavegador = window.innerHeight; /*screen.availHeight;*/
var tamanoContenido = document.body.offsetHeight;
var scrolabajo=parseInt(document.body.scrollTop);

var dispositivo2Android = navigator.userAgent.toLowerCase();

document.write('\
<div id="scrolling" style="position:fixed; right:5px; bottom:15px; display:none; width:42px; height:70px; border:red 0px solid;">\
<button class="btn btn-default"  style=" position:relative; float:left; clear:both; background-color:rgba(32,115,2,1.00); color:#FFFFFF;"  onclick="scrollWin(-150);"><span class="oi oi-caret-top"></span></button>\
\
<button class="btn btn-default"  style=" position:relative; float:left;  background-color:rgba(32,115,2,1.00); color:#FFFFFF;" onclick="scrollWin(150);"><span class="oi oi-caret-bottom"></span></button>\
</div>\
');

window.onload = function() {
	
	
	if( dispositivo2Android.search(/android/) > -1 ){
		
		document.getElementById("scrolling").style.display="inline"; 	
	
		if(scrolabajo < 150){
		
				if(tamanoNavegador < tamanoContenido ){
				contenidoInferior(); //activa la instruccion para revisar el contenido inferior	
				aviso = setTimeout(quitarAviso, 8000);
				}
		}
	}
	
}

function contenidoInferior(){
	var aviso = document.createElement("div");
	aviso.style.position="fixed";
	aviso.className="bubble"
	aviso.id="revisar"
	aviso.style.bottom=20+"px";
	aviso.style.right=70+"px";
	aviso.innerHTML= "Revisar contenido inferior.<div onClick='quitarAviso();' style=' position:absolute; top:-15px; right:-10px; width:25px; height:25px;border-radius: 20px; -moz-border-radius:20px; -webkit-border-radius: 20px; border: 2px solid #000000; background-color:#FFFFFF; color:#9F0000; font-weight:bold; padding:0px; line-height:20px; cursor:pointer;'>X</div> ";
	document.body.appendChild(aviso);
	}

function quitarAviso(){
	document.getElementById('revisar').style.display="none";
	clearTimeout(aviso);
}


//Botones para scroll
function scrollWin(scrol) { window.scrollBy(0, scrol);}


// Fin Aviso Revisar contenido inferior


//3.Ipad &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

var dispMac1 = navigator.userAgent.toLowerCase();
	  
	   
      if( dispMac1.search(/iphone|ipod|ipad/) > -1 ){
		 parent.document.getElementById("com").style.height="100%"; 
		  }


	function tamanoIframe (tamano){
		 
	    if( dispMac1.search(/iphone|ipod|ipad/) > -1 ){
		parent.document.getElementById("com").style.height=tamano;
		//parent.document.getElementById("com").style.border="red 1px solid";
	  }
	}
	
	 var TopAnterior;
	 
	function parentSubir(){
      if( dispMac1.search(/iphone|ipod|ipad/) > -1 ){
		  TopAnterior=parseInt(parent.document.getElementById("content").scrollTop);
		  
		  parentTop =parent.document.getElementById("content");
			parentTop.scrollTop =0;
		
		  }
	  }
	  
	function parentAjustar() {
		parentTop =parent.document.getElementById("content");
		parentTop.scrollTop =TopAnterior;
		}  
	
	
// Ipad &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//4. Funciones para habilitar y deshabilitar los botones - INICIA &&&&&&&&&&&&&&&&&&
function enableBtn(div){document.getElementById(div).disabled=false;} 
  
function enableLink(div, divThis){
var laclase= document.getElementById(div).className;
var thisdiv= document.getElementById(divThis).className;


	if (laclase.indexOf("disabled") != -1) {
		document.getElementById(div).className=laclase + " brillo ";
		laclase2=laclase.replace("disabled", '');
		laclase3=laclase2.replace("btn", '');
		document.getElementById(div).className=laclase3 + " brillo ";
		laclase="";
	}
	
	if (thisdiv.indexOf("brillo") != -1) {
		thisdiv2=thisdiv.replace("brillo", '');
		document.getElementById(divThis).className=thisdiv2;
	}
	
}

function quitarbrillo(sinbrillo){
var thisdiv= document.getElementById(sinbrillo).className;
	if (thisdiv.indexOf("brillo") != -1) {
		thisdiv2=thisdiv.replace("brillo", '');
		document.getElementById(sinbrillo).className=thisdiv2;
	}
}
// Fin Funciones para habilitar y deshabilitar los botones - TERMINA &&&&&&&&&&&&&&&&&&

// Contenido oculto - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
var elSigTex;
	function InicialTex (text1){
	document.getElementById(elSigTex).style.display='none'; 
	document.getElementById(text1).style.display='block';}
			
	function sigText(text1, text2){
		document.getElementById(text1).style.display='none'; 
		document.getElementById(text2).style.display='block';
		elSigTex =text2;
		}
			
// Fin Contenido oculto - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Botones oculto - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
	var elSigBtn;
			function InicialBtns (btn1){
			document.getElementById(elSigBtn).style.display='none'; 
			document.getElementById(btn1).style.display='block';}
			
			function sigBtns(btn1, btn2){
			document.getElementById(btn1).style.display='none'; 
			document.getElementById(btn2).style.display='block';
			elSigTex =btn2;
			}
// Botones oculto - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Cambio Texto aparece/desaparecer - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
var SigTxts;		
	function InicialInt(text1){
		document.getElementById(SigTxts).style.display='none'; 
		document.getElementById(txts1).style.display='block';
		}
	
	function sigInt(txts1, txts2){
		document.getElementById(txts1).style.display='none'; 
		document.getElementById(txts2).style.display='block';
		SigTxts =instru2;
		}
// Cambio Texto aparece/desaparecer - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Cambio instrucciones - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
var SigInst;		
	function InicialInt(text1){
		document.getElementById(SigInst).style.display='none'; 
		document.getElementById(instru1).style.display='block';
		}
	
	function sigInt(instru1, instru2){
		document.getElementById(instru1).style.display='none'; 
		document.getElementById(instru2).style.display='block';
		SigInst =instru2;
		}
			
	if( dispMac1.search(/android|iphone|ipod|ipad/) > -1 ){
		
	var AjusteInstru = document.getElementsByClassName("instruPC");	
	var i;
		for (i = 0; i < AjusteInstru.length; i++) {
      
		//AjusteInstru[i].style.border = "red 1px solid";
		AjusteInstru[i].style.display = "none";	
		}
		
		var AjusteInstru2 = document.getElementsByClassName("instruTouch");
		var w;
			for (w = 0; w < AjusteInstru2.length; w++) {
      
		AjusteInstru2[w].style.display = "inline";	
		}/**/
	}			
// Cambio instrucciones - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Plecas del footer - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
	document.write('<footer id="piepagina" >\
	<div class="col-md-12" > \
     <div style="position:relative;"></div>\</div>\
     \
    <div class="row foot" style="margin:0px; " > </div>\
	</footer>\
		');
// Plecas del footer - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Bootstrap componentes 

//Componente pestanas - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&
$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });
});
//Componente pestanas - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Componente popover - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&
var ref="hover focus"

if( dispMac1.search(/iphone|ipod|ipad/) > -1 ){
		ref="click"
		  }

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({trigger:ref});
});
// Componente popover - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Componente Modal - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
	$(function () {
		$('.modal').modal({
			show: false,
			keyboard: false,
			backdrop: 'static'
			});
		});
// Componente Modal - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
   
// Fin Botones obligatorios

/* ---------------------- MODAL PANTALLA COMPLETA - INICIA ---------------------- */
$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});

/* ---------------------- MODAL PANTALLA COMPLETA - INICIA ---------------------- */

/* ---------------------- SECUENCIAS DE APARICIÓN - INICIA ---------------------- */
setTimeout(animarOBJ, 600);

var items = $('.animar').hide();  
  var i = 0; 
  
function animarOBJ () { 

   (function displayItem() {items.eq(i++).delay(200).fadeIn(500,displayItem);})(); 
   
}
/* ---------------------- SECUENCIAS DE APARICIÓN - TERMINA ---------------------- */



/* ---------------------- APARICIÓN ELEMENTOS - INICIA ---------------------- */
function FadeIn1(){
	 //$("#textoOculto1").delay(300).show(1500); //opción animación 1
	 $("#textoOculto1").delay(500).slideDown(1200); //opción animación 2
	 //$("#textoOculto1").toggle("swing"); //opción animación 3
	 //$("#textoOculto1").fadeTo(1500,1.00); //opción animación 4
	 //$("#textoOculto1").fadeToggle(1500); //opción animación 5
	 //$("#textoOculto1").delay(500).fadeIn(2000); //opción animación 6
  }
    
function FadeIn2(){
	 $("#textoOculto2").slideDown(1000);
  } 
  
function FadeIn3(){
	 $("#textoOculto3").slideDown(1000);
  } 

function FadeIn4(){
	 $("#textoOculto4").slideDown(1000);
  }  
  
function FadeIn5(){
	 $("#textoOculto5").slideDown(1000);
  }

function divFadeIn(idDiv){
	 $(idDiv).fadeIn(1000);
  }

function divFadeOut(idDiv){
	 $(idDiv).fadeOut(1000);
  }
/* ---------------------- APARICIÓN ELEMENTOS - TERMINA ---------------------- */

/* ---------------------- TITULOS OCULTOS - INICIA ---------------------- */
$(document).ready(function(){
	$('.cabecera-up, .unidad-up, .tema-up').on('click', function(e) {
		e.preventDefault();
	});
  
	$(window).on('scroll',function() {
		var scrolltop = $(this).scrollTop();

	if(scrolltop >= 85) {
      $('.cabecera-up, .unidad-up, .tema-up').fadeIn(350);
    }
    
	else if(scrolltop <= 80) {
		$('.cabecera-up, .unidad-up, .tema-up').fadeOut(350);
    }
  }); 
});
/* ---------------------- TITULOS OCULTOS - TERMINA ---------------------- */

