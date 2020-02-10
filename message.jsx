
class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messageIsActive:false
        };
        this.handleMessageButton = this.handleMessageButton.bind(this);
        this.handleMessageButton1 = this.handleMessageButton1.bind(this);
        this.handleMessageButton2 = this.handleMessageButton2.bind(this);
        
    }
    handleMessageButton(){
        this.setState((prevState)=> ({
            messageIsActive:!prevState.messageIsActive
        }));
    }
    handleMessageButton1(){
        this.setState((prevState)=> ({
            messageIsActive1:!prevState.messageIsActive1
        }));
    }
    handleMessageButton2(){
        this.setState((prevState)=> ({
            messageIsActive2:!prevState.messageIsActive2
        }));
    }
    render(){
        const text =(
            <div id="lista">
                <p>Prowadzimy studia w systemie trójstopniowym, a opórcz tego uczelnia posiada też bogatą ofertę studiów podyplomowych.</p>
            <ol>
                <li>Wydział Architektury
                    <ul>
                        <li>Architektura</li>
                        <li>Architektura wnętrz</li>
                        <li>Grafika</li>
                    </ul>
                </li>
                <li>Wydział Budownictwa i Inżynierii Środowiska
                    <ul>
                        <li>Architektura krajobrazu</li>
                        <li>Biotechnologia</li>
                        <li>Budownictwo</li>
                        <li>Ekoinżynieria</li>
                        <li>Gospodarka przestrzenna</li>
                        <li>Inżynieria środowiska</li>
                        <li>Inżynieria rolno-spożywcza i leśna</li>
                        <li>Ochrona środowiska</li>
                    </ul>
                </li>
                <li>Wydział Elektryczny
                    <ul>
                        <li>Ekoenergetyka</li>
                        <li>Elektronika i telekomunikacja</li>
                        <li>Elektrotechnika</li>
                    </ul>
                </li>
                <li>Wydział Informatyki
                    <ul>
                        <li>Informatyka</li>
                        <li>Informatyka i ekonometria</li>
                        <li>Matematyka stosowana</li>
                    </ul>
                </li>
                <li>Wydział Mechaniczny
                    <ul>
                        <li>Automatyka i robotyka</li>
                        <li>Inżynieria biomedyczna</li>
                        <li>Mechanika i budowa maszyn</li>
                        <li>Mechatronika</li>
                    </ul>
                </li>
                <li>Wydział Zarządzania
                    <ul>
                        <li>Logistyka</li>
                        <li>Turystyka i rekreacja</li>
                        <li>Zarządzanie</li>
                        <li>Zarządzanie i inżynieria produkcji</li>
                    </ul>
                </li>
            </ol>
            </div>
            )
            const text1 =(
                <div id="omap">
                    <image src="mapa.jpg"></image>
                </div>
                
                )
                const text2 =(
                    <div id="contact">
                    <p><strong>Rekrutacja</strong><br></br>

                    rekrutacja@pb.edu.pl<br></br>

                    tel. 85 746-71-47 oraz 85 746-71-48<br></br>

                    fax. 85 746-71-46<br></br><br></br>
                    
                    <strong>Studia podyplomowe</strong><br></br>

                    podyplomowe@pb.edu.pl<br></br>

                    tel. 85 746-71-44<br></br>

                    fax 85 746-71-49<br></br><br></br>

                    <strong>Kursy i szkolenia</strong><br></br>

                    kursy@pb.edu.pl<br></br>

                    tel. 85 746-74-67<br></br></p><br></br>
                    </div>
                    )
    
        return (
            <React.Fragment>
                <button id="kierunki" onClick = {this.handleMessageButton}>  {this.state.messageIsActive? "Powrót":"Kierunki"}
                </button>
                {this.state.messageIsActive&& <p>{text}</p>}
                <button id="kierunki" onClick = {this.handleMessageButton1}>  {this.state.messageIsActive1? "Powrót":"Mapa"}
                </button>
                {this.state.messageIsActive1&& <p>{text1}</p>}
                <button id="kierunki" onClick = {this.handleMessageButton2}>  {this.state.messageIsActive2? "Powrót":"Kontakt"}
                </button>
                {this.state.messageIsActive2&& <p>{text2}</p>}
            </React.Fragment>
        );
    
    
        }
}



ReactDOM.render(<Message/>, document.getElementById("root"));