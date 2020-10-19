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
        temp+='<td>'+item.duration+' days</td>'
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
    const destPrice = document.querySelector('#destPrice')
    const makeRes = document.querySelector('#makeRes')
    const totalPrice = document.querySelector('#priceTotal')
    const changeRes = document.querySelector('#changeRes')
    const deleteRes = document.querySelector('#deleteRes')
    const selectUsers = document.querySelector('#selectUsers')
    const deleteUser = document.querySelector('#deleteUser')
    
    destination.addEventListener('change',()=>{
    if(destination.value==='Venice'){
        destPrice.innerHTML='750 E'
    }else if(destination.value==='London'){
        destPrice.innerHTML='950 E'
    }else if(destination.value==='New York'){
        destPrice.innerHTML='1750 E'
    }else if(destination.value==='Thailand'){
        destPrice.innerHTML='1550 E'
    }else if(destination.value==='Paris'){
        destPrice.innerHTML='750 E'
    }else if(destination.value==='Rome'){
        destPrice.innerHTML='800 E'
    }

    })
    
    goBackBtn.addEventListener('click',()=>{
        content.style.display='block'
        tableRes.style.display='none'
    })

    sendBtn.addEventListener("click",()=>{
        
        const data = {'name':name.value,'surname':surname.value,'destination':destination.value,'price':destPrice.innerText,'email':email.value,'jmbg':jmbg.value,'note':note.value}
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
        temp+=`<tr id=res${item.id}'>`
        temp+='<td >'+item.name+'</td>'
        temp+='<td>'+item.surname+'</td>'
        temp+='<td>'+item.destination+'</td>'
        temp+='<td>'+item.price+'</td>'
        temp+='<td>'+item.email+'</td>'
        temp+='<td>'+item.note+'</td>'
        temp+=`<td><button class="btn btn-danger" onclick="delRes(${item.id})">Delete </button></td>`
        temp+=`<td><button class='btn btn-secondary' data-toggle='modal' data-target='#modalEdit' onclick=getRes(${item.id}) >Change </button></td>`
        
        temp+=`</tr>`
        })
        document.getElementById('tbody1').innerHTML=temp
        
        //set total price
        const arr=[]
        data.forEach(item=>arr.push(item.price))
       const newArr = arr.map(item=>parseInt(item.slice(0,item.length-2)))
       
       totalPrice.innerHTML = `Total price: ${newArr.reduce((a,b)=>a+b)} E`
        
    }
})


    })

    

    
    
   
//Delete reservation
const delRes = async(id)=>{
                const res = await fetch(`http://localhost:3000/reservations/${id}`,{method:'DELETE'})
                const data = await res.json()
                confirm('Are you sure you want to delete this reservation?')

                
   } 

   

   

    const name1 = document.querySelector('#name1')
    const surname1 = document.querySelector('#surname1')
    const destination1 = document.querySelector('#destination1')
    const destPrice1 = document.querySelector('#destPrice1')
    const email1 = document.querySelector('#email1')
    const jmbg1 = document.querySelector('#jmbg1')
    const note1 = document.querySelector('#note1')
    const editBtn = document.querySelector('#editBtn')
    
    destination1.addEventListener('change',()=>{
        if(destination1.value==='Venice'){
            destPrice1.innerHTML='750 E'
        }else if(destination1.value==='London'){
            destPrice1.innerHTML='950 E'
        }else if(destination1.value==='New York'){
            destPrice1.innerHTML='1750 E'
        }else if(destination1.value==='Thailand'){
            destPrice1.innerHTML='1550 E'
        }else if(destination1.value==='Paris'){
            destPrice1.innerHTML='750 E'
        }else if(destination1.value==='Rome'){
            destPrice1.innerHTML='800 E'
        }
    
        })


    //Get single reservation from db
    const getRes = async(id)=>{
        const res = await fetch(`http://localhost:3000/reservations/${id}`)
        const data = await res.json()

        name1.value=data.name
        surname1.value=data.surname
        destination1.value=data.destination
        email1.value=data.email
        jmbg1.value=data.jmbg
        note1.value=data.note
        
        
        editBtn.addEventListener("click",async()=>{
            const res2 = await fetch(`http://localhost:3000/reservations/${id}`,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({'name':name1.value,'surname':surname1.value,'destination':destination1.value,'email':email1.value,'jmbg':jmbg1.value,'note':note1.value,'price':destPrice1.innerText})
            })
            const data2 = await res2.json()
        })
        
        

    }

    
