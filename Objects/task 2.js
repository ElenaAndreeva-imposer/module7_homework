const apartment_32 = {
    tenants: 1,
    cats: 2
}

function inhabitants(obj, objKey) {
    return (objKey in obj);
}

console.log(inhabitants(apartment_32, "cats"))
console.log(inhabitants(apartment_32, "children"))