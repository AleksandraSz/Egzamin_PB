class App extends React.Component {

  state = {
    username:'',
    email:'',
    pass:'',
    con_pass:'',
    coment:'',
    accept:false,
    message:'',
  
  rules:{
    con_pass:{
    equalTo:'#password'
      }
  },

  error:{
    username:false,
    email:false,
    pass:false,
    con_pass:false,
    coment:false,
    accept:false,
  }
}


messages = {
  username_incorrect: 'Jesteś pewny? Sprawdź swoje ID.',
  email_incorrect:'Brak @ w adresie email.',
  password_incorrect:'Hasło za krótkie.',
  con_pass_incorrect:'Hasła różnią się.',
  coment_incorrect:'Za długie zapytanie.',
  accept_incorrect:'Nie zaznaczyłeś zgody.'

}

handleChange = (e) => {
  const name = e.target.name;
  const type = e.target.type;
  if (type === "text" || type === "password" || type === "email") {
    const value = e.target.value;

    this.setState({
      [name]:value
    })
  } else if (type === "checkbox"){
    const checked = e.target.checked;
    this. setState({
      [name]:checked
    })
  }
}

handleSubmit = (e) => {
  e.preventDefault()

  const validation = this.formValidation()

  if (validation.correct){
    this.setState({
    username:'',
    email:'',
    pass:'',
    con_pass:'',
    coment:'',
    accept:false,
    message:'Wysłane.',

    errors:{
      username:false,
      email:false,
      pass:false,
      con_pass:false,
      coment:false,
      accept:false,
    }
  })
} else {
  this.setState({
    error:{
    username:!validation.username,
      email:!validation.email,
      pass:!validation.pass,
      con_pass:!validation.con_pass,
      coment:!validation.coment,
      accept:!validation.accept,
  }
})
}
}

formValidation(){
  let username = false;
  let email = false;
  let password = false;
  let con_pass=false;
  let coment=false;
  let accept = false;
  let correct = false;

  if (this.state.username.length >10 ){
    username=true;
  }
  if (this.state.email.indexOf('@')!==-1){
    email = true;
  }

  if (this.state.pass.length >8){
    password=true;
  }
  if (con_pass === password){
    con_pass=true;
  }
  if (this.state.coment.length <=50 && this.state.coment.length>0){
    coment=true;
  }

  if (this.state.accept){
    accept=true;
  }

  if (username && email && password && con_pass&& coment&&accept){
    correct = true
  }

  return ({
    correct,
    username,
    email,
    password,
    con_pass,
    coment,
    accept
  })
}

componentDidUpdate(){
  console.log("update");
  if (this.state.message!==''){
    setTimeout(() => this.setState({
      message:''
    }), 3000)
  }
}


render(){
  return(
    <div className="App">
      <form onSubmit={this.handleSubmit} noValidate>
        <label htmlFor ="user">Imię i nazwisko:
        <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}/>
        {this.state.error.username && <span>{this.messages.username_incorrect}</span>}
        </label>

        <label htmlFor ="email">Adres email:
        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
        {this.state.error.email && <span>{this.messages.email_incorrect}</span>}
        </label>

        <label htmlFor ="password">Hasło:
        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        {this.state.error.pass && <span>{this.messages.password_incorrect}</span>}
        </label>

        <label htmlFor ="con_pass">Ponów hasło:
        <input type="password" id="con_pass" name="con_pass" value={this.state.con_pass} onChange={this.handleChange}/>
        {this.state.error.con_pass && <span>{this.messages.con_pass_incorrect}</span>}
        </label>

        <label htmlFor ="coment">Zapytanie:
        <input type="coment" id="coment" name="coment" value={this.state.coment} onChange={this.handleChange}/>
        {this.state.error.coment && <span>{this.messages.coment_incorrect}</span>}
        </label>

        <label htmlFor ="accept">Zgoda na przetwarzanie danych osobowych:
        <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange}/>
        {this.state.error.accept && <span>{this.messages.accept_incorrect}</span>}
        <button id="btnf">Wyślij</button>
        </label>
        </form>
        {this.state.message && <h3>{this.state.message}</h3>}
  
  </div>
  );
}
}
ReactDOM.render(<App />, document.getElementById('root1'));