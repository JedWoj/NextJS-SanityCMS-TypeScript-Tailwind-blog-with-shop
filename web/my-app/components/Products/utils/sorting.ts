export const sortProducts = (type: string, arr: any[]) => {
    return type === 'ascending' ? arr.sort((a, b) => (a.price > b.price) ? 1 : -1) : arr.sort((a, b) => (a.price > b.price) ? -1 : 1);
}