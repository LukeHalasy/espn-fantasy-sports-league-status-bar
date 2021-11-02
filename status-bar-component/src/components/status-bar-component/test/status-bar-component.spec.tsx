import { newSpecPage } from '@stencil/core/testing';
import { StatusBarComponent } from '../status-bar-component';

describe('status-bar-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StatusBarComponent],
      html: `<status-bar-component></status-bar-component>`,
    });
    expect(page.root).toEqualHtml(`
      <status-bar-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </status-bar-component>
    `);
  });
});
