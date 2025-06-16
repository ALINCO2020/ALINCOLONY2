import { visit } from 'unist-util-visit'

export default function remarkEmbedTweet() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      const child = node.children[0];
      if (
        node.children.length === 1 &&
        child.type === 'link' &&
        typeof child.url === 'string' &&
        child.url.includes('x.com') &&
        child.url.match(/x\.com\/[^\/]+\/status\/\d+/)
      ) {
        let tweetUrl = child.url;
        tweetUrl = tweetUrl.replace('https://x.com/', 'https://twitter.com/');
        parent.children[index] = {
          type: 'html',
          value: `<blockquote class="twitter-tweet"><a href="${tweetUrl}"></a></blockquote>`
        };
      }
    });
  };
}
