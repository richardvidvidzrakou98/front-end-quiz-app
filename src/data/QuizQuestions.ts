const questionsData = {
  HTML: [
    {
      question: 'What does HTML stand for?',
      options: [
        'Hyper Trainer Marking Language',
        'Hyper Text Marketing Language',
        'Hyper Text Markup Language',
        'Hyper Text Markup Leveler',
      ],
      correctAnswer: 'Hyper Text Markup Language',
    },
    {
      question: 'Which tag is used to create a hyperlink in HTML?',
      options: ['<link>', '<a>', '<href>', '<hyperlink>'],
      correctAnswer: '<a>',
    },
    {
      question:
        'Which tag is used to define the most important heading in HTML?',
      options: ['<h6>', '<heading>', '<head>', '<h1>'],
      correctAnswer: '<h1>',
    },
    {
      question:
        'Which attribute is used to provide a unique identifier to an HTML element?',
      options: ['class', 'id', 'name', 'identity'],
      correctAnswer: 'id',
    },
    {
      question: 'What is the correct HTML element for inserting a line break?',
      options: ['<lb>', '<break>', '<br>', '<line>'],
      correctAnswer: '<br>',
    },
    {
      question: 'What does the <title> tag in HTML do?',
      options: [
        'Sets the page title in the browser tab',
        'Defines a section of content',
        'Creates a hyperlink',
        'Adds a tooltip to an element',
      ],
      correctAnswer: 'Sets the page title in the browser tab',
    },
    {
      question:
        'Which attribute is used to specify an alternate text for an image, if the image cannot be displayed?',
      options: ['src', 'alt', 'title', 'href'],
      correctAnswer: 'alt',
    },
    {
      question: 'Which element is used to create an ordered list in HTML?',
      options: ['<ul>', '<ol>', '<li>', '<list>'],
      correctAnswer: '<ol>',
    },
    {
      question: 'Which HTML attribute is used to define inline styles?',
      options: ['class', 'id', 'style', 'css'],
      correctAnswer: 'style',
    },
    {
      question: 'What does the <th> tag in HTML represent?',
      options: ['Table header', 'Table row', 'Table cell', 'Table foot'],
      correctAnswer: 'Table header',
    },
  ],
  CSS: [
    {
      question: 'What does CSS stand for?',
      options: [
        'Cascading Style Sheets',
        'Creative Style System',
        'Computer Style Sheets',
        'Colorful Style Sheets',
      ],
      correctAnswer: 'Cascading Style Sheets',
    },
    {
      question:
        'Which property is used to change the text color of an element?',
      options: ['font-color', 'text-color', 'color', 'font-style'],
      correctAnswer: 'color',
    },
    {
      question: 'How do you select an element with id "header" in CSS?',
      options: ['.header', '#header', 'header', '*header'],
      correctAnswer: '#header',
    },
    {
      question:
        'Which property is used to change the background color of an element?',
      options: ['background-color', 'color', 'bg-color', 'background-image'],
      correctAnswer: 'background-color',
    },
    {
      question: 'Which property is used to change the font size of an element?',
      options: ['text-size', 'font-size', 'text-style', 'font-style'],
      correctAnswer: 'font-size',
    },
    {
      question: 'How do you select all p elements inside a div element?',
      options: ['div p', 'div.p', 'div + p', 'div ~ p'],
      correctAnswer: 'div p',
    },
    {
      question: 'Which property is used to change the margin of an element?',
      options: ['padding', 'margin', 'border', 'spacing'],
      correctAnswer: 'margin',
    },
    {
      question: 'What is the default value of the position property?',
      options: ['relative', 'absolute', 'fixed', 'static'],
      correctAnswer: 'static',
    },
    {
      question: 'How do you make the text bold in CSS?',
      options: [
        'font-weight: bold;',
        'font-style: bold;',
        'text-decoration: bold;',
        'text-weight: bold;',
      ],
      correctAnswer: 'font-weight: bold;',
    },
    {
      question: 'Which property is used to change the width of an element?',
      options: ['height', 'width', 'size', 'length'],
      correctAnswer: 'width',
    },
  ],

  JavaScript: [
    {
      question: 'What is JavaScript primarily used for?',
      options: [
        'Styling web pages',
        'Structuring web content',
        'Creating interactive web elements',
        'Designing web layouts',
      ],
      correctAnswer: 'Creating interactive web elements',
    },
    {
      question: 'Which keyword is used to declare a variable in JavaScript?',
      options: ['var', 'let', 'const', 'All of the above'],
      correctAnswer: 'All of the above',
    },
    {
      question: 'What is the output of 2 + "2" in JavaScript?',
      options: ['4', '22', 'NaN', 'undefined'],
      correctAnswer: '22',
    },
    {
      question:
        'Which method is used to add an element at the end of an array in JavaScript?',
      options: ['push()', 'pop()', 'shift()', 'unshift()'],
      correctAnswer: 'push()',
    },
    {
      question: 'Which company developed JavaScript?',
      options: ['Microsoft', 'Netscape', 'Google', 'Apple'],
      correctAnswer: 'Netscape',
    },
    {
      question: 'Which symbol is used for comments in JavaScript?',
      options: ['//', '/* */', '<!-- -->', 'Both // and /* */'],
      correctAnswer: 'Both // and /* */',
    },
    {
      question: 'What does "DOM" stand for?',
      options: [
        'Document Object Model',
        'Data Object Model',
        'Document Order Model',
        'Data Order Model',
      ],
      correctAnswer: 'Document Object Model',
    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      options: [
        'msg("Hello World");',
        'alert("Hello World");',
        'msgBox("Hello World");',
        'alertBox("Hello World");',
      ],
      correctAnswer: 'alert("Hello World");',
    },
    {
      question:
        'What is the correct syntax for referring to an external script called "script.js"?',
      options: [
        '<script href="script.js">',
        '<script name="script.js">',
        '<script src="script.js">',
        '<script file="script.js">',
      ],
      correctAnswer: '<script src="script.js">',
    },
    {
      question: 'Which event occurs when the user clicks on an HTML element?',
      options: ['onchange', 'onclick', 'onmouseover', 'onmouseclick'],
      correctAnswer: 'onclick',
    },
  ],

  Accessibility: [
    {
      question: 'What is web accessibility?',
      options: [
        'Ensuring that a website is visually appealing',
        'Website can be accessed by everyone',
        'Ensuring that a website loads quickly',
        'Ensuring that a website is mobile-friendly',
      ],
      correctAnswer: 'Website can be accessed by everyone',
    },
    {
      question: 'Which attribute is used to provide a label for form elements?',
      options: ['id', 'name', 'label', 'aria-label'],
      correctAnswer: 'aria-label',
    },
    {
      question: 'What does WCAG stand for?',
      options: [
        'Web Content Accessibility Guidelines',
        'Web Content Authoring Guidelines',
        'Web Communication Accessibility Guidelines',
        'Web Content Accessibility Group',
      ],
      correctAnswer: 'Web Content Accessibility Guidelines',
    },
    {
      question:
        'Which HTML element is used to define important text that screen readers will emphasize?',
      options: ['<strong>', '<em>', '<important>', '<highlight>'],
      correctAnswer: '<strong>',
    },
    {
      question: 'Which attribute is used to describe the purpose of an image?',
      options: ['title', 'alt', 'src', 'role'],
      correctAnswer: 'alt',
    },
    {
      question: 'What is the purpose of the tabindex attribute?',
      options: [
        'To define the tab order of an element',
        'To define the text style of an element',
        'To define the content order of an element',
        'To define the role of an element',
      ],
      correctAnswer: 'To define the tab order of an element',
    },
    {
      question: 'Which ARIA role is used to define a button?',
      options: ['role="button"', 'role="link"', 'role="form"', 'role="input"'],
      correctAnswer: 'role="button"',
    },
    {
      question: 'What is the purpose of using semantic HTML elements?',
      options: [
        'To improve the visual design of a website',
        'To improve SEO and accessibility',
        'To reduce the loading time of a website',
        'To add animations to a website',
      ],
      correctAnswer: 'To improve SEO and accessibility',
    },
    {
      question: 'Which element should be used to create a navigational link?',
      options: ['<a>', '<link>', '<nav>', '<button>'],
      correctAnswer: '<a>',
    },
    {
      question:
        'Which property can be used to hide an element from screen readers but keep it visible on the screen?',
      options: [
        'display: none;',
        'visibility: hidden;',
        'aria-hidden="true"',
        'opacity: 0;',
      ],
      correctAnswer: 'aria-hidden="true"',
    },
  ],
};

export default questionsData;
