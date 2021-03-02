// PER CODE REVIEW DEMO

describe('logger middleware', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs an output', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('move on to next middleware', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

});