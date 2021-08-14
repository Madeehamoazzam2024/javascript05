var student ={
    name:'MADEEHA MOAZZAM',
    age:'19',
    mobile:9008702801,
    address:{
        city:'Ramanagara',
        state:'Karnataka',
        pin:562159
    }
}

console.log(student.name)
console.log(student['mobile'])

console.log(student.address.city)
console.log(student['address']['pin'])


var vedio={
    name:'access101 js tutorials',
    play:function(){
        console.log('vedio played')
    },
    timer:[0,40,80]
}

console.log(vedio.name)
console.log(vedio.play())
console.log(video.timer)