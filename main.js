// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

let formHTML = document.getElementById('fields');

for (let i = 0; i < formData.length; i++) {
  if (formData[i].type === 'textarea'){
    let newInput = document.createElement('textarea');
    newInput.placeholder = formData[i].label;
    formHTML.appendChild(newInput);
  }
  else if (formData[i].type ==='select'){
    let newInput = document.createElement('select')
    let defaultSelect = document.createElement('option')
    let defaultSelectText = document.createTextNode('Select an Option')
    defaultSelect.appendChild(defaultSelectText);
    newInput.appendChild(defaultSelect);
    for (var a = 0; a < formData[i].options.length; a++) {
      let newOption = document.createElement('option');
      let newOptionText = document.createTextNode(formData[i].options[a].label);
      newOption.appendChild(newOptionText);
      newInput.appendChild(newOption);
    }
    formHTML.appendChild(newInput);
  }
  else {
  let newInput = document.createElement('input');
  newInput.setAttribute('type', formData[i].type);
  newInput.setAttribute('placeholder', formData[i].label);
  newInput.setAttribute('id', formData[i].id);
  newInput.setAttribute('icon', formData[i].icon);
  newInput.setAttribute('options', formData[i].options);
  formHTML.appendChild(newInput);
}
}

// for (var i = 0; i < formData.length; i++) {
//   let select = document.createElement('select')
//   formHTML.appendChild(select)
//   select.setAttribute('options', formData[i].dropdown)
