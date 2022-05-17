ReactJS
--------------------------------------------------------------------

    Pre-Requisite
    ----------------------
        HTML 5
            Elements and Attributes
            Tables, Lists, Links, Frames
            Form Elements and Validation Attributes
            HTML 5 API

        CSS 3
            Selectors
            CSS Operators
            Css Properties - tables, box model, lists, common-hold
            Responsive Design

        Javascript (ES6)
            Standard Object and Classes window, document, String, Math, Date
            Time api
            Function - closures, callback, spread operator, rest parameters, iife, arrow function
            Arrays and its prototype functions
            async, await, Promise
            ES6 Module

    Introduction
    ----------------------

        ReactJS     is a javascript library (semi-framework) used to develop SPA.

        Static Websites
                a reserved spoace on a http-server which is hosted to a public URL.
                in that space 'site', we have .html documents pre-written.

        Dynamic Web Application
                is a one or more programes executing onb a http-server, and these
                programs, after receiving a request, will generate HTML contnet dynamically (on the fly)
                and the generated html content is responded back to the client.

                Server                                              Client

                    Servlets/JSPs/      <---------------REQ----------
                    ASPs/PHP pages      --------HTML content as Resp--->
                    ...etc

        Single Page Application 

                Server                                                                  Client
                    app-bundle                  <----REQ-1-------------------------
                        index.html
                        style sheets            --the whole app-bundle will go as resp--->  index.html along with JS
                        a lot of                                                              is loaded
                        javascript code

            Oracle/MySQL <-->  rest-api    <--------JSON/XML------------------------>    the data is persisted or retrived
    
    Lab Setup
    ---------------------------------
        NodeJS
        VSCode

    Why NodeJS ?
    ---------------------------------
        nodejs is used for stand alone execution of javascript, and it is also true that
        the react application executes in a client (browser).

        but do develop a nodejs application....
            1. compose code                 we need an ide
            2. bundle the code              we need tools like webpack
            3. host the code on a server    we need a development server
            4. test our code                we need libraries like jasmine / jest
            ......

        now testing, packing ..etc must happen on the developer machine and the tools like
        jest / jasmine / webpack are javascript programs and these will e made to run on developer machine using
        nodejs


    React Application Archetecture
     ---------------------------------

        a react app is made up of components.

        a component is small reloadeable and replacing section of a html page.

        an html page can have small smart sections called components.

        A component = state + props + event_handlers + render()

            render()        is a method that generates the html output to be displayed on the page for this component.

            event_handler   are methods that will be executed as and when and event occurs.

            state           is the collection of data associated with the component.
                            1. when ever the data in the state changes, the render() method is invoked.
                            2. the data in the state can not be modified directly, instead setState() method needs to be used.

            props           is used by a parent component to pass data to a child component or vice-versa.

        A component happens to be a new html element and hence they say that react can extend HTML.

        1. Class Components

                class Header extends React.Component{
                    constructor(props){
                        super(props)
                        this.state={
                            title:'My first react app'
                        };
                    }

                    render(){
                        return <h1>{this.state.title}</h1>; //JSX
                    }
                }

                <Header />

        2. Function Components (state-less components)

                const Header = props => <h1>My first react app</h1>

                <Header />

        3. High Order Components

                is a function that accepts a component, modifies it and returns the modified component.

                high order components are used to handle cross-cutting logics. 

                const applySecurity = 
                    anyComponent => userService.isLoggedIn() ? 
                        anyComponent : 
                        (props => <h1>Sorry! please login to view the requested resource</h1>) ;

        JSX
        ---------------------------------------------------------------

            let emps = [/*soem employee objects*/ ];

            javascript

                let ele = document.createElement("p");
                ele.textContent = "This is a new para" + var1 +" continuing the para";

                let ele2 = undefiend;

                if(emps && emps.length>0){
                    ele2 = document.createElement("table");
                    emps.forEach(
                        e => {
                            let row = docuemnt.createElement("tr");
                            let col1 = document.createElement("td");
                            let col2 = document.createElement("td");
                            let col3 = document.createElement("td");

                            col1.textContent = e.id;
                            col2.textContent = e.name;
                            col3.textContent = e.sal;

                            row.appendChild(col1);
                            row.appendChild(col2);
                            row.appendChild(col3);
                            ele2.appendChilde(row);
                        }
                    );
                }else{
                    ele2 = document.createElement("p");
                    ele2.textContent = "No employee record to display";
                }
                
            JSX

                let ele = <p>This is a new para {var1} continuing the para</p>;

                let ele2 = emps && emps.length>0 ? 
                                <table>
                                    {emps.map( 
                                        e => <tr>
                                                <td>{e.id}</td>
                                                <td>{e.namne}</td>
                                                <td>{e.sal}</td>
                                            </tr>
                                    )}
                                </table>        :
                                <p>No employee record to display</p>

    Create a react app
    --------------------------------------------
        npx create-react-app app-name

    ReactJS Forms - Controlled Component Forms
    ---------------------------------------------

        Each form element has to remember
        the value it holds,

        And the component as well holds data in its state.

        if the state of the component is mapped to the
        form element and chagnes made to the form element
        are directed to the component, serving a single
        source of truth, we call it a controlled component.

    Event Bubbling
    ---------------------------------------------------------

        a parent component shares a event handler with 
        a child component.
        
        and the child component will invoke the event handler
        when a event in the child component occurs.