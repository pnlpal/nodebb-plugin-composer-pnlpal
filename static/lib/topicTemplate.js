"use strict";

const DictionariezTemplate = `This is one of my favorite dictionaries. I like it because...

\`\`\`json
{
    "dictName": "NAME",
    "windowUrl": "https://www.example.com?term=<word>",
    "css": "#topNav { display: none !important; }"
}
\`\`\`
`;
const LanguageExchangeTemplate = `### 1. Brief introduction about yourself:

### 2. Which language can you offer?

### 3. Which language do you want to learn?

### 4. How often would you like to exchange?

### 5. How can others contact you?

`;

$(document).ready(function () {
  require(["hooks"], function (hooks) {
    hooks.on("filter:composer.topic.push", function (data) {
      const pushData = data.pushData;
      const cid = parseInt(pushData.cid, 10);
      if (
        pushData.save_id ||
        pushData.title ||
        pushData.body ||
        !pushData.isMain
      ) {
        return data;
      }
      switch (cid) {
        case 4: // dictionariez trove
          // Handle specific case
          pushData.body = DictionariezTemplate;
          break;
        case 7: // language exchange
          pushData.body = LanguageExchangeTemplate;
          break;
        default:
          // Handle default case
          break;
      }
      return data;
    });
  });

  $(window).on("action:composer.changeCategory", function (ev, data) {
    // Handle category change
    if (data.postData.body || data.postData.modified || !data.postData.isMain) {
      return;
    }
    const cid = parseInt(data.postData.cid, 10);
    const $bodyEl = data.postContainer.find("textarea");
    if (!$bodyEl.length) {
      return;
    }

    switch (cid) {
      case 4: // dictionariez trove
        $bodyEl.val(DictionariezTemplate);
        break;
      case 7: // language exchange
        $bodyEl.val(LanguageExchangeTemplate);
        break;
      default:
        // Handle default case
        break;
    }
  });
});
