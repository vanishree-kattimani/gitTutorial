var form = document.getElementById('addForm');
var itemList=document.getElementById('items');
var itemList1=document.getElementById('description');
var filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click',removeItem);
//Edit Event
//itemList1.addEventListener();

//Filter Event
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;
    //Get input value
    var newItem1 = document.getElementById('description').value;
    //Create new li element
    var li=document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem1));

    //create del button element 
    var deleteBtn = document.createElement('button');
    //Add clsses to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete' ;
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);
    //append li to list
    itemList.appendChild(li);

    //create edit button element 
    var editBtn = document.createElement('button');
    //Add clsses to edit button
    editBtn.className='btn btn-sm float-right edit' ;
    //append text node
    editBtn.appendChild(document.createTextNode('edit'));
    //append button to li
    li.appendChild(editBtn);
    //append li to list
    itemList.appendChild(li);
    
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
  //edit item function
  //function removeItem(){
  //}

  // Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    var description = itemList1.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var description= item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 ||description.toLowerCase().indexOf(text) != -1 ){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }