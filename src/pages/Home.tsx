import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { string } from 'prop-types';
import { Z_HUFFMAN_ONLY } from 'zlib';
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

const getBlockChain = () :Block[] => blockChain;
const getNewTimeStamp = (): number => Math.round(new Date().getTime() /1000);


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
          will be your guide. {Block.calBlockHash(1)}
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;