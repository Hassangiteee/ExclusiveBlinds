
    $(document).ready(function()
    {
 //    const NextIcon = '<img src="/paerl/stylist-prev.png" alt:"prev" >';
    // const PrevIcon = '<img src="/paerl/stylist-next.png" alt:"right" >';
const NextIcon = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
    const PrevIcon = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
    
$('.banner_stie_carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    autoplay:false,
    responsiveClass:true,
    dots:true,
    navText: [
    NextIcon,
    PrevIcon
   
],

    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        600:{
            items:1
        },
        768:
        {
            items:1
        },
        800:
        {
            items:1
        },
        1000:{
            items:1
        },
        1500:
        {
            items:1
        }
    }
})

});