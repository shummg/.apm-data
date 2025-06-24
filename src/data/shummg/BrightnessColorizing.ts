export default {
    id: "shummg/BrightnessColorizing",
    name: "明度着色",
    overview: "明度に応じてオブジェクトを着色できるアニメーション効果",
    description: "明度に応じてオブジェクトを着色できるアニメーション効果です。",
    developer: "しゅう",
    dependencies: ["rikky/rikkyModuleMemory|rikky/rikkyModule2"],
    pageURL: "https://github.com/shummg/BrightnessColorizing",
    downloadURLs: ["https://github.com/shummg/BrightnessColorizing/releases"],
    directURL:
        "https://github.com/shummg/BrightnessColorizing/releases/download/1.0/BrightnessColorizing-1.0.zip",
    latestVersion: "1.0",
    files: [
        { filename: "script/shummg/明度着色.anm" },
        { filename: "script/shummg/S_Colorize_Module.dll" },
    ],
    releases: [
        {
            version: "1.0",
            integrity: {
                archive:
                    "sha384-xNqsvCY4AM7b96Q7qvIml54nsgoGXyxlKi2IXx1/ELQM38diOprlhulJxFkZyiIN",
                file: [
                    {
                        target: "script/shummg/明度着色.anm",
                        hash: "sha384-HO9HZ5AqIFxzMp+NONaDsTneJotC8+7CBa4YrSMTlRuwg8WiUg5hoc3S51dI3ubU",
                    },
                    {
                        target: "script/shummg/S_Colorize_Module.dll",
                        hash: "sha384-mnSefh2lbiRoAeo9TInmq9KtNG6fSMXQMrmvohQ030eEZ1aqEZ8CPHfp/chrmatX",
                    },
                ],
            },
        },
    ],
} as apm.Package;
