import axios from 'axios';

class JoblyAPI {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
    //   paramsOrData._token = ( // for now, hardcode token for "testing"
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
    //   "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
    //   "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");
    //   paramsOrData._token = localStorage._token;
      const token = localStorage._token;
      console.debug("API Call:", endpoint, paramsOrData, verb);

      try {
          if (token) {
            return (await axios({
                method: verb,
                url: `http://localhost:3001/${endpoint}`,
                headers: {
                    'authorization': `Bearer ${token}`
                },
                [verb === "get" ? "params" : "data"]: paramsOrData})).data;
                // axios sends query string data via the "params" key,
                // and request body data via the "data" key,
                // so the key we need depends on the HTTP verb
          } else {
            return (await axios({
                method: verb,
                url: `http://localhost:3001/${endpoint}`,
                [verb === "get" ? "params" : "data"]: paramsOrData})).data;
                // axios sends query string data via the "params" key,
                // and request body data via the "data" key,
                // so the key we need depends on the HTTP verb
          }

      }

  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  
    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }

    static async getCompanies() {
        let res = await this.request('companies');
        return res.companies;
    }

    static async getJobs() {
        let res = await this.request('jobs');
        return res.jobs;
    }

    // retrieve user instance for profile. Should work if same user or admin
    static async getUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    // auth API calls

    static async authenticate(credentials) {
        let res = await this.request('auth/token', credentials, 'post');
        return res.token;
    }


}

export default JoblyAPI;    
