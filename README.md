react-switchbox

react-switchbox is a react component that provides a switch box for your meteor based react application.

### Prerequisites

Bootstrap and react must be intalled

### Installation

```
meteor add nodexpert:react-switchbox
```

## Getting Started

After installing the package, import the react-switchbox into the file and then pass the leftBox and rightBox prop to react-switchbox component and use ref to access its value.

### Import

```
import SwitchBox from 'react-switchbox';
```

### Structure of leftBox and rightBox

```
const leftBox = [
  {value:'value-1',label:'label-1'},
  {value:'value-2',label:'label-2'},
  {value:'value-3',label:'label-3'},
  {value:'value-4',label:'label-4'},
];
```

righBox will be having the same array of object structure as well. leftBox and rightBox prop populate the switch box initially for the left and right switch box respectively.

### Assigning labels to boxes

Passing string in the leftBoxLabel and rightBoxLabel will assign the label to left and right box respectively

### Using ref to fetch value

To fetch the value of the left and right box appy ref to the component. Here leftBox and rightBox are array of objects as defined above.

```
<SwitchBox
  leftBox={leftBox}
  rightBox={rightBox}
  leftBoxLabel={'Left Box'}
  rightBoxLabel={'Right Box'}
  ref = { input => this.switchBox = input }
/>
```

After applying ref the value from the component can fetched by the following way on the handling of any event.
```  
 this.switchBox.state.leftBox;
 this.switchBox.state.rightBox;

```

## Running the tests

Explain how to run the automated tests for this system
