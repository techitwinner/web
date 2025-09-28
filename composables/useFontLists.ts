export const useFontLists = (fontUrl: string, fontListFile: string) => {
    const {data: fonts, error, pending} = useFetch(fontUrl + fontListFile, {
        key: 'font-lists',
        server: false,
        lazy: false,
    });
    return {
        fonts,
        error,
        pending
    }
}