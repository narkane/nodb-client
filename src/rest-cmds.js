import axios from "axios";

//tell server who to attack with
const attack = (catID, catSetter) => {
  axios.get(`/api/cats/attack/${catID}`).then(response => {
    // if (response.data == false) {
    //   deleteCat(catID, catSetter);
    // }
  });
};

//tell server who to attack with
const defend = (catID, catSetter) => {
  axios.get(`/api/cats/defend/${catID}`).then(response => {
    if (response.data == false) {
      deleteCat(catID, catSetter);
    } else {
      alert("YOU WON! DOGE DIED!");
    }
  });
};

//GET TURN
const getTurn = (turnSet, beingAtkd, BA) => {
  axios.get(`/api/cats/turn`).then(response => {
    // console.log(typeof response.data);
    turnSet(response.data.turn);
    //console.log("Cat-turn: " + response.data.turn);

    if (response.data.dog != null && BA != true) {
      console.log(response.data.dog.atk + ", " + response.data.dog.def);
      beingAtkd(response.data.dog.atk, response.data.dog.def);
    }
  });
};

//GET
const getCat = catSetter => {
  axios.get(`/api/cats/1`).then(response => {
    // console.log(typeof response.data);
    catSetter(response.data);
    console.log("componentDidMount() GET: " + response.data[0]);
  });
};
//GET
const newHand = (amount, catSetter) => {
  axios.get(`/api/cats/${amount}`).then(response => {
    // console.log(typeof response.data);
    catSetter(response.data);
    //  console.log("componentDidMount() GET: " + response.data[0]);

    // return response.data;
    // console.log(ret);
  });
  // .then(data => response.json({ data }));
};
//DELETE
const deleteCat = (catID, catSetter) => {
  console.log(catID);
  catSetter([]);
  axios.delete(`/api/cats/${catID}`).then(response => {
    catSetter(response.data);
    // console.log("DELETE: " + this.state.cats);
    // console.log("state: " + this.state.cats[catLocalID].url);
  });
};
//PUT
const putCat = (catID, catSetter) => {
  catSetter([]);
  axios.put(`/api/cats/${catID}`).then(response => {
    catSetter(response.data);
    // console.log("put: " + this.state.cats);
    // console.log("state: " + this.state.cats[catLocalID].url);
  });
  // this.showDeck();
};
//POST
const postCat = (newCatURL, newCatID, catSetter) => {
  let cat = {
    url: newCatURL,
    id: newCatID,
    atk: "#",
    def: "#"
  };
  axios.post(`/api/cats`, cat).then(response => {
    // console.log(typeof response.data);
    catSetter(response.data);
    console.log("componentDidMount() GET: " + response.data[0]);
  });
};

export default {
  getTurn,
  attack,
  defend,

  newHand,
  getCat,
  putCat,
  postCat,
  deleteCat
};
// module.exports = {
//   newHand,
//   getCat,
//   putCat,
//   postCat,
//   deleteCat
// };
