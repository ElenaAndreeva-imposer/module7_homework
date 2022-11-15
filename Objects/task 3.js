function noProtoFunc () {
    return Object.create(null);
}

const obj = noProtoFunc();
console.log(obj);
console.log(Object.getPrototypeOf(obj));