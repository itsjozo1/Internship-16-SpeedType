import texts from './texts.json';

const getAllTexts = () => texts;

const getTextsByLevel = (level) => texts.filter((text) => text.level === level);

const getNotRepeatedTexts = (texts) => {
    const notRepeatedTexts = [];
    texts.forEach((text) => {
        if (!notRepeatedTexts.includes(text)) {
            notRepeatedTexts.push(text);
        }
    });
    return notRepeatedTexts;

}

export { getAllTexts, getTextsByLevel, getNotRepeatedTexts};