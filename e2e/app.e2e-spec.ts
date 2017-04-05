import { Ng2todomvcPage } from './app.po';

describe('ng2todomvc App', () => {
  let page: Ng2todomvcPage;

  beforeEach(() => {
    page = new Ng2todomvcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
