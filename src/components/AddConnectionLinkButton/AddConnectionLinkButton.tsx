import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'add-connection-link-component',
  styleUrl: 'AddConnectionLinkButton.css',
  shadow: true,
})
export class AddConnectionLink {
  @Prop() color: string;
  @Prop() text: string;

  render() {
    return (
      <div>
        <button class="text-button" style={{ background: this.color }}>
          <span class="initial-text">{this.text}</span>
          <span class="icon">
            <span class="icon1">
              <svg height="17px" viewBox="0 0 20 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Rounded" transform="translate(-884.000000, -955.000000)">
                    <g id="AV" transform="translate(100.000000, 852.000000)">
                      <g id="-Round-/-AV-/-playlist_add" transform="translate(782.000000, 98.000000)">
                        <g>
                          <rect id="Rectangle-Copy-62" x="0" y="0" width="24" height="24"></rect>
                          <path
                            d="M13,9 L3,9 C2.45,9 2,9.45 2,10 C2,10.55 2.45,11 3,11 L13,11 C13.55,11 14,10.55 14,10 C14,9.45 13.55,9 13,9 Z M13,5 L3,5 C2.45,5 2,5.45 2,6 C2,6.55 2.45,7 3,7 L13,7 C13.55,7 14,6.55 14,6 C14,5.45 13.55,5 13,5 Z M18,13 L18,10 C18,9.45 17.55,9 17,9 C16.45,9 16,9.45 16,10 L16,13 L13,13 C12.45,13 12,13.45 12,14 C12,14.55 12.45,15 13,15 L16,15 L16,18 C16,18.55 16.45,19 17,19 C17.55,19 18,18.55 18,18 L18,15 L21,15 C21.55,15 22,14.55 22,14 C22,13.45 21.55,13 21,13 L18,13 Z M3,15 L9,15 C9.55,15 10,14.55 10,14 C10,13.45 9.55,13 9,13 L3,13 C2.45,13 2,13.45 2,14 C2,14.55 2.45,15 3,15 Z"
                            id="🔹Icon-Color"
                            fill="#ffff"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span class="add">Add connection link</span>
            </span>
            <span class="icon2">
              <svg height="22px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="white"></path>
              </svg>
              <span class="view">View connection link</span>
            </span>
          </span>
        </button>
      </div>
    );
  }
}
