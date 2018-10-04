/* eslint import/prefer-default-export:0 */

export const absolute = ({ y = 'top', x = 'left' }) => `
position:absolute;
${y}:0;
${x}: 0;
`;
