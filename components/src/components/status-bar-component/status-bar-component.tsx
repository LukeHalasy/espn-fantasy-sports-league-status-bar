import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'status-bar-component',
  styleUrl: 'status-bar-component.css',
  shadow: true,
})

export class StatusBarComponent {
  @State() loading: boolean = true;

  @Prop() leagueid: string;
  @Prop() year: string;
  @Prop() sport: string;

  componentWillLoad() {
    console.log(this.leagueid);
    console.log(this.year);
    console.log(this.sport);

    this.loading = true;
    let url = `https://fantasy.espn.com/apis/v3/games/${this.sport}/seasons/${this.year}/segments/0/leagues/${this.leagueid}`;


    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      response.json().then(json => {
        if (json.status != "success") {
          throw new Error(response.statusText);
        } else {
          console.log(json.message);
          this.loading = false;
        }
      })
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>Status Bar</div>
    );
  }
}
