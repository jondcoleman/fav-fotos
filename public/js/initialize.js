function ready(fn) {
  if (typeof fn !== 'function') {
    return;
  }

  if (document.readyState === 'complete') {
    return fn();
  }

  document.addEventListener('DOMContentLoaded', fn, false);
}

ready(function(){
  console.log('ready');
  $(".button-collapse").sideNav();
})
// ready(function () {
//   var elem = document.querySelector('.grid');
//   console.log(elem);
//   var msnry = new Masonry(elem, {
//     // options
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     percentPosition: true
//   });

//   // // element argument can be a selector string
//   // //   for an individual element
//   // var msnry = new Masonry( '.grid', {
//   //   // options
//   // });
// })

