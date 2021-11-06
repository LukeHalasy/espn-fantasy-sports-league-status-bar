import { newE2EPage } from '@stencil/core/testing';

describe('status-bar-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<status-bar-component></status-bar-component>');

    const element = await page.find('status-bar-component');
    expect(element).toHaveClass('hydrated');
  });
});
