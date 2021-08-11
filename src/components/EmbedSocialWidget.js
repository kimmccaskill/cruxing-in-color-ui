import React from 'react';

class EmbedSocialWidget extends React.Component {
  render() {
    return (
      <div
        class="embedsocial-hashtag"
        data-ref="a7373a0af5a016197211f0734b23cd20bb64b0cf"
      ></div>
    );
  }

  componentDidMount() {
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://embedsocial.com/cdn/ht.js';
      d.getElementsByTagName('head')[0].appendChild(js);
    })(document, 'script', 'EmbedSocialHashtagScript');
  }
}

export default EmbedSocialWidget;
