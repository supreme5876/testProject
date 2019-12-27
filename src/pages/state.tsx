import React from 'react';

//react는 자동적으로 class component의 render method를 실행한다.

interface State {
    count: number;
    name: string;
    isLoading: boolean;
  }

  
class stateTest extends React.Component{ //class component는 public이런것 선언 필요없는듯. component라 그런가
    state : State = {
        count: 0,
        name: "kim se jong",
        isLoading: true
    }
    
    add = ():void =>{ //void와 any
        const { count } = this.state;
         this.setState((current) => ({count: count + 1 }));
      //  this.setState({count: this.state.count + 1}); => this.state 형식 쓰지 않는 것 권장, current로 받아서 하기
     //   this.setState(current=>({count: this.state.count + 1}));
        //current로 current state를 받아서 새로운 state로 갱신해줄 수 있다.
        //this.setState를 쓰는 이유는 state를 바꾸는 동시에 render function을 새로운 state와 함께 다시 re render 호출할수 있다.
    }
    minus = ():void =>{
        this.setState(current=>({count: this.state.count - 1}));
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoading: false});
        }, 6000);
    }
    componentDidUpdate(){
        console.log("did update");
    }
    render(){
        const { count, isLoading } = this.state;
        return <div>
        <h1>{isLoading? "Loading..":"We are ready"}</h1>
            <h1>The number is {count}</h1>
        <button onClick={this.add}>ADD</button>        <button onClick={this.minus}>MINUS</button>
        <h1>My name is {this.state.name}</h1>
        </div>
    }
}
export default stateTest;