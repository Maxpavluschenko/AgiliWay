document.querySelector(".video-overlay").onclick = function() {
	this.style.display = "none";
}

type="text/javascript">
 $(document).ready(function(){
    $("#navbarNav").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });
});

$('[data-fancybox="images"]').fancybox({
    
});