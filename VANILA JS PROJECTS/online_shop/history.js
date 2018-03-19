
function TOCnavigation(clicked,scrolledTo) {
  document.querySelector(clicked)
  .addEventListener('click',() => {
    $("html, body").animate({
      scrollTop: $(scrolledTo).offset().top - 20
    }, 1000);
  })
}

TOCnavigation("#toc_bh","#breif_history");
TOCnavigation("#toc_mov","#movement");
TOCnavigation("#toc_mech","#mechanical");
TOCnavigation("#toc_elec","#electronic");
TOCnavigation("#toc_dis","#display");
TOCnavigation("#toc_anl","#analog");
TOCnavigation("#toc_dig","#diginal");
