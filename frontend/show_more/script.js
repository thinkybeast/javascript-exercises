var languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },

  {
    name: 'Objective-C',
    description: "Objective-C is annoying, don't use it."
  }
];

function previewDescription(description) {
  return description.substr(0, 120) + "...";
}

function getDescription(name) {
  return languages.filter(function(language) {
    return language.name === name;
  })[0].description;
}

var langTemplate = Handlebars.compile($('#language').html());

languages.forEach(function(language) {
  var preview;
  if (language.description.length > 120) {
    preview = previewDescription(language.description);
  }
  $('main').append(langTemplate({
    name: language.name,
    description: preview || language.description,
   }));

  if(preview) {
    $('main').append($("<a href='#'>Show more</a>"));
  }
});


$('a').on('click', function(e){
  e.preventDefault();
  var $p = $(e.target).prev('p');
  var name = $p.attr('data-id');
  var description = getDescription(name);

  if ($p.hasClass('full')) {
    $p.text(previewDescription(description));
    $p.removeClass('full');
  } else {
    $p.text(description);
    $p.addClass('full');
  }
});