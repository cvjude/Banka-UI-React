import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  getUserDetials, loginUser, signUp,
} from './';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const url = 'https://jbankapp.herokuapp.com/api/v2';


describe('Sign in actions', () => {
  let store;
  const response = {
    data: {
      id: 1,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJrY215a2FpcmxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiS2VsZWNoaSIsImxhc3ROYW1lIjoiTmd3b2JpYSIsInR5cGUiOiJjbGllbnQiLCJpc0FkbWluIjpudWxsLCJpYXQiOjE1NjY3NjgzMDIsImV4cCI6MTU2Njg1NDcwMn0.tbi_p7QnWb524thZ6uao7ILrxt0Vya_JCec1skuoGjE',
    },
  };

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('signs in a user successfully', () => {
    nock(url)
      .post('/auth/signin')
      .reply(200, response);

    return store.dispatch(loginUser({}))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  it('should error as expected', () => {
    const errorResponse = {
      err: {
        response: {
          data: {},
        },
      },
    };
    nock(url)
      .post('/auth/signin')
      .reply(400, errorResponse.err);

    return store.dispatch(loginUser({}))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});

describe('Signup actions', () => {
  let store;
  const response = {
    data: {
      id: 1,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJrY215a2FpcmxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiS2VsZWNoaSIsImxhc3ROYW1lIjoiTmd3b2JpYSIsInR5cGUiOiJjbGllbnQiLCJpc0FkbWluIjpudWxsLCJpYXQiOjE1NjY3NjgzMDIsImV4cCI6MTU2Njg1NDcwMn0.tbi_p7QnWb524thZ6uao7ILrxt0Vya_JCec1skuoGjE',
    },
  };

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('signs up a user successfully', () => {
    nock(url)
      .post('/auth/signup')
      .reply(200, response);

    return store.dispatch(signUp({}))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  it('should error as expected', () => {
    const errorResponse = {
      err: {
        response: {
          data: {},
        },
      },
    };
    nock(url)
      .post('/auth/signup')
      .reply(400, errorResponse.err);

    return store.dispatch(signUp({}))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});

describe('Get user Action actions', () => {
  let store;
  const response = {
    data: {
    },
  };

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('sgets user details successfully', () => {
    nock(url)
      .get('/user')
      .reply(200, response);

    return store.dispatch(getUserDetials({}))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  it('should error as expected', () => {
    const errorResponse = {
      err: {
        response: {
          data: {},
        },
      },
    };
    nock(url)
      .get('/user')
      .reply(400, errorResponse.err);

    return store.dispatch(getUserDetials({}))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});
