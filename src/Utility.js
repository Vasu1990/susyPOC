export const canUseDOM = () => {
    let isClitent = typeof window !== 'undefined' && window.document && window.document.createElement;
    return isClitent;
}