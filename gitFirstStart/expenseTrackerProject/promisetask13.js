console.log('person1:shows Ticket');
console.log('person2:shows Ticket');

const preMovie = async () => {
    const promiseWifebringingTicks=new Promise((resolve,reject) => {
    setTimeout(()=> resolve('Ticket'),3000)
});

let getPopcorn = new Promise((resolve,reject)=>{
    resolve(`popcorn`)

});

let getButter= new Promise((resolve,reject)=>{
    resolve (`butter`);
});

let getCoke=new Promise((resolve,reject)=>{
    resolve("CokaCola")
})

let ticket= await promiseWifebringingTicks; 

    console.log(`Wife:I have the ${ticket} `);
    console.log('Husband:we should go in');
    
    console.log('wife:no iam hungry ');
    
    let popcorn=await getPopcorn;

    console.log(`Husband:I got some ${popcorn}`);
    console.log('Husband:we should go in');
    console.log('Wife:I need Butter on my pop corn');

let butter=await getButter;

    console.log(`Husband":i got some${butter} on popcorn`);
    
    console.log("Husband:Anything else Darling");
    console.log("wife:i need coke");

    let coke=await getCoke;


    console.log(`Husband":i already bought${coke}.Anything else u Want?`);
    console.log("No Darling!.Lets go its late");
    console.log("Husband:s,Lets go");

return ticket; 

}

preMovie().then((m)=>console.log(`person 3:shows ${m}`));    ///async is a default promise 

console.log('person4:shows Ticket');
console.log('person5:shows Ticket');
