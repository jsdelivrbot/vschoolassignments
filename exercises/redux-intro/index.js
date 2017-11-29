
// const redux = require("redux");
//
// //we created our reducer, below.
// function reducer(prevState = 0, action){
//     switch(action.type){
//         case "INCREMENT":
//             return prevState + 1;
//         case "DECREMENT":
//             return prevState - 1;
//         case "INCREASE_BY":
//             return prevState + action.amount;
//         case "DECREASE_BY":
//             return prevState - action.amount;
//         default:
//             return prevState;
//     }
// }
//
// const store = redux.createStore(reducer);
//
// //just using store.subscribe to see what's going in console
// store.subscribe(function(){
//       const currState = store.getState();
//       console.log(currState);
// });
//
// //these are our action creators, they return action objects.
// function increment(){
//       return {
//           type: "INCREMENT"
//       }
// }
// function decrement(){
//       return {
//           type: "DECREMENT"
//       }
// }
// function increaseBy(amount){
//       return {
//           type: "INCREASE_BY",
//           amount
//       }
//
// }
// function decreaseBy(amount){
//       return {
//           type: "DECREASE_BY",
//           amount
//       }
//
// }
//
// // store.dispatch({type: "INCREMENT"})
// // easier way to do the above, below:
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
//
// store.dispatch(decrement());
//
// store.dispatch(increaseBy(5));
// store.dispatch(decreaseBy(5));


const redux = require("redux");

function reducer(prevState = [], action){
      switch(action.type){

      }
}

const store = redux.createStore(reducer);

store.subscribe(function(){
        console.log(store.getState());

let johnny =
        {
          name: "Johnny Guitar",
          email: "jg@guitardood.com",
          phone: "310-555-1212",
          city: "Ogden"
        };

let bill =
        {
          name: "Bill Brasky",
          email: "bbrask@snl.edu",
          phone: "212-123-4567",
          city: "New York"
        };

let lloyd =
        {
          name: "Lloyd Christmas",
          email: "lchristmas@irdumb.com",
          phone: "212-444-4111",
          city: "Aspin"
        };

let contacts = [johnny, bill, lloyd];


function addContact(name, email, phone, city){
    // push.contacts(){
    //   name: name,
    //   email: email,
    //   phone: phone,
    //   city: city
    // }
    return {
        type: "ADD_CONTACT",


    }


}

store.dispatch(addContact());
