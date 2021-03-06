import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';
import { string } from 'prop-types';
import { Z_HUFFMAN_ONLY } from 'zlib';
import Potato from "./Potato";
import stateTest from "./state";
import movie from "./movie";

class Block{
  public index:number;
  public hash:string;
  public prevHash:string;
  constructor(index: number, hash: string, prevHash: string ){
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
  }
  public static calBlockHash = (index: number) :string => {
    return `ha${index}sh`;
  };
}
class Man{
  public name: string;
  public age : number;
  public gender: string;
  constructor(name: string, age: number, gender: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
interface Human{
  name: string;
  age: number;
  gender: string;
}
const person2 = {
  name: "nicolas",
  age: 22,
  gender: "male"
};
const test : string = "hi";
let test2 : string = "hi";
test2 ="hihihi----------";
//test = "hihi"; //const can't be reassigned again;

const genesisBlock: Block = new Block(0, "dsifjslf", "");
let blockChain: Block[] = [genesisBlock];
const secondBlock: Block = new Block(1, "dsifjslf2", "dsifjslf");
blockChain.push(secondBlock);
const sejong = new Man('sejong', 22, 'male');
const sayHi = (person: Human): string => {
  return `Name is ${person.name}, Age is ${person.age}, Gender is ${person.gender} `;
};

type Food =  {
    name: string;
    name2: string;
};
interface Food2   {
  name: string;
  name2: string;
};
const Potato2: React.FC<Food> = ({ name, name2 }) => {
  return <h2>i love {name} and {name2},  too!</h2>
}
function TellFavFood({ name }:Food){
  return <h3>My fav food is {name}.</h3>
}

type GreetingsProps = {
  name: string;
  mark?: string;
};

function Greetings({ name, mark }: GreetingsProps) {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
}


const getBlockChain = () :Block[] => blockChain;
const getNewTimeStamp = (): number => Math.round(new Date().getTime() /1000);

const friends =['kim', 'se', 'jong'];
friends.map(function(friend){
  console.log("love!"+ friend);
})
function renderFriend(friend:string){
  return <TellFavFood name={friend} name2 = "not defined"/>
}

const Home: React.FC = () => {
  console.log(sayHi(sejong));
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.22 {sayHi(sejong)} {person2.name} {blockChain[1].hash} {getNewTimeStamp()}
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide. {Block.calBlockHash(1)} <Potato/> <Potato2 name="kimchi" name2="meat"/>
          {friends.map(friend => (<TellFavFood name={friend} name2 = "test"/>))}
          {friends.map(renderFriend)}
          <Greetings name = "kimsejong"/>
        </p>
      </IonContent>
    </IonPage>
  );
};

//export default Home;
export default movie;