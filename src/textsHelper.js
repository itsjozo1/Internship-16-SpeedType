import texts from './gameTexts.json';

const getAllTexts = () => texts;

const getTextsByLevel = (level) => {
    const foundText = texts.texts.filter((text) => text.level === level);
    return foundText ? foundText.text : null;
}

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