const addId = <T>(obj: T) => {        //warning as type of obj isn't defined to it's taken any
                //added <T> to make this function generic datatype
                //but what if we want only generic object to be passed in
    const id = Math.random().toString(16);
    return{
        ...obj,
        id,
    }
};

interface PersonInterface<T>{
    name: string; 
    data:T
}


const userJack: PersonInterface<{meta: string}> = {
    name:'jack',
    data:{
        meta: 'jill',
    }
};


const userN: PersonInterface<string[]> = {
    name:'jack',
    data:['foo','bar'],
}

const result = addId<PersonInterface>(userJack);
console.log(result); 

const addK = <T extends object>(obj: T)=>{
    const k: string = 'coccon';
    return {
        ...obj,
        k
    };



};

const newresult = addK<PersonInterface>(userJack);// only objects will be allowed in addK
console.log(newresult);
//we must provide genetic type if there is no default 
//more than one data types can be sent into the function
interface FormInterface<T, V>{
    data: T;
    meta: V;
}