# Personal Notes
React is a JS library that consist of components and allow us to create single page applications
## index html file
there is only one index.html file exist that request to server after that react takes over 
if you want to link or add meta tag you do in this html file
## app js file
is the main component(root/parent component) that is created initially
Every component is actually a function that return something. We need to always export that to be able to use in our index js to render to the DOM
you can write any JS code before return (JSX template) 
WHEN WE USE {} react knows that we want to use dynamic value of variables..
OBJECTS as well as booleans ARE NOT VALID REACT CHILD so we can not use as dynamic variable before return
## index js file
that takes all our react components mounting them into DOM (in root div) with render method
REACT STRICT MODE means it gives oss warning interactively if it is some error
## package json file
it lists all the dependencies of the application

## node modules folder
has all necessary modules inclusive react. When you work with github repos it usually exclude this folder because of its huge size
so you can always reload by typing 
"npm install" to the terminal  

### Extra notes
1. if you have install extension simple react snippets
you can create a functional component by just typing 
"sfc" which will create an arrow function inside our newly created component

## Add eventlistener
it is important to remember if you want to pass parameter into the eventlistener function you need to wrap the function into an arrow function 
for example 
const handleClick = (name) => {
        alert(`Hello Code guru ${name}`);
    }

then in JSX template 
<button className=" btn btn-primary "  onClick={()=> handleClick('ozzy')}>Click me</button>

## USE STATE HOOK
if we have data that we want to change over time. 
the variable is create is not reactive så we need to use state function to make the value reactive
first you need to import useState from react library
then define the function
const [name, setName] = useState('initialState');

call the function and change the innehållet

setName('currentvalue'),

## output list 
when we output a list each root element in the template must have a key property React use to outputs it when we change item react kan track that

## if we create external component for example blog list osv
we can use "props" properties to pass data to this compotents
by using props we can reuse at many places in our app
props are the way to pass data through from main component to other(child) component