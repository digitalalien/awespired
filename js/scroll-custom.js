/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    //if they scroll past the first page we show the side navigation
    $(window).scroll(function(){
        //console.log($(window).scrollTop());
        if($(window).scrollTop() > $(window).height()){
            $('.sidenav').show();
        }else{
            $('.sidenav').hide();
        }
    });
});