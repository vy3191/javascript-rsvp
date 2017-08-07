const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');
const main = document.querySelector('.main');
var rsvp = {
    addInput: function() {
              form.addEventListener('submit', (e) => {
              e.preventDefault();
              const text = input.value;
              input.value = '';
              if(text) {
              print.view(text);
              }
          });
    },
    addToggleBox: function() {
             const div = document.createElement('div') ;
             const label = document.createElement('label');
             label.textContent = "Hide those who did not confirm!!!";
             const checkbox = document.createElement('input');
             checkbox.type = 'checkbox';
             checkbox.classList.add('toggleList');

             div.appendChild(label);
             div.appendChild(checkbox);
             main.insertBefore(div,ul);
    }
};
rsvp.addInput();
rsvp.addToggleBox();
var handle = {
    createElement: function(text) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = text;
      li.appendChild(span);
      const label = document.createElement('label');
      label.textContent = 'Confirmed';
     const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      label.appendChild(checkbox);
      li.appendChild(label);
      const editButton = document.createElement('button');
      editButton.textContent = "Edit";
      li.appendChild(editButton);
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.addClass = 'delete';
      li.appendChild(deleteButton);
      return li;
    },
    deleteElement: function() {
          ul.addEventListener('click', (e)=> {
               const li = e.target.parentNode;
               const ul = li.parentNode;
               if(e.target.tagName === 'BUTTON') {
                  if(e.target.textContent === 'Delete') {
                      ul.removeChild(li);
                  }
               }
          });
   },
   edit:function() {
     ul.addEventListener('click', (e)=> {
           const button = e.target
           const li = button.parentNode;
           const ul = li.parentNode;
           if(button.tagName === 'BUTTON') {
              if(button.textContent === 'Edit') {
                  const span = li.firstElementChild;
                  const input = document.createElement('input');
                  input.type = 'text';
                  input.value = span.textContent;
                  li.insertBefore(input,span);
                  li.removeChild(span);
                  button.textContent = 'Save'

              } else if(button.textContent === 'Save') {
                  const input = li.firstElementChild;
                  const span = document.createElement('span');
                  span.textContent =  input.value;
                  li.insertBefore(span,input);
                  li.removeChild(input);
                  button.textContent = 'Edit';
              }
          }
      });
   },
   toggleElement: function() {
      ul.addEventListener('change',(e) => {
           var checkbox = e.target;
           var li =checkbox.parentNode.parentNode;
           var checked = checkbox.checked;
            if(checked){
                li.className = 'responded';
            } else {
                li.className = ' ';
            }


      });
   },
   toggleAllElements: function() {
          const toggleAll = document.querySelector('.toggleList');
          toggleAll.addEventListener('change', (e) => {
           var toggleBox = e.target;
           var checked = toggleBox.checked;
           var list = ul.children;
           console.log(list);
           if(checked) {
                 for(var i=0; i< list.length; i++) {
                      var li = list[i];
                      if(li.className === 'responded' ){
                           li.style.display = '';
                      } else {
                           li.style.display = 'none';
                      }
                }
           } else {
                for(var i=0; i<list.length; i++) {
                    var li = list[i];
                    li.style.display = '';
                }
           }
        });
      }
   };
handle.deleteElement();
handle.edit();
handle.toggleElement();
handle.toggleAllElements();


var print = {
    view: function(inputValue) {
          const li = handle.createElement(inputValue);
          ul.appendChild(li);
    }
};