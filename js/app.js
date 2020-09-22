$(document).ready(function(){
    $("#ripple").ripples({
      resolution:512,
      dropRadius:10
    });

    const bars=document.querySelectorAll('.progress-bar')

    bars.forEach(function(bar){
       let percentage=bar.dataset.percent;
       let tooltip=bar.children[0];
       tooltip.innerText=percentage +'%';
       bar.style.width=percentage + '%';

    })

    var $wrapper=$('.portfolio-wrapper');

    $wrapper.isotope({
      filter:'*',
      layoutMode :'masonry',
      animationOptions:{
        duration:750,
        easing:'linear'
      }

    });

    let links=document.querySelectorAll('.tabs a');

    links.forEach(link => {
      let selector=link.dataset.filter;
    link.addEventListener('click', function(e){
    e.preventDefault();

    $wrapper.isotope({
      filter:selector,
      layoutMode :'masonry',
      animationOptions:{
        duration:750,
        easing:'linear'
      }

    });
      

      

      links.forEach(link=> {

        link.classList.remove('active');
      })
    
      e.target.classList.add('active');
    });

   

    });

    $('.magnify').magnificPopup({
     type:'image',
     gallery:{
       enabled:true
     },
     zoom:{
       enable:true 
     }
    });


});

//print//

$( document ).ready(function() {
  $('#Print').click(function()
   {
       window.print();
   });
});

//contact form//

$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbzpHB099VqyGJfHbQhL02wmvSldX8X0AcfYGaGv/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})
