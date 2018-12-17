import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  async login(username: string, password: string) {
    // const response = fetch("https://propsy-backend-v0.herokuapp.com/api/account", {
    //   "headers": {
    //     "accept": "application/json, text/plain, */*",
    //     "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
    //   },
    //   // "credentials": "include",
    //   "body": null,
    //   "method": "GET",
    //   // "mode": "cors"
    // }).then((response) =>
    //   console.log(response.headers.get('connection')));
    // console.log(response.headers.get("Connection"));
    console.log(this.getCookie(this.getCookie('XSRF-TOKEN')));
    await fetch("https://propsy-backend-v0.herokuapp.com/api/authentication", {
      "credentials": "include",
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/x-www-form-urlencoded",
        "sec-metadata": "destination=\"\", site=same-origin",
        "x-xsrf-token": "5e70c433-e809-4af3-9aca-2bc00cfaf60a"
      },
      "referrer": "https://propsy-backend-v0.herokuapp.com/",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": "j_username=admin&j_password=admin&remember-me=undefined&submit=Login",
      "method": "POST",
      "mode": "cors"
    }).then((response) => {
      response.headers.forEach((element) => console.log(element));
    });
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
