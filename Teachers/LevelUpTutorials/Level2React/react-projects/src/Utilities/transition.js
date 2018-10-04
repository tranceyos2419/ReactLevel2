export default ({ property = 'all', length = '0.3s', ease = 'ease' }) => `
transition: ${property} ${length} ${ease}
`;

// I think if this function doesn't have any properties, when I execute this function, I can write "transition()", not "transition({})"
