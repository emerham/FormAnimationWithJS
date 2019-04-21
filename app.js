function animatedForm(){
  const arrows = document.querySelectorAll('.fa-arrow-down');

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      console.log(input);
    });
  });
}

animatedForm();
