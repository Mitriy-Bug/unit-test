import { loadUser } from '../user';
import { saveUser } from '../user';
import { httpGet } from '../http';
import sum from "../basic";

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('should call saveUser once', () => {
  const result = saveUser(1);

  expect(result).toBe(1);

});
