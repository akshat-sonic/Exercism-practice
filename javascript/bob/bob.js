const questionAnswer = 'Sure.'
const yellAnswer = 'Whoa, chill out!';
const yellQuestionAnswer = `Calm down, I know what I'm doing!`;
const noSayingAnswer = 'Fine. Be that way!';
const defaultAnswer = 'Whatever.';
export const hey = (message) => {
    const regex = new RegExp('[A-Z]');
    const isYelling = () => message === message.toUpperCase() && regex.test(message);
    const isQuestion = () => message.trim().endsWith('?');
    const isSaying = () => message.trim().length !== 0;
    if(isYelling() && isQuestion())
        return yellQuestionAnswer;
    if (isYelling())
        return yellAnswer;
    if (isQuestion())
        return questionAnswer;
    if (!isSaying())
        return noSayingAnswer;
    return defaultAnswer;
}