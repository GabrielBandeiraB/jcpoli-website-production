export function formatarData(data: string): string {
    return new Date(data.split('/').reverse().join('/')).toLocaleDateString('en-us');
}
