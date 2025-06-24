export default {
    id: "shummg/MosaicAndNoise",
    name: "モザイクとノイズ",
    overview: "モザイモザイクとノイズに関するアニメーション効果",
    description:
        "モザイモザイクとノイズに関する様々なアニメーション効果を追加します。",
    developer: "しゅう",
    pageURL: "https://shummg.work/archives/1181",
    downloadURLs: ["https://github.com/shummg/MosaicAndNoise/releases"],
    directURL:
        "https://github.com/shummg/MosaicAndNoise/releases/download/1.2/@MosaicAndNoise-1.2.zip",
    latestVersion: "1.2",
    files: [
        { filename: "script/shummg/@モザイクとノイズ.anm" },
        { filename: "script/shummg/S_Mosaic_Module.dll" }
    ],
    releases: [
        {
            version: "1.2",
            integrity: {
                archive:
                    "sha384-PaY3B0I2pkOMuf1qlygo/A6MQ+LvTV3p4X5dX70zyHQvxHSD7OtW1WK/6Snxs8cN",
                file: [
                    {
                        target: "script/shummg/S_Mosaic_Module.dll",
                        hash: "sha384-HdYQ2Refrs3nu2TMISnXUHmkjFnx10ROPq/qcwoda8EpGOawcLQEqkLJV+ga0q/3",
                    },
                    {
                        target: "script/shummg/@モザイクとノイズ.anm",
                        hash: "sha384-j+6V9T1080OjcVJeHw7Wi2Zpwmq59/XlsvysphNRjuBcn8MQQSv5JhHrl+vs91JJ",
                    }
                ],
            },
        },
        {
            version: "1.1",
            integrity: {
                archive:
                    "sha384-cAbrMc5G8Hn/q3foLmTuCEffiI4uKup/8jA4Gd/QLsm9UdW6Gof1G9+DLoxRw9Pq",
                file: [
                    {
                        target: "script/shummg/S_Mosaic_Module.dll",
                        hash: "sha384-RjZcg6cYxh9/LxyXnmJUjEsbzIpNC676F+1wk+i5ICDro5QDiVGy9a6dKmrYm+9a",
                    },
                    {
                        target: "script/shummg/@モザイクとノイズ.anm",
                        hash: "sha384-QWxadAUgdkhxPuLpby/rm5OfkfFj6Mybmq5UOuSyBbixjo8vqQo/BsrxKZrVrGIs",
                    }
                ],
            },
        },
        {
            version: "1.0",
            integrity: {
                archive:
                    "sha384-NffBNOZdS9eySrUlJcZR414gt3mFuEBr/htd5i3sB2Z1Md15xOP7KTT+CCXxpWsJ",
                file: [
                    {
                        target: "script/shummg/S_Mosaic_Module.dll",
                        hash: "sha384-8TGekx1BpkCM/VmwKyhqV7Fr3Ymi2CqXOXfFEW72us5QfDyM4/xSGIyelKtu0cT8",
                    },
                    {
                        target: "script/shummg/@モザイクとノイズ.anm",
                        hash: "sha384-Fem4ZX2ACXKgrMHMm+ZRttW0rm9Tzhg6ucCkp8l0oMPD6DKdge8vm5syFjcY6di6",
                    }
                ],
            },
        },
    ],
} as apm.Package;
