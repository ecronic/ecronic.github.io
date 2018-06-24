window.onload = function(){
    (function () {
        var winHeight = 0;
        if (window.innerHeight){
            winHeight = window.innerHeight;
        }
        else if (document.body && document.body.clientHeight){
            winHeight = document.body.clientHeight;
        }
        else if(document.documentElement && document.documentElement.clientHeight){
            winHeight = document.documentElement.clientHeight;
        }
        var contentHeight = winHeight - 60;
        document.getElementById("content").setAttribute('style', 'min-height: '+contentHeight+'px !important');
    } ());
    const menu = document.querySelector('.menu')

    this.console.log(menu)
    menu.addEventListener('click', toogleList)

    function toogleList(){

        console.log("ddddd")
        const menuList = document.querySelector('.menu_list')

        menuList.classList.toggle('hide')
        menuList.classList.toggle('show')
    }

    const highloghtBlocks = document.querySelectorAll('figure.highlight')

    highloghtBlocks.length && highloghtBlocks.forEach( i => hljs.highlightBlock(i) )
}
