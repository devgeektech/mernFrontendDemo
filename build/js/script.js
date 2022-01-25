(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");  
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();   
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo'); 
    e.preventDefault();
  });
  
   

})(jQuery); // End of use strict


	$(document).ready(function() {
      $(window).resize(function(){  
        var windowWidth = $(window).width(); 
        if(windowWidth < 767)$("#accordionSidebar").addClass("toggled");
        if(windowWidth > 767)$("#accordionSidebar").removeClass("toggled");
      });
    });
	
	function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#file_upload')
                        .attr('src', e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
            }
    }
	
	/**add user card - attachment**/
	
	function getFile() {
	  document.getElementById("upload_front_card").click();
	}

	function sub(obj) {
	  var file = obj.value;
	  var fileName = file.split("\\");
	  document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
	  document.myForm.submit();
	  event.preventDefault();
	}
	
	function getFile2() {
	  document.getElementById("upload_back_card").click();
	}

	function sub2(obj) {
	  var file = obj.value;
	  var fileName = file.split("\\");
	  document.getElementById("yourBtn2").innerHTML = fileName[fileName.length - 1];
	  document.myForm.submit();
	  event.preventDefault();
	}
	
	function getFile3() {
	  document.getElementById("statement_attainment").click();
	}

	function sub3(obj) {
	  var file = obj.value;
	  var fileName = file.split("\\");
	  document.getElementById("yourBtn3").innerHTML = fileName[fileName.length - 1];
	  document.myForm.submit();
	  event.preventDefault();
	}
	
	
	//drap & drop Attachment
	
	$(document).ready(function(){
	  $('.addCardPopup .uploadCloud input').change(function () {
		$('.addCardPopup .uploadCloud p span').text(this.files.length + " file(s) selected");
	  });
	});
	
	
