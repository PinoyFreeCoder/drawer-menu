(function(){

    var bodyEl = document.body;
    var content =  document.querySelector('.content-wrap');
    var openBtn = document.querySelector('#open-button');
    var closeBtn = document.querySelector('#close-button');
    var isOpen = false;

    function init()
    {
        initEvents();
    }

    function initEvents()
    {
        openBtn.addEventListener('click', toogleMenu);
        if(closeBtn){
            closeBtn.addEventListener('click', toogleMenu);
        }

        content.addEventListener('click', function(e){
            var target = e.target;
            if(isOpen && target !== openBtn){
                toogleMenu();
            }
        });
    }

    function toogleMenu(){

        if(isOpen){
            bodyEl.classList.remove('show-menu');
        }else{
            bodyEl.classList.add('show-menu');
        }

        isOpen = !isOpen;


    }

    init();
 

})()