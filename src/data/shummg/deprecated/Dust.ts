export default {
    id: "shummg/Dust",
    name: "Dust",
    overview: "ゴミが写ったようなノイズを表示するカスタムオブジェクト",
    description:
        "ゴミが写ったようなノイズを表示するカスタムオブジェクトです。現在は「モザイクとノイズ」に統合されています。",
    developer: "しゅう",
    pageURL: "https://shummg.work/archives/1181",
    downloadURLs: ["https://github.com/shummg/MosaicAndNoise/releases/tag/1.2"],
    directURL:
        "https://github.com/shummg/MosaicAndNoise/releases/download/1.2/Dust-1.0.zip",
    latestVersion: "1.0",
    isHidden: true,
    files: [
        { filename: "script/shummg/Dust.obj" },
    ],
    releases: [
        {
            version: "1.0",
            integrity: {
                archive:
                    "sha384-59UuZdaMx4ZiJHPJJCRp7CSiaz0pMhamVr201JjBBMiOawTUdUDkA1PPDkUcJvyr",
                file: [
                    {
                        target: "script/shummg/Dust.obj",
                        hash: "sha384-2Ynq9Es2llMyfj+xEewphsM2sb6j6/R4vl5HHtOQ+lL858CKV3oOwGW6yUaM7zbu",
                    }
                ],
            },
        },
    ],
} as apm.Package;
