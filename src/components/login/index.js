

class Login extends React.Component{
  clickHandler(){
    console.log("User is logging on");
    console.log(this);
    console.log(this.refs.username);
    for(const user of this.props.users){
    if(this.refs.username.value === user.username &&
      this.refs.password.value === user.password)
      this.props.logInUser();
    }
 }
 render(){
 return <div>
        <input ref="username" type="text" />
        <input ref="password" type="password" />
        <input type="button" value="login" onClick={() => this.clickHandler()}/>
      </div>;
 }
}
