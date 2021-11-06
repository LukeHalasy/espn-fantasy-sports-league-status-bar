import { Component, h } from '@stencil/core';

@Component({
  tag: 'chrome-popup-component',
  styleUrl: 'chrome-popup-component.css',
  scoped: true,
})

export class ChromePopupComponent {
  componentWillLoad() {
    console.log(chrome.storage);
  }

  render() {
    return (
      <p>Loaded</p>
    )
  }
}
