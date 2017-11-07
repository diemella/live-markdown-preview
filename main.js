// $(document).ready(function() {
//   $('textarea').on('keyup', transform);
// });

function transform() {
  var input = $('textarea').val();
  var transformInput = input;

  var bold = /[*]{2}.+[*]{2}/;
  var italicA = /[*].+[*]/;
  var italicB = /[_].+[_]/;
  var strikeThrough = /[~]{2}.+[~]{2}/;
  var unorderedListA = /\s{2}[*]/;
  var unorderedListB = /\s{2}[-]/;
  var unorderedListC = /\s{2}[+]/;
  var link = /(\[(.*?)\]\()(.+?)(\))/;
  var headingOne = /[#]{1}.+\s/;
  var headingTwo = /[#]{2}.+\s/;
  var headingThree = /[#]{3}.+\s/;
  var headingFour = /[#]{4}.+\s/;
  var headingFive = /[#]{5}.+\s/;
  var headingSix = /[#]{6}.+\s/;


  // if (input.match(bold)) {
  //   // transformInput = transformInput.replace(bold, "<span class='bold'>" + input.slice(2, -2) + "</span>");
  //   transformInput = "<span class='bold'>" + input.slice(2, -2) + "</span>"
  // } else if (input.match(italicA) || input.match(italicB)) {
  //     transformInput = "<span class='italic'>" + input.slice(1, -1) + "</span>"
  //     // transformInput = input.replace(input, "<span class='italic'>" + input.slice(1, -1) + "</span>" )
  // }

  var bolded = input.match(bold);

  if (bolded) {
    transformInput = transformInput.replace(bold, "<span class='bold'>" + bolded[0].slice(2, -2) + "</span>")
  }

  var italicizedA = input.match(italicA);

  if (italicizedA) {
    transformInput = transformInput.replace(italicA, "<span class='italic'>" + italicizedA[0].slice(1, -1) + "</span>")
  }

  var italicizedB = input.match(italicB);

  if (italicizedB) {
    transformInput = transformInput.replace(italicB, "<span class='italic'>" + italicizedB[0].slice(1, -1) + "</span>")
  }


  $('#preview').html(transformInput);
}
