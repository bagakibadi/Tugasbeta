function namaDepan (){
    return 'Bagus';
}

function namaBelakang(cb){
    setTimeout(() =>{
        cb('solayman')
    }, 3000);
}

function returnAll(){
    namaBelakang((callbck)=>{
        let a = namaDepan();
        let b = callbck;
        console.log(a,b);
    })
}
returnAll();