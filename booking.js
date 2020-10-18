const makeRes=document.querySelector("#makeRes");



getData()

function getData(){
    
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
        
        
        temp+=`</tr>`
        })
        

        document.getElementById('tbody').innerHTML=temp
        
        

    }
})
}


    const name = document.querySelector("#name")
    const surname = document.querySelector("#surname")
    const email = document.querySelector("#email")
    const jmbg = document.querySelector("#jmbg")
    const note = document.querySelector("#note")
    const sendBtn = document.querySelector("#send")
    const viewRes = document.querySelector("#viewRes")
    const content  = document.querySelector(".content")
    const tableRes = document.querySelector('.tableRes')
    const goBackBtn= document.querySelector("#goBackBtn")
    const destination = document.querySelector('#destination')
    const priceRes = document.querySelector('#priceRes')
    const nameRes = document.querySelector('#nameRes')
   
    
    
    
        
        
   
    


    goBackBtn.addEventListener('click',()=>{
        content.style.display='block'
        tableRes.style.display='none'
    })

    sendBtn.addEventListener("click",()=>{
        const data = {'name':name.value,'surname':surname.value,'destination':destination.value,'email':email.value,'jmbg':jmbg.value,'note':note.value}
        fetch('http://localhost:3000/reservations',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }).then(res=>res.json())
      .then(data=>console.log('success',data))
    })
    
    viewRes.addEventListener('click',()=>{
        content.style.display='none'
        tableRes.style.display='block'
        fetch('http://localhost:3000/reservations')
        .then(res=>res.json())
        .then(data=>{
        if(data.length>0){
        $(document).ready( function () {
            $('table1').DataTable();
        } );
        let temp=''   
        
        data.forEach((item,index)=>{
        temp+='<tr>'
        temp+='<td>'+item.name+'</td>'
        temp+='<td>'+item.surname+'</td>'
        temp+='<td>'+item.destination+'</td>'
        temp+='<td>'+item.email+'</td>'
        temp+='<td>'+item.note+'</td>'
        temp+=`<td><button class='btn btn-secondary' data-toggle='modal' data-target='#modal-${index}' >Change Reservation</button></td>`
        temp+=`<td><button class='btn btn-primary' data-toggle='modal' data-target='#modalRes'  >Delete Reservation</button></td>`
        
        temp+=`</tr>`
        })
        

        document.getElementById('tbody1').innerHTML=temp
        
        

    }
})


    })







