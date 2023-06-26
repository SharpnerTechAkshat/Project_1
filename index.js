var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// form submit event
form.addEventListener('submit',addItem);

// Delete event
itemList.addEventListener('click',removeItem);

// Filter event
filter.addEventListener('keyup',filterItems);

// add item
function addItem(e){
   e.preventDefault();

  // Get Input Value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add Class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create a Delete Button Element
  var deleteBtn = document.createElement('button');

  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

//Remove item
function removeItem(e){
   if(e.target.classList.contains('delete')){
     if(confirm('Are you Sure ?')){s
         var li = e.target.parentElement;
         itemList.removeChild(li);
     }
   } 
}

// filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    //got lis
    var items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item){
       var itemName = item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
       } else {
        item.style.display = 'none';
       }
    });
}
