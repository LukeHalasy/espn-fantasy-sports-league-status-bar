import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'status-bar-component',
  styleUrl: 'status-bar-component.css',
  scoped: true,
})

export class StatusBarComponent {
  @Prop() width: string;
  @Watch('width')
  validateWidth(providedWidth: string) {
    const isBlank = typeof providedWidth !== 'string' || providedWidth === '';
    if (isBlank) { throw new Error('width: required') };
  }

  @Prop() height: string;
  @Watch('height')
  validateHeight(providedHeight: string) {
    const isBlank = typeof providedHeight !== 'string' || providedHeight === '';
    if (isBlank) { throw new Error('height: required') };
  }

  render() {
    return (
      <div style={{width: this.width, height: this.height}}>Status Bar</div>
    );
  }

}
