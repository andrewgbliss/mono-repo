import { JapaneseParser } from 'nlcst-parse-japanese';
const japaneseParse = new JapaneseParser();
const text = `転がるダイスに運命は預けない
汚れたジーンズを履いてどこへでも行こう
途方にくれるのは今日で終わりだ
冷たいアスファルトから立ち上がって
`;

const ReduceObject = (results: any, item: any, addToWords: any) => {
  switch (item.type) {
    case 'RootNode':
      return {
        Root: item.children.map((child: any) => {
          return ReduceObject({}, child, addToWords);
        }),
      };
    case 'ParagraphNode':
      const Paragraphs = results.Paragraphs || [];
      Paragraphs.push(
        item.children.map((child: any) => {
          return ReduceObject({}, child, addToWords);
        })
      );
      return {
        Paragraphs,
        ...results,
      };
    case 'SentenceNode':
      const Sentences = results.Sentences || [];
      Sentences.push(
        item.children.map((child: any) => {
          return ReduceObject({}, child, addToWords);
        })
      );
      return {
        Sentences,
        ...results,
      };
    case 'WordNode':
      const Words = results.Words || [];
      Words.push(
        item.children.map((child: any) => {
          return ReduceObject({}, child, addToWords);
        })
      );
      return {
        Words,
        ...results,
      };
    case 'TextNode':
      const Texts = results.Texts || [];
      console.log(item);
      addToWords(item.value, item.data.reading);
      Texts.push(item.value);
      return {
        Texts,
        ...results,
      };
    case 'PunctuationNode':
      const Punctuations = results.Punctuations || [];
      Punctuations.push(item.value);
      return {
        Punctuations,
        ...results,
      };
    default:
      return results;
  }
};

module.exports = async (text: any) => {
  await japaneseParse.ready();
  const CST = japaneseParse.parse(text);
  const words: any = [];
  const addToWords = (front: any, hint: any) => {
    return words.push({
      front,
      hint,
      back: '',
      tags: '',
      assets: '{jisho:url}',
    });
  };
  ReduceObject({}, CST, addToWords);
  return words;
};
