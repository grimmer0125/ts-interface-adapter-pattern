interface StorageAdapter {
    (key: number, value: string): void;
}

const s3API: StorageAdapter = function s3Adapter(key: number, value: string) {

}

const googlAPI: StorageAdapter = function gcdAdapter(key: number, value: string) {

}

// know someone is not following the protocol immediately, VSCode error and TS compilation error
const msAPI: StorageAdapter = function microsoftAdapter(key: string, value: string) {

}
