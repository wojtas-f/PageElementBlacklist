export default function getList() {
  chrome.storage.sync.get(['key'], function (result) {
    console.log('Value currently is ' + result.key);
  });
}
