/*#
 ### Name: duXorFullScreen
 ### Autor: Dusan Perisic
 ### Home: dusanperisic.com
 ###
 ### Napomena: 	Klasa je pisana kao podrška kontrole fullscreen opcije
 ###            za različite tipove browser-a. A koristi se za upit 
 ###            korisnika i prelaz u fullscreen mod.
 ### ------------------------------------------------------------------
 ### Uputstvo:
 ###            Sve što je potrebno uraditi je dodati: window.onload = function(){ duXorFullScreen.showModal(); }
 ###            u sastav JavaScript koda. Podaci koji mogu da mijenjaju su promjenjive:
 ###                title               - naslov modal prozora sa pitanjem korisnika za izbor punog ekrana (u nastavku modal)
 ###                content             - sadržaj modala, objašnjenje korisniku
 ###                fullScreenBtnTtl    - naslov dugmeta za puni ekran
 ###                noFullScreenBtnTtl  - naslov dugmeta za nastavak bez moda punog ekrana
 ### ------------------------------------------------------------------
#*/ 
var duXorFullScreen ={
    title:'Najbolji ugođaj',
    content:'<p>Za najbolji ugođaj omogućen je pregled web sajta u režimu punog ekrana. Za izlaz iz istog pritisnite dugme <button class="btn btn-lg btn-default">Esc</button> na Vašoj tastaturi.</p><hr><p>Omogućena je i kontrola scroll funkcionalnosti strelicama na Vašoj tastaturi.</p><div class="keybkey" style="float:left"><style>@media (max-width:370px){.keybkey{margin:0 0 30px 5%}}@media (min-width:370px){.keybkey{margin:0 0 30px 35%}}</style><button class="btn btn-lg btn-default" style="margin-left:55px"><i class="glyphicon glyphicon-arrow-up key"></i></button><br clear="all"><button class="btn btn-lg btn-default"><i class="glyphicon glyphicon-arrow-left key"></i></button><button class="btn btn-lg btn-default"><i class="glyphicon glyphicon-arrow-down key"></i></button><button class="btn btn-lg btn-default"><i class="glyphicon glyphicon-arrow-right key"></i></button></div><br clear="all"><hr><style>.key{color:#333}</style>',
    fullScreenBtnTtl:'Režim punog ekrana',
    noFullScreenBtnTtl:'Nastavak u browser modu',
    showModal:function(){
        $('body').append('<div id="fullScreenModal" class="modal fade" style="background-color:rgba(0,0,0,0.8)"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button class="close" data-dismiss="modal">&times;</button><h2>'+this.title+'</h2></div><div class="modal-body">'+this.content+'<p><button class="btn btn-lg btn-primary" onclick="duXorFullScreen.toggle()"><i class="glyphicon glyphicon-fullscreen"></i> '+this.fullScreenBtnTtl+'</button><button class="btn btn-lg btn-default" data-dismiss="modal">'+this.noFullScreenBtnTtl+'</button></p></div></div></div></div>');
        $('#fullScreenModal').modal('show');
    },
    toggle:function(){
        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) 
            if (document.documentElement.requestFullScreen)  
                document.documentElement.requestFullScreen();  
            else    if (document.documentElement.mozRequestFullScreen) 
                        document.documentElement.mozRequestFullScreen();  
                    else    if (document.documentElement.webkitRequestFullScreen) 
                                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
                             else   if (document.cancelFullScreen)  
                                        document.cancelFullScreen();  
                                    else    if (document.mozCancelFullScreen)   
                                                document.mozCancelFullScreen();  
                                            else    if (document.webkitCancelFullScreen)  
                                                    document.webkitCancelFullScreen();  
        $('#fullScreenModal').modal('hide');
    }
  
}