class Service {
  constructor() {
    if (!Service.instance) {
      this.url = '/api';
      Service.instance = this;
    }

    return Service.instance;
  }

  async sendHttpRequest({
    method,
    entity,
    data,
    token,
  }) {
    const response = await fetch(`${this.url}/${entity}`, {
      method,
      body: JSON.stringify(data),
      headers: token
        ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        : { 'Content-Type': 'application/json' },
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      throw new Error(parsedResponse.message);
    }

    return parsedResponse;
  }

  logIn = async (data) => this.sendHttpRequest({
    method: 'POST',
    entity: 'auth/login',
    data,
  });

  register = async (data) => this.sendHttpRequest({
    method: 'POST',
    entity: 'auth/register',
    data,
  });

  getAllBooks = async (token) => this.sendHttpRequest({
    method: 'GET',
    entity: 'books',
    token,
  });

  getBook = async (id, token) => this.sendHttpRequest({
    method: 'GET',
    entity: `books/${id}`,
    token,
  });

  purchase = async (data, token) => this.sendHttpRequest({
    method: 'POST',
    entity: 'orders',
    data,
    token,
  });
}

const service = new Service();
Object.freeze(service);
export default service;
