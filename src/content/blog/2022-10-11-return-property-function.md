---
title: "特定のプロパティを全て返す関数"
date: "2022-10-11"
categories: 
  - "program"
tags: 
  - "script"
---

matchNameが一致するプロパティを再帰で全部返す。何かと便利。

```javascript
/**
 * 特定のプロパティを返す
 * @param {*} rootObj レイヤーでもコンテンツでもOK
 * @param {*} nestingLevel 0でOK
 * @param {*} matchName 探したいプロパティのmatchName
 * @returns 
 */
function getProp(rootObj, nestingLevel, matchName) {
  var propTo = [];
  dumpPropTree(rootObj, nestingLevel, matchName);
  function dumpPropTree(rootObj, nestingLevel, matchName) {
    var countProps = rootObj.numProperties;
    for (var propIndex = 1; propIndex <= countProps; propIndex++) {
      var prop = rootObj.property(propIndex);
      if (prop.matchName == matchName) {
        propTo.push(prop)
      } else {
        dumpPropTree(prop, nestingLevel + 1, matchName);
      }
      if (propIndex == countProps) return
    }
  }
  return propTo;
}
```
