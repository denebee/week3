document.getElementById("btnSave").onclick=function(){
    //alert("ok");
    lastName = document.getElementById("ln").value;
    firstName = document.getElementById("fn").value;
    phoneNumber = document.getElementById("pn").value;

    //alert(lastName+firstName+phoneNumber);
    table=document.getElementById("mytable");
    tr=document.createElement("tr");

    td1=document.createElement("td");
    td2=document.createElement("td");
    td3=document.createElement("td");

    var div = document.createElement('div');
    div.innerHTML = document.getElementById('pre_set').innerHTML;

    td1.innerText=lastName;
    td2.innerText=firstName;
    td3.innerText=phoneNumber;


    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(div);
   
   /* tr.innerHTML="<td>"+lastName+"</td>";
    tr.innerHTML="<td>"+firstName+"</td>";
    tr.innerHTML="<td>"+phoneNumber+"</td>";
    */
    table.appendChild(tr);


}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("mytable").deleteRow(i);
}
