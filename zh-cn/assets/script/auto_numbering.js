$(document).ready(() => {
  var numbering_list = $('.auto-numbering-list');
  numbering_list.each((i, li) => {
    var numbering_elements = $(li).find('.auto-numbering')
    numbering_elements.each((num, el) =>{
      $(el).text(numbering_elements.length - num);
    })
  })
})