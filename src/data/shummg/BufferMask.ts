export default {
    id: "shummg/BufferMask",
    name: "BufferMask",
    overview: "他のオブジェクトを用いたマスクが使用できるスクリプト",
    description:
        "拡張編集RAMプレビューのExtram.dllを使用して、他のオブジェクトを用いたマスクが使用できるスクリプトです。",
    developer: "しゅう",
    dependencies: ["oov/ZRamPreview"],
    pageURL: "https://shummg.work/archives/852",
    downloadURLs: ["https://github.com/shummg/BufferMask/releases"],
    directURL:
        "https://github.com/shummg/BufferMask/releases/download/1.0/@BufferMask-1.0.zip",
    latestVersion: "1.0",
    files: [
        { filename: "script/shummg/@BufferMask.anm" },
        { filename: "script/shummg/S_Buffermask.lua" },
        { filename: "script/shummg/S_Buffermask_Module.dll" },
    ],
    releases: [
        {
            version: "1.0",
            integrity: {
                archive:
                    "sha384-du3wpd2r0vQm0BnQqQ6DXk/yPQF5WFsa5EP5+BldT9FJf0FXJT85liD3Cmc+GP36",
                file: [
                    {
                        target: "script/shummg/@BufferMask.anm",
                        hash: "sha384-iWK0aZxvHN8zmYLz7J2/RF6YC4D0uXdtp+U1V8RsHX9OaOujLuLmhalYkTBz7JS0",
                    },
                    {
                        target: "script/shummg/S_Buffermask.lua",
                        hash: "sha384-RqrgHpJLJHld5v0IsuGFtzJKXQ9J3PD+lTFNKIp/pP+jpa9Sbvj+Jmxc+rt/fEoX",
                    },
                    {
                        target: "script/shummg/S_Buffermask_Module.dll",
                        hash: "sha384-rfhO4lPp2oMIiM/N7nKT4Oyxnc2tUi9OYSQYVlrfxBmH/oNDlj8tpUiUR2O8BFye",
                    },
                ],
            },
        },
    ],
} as apm.Package;
