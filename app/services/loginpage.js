import Service from '@ember/service';

export default class LoginpageService extends Service {
    // @tracked loginDetails()
    @action 
    login( ) {
      fetch('http://localhost:8000/auth/login',
        {
          method: 'post',
          mode: 'cors', 
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            email: this.myUId,
            password: this.myUniqueId,
          }),
        }).then(response=> response.json())
        .then(data=>{
          Router.map(function() {
            this.route('logged')
          });
        });
    }

}

