export const canUseDOM = () => {
    let isClitent = typeof window !== 'undefined' && window.document && window.document.createElement;
    return isClitent;
}

export const simulateServer = () => {
    let isClitent = typeof window !== 'undefined' && window.document && window.document.createElement;
    return !isClitent;
}