import * as React from 'react';

interface HelloProps {
    name: string;
  }

class App extends React.Component<HelloProps,{}>{
    render(){
        return <div>
            <h1>Hello my name is ,{this.props.name} </h1>
        </div>
    }
}
export default App;