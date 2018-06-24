window.onload = function(){
    const menu = document.querySelector('.menu')
    menu.addEventListener('click', toogleList)

    function toogleList(){
        const menuList = document.querySelector('.menu_list')
        menuList.classList.toggle('hide')
        menuList.classList.toggle('show')
        const body_content = document.querySelector('.content')
        body_content.classList.toggle('content-global')
    }

    const highloghtBlocks = document.querySelectorAll('figure.highlight')
    highloghtBlocks.length && highloghtBlocks.forEach( i => hljs.highlightBlock(i) )
}
