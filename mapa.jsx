  
class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messageIsActive:false
        };
        this.handleMessageButton = this.handleMessageButton.bind(this);
        
    }
    handleMessageButton(){
        this.setState((prevState)=> ({
            messageIsActive:!prevState.messageIsActive
        }));
    }
    render(){
        const text1 = (
            <div>
                <image src="mapa.jpg"></image>
            </div>
        )
    
        return (
            <React.Fragment>
                <button id="mapa" onClick = {this.handleMessageButton}>  {this.state.messageIsActive? "Powrót":"Mapa"}
                </button>
                {this.state.messageIsActive&& <p>{text1}</p>}
            </React.Fragment>
        );
    
    
        }
}

ReactDOM.render(<Message/>, document.getElementById("root"));