import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Router from '../router';


export default class LoginFormComponent extends Component {
    @tracked email = 'bruno@email.com';
    @tracked pwd = 'bruno';

    @action 
    login() {
      fetch('http://localhost:8000/auth/login',
        {
          method: 'post',
          mode: 'cors', 
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.pwd,
          }),
        }).then(response=> response.json())
        .then(data=>{
            Router.map(function() {
                this.route('/logged');
              });
        });
    }

}
