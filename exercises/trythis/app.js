<input type='text' id='p1' class='items' value='10' />
<input type='text' id='p2' class='items' value='10' />
<input type='text' id='p3' class='items' value='10' />
<input type='text' id='p4' class='items' value='10' />
<input type='text' id='tot' value='' />​

function getItems()
{
 var items = new Array();
 var itemCount = document.getElementsByClassName("items");
 var total = 0;
 var id= '';
 for(var i = 0; i < itemCount.length; i++)
 {
   id = "p"+(i+1);
   total = total +  parseInt(document.getElementById(id).value);
 }
document.getElementById('tot').value = total;
return total;
}
getItems();
