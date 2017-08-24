import { Angular4webpack3Page } from './app.po';

describe('angular4webpack3 App', () => {
  let page: Angular4webpack3Page;

  beforeEach(() => {
    page = new Angular4webpack3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
