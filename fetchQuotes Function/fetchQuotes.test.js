const fetchQuotes = require('./fetchQuotes');

describe('fetchQuotes Function', () => {
  it('should return a single quote with the format: name, text, and image', async () => {
    const futureQuote = await fetchQuotes();

    expect(futureQuote).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    });
  });
});
