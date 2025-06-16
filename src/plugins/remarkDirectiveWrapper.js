import { visit } from 'unist-util-visit';

export default function remarkDirectiveWrapper() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective' && node.name === 'flex2') {
        node.type = 'element';
        node.tagName = 'div';
        node.properties = node.properties || {};

        // 既存のclassとマージ（文字列化）
        const existingClass = node.properties.class || '';
        node.properties.class = [existingClass, 'flex2']
          .filter(Boolean)
          .join(' ')
          .trim();

        node.children = node.children || [];
      }
    });
  };
}
