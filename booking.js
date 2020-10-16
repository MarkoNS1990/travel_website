

fetch('http://localhost:3000/destinations')
.then(res=>res.json())
.then(data=>{
    if(data.length>0){
        $(document).ready( function () {
            $('table').DataTable();
        } );
        let temp=''   
        
        data.forEach((item,index)=>{
        temp+='<tr>'
        temp+='<td>'+item.dest+'</td>'
        temp+='<td>'+item.date+'</td>'
        temp+='<td>'+item.duration+'</td>'
        temp+='<td>'+item.price+'</td>'
        temp+=`<td><button class='btn btn-secondary' data-toggle='modal' data-target='#modal-${index}' >View Details</button></td>`
        temp+='<td><button class="btn btn-primary">Make Reservation</button></td></tr>'
        })

        document.getElementById('tbody').innerHTML=temp
        
        

    }
})




