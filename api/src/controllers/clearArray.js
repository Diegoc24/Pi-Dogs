
const clearArray = (arr) =>{
    let obj = [];
    arr.map((val) =>{
        return obj = [...obj ,{
            id: val.id,
            name: val.name,
            image: val.image,
            weight: val.weight,
            height: val.height,
            life_span: val.life_span

        },]
    })
    return obj;
}
module.exports = clearArray; 